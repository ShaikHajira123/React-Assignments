import styled from 'styled-components'



   export const Button = styled.button`
   border:1px solid black;
   border-radius:5px;
   background-color:${(props)=>(props.theme ==true ? "black":"pink")};
   color:${(props)=>(props.theme==true ? "pink" : "black")};
   margin:20px;
   margin-top:200px;
   &:hover{
     color : blue;
   }
   padding:30px;
   
    `
