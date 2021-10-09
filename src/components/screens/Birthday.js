import React,{useState} from 'react';
import styled from "styled-components";
import Img1 from "../../assets/images/Ellipse -1.png";
import Img2 from "../../assets/images/Ellipse -2.png";
import Img3 from "../../assets/images/Ellipse -3.png";
import Img4 from "../../assets/images/Ellipse -4.png";
import Img5 from "../../assets/images/Ellipse 1.png";
export default function Birthday() {
    const [lists, setLists] = useState([
        {
            id:1,
            name:"Griffin Wooldridge",
            img : Img1,
            age :"20 Years",
        },
        {
            id:2,
            name:"Hester Hogan",
            img : Img2,
            age :"23 Years",
        },
        {
            id:3,
            name:"Danny winget",
            img : Img3,
            age :"25 Years",
        },
        {
            id:4,
            name:"Jousha Vergara",
            img : Img4,
            age :"20 Years",
        },
        {
            id:5,
            name:"Jon Rettinger",
            img : Img5,
            age :"22 Years",
        }
        
    ]);
    const removeItem = () => {
        setLists([]);
    };
    return (
        <>
            <Container>
            <Heading>5 birthdays Today</Heading>
           <Listcontainer> {lists.map((item)=>(
               <>
               <Imagecontainer> <Imgcontainer> <Img src={item.img} alt="Images" /> </Imgcontainer>
               <Itemcontainer> <Name> {item.name} </Name><Age> {item.age} </Age>  </Itemcontainer></Imagecontainer>
               </>
               
           ))}</Listcontainer>
           <Button onClick={removeItem}>Clear All</Button>
           </Container>
        </>
    )
}
const Container = styled.div`
    width:50%;
    margin:0 auto;
`;
const Heading = styled.h1`
    width:100%;
    text-align: center;
    margin-top: 50px;
    font-size: 45px;
    font-family: 'baloo_paaji_2bold';
`;
const Listcontainer = styled.div `
    width: 80%;
    margin: 0 auto;
    `;
const Imagecontainer = styled.div `
    display:flex;
    justify-content: flex-start;
    align-items: center;
    `;
const Imgcontainer = styled.div`
    width: 13%;
    margin-top: 20px;
    margin-right: 20px;
    `;
const Img = styled.img `
    display:block;
    width:100%;
    `;
const Itemcontainer = styled.div `
    `;
const Age = styled.span `
    font-family: 'baloo_paaji_2bold';
    color:#afb5bd;
    `;
const Name = styled.h3 `
    font-family: 'baloo_paaji_2bold';
    `;
    const Button = styled.button`
    color:#ffffff;
    background:#d43d94;
    padding: 12px;
    font-size: 20px;
    border-radius: 3px;
    width: 75%;
    margin-left: 100px;
    margin-top: 30px;
    cursor:pointer;
  `;