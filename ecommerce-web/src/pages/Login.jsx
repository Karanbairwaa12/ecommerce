import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
        rgba(0,0,0,.3),
        rgba(0,0,0,.3)
    ), url("https://www.w3schools.com/css/img_tree.png") top right no-repeat;
    background-size: auto 70vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background:#fff;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background:teal;
    color:#fff;
    cursor:pointer;
    margin-bottom:10px;
`

const Links = styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer; 
` 

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUT</Title>
            <Form>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Button>CREATE</Button>
                <Links>DO NOT REMEMBER YOUR PASSWORD?</Links>
                <Links>CREATE NEW ACCOUNT</Links>
            </Form>
        </Wrapper>
    </Container>    
  )
}

export default Login