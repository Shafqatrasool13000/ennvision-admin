import styled from 'styled-components';
import { lightColor1, lightGrey, lightGrey6, lightGrey7, pureDark, secondaryDark3, tertiaryGrey19, tertiaryGrey7, whiteColor } from '../../Components/GlobalStyle';

export const PostListStyled = styled.div`
margin-top: 28px;

.table-link{
color: ${secondaryDark3} !important;
font-family: 'EnnVisionsMedium';
font-size: 16px !important;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.ant-table-body::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.ant-table-body{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


.btn{
display: flex;
justify-content: flex-end;
margin-top: -25px;
}

.ant-table-thead{
background-color: ${lightGrey6} ;
border-radius:8px;
.ant-table-cell{
background: transparent;
color:${secondaryDark3};
font-family: 'EnnVisionsMedium';
padding: 8px 16px;
font-size: 14px;
}
}
.ant-table-tbody{
.ant-table-cell{
padding: 3px 16px;  
&::before{
height: 0 !important;
} 
a{
 text-decoration: none;
 color: ${lightGrey7};
 font-size: 14px;
 &:first-child{
}

}
}    
}
.ant-table-tbody > tr > td{
border-bottom: none !important;
}
.action_icons{
background:#E1E2E2 ;
width:23px;
height:22px;
padding: 3px;
border-radius: 2px;
cursor: pointer;
}
.deleteicon{
background: #D63229 !important;
cursor: pointer;
}
.editicon{
background: #007AFF !important;
cursor: pointer;
}
`;

export const MobileTableStyled = styled.div`

.plus-icon{
right:5%;
bottom: 5%;
position: fixed;
z-index: 30;
}
display: flex;
justify-content: space-between;
p{
margin:0;    
font-size: 16px;
}

.inner-section{
padding-bottom: 10px;
.card:first-child{
margin-top: 12px;
} 
.card:not(:first-child){
margin-top:20px;
}  
.card{
padding:12px;

.name-section{
.name{
font-weight: 600;
}
.id{
color:#156985 ;
}
}

.details{
margin-top:10px;
font-size: 16px;
}
.details-1{
margin-top:10px;
font-size: 13px;
}

.price-section{
margin-top:14px;
}

.actions-section{
margin-top:16px;
img{
background-color:#E1E2E2;
padding: 10px;
height: 35px;
}
img:not(:first-child){
margin-left:4px ;
}

.warn-actions{
img:first-child{
background-color:#C7112B;
}
img:last-child{
background-color:#007AFF ;  
}    
}
}
}

}
`

export const PostList1Styled=styled.div`

background-color: rgba(33, 33, 33, 0.37);
height: 93vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;


.inner-section{
background: ${whiteColor};
border: 1px solid ${whiteColor};
border-radius: 6px;
max-width: 450px;
padding: 12px;
margin: 0 auto;
@media screen and (max-width:480px) {
width: 94%;
margin: 0 auto;
}

.post-img{
max-height: 333px;
}

.choose-section{
margin-top: 16px;
.gallery{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

&-icons{
img{
background: ${lightColor1};
border-radius: 3px;
padding: 6px;
&:not(:last-child){
margin-right: 10px;
}
}
}

}
}
`;

export const PostList2Styled=styled.div`

background-color: rgba(33, 33, 33, 0.37);
height: 93vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;

.inner-section{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
max-width: 450px;
padding: 12px;
margin: 0 auto;
@media screen and (max-width:480px) {
width: 94%;
margin: 0 auto;
}

.post-img{
height: 313px;
border-radius: 7px;
object-fit: cover;
}

.last-img{
.text{
font-size: 24px;
color: ${whiteColor};
top: 50%;
left:50%;
transform: translate(-50%,-50%);
font-family: 'EnnVisionsMedium';
z-index: 1;
}

.overlay {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
transition: .5s ease;
background: ${pureDark};
border-radius: 7px;
opacity: 0.46;
}

}

.choose-section{
margin-top: 16px;
.gallery{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

&-icons{

flex-wrap: wrap;
img{
background: #F5F5F5;
border-radius: 3px;
padding: 6px;
&:not(:last-child){
margin-right: 10px;
}
}
}

}
}
`;

export const PostList3Styled=styled.div`

background-color: rgba(33, 33, 33, 0.37);
height: 93vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;


.inner-section{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
max-width: 450px;
padding: 12px;
margin: 0 auto;
@media screen and (max-width:480px) {
width: 94%;
margin: 0 auto;
}
.more-img-text{
font-size: 24px;
color: ${whiteColor};
top: 50%;
left:50%;
transform: translate(-50%,-50%);
font-family: 'EnnVisionsMedium';
z-index: 1;
}

.overlay {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
transition: .5s ease;
background: ${pureDark};
border-radius: 7px;
opacity: 0.46;
}
.row{
background-color: ${tertiaryGrey7};
width: 99.9%;
margin: 0 auto;
}

.post-img{
max-height: 333px;
}

.choose-section{
margin-top: 16px;
.gallery{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

&-icons{
img{
background: #F5F5F5;
border-radius: 3px;
padding: 6px;
&:not(:last-child){
margin-right: 10px;
}
}
}

}
}
`;

export const PostList4Styled=styled.div`

background-color: rgba(33, 33, 33, 0.37);
height: 93vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;

.inner-section{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
max-width: 450px;
padding: 12px;
margin: 0 auto;
@media screen and (max-width:480px) {
width: 94%;
margin: 0 auto;
}

.more-img-text{
font-size: 24px;
color: ${whiteColor};
top: 50%;
left:50%;
transform: translate(-50%,-50%);
font-family: 'EnnVisionsMedium';
z-index: 1;
}

.overlay {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
transition: .5s ease;
background: ${pureDark};
border-radius: 7px;
opacity: 0.46;
}

.say-something{
color: ${lightGrey};
font-size: 17px;
margin-top: 26px;
text-align: center;
}

.row{
width: 100%;
margin: 0 auto;
}

.post-img{
max-height: 333px;
}

.choose-section{
margin-top: 16px;
.gallery{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

&-icons{
img{
background: #F5F5F5;
border-radius: 3px;
padding: 6px;
&:not(:last-child){
margin-right: 10px;
}
}
}

}
}
`;

export const PostList5Styled=styled.div`

background-color: rgba(33, 33, 33, 0.37);
height: 93vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
width: 100%;

@media screen and (max-width:768px) {
height: 100%;
padding-top: 18px;
}
.inner-section{
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 6px;
padding: 12px;
margin: 0 auto;
@media screen and (max-width:480px) {
width: 94%;
margin: 0 auto;
}

.left-side{
.main-img{
  height: 333px;
}
}


.mini-title{
 color:${pureDark};
 font-size: 14px;
}

.btm-border{
  border-bottom: 1px solid ${tertiaryGrey19};

}
.tag-section{

border: 1px solid ${tertiaryGrey19};
border-radius: 7px;
padding: 8px 10px;

button{
font-size: 12px;
padding: 4px;
border-radius: 4px;
color: ${pureDark};
}

}
.advanced-title{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

.request-section{
border: 1px solid ${tertiaryGrey19};
border-radius: 7px;
padding: 8px 10px;
}

.advanced-settings{
border: 1px solid ${tertiaryGrey19};
border-radius: 7px;
padding: 8px 10px;
}

.post-img{
max-height: 333px;
}

.choose-section{
margin-top: 16px;
.gallery{
font-size: 17px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}

&-icons{
img{
background: #F5F5F5;
border-radius: 3px;
padding: 6px;
&:not(:last-child){
margin-right: 10px;
}
}
}

}
}
`;

