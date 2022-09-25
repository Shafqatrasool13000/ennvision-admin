import React, { useState } from "react";
import CustomButton from "../../../Components/CustomButton/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Modal } from "antd";
import ic_logo from "../../../assets/icons/ic_logo(1).svg";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormControl from "../../../Components/FormControl";
import ListProperty1Styled from "./style";
import { Col, Container, Row } from "react-bootstrap";
import Headbar from "../../../Components/Headbar/Headbar";
import searchIcon from '../../../assets/icons/ic_add_property_search.svg';
import { BlackDot, TertiraryHeading, UnderlineRed } from "../../../Components/GlobalStyle";


const initialValues = {
  id: 4,
  name: "",
  coordinate: "72.718292,33.912812929",
  channel: "IOS",
  countryId: "",
  cityId: "",
  stateId: "",
  address: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required!"),
  countryId: Yup.string()
    .required("Number is required!"),
  cityId: Yup.string()
    .required("Name is required!"),
  stateId: Yup.string()
    .required("State is required!"),
  address: Yup.string()
    .required("Number is required!"),
});

const Index = () => {
  const { locationsId } = useParams();
  const [isModalVisibled, setIsModalVisibled] = useState(false);
  const [spaceSelectedCountry, setSpaceSelectedCountry] = useState("");
  const [spaceSelectedState, setSpaceSelectedState] = useState("");
  const [spaceSelectedCity, setSpaceSelectedCity] = useState("");
  const [test, settest] = useState(false);
  const regex = /^\d+$/;
  const navigate = useNavigate();

  const handleModalCancel = () => {
    setIsModalVisibled(false);
  };

  const onSuccess = (response) => {
    if (response.data?.code !== 201) {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/locations");
      setIsModalVisibled(false);
    }
  };

  const handleSelectCountry = (val) => {
    setSpaceSelectedCountry(val);
    if (test) {
    }
  };

  const handleSelectedState = (val) => {
    setSpaceSelectedState(val);
  };
  const handleSelectedCity = (val) => {
    setSpaceSelectedCity(val);
  };

  return (
    <ListProperty1Styled>
      <Modal
        visible={isModalVisibled}
        footer={null}
        onCancel={handleModalCancel}
        centered={true}
      >
        <div className="login-container-card text-center">
          <div className="login-container-card-logo">
            <img src={ic_logo} alt="ic_logo" className="logo" />
          </div>
          <h5 className="question-text mt-3 fs-5">
            Location Updated Successfull
          </h5>
        </div>
      </Modal>
      <Container>
      
        <Row>
          <Col md={6} className="left-side">
          <TertiraryHeading>List a Property</TertiraryHeading>
        <div>
        <UnderlineRed />
         <BlackDot/> 
        </div>
            <Headbar title='Start List A Property'/>
            <div className="left-side-inner-section">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {(formik, form) => {
                return (
                  <Form
                    style={{
                      height: "100%",
                    }}
                    name="basic"
                    onFinish={formik.handleSubmit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    validateMessages={validationSchema}
                  >
                    <div
                      className="left-side-input-fields"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <FormControl
                        control="searchSelect"
                        type="input"
                        name="name"
                        placeholder="Enter location name"
                        className={
                          formik.errors.name && formik.touched.name
                            ? "is-invalid"
                            : "customInput"
                        }
                        icon={searchIcon}
                      />
                      <div>
                        <FormControl
                          control="input"
                          type="text"
                          name="address"
                          label="Street Number"
                          placeholder="Enter complete address"
                          className={
                            formik.errors.name && formik.touched.name
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                      <FormControl
                        control="input"
                        name="countryId"
                        label="Street Name"
                        placeholder="Select Country"
                        handleSelectValue={handleSelectCountry}
                        className={
                          formik.errors.countryId &&
                            formik.touched.countryId
                            ? "is-invalid"
                            : "customPasswordInput"
                        }
                        defaultValue={locationsId !== "createNew"}
                      />
                      <FormControl
                        control="input"
                        label="Postal Code"
                        name="stateId"
                        placeholder="Select State"
                        handleSelectValue={handleSelectedState}
                        className={
                          formik.errors.stateId && formik.touched.stateId
                            ? "is-invalid"
                            : "customInput"
                        }
                        defaultValue={locationsId !== "createNew"}
                      />
                      
                      <div className="mt-3">
                        <CustomButton
                          bgcolor="#049CCE"
                          color="white"
                          padding="8px 8px"
                          width="100%"
                          type="submit"
                          title="Start Listing"
                          margin="auto"
                          fontSize='16px'
                          fontFamily='EnnVisionsMedium'
                        />
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            </div>
           
          </Col>
          <Col md={6} className="right-side mt-3 mt-md-0">
          </Col>
        </Row>
      </Container>
    </ListProperty1Styled>
  );
};

export default Index;
