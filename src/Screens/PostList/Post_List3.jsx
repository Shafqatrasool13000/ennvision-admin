import React from 'react'
import { PostList3Styled } from './style';
import post from '../../assets/Image/ic_image_2.png';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue2 } from '../../Components/GlobalStyle';
import dropDown from '../../assets/icons/ic_drop_down.svg';
import icon1 from '../../assets/icons/ic_newsfeed_like.svg';
import icon2 from '../../assets/icons/ic_newsfeed_saved.svg';
import icon3 from '../../assets/icons/ic_newsfeed_sent.svg';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Post_List3 = () => {

  const navigate=useNavigate();

  return (
    <PostList3Styled>

      <div className="inner-section">
        <Row className=''>
          <Col className='p-1' xs={7}>  
          <img src={post} alt="" className="post-img" />
          <img src={post} alt="" className="post-img mt-2" />
          </Col>
          <Col className='p-1 mt-3' xs={5}>  <img src={post} alt="" className="post-img" />
          <img src={post} alt="" className="post-img mt-2" />
          <div className='p-1 mt-2 position-relative' xs={3}>  <img src={post} alt="" />
          <p className='position-absolute more-img-text'>3+</p>
          <div class="overlay"></div>
          </div>
          </Col>
        </Row>
        <div className="choose-section d-flex flex-wrap justify-content-between">
          <div className="d-flex">
            <p className="gallery">Gallery</p>
            <img className='mb-2 ms-1' src={dropDown} alt="" />
          </div>
          <div className="choose-section-icons mt-xs-2 mt-sm-0">
          <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
        </div>
        <div className="submit-btn mt-2">
          <CustomButton
            bgcolor={lightblue2}
            color="white"
            padding="10px 8px"
            width="100%"
            type="submit"
            title="NEXT"
            margin="auto"
            fontSize='18px'
            fontFamily='EnnVisionsMedium'
            clicked={()=>navigate("/post-list-5")}
          />
        </div>
      </div>
    </PostList3Styled>
  )
}

export default Post_List3