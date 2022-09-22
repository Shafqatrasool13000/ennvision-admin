import styled from "styled-components";
import { lightblue2, lightGrey, lightGrey2, lightGrey4, lightGrey5, lightGrey6, PrimaryColor, secondaryDark4, tertiaryGrey14, tertiaryGrey15, tertiaryGrey16, tertiaryGrey7, tertiaryGrey9, whiteColor } from "../../Components/GlobalStyle";

export const PropertyInfo = styled.div`
padding-top: 40px;
background-color: ${tertiaryGrey9};

.heading-bar{
padding: 20px;
background: ${tertiaryGrey15};
border: 1px dashed rgba(144, 144, 144, 0.589);
border-radius: 5px;

&-title{
font-size: 28px;
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}
&-subtitle{
font-size: 15px;
color: ${tertiaryGrey7};
}
}

.property-for{
margin-top: 26px;
.heading{
font-size: 16px;
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}
.purchase-btns{
margin-top: 12px;
background-color: ${whiteColor};
border-radius: 7px;
height: 44px;
padding: 3px;
border: 1px solid #F5F5F5;
border-radius: 4px;

.active{
background-color: ${PrimaryColor};
height: 100%;
border-radius: 4px;
color: ${whiteColor};

}
button{
background: transparent;
font-size: 16px;
}
}
.generate-btn{
background: ${lightblue2};
border-radius: 3px;
margin-top: 37px;
padding: 7px 10px;
color: white;
font-size: 18px;
font-family: 'EnnVisionsMedium';
}
}

.property-types{

margin-top: 40px;
border-radius: 7px;
height: 44px;
padding: 3px;
border-radius: 4px;

.heading{
font-size: 16px;
color: ${tertiaryGrey7};
font-family: 'EnnVisionsMedium';
}

&-type{
&-text{
font-size:16px;
color: ${secondaryDark4};
}
}
}

.place-located{

}

.address-details{

}

.add-property{

}

.property-detail-box{

}

.property-detail-info{

}

.additonal-info{

.gallery{

}
}


`
export const AdditionalDetailGalleryStyled = styled.div`
margin-top: 50px;
.head-bar{
background: ${tertiaryGrey16};
border: 1px solid ${lightGrey2};
border-radius: 4px 4px 0px 0px;
&-title{
padding: 12px;
font-size: 16px;
color: ${tertiaryGrey7};
}
}

.gallery{
.picture{
position: relative;

.lg-img{
height: 150px;
border: 1px solid #EFEFF4;
border-radius: 3px;
margin-top: 14px; 
}

.close-icon{
position: absolute;
right: 5%;
background: white;
top: 15%;
height: 22px;
}
}

.add-img-container{
width: 33%;
margin: 0 auto;

@media screen and (max-width:768px) {
width: 100%;  
}
.add-img{
margin-top: 14px; 
background: ${tertiaryGrey15};
border: 1px dashed ${lightGrey};
border-radius: 3px;
width: 100%;
height: 150px;
img{
height: 19px;
}



.add-text{
color: ${tertiaryGrey14};
font-size: 18px;
margin-bottom: 0;
}
.size-text{
font-size: 16px;
color: ${lightGrey};
}
}

}

}
`

export const FeatureDetailsStyled=styled.div`

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
border-bottom: 1px solid black;
&:not(:last-child){
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
`