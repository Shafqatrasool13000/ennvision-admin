import styled from "styled-components";
import {secondaryDark3 } from "../../Components/GlobalStyle";

export const ConfirmationStyled=styled.div`
text-align: center;
margin: 0 auto;
height: 93vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.inner-container{
max-width: 420px;
background: #FFFFFF;
box-shadow: 0px 0px 16px #00000017;
border-radius: 7px;
padding:18px;
img{
height: 60px;
margin-bottom: 12px;
}
.message{
margin-top: 14px;
font-size: 16px;
width: 90%;
margin: 0 auto;
color: ${secondaryDark3};
}

}
`