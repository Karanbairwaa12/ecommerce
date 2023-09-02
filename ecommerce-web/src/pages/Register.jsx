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
    width:40%;
    padding:20px;
    background:#fff;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Agremment = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background:teal;
    color:#fff;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agremment>
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <b>Privacy policy</b>.
                </Agremment>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>    
  )
}

export default Register