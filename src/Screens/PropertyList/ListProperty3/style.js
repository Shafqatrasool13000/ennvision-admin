import styled from "styled-components"
import { lightColor1, lightGrey2, pureDark, secondaryDark4, whiteColor } from "../../../Components/GlobalStyle"

const ListProperty3Styled = styled.div`

background-color: white;
height: 100vh;
padding-top: 40px;

.title{
&:last-child{
 font-size:20px;
}
}

@media screen and (max-width:768px){
height: 100%;
}

.property-intro{

font-family:'EnnVisionsMedium';

.heading{
font-size:16px;
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

.property-below-btn{
position: absolute;
bottom: 5%;
right: 3%;
}
}
}

`

export default ListProperty3Styled