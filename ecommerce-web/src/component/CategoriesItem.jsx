import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`
const Image= styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Info= styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title= styled.h1`
    margin-bottom:20px;
    color:#fff;
`
const Button= styled.button`
    border:none;
    padding:10px;  
    background:#fff;
    color:gray;
    font-weight:600;
`

const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Link to= {`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoriesItem