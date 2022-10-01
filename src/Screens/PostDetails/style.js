import styled from 'styled-components';
import { lightblue2, lightDark, pureDark, tertiaryDark, tertiaryGrey14, tertiaryGrey7 } from '../../Components/GlobalStyle';

export const PostDetailsStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

.inner-container{
padding: 14px 0;
background-color: white;
max-width: 890px;
margin: 0 auto;
position: relative;

.left-side{

.post-img{
height:478px;
}
}

.right-side{

.post-owner{
font-size: 14px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
padding-bottom: 16px;
border-bottom: 1px solid ${lightDark};
}

.message{
font-size: 13px;
color: ${tertiaryGrey7};
margin-top: 10px;
}

.hast-tags{
font-size: 13px;
color: ${lightblue2};
margin-top: 10px;
}

.time{
 color: ${tertiaryGrey14};
 font-size: 13px;
}

.reply{
color: ${tertiaryGrey14};
 font-size: 13px;  
 margin-left: 10px;
}

.prof-profile{
margin-left: 9px;
height: 32px;
font-family: 'EnnVisionsMedium';

img{
height: 42px;
border-radius: 50%;
width: 42px;
}
}

.react-icons{

padding-bottom: 18px;
border-bottom: 1px solid ${tertiaryDark};
img:not(:first-child){
margin-left: 14px;

}
}
.comment-section{

input{
margin-top: 20px;
}
.post-link{
color: ${lightblue2};
bottom:-12%;
font-family: 'EnnVisionsMedium';
cursor: pointer;
}
}
}
}
`