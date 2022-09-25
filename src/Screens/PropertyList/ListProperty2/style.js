import styled from "styled-components"
import { lightColor1, lightGrey2, pureDark, secondaryDark4, whiteColor } from "../../../Components/GlobalStyle"

const ListProperty2Styled = styled.div`

background-color: white;
height: 100vh;
padding-top: 40px;


@media screen and (max-width:768px){
height: 100%;
}

.title{
color: ${pureDark};
}

.property-intro{

font-family:'EnnVisionsMedium';

.heading{
font-size:14px;
color: ${pureDark};
}

.free{
font-size: 16px;
color: ${pureDark};
}

.price{
font-size: 16px;
color: ${lightGrey2};
}

}
.row{

.property-card{

&-inner-section{
background: ${whiteColor};
padding: 16px;
border-radius: 6px;
height: 380px;
border: 1px solid ${lightColor1};
position: relative;

.feature{
margin-top: 14px;

&-text{
color: ${secondaryDark4};
font-size: 14px;
}
}
}

.property-btn{
position: absolute;
bottom: 5%;
width: 95%;
}
}
}


`

export default ListProperty2Styled