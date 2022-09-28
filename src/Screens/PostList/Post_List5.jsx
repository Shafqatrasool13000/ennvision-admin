import React from 'react'
import { PostList5Styled } from './style';
import post from '../../assets/Image/ic_image_2.png';
import CustomButton from '../../Components/CustomButton/Index';
import { lightblue2 } from '../../Components/GlobalStyle';
import dropDown from '../../assets/icons/ic_drop_down.svg';
import icon1 from '../../assets/icons/ic_newsfeed_like.svg';
import icon2 from '../../assets/icons/ic_newsfeed_saved.svg';
import icon3 from '../../assets/icons/ic_newsfeed_sent.svg';
import { Col, Form, Row } from 'react-bootstrap';
import FormControl from "../../Components/FormControl";
import { Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';



const Post_List5 = () => {

  const navigate=useNavigate();

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
    email: Yup.string().email('Email should be valid')
      .required("Email is required")
  });

  return (
    <PostList5Styled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      // onSubmit={onSubmit}
      >
        {(formik) => (
          <div className='inner-section'>
            <Row className='justify-content-center'>
              <Col md={6}>
                <div className="left-side text-center">
                  <img src={post} alt="" className="main-img" />
                  <div className="choose-section d-flex justify-content-between">
                    <div className="d-flex">
                      <p className="gallery">Gallery</p>
                      <img className='mb-2 ms-1' src={dropDown} alt="" />
                    </div>
                    <div className="choose-section-icons">
                      <img src={icon1} alt="" />
                      <img src={icon2} alt="" />
                      <img src={icon3} alt="" />
                    </div>
                  </div>
                  <div className="submit-btn">
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
                    clicked={() => navigate('/post-list')}
                    />
                  </div>
                </div>
              </Col>
              <Col md={6} className='mt-3 mt-md-0'>
                <FormControl
                  control="textarea"
                  type="email"
                  name="fullName"
                  border='1px solid #EFEFF4'
                  placeholder="Write a Caption"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : "customInput"
                  } />

                <div className="tag-section">
                  <p className="mini-title pb-2 btm-border">Tag People</p>
                  <div className="add-location mt-2">
                    <p className="mini-title mb-1 border-0">Add Location</p>
                    <div className="locations d-flex justify-content-between">
                      <button>Jauharabad</button>
                      <button>Islamabad</button>
                      <button>OshaToronto, Ontorio</button>
                      <button>Osha</button>
                    </div>
                  </div>
                </div>

                <div className="request-section mt-3 pb-2">
                  <div className="d-flex justify-content-between btm-border">
                    <p className="text mini-title mb-0">Contact Request</p>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                    />
                  </div>

                  <div className="d-flex justify-content-between post-request mt-2">
                    <p className="text mini-title mb-0">Post Boost</p>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                    />
                  </div>
                </div>
                <p className="advanced-title mt-2">Advanced settings</p>
                <div className="advanced-settings ">
                  <div className="d-flex justify-content-between">
                    <p className=" mini-title mb-0">Hide like and view counts in this post</p>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Formik>

    </PostList5Styled>
  )
}

export default Post_List5