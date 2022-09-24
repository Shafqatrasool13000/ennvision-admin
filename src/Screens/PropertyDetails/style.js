import styled from "styled-components";
import { greenishColor, lightColor1, lightGrey4, lightGrey5, lightGrey6, PrimaryColor, pureDark, secondaryDark4, tertiaryGrey5, tertiaryGrey7, tertiaryGrey8, tertiaryGrey9, whiteColor } from "../../Components/GlobalStyle";

export const PropertyDetailsStyled=styled.div`
padding-top: 46px;
padding-bottom: 120px;
background-color: ${tertiaryGrey8};
.for-sale{
font-size: 19px;
color: ${tertiaryGrey7};
}
.property-price{
font-size: 35px;
color: ${PrimaryColor};
font-family: 'EnnVisionsMedium';
}
.imgs-gallery{
margin-top: 10px;
img{
margin-top: 10px;
height: 245px;
}
.img-large{
height: 550px;
}
@media screen and (min-width:576px) {
img{
height: 245px;
}
.img-large{
height: 500px;
}
}
@media screen and (max-width:576px) {
img{
height: 245px;
width: 100%;
}

}
}
.property-details{
margin-top: 24px;
background: ${whiteColor};
border: 1px solid ${lightGrey5};
max-width: 850px;
border-radius: 5px;
display: grid;
grid-template-columns: repeat(5,1fr);
@media screen and (max-width:1366px) {
grid-template-columns: repeat(4,1fr);
}
@media screen and (max-width:1024px) {
grid-template-columns: repeat(3,1fr);
}
@media screen and (max-width:768px) {
grid-template-columns: repeat(2,1fr);
}
@media screen and (max-width:480px) {
grid-template-columns: repeat(1,1fr);
}
img{
height: 19px;
}
&-box{
&:not(:last-child){
border-right:1px solid ${tertiaryGrey5};
}
&-inner{
padding: 20px;
.name{
color: ${tertiaryGrey7};
}
.quantity{
font-family: 'EnnVisionsMedium';
font-size: 18px;
}
}    
}
}
.owner-details{
border: 1px solid ${lightGrey5};
border-radius: 5px;
padding: 14px;
max-width: 850px;
margin-top: 22px;
.listed-by{
color: ${tertiaryGrey7};
font-size: 16px;
}

.bio{
h6{
font-size: 18px;
font-family: 'EnnVisionsMedium';
color: ${pureDark};
}
.branch{
color: ${tertiaryGrey7};
font-size: 16px;
}
.location{
color: ${secondaryDark4};
font-size: 14px;
}
}
.sold-properties{
background: ${tertiaryGrey8};
border: 1px solid ${lightColor1};
border-radius: 5px;
padding: 15px;
.properties{
background: ${tertiaryGrey9};
&:not(:last-child){
border-right:1px solid ${tertiaryGrey5};
}
}
.title{
color: ${tertiaryGrey7};
font-size: 15px;
}
.chat-btn{
background: ${greenishColor};
border-radius: 5px;
font-size: 16px;
padding: 6px;
color: ${whiteColor};
}
.call-btn{
background: ${PrimaryColor};
border-radius: 5px;
font-size: 16px;
padding: 6px;
color: ${whiteColor};
}
@media screen and (min-width:576px){
margin-top: -20px;
button{
width: 100%;
}    
}
@media screen and (max-width:576px){
margin-top: 10px;
button{
width: 50%;   
}  
}
}

}
.about-property{
max-width: 850px;
border: 1px solid ${lightGrey5};
border-radius: 5px;
margin-top: 22px;
padding: 16px;
&-main-details{
&-title{
font-size: 24px;
}
.posted-at{
&-text{
font-size: 16px;
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}
&-date{
font-size: 16px;
color: ${tertiaryGrey7};
}
&-area{
font-size: 16px;
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}
&-detail-text{
color: ${lightGrey6};
}
}
}
.key-features{
border-bottom: 1px solid ${lightGrey4};
padding-bottom: 12px;
&-title{
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}
.features{
.details{
&-text{
color: ${lightGrey6};
font-size: 16px;
background-color: red;
}
}
}
}

.features-container{

&:not(:last-child){
border-bottom: 1px solid ${lightGrey5};
}

&-title{
color: ${tertiaryGrey7};
font-size: 19px;
margin-top: 12px;
}

.feature{
margin-top: 14px;

&-text{
color: ${tertiaryGrey7};
font-size: 14px;
}
}
}
}

.location-map{
height: 500px;
background: lightpink;
margin-top: 32px;
}

`