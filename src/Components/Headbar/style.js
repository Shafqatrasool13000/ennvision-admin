import styled from "styled-components";
import { lightGrey2, tertiaryGrey16, tertiaryGrey7 } from "../GlobalStyle";

export const HeadbarStyled=styled.div`

display: flex;
justify-content: space-between;
background: ${tertiaryGrey16};
border: 1px solid ${lightGrey2};
border-radius: 4px 4px 0px 0px;
padding: 12px;

.title{
font-size: 16px;
color: ${tertiaryGrey7};
letter-spacing: 0.5px;
margin-bottom: 0;
font-family: 'EnnVisionsMedium';
}

`