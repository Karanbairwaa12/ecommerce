import React from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar'
import Annoncement from '../component/Annoncement'
import Footer from '../component/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``
const Wrapper = styled.div`
  padding:20px;
`
const Title = styled.h1`
  font-weight:300;
  text-align:center;
`
const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
`
const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor :pointer;
`
const TopTexts = styled.div``
const TopText = styled.span`
  text-decoration:underline;
  cursor :pointer;
  margin:0px 10px;
`

const Bottom = styled.div`
  display:flex;
  justify-content:space-between;
  
`
const Info = styled.div`
  flex:3;
`
const Product = styled.div`
  display:flex;
  justify-content:center;
  margin:40px 20px;
`
const ProductDetail = styled.div`
  flex:2;
  display:flex;
`
const Image = styled.img`
  width:300px;
`
const Detail = styled.div`
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;  
  background:${(props)=>props.color}
`
const ProductSize = styled.span``

const PriceDetail =styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
`
const ProductAmount = styled.div`
  font-size:24px;
  margin:5px;
`
const ProductPrice = styled.div`
  font-size:30px;
  font-weight:200;
`
const Hr = styled.hr`
  background:#eee;
  border:none;
  height:1px;
`
const Summary = styled.div`
  flex:1;  
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`
const SummaryTitle = styled.h1`
  font-weight:200;
`
const SummaryItem = styled.div`
  margin:30px 0px;
  display:flex;
  justify-content:space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-size:${props=> props.type === "total" && "24px"}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width:100%;
  padding:20px;
  background:#000;
  color:#fff;
  font-weight:600;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Annoncement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bags(2)</TopText>
                <TopText>Your WhishList (0)</TopText>
              </TopTexts>
              <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/f/w/1/8-ey2909-adidas-cblack-gresix-vicgol-original-imaghgyfwa9c27ag.jpeg?q=70"/>
                    <Detail>
                      <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                      <ProductId><b>ID:</b> 8078617125</ProductId>
                      <ProductColor color="black"/>
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>2</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                  <ProductDetail>
                    <Image src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/f/w/1/8-ey2909-adidas-cblack-gresix-vicgol-original-imaghgyfwa9c27ag.jpeg?q=70"/>
                    <Detail>
                      <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                      <ProductId><b>ID:</b> 8078617125</ProductId>
                      <ProductColor color="black"/>
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>2</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimate Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.9</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart