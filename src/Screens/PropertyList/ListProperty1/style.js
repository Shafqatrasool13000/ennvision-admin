import styled from "styled-components"
import { lightColor1, pureDark, whiteColor } from "../../../Components/GlobalStyle"

const ListProperty1Styled = styled.div`

background-color: white;
height: 100vh;

@media screen and (max-width:768px){
height: 100%;
}

.row{
padding-top: 40px;
.left-side{

.title{
color: ${pureDark};
}

.ant-select-selector{
height: 42px;
}

.ant-select-selection-search{
input{
margin-top: 5px;
}
}

.ant-select-selection-placeholder{
margin-top: 5px;
}

&-input-fields{
background: ${whiteColor};
border: 1px solid ${lightColor1};
border-radius: 6px;
padding: 16px;

@media screen and (max-width:786px) {
padding: 8px;
    
}
}

.text-start{
font-size: 14px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
margin:10px 0;
}
}

.right-side{
background-color: #ff00004d;
border-radius: 7px;
padding-bottom: 14px;

@media screen and (max-width:768px){
width: 93%;
margin: 0 auto;
height: 500px;
margin-bottom: 20px;
}

}
}


`

export default ListProperty1Styled