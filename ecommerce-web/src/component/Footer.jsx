import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display:flex
`


const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0;
`
const SocialContainer = styled.div`
    display:flex;
`
const  SocialIcon= styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:#fff;
    background:#${props=> props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:10px;
`
const Center = styled.div`
    flex:1;
    padding:20px;

`
const Title = styled.h1`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem= styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ANIME</Logo>
            <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Accont</ListItem>
                <ListItem>Order Traking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List> 
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 103 MI Road, Ajmeri Gate
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +91 8432212634
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> Karanbairwaa@gmail.com
            </ContactItem>
        </Right>
        
    </Container>
  )
}

export default Footer