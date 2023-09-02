import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
    z-index:3;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    min-width:380px;
    height:450px;
    margin:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#f5fbfb;
    position:relative;

    &:hover ${Info} {
        opacity:1;
    }
`
const Circle = styled.div`
    width:240px;
    height:240px;
    background:#ff0;
    position:absolute;
    border-radius:50%;
`

const Image = styled.img`
    height:75%;
    z-index:2;
`
const Title = styled.h1`
    z-index:7;
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px; 
    transition: all 0.5 ease;

    &:hover {
        transform:scale(1.1);
        background:#e9f5f5;
    }
`

const Product = ({item}) => {
  return (
    <Container>
        {/* <Title>{item.title}</Title> */}
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>

            <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                </Link>
                
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product