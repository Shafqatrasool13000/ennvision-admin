import styled from "styled-components";
import { lightblue2, PrimaryColor, secondaryDark4, tertiaryGrey15, tertiaryGrey7, tertiaryGrey9, whiteColor } from "../../Components/GlobalStyle";

export const PropertyInfo=styled.div`
padding-top: 40px;
background-color: ${tertiaryGrey9};
height: 93vh;

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