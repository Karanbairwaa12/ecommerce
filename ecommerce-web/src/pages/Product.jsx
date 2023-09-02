import styled from "styled-components"
import Annoncement from '../component/Annoncement'
import Navbar from '../component/Navbar'
import Newsletters from '../component/Newsletters'
import Footer from '../component/Footer'
import { Add, Remove } from "@mui/icons-material"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { publicRequest } from "../requestMethods"



const Container = styled.div``
const Wrapper =styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer =styled.div`
    flex:1;
`
const Image =styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer =styled.div`
    flex:1;
    padding:0 50px;
`
const Title =styled.h1`
    font-weight:200;
`
const Desc =styled.p`
    margin:20px 0;
`
const Price =styled.span`
    font-size:40px;
    font-weight:100;
`
const FilterContainer = styled.div`
    width:50%;
    margin:30px 0;
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background:${(props)=>props.color};
    margin:0px 5px;
    cursor:pointer
`
const FilterSize = styled.select`
    margin-left:10px;
`
const FilterOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Ammount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background:#fff;
    cursor:pointer;
`


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quentity, setQuentity] = useState(1)
    const [color, setColor] = useStaet(null)
    const [size, setSize] = useState(null)

    useEffect(()=> {
        const getProduct = async()=> {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                console.log(res.data)
                setProduct(res.data)

            }catch{}
        }
        getProduct()
    },[id])

    const handleClick= (type)=> {
        if(type === "dec") {
            quentity>1 && setQuentity(quentity-1)
        }else {
            setQuentity(quentity +1)
        }
    }
  return (
    <Container>
        <Navbar/>
        <Annoncement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Desc>
                <Price>{product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color && product.color.map(item => (
                        <FilterColor color={item} key={item} />
                        ))}
                        
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        {product.size && product.size.map(item => (
                        <FilterOption key= {item}>{item}</FilterOption>
                        ))}
                                                        
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmmountContainer>
                        <Remove onClick = {()=> handleClick("dec")}/>
                        <Ammount>{quentity}</Ammount>
                        <Add onClick = {()=> handleClick("inc")}/>
                    </AmmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletters/>
        <Footer/>
    </Container>
  )
}

export default Product