import styled from "styled-components"
import Product from "./Product"
import { popularProducts } from "../data"
import { useEffect,useState } from "react"
import axios from 'axios'


const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap
`

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort )
  
  const [products,setProducts] = useState([])
  const [filterProducts,setFilterProducts] = useState([])

  useEffect(()=>{
    const getProducts =async ()=> {
      try{
        const res =await axios.get(cat ? `http://localhost:8000/api/products?categorie=${cat}` 
                                         :"http://localhost:8000/api/products"
                                  )
        const newres = res
        console.log("newres =",newres)
        // console.log(res.data)
        // setProducts(res)
        setProducts(newres.data)
       
        
      }catch(err) {
        
      }
    }
    getProducts()
    
  },[cat]) 


  useEffect(()=> {
    console.log("this is products",products)
  },[products])

  // compare products and filters
  useEffect(()=>{
    cat && 
      setFilterProducts(
         products.filter((item) => {
        return Object.entries(filters).every(([key, value]) => {
          return item[key].includes(value)
        })
      })
      )
      // console.log("filter ",)
      // console.log(Object.entries(filters).every(([key,value])=> {
      //   console.log(key,value)
      // }))
  },[products,cat,filters]) 

  //sort in ascending and descending order
  useEffect(()=> {
    if((sort==="newest")) {
      setFilterProducts((prev)=>[...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }else if((sort=== "asc")) {
      setFilterProducts((prev)=>[...prev].sort((a,b)=> a.price - b.price))
    }else {
      setFilterProducts((prev)=>[...prev].sort((a,b)=> b.price - a.price))
    }
  },[sort])


  // useEffect(()=> {
  //   console.log("filter =",filterProducts)
  // },[filterProducts])
  return (
    <Container>
        {
          cat
          ? filterProducts.map((item)=>(<Product item= {item}  key={item.id}/>))
          : products.slice(0,8).map((item)=>(<Product item= {item}  key={item.id}/>))
            
        }
        {/* {
            popularProducts.map((item)=>(
                <Product item= {item}  key={item.id}/>
            ))
        } */}
    </Container>
  )
}

export default Products