import styled from "styled-components";
import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between; 
`

const Categories = () => {
  return (
    <Container>
        {categories.map((Item)=>(
            <CategoriesItem item={Item} key={Item.id}/>
        ))}
    </Container>
  )
}

export default Categories