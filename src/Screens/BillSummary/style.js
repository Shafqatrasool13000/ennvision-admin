import styled from "styled-components";
import { pureDark, tertiaryGrey10, tertiaryGrey6, tertiaryGrey7, tertiaryGrey9 } from "../../Components/GlobalStyle";

export const BillSummaryStyled=styled.div`
padding:30px 0;
background-color: ${tertiaryGrey9};
height: 93vh;

.inner-container{

.head-bar{
 background: #F5F5F5;
 padding: 16px 8pxe;
}


.bill-info-side{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
height: 440px;


 .head-bar-title{
font-size: 14px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
padding: 0 14px;
}

.features{
padding: 16px;
.feature{
padding-bottom: 8px;
border-bottom: 1px solid ${tertiaryGrey6};
margin-top: 12px;
&-title{
color: ${tertiaryGrey7};
font-size: 14px;
margin-bottom: 0;
}
&-price{
font-size: 14px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
margin-bottom: 0;
}
}
}
}

.credit-card-side{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
height: 440px;

.head-bar{
&-title{
font-size: 14px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
padding: 0 14px;
}
}
.payments{
padding: 16px;

&-type{
border-bottom: 1px solid ${tertiaryGrey6};
margin-top: 16px;

&-title{
font-size: 16px;
font-weight: 700;
}
&-subtitle{
font-size: 14px;
}
}
}
} 
}
`