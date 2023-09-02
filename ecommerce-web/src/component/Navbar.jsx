import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {LocalGroceryStoreOutlined, Search} from '@mui/icons-material'

const Component = styled.div`
    height:60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`
const SerchContainer = styled.div`
    border: 0.1px solid black;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
    border:none;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-itmes:center;
    justify-content:flex-end;
`
const MenuItems = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
`

const Navbar = () => {
  return (
    <Component>
        <Wrapper>
            <Left>
                <Language>EZ</Language>
                <SerchContainer>
                    <Input />
                    <Search style={{color:"gray",fontSize:16}}/>
                </SerchContainer>
            </Left>
            <Center>
                <Logo>ANIME</Logo>
            </Center>
            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="secondary">
                        <LocalGroceryStoreOutlined />
                    </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Component>
  )
}

export default Navbar