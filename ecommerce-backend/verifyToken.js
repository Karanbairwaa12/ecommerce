// import jwt from "jsonwebtoken";

// const verifyToken = async (req,res,next)=> {
//     let token;
//     const {authorization} = req.headers
//     if(authorization){
//         token = authorization.split(" ")[1]
//         jwt.verify(token,process.env.JWT_SEC,(err,user)=> {
//             if(err) res.status(403).json("token is not valid")
            
//             req.user = user;
            
//             next()
//         })   
//     }
//     else {
//         return res.status(401).json("you are not authonticate")
//     }
// }

// const verifyTokenAndAuthorization = (req, res, next) =>{
//     verifyToken(req,res,()=> {
//         if(req.user.id=== req.params.id){
//             next()
//         }else {
//             res.status(403).json("you are not allowed to do that")
//         }
//     })
    
// }



// export {verifyToken,verifyTokenAndAuthorization}
import jwt from "jsonwebtoken";

const verify = async (req,res,next)=> {
    let token;
    const {authorization} = req.headers
    if(authorization){
        token = authorization.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC,(err,user)=> {
            if(err) res.status(403).json("token is not valid")
            
            // console.log(user)
            req.user = user;
            // console.log(req.user)
            next()
        })   
    }
    else {
        return res.status(401).json("you are not authonticate")
    }
}

export default verify