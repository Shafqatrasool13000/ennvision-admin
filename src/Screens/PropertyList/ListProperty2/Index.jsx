import React, { useState } from "react";
import CustomButton from "../../../Components/CustomButton/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Modal } from "antd";
import ic_logo from "../../../assets/icons/ic_logo(1).svg";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ListProperty2Styled from "./style";
import { Col, Container, Row } from "react-bootstrap";
import Headbar from "../../../Components/Headbar/Headbar";
import { BlackDot, TertiraryHeading, UnderlineRed } from "../../../Components/GlobalStyle";
import redTickIcon from '../../../assets/icons/ic_select_red.svg';

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

const features1 = ['Enter your property details, and load pictures and images. Vital info.', 'List The Price', 'Lot Details & Primary Structures Details.'];

const features2=[
  'Property Image (if available)','Last Sale Date & Price','Lot Details','Building Permit Information','Primary Structures.','Garage Structures'
]

const features=[
  {
    title:'Create Your Own Property Listing',
    propertyName:'3 Easy Steps To Create A Professional Listing',
    price:'FREE',
    features:features1

  },
  {
    title:'Want To Save Time?',
    propertyName:'We Will Auto Populate Your Home Listing Information',
    price:'features2',
    features:features2

  },
]

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
    <ListProperty2Styled>

      <Container>
        <TertiraryHeading>List a Property</TertiraryHeading>
        <div>
          <UnderlineRed />
          <BlackDot />
        </div>
        <Row>
          {
            features.map(({features,price,propertyName,title},index)=>(
              <Col key={index} md={6} className="property-card">
              <Headbar title={propertyName} />
              <div className="property-card-inner-section">
                <div className="property-intro d-flex justify-content-between">
                  <p className="heading">{title}</p>
                  <p className="free">{price}</p>
                </div>

                {
                  features.map((title, index) => (
                    <div key={index} className="d-flex feature mt-2">
                      <img src={redTickIcon} alt="check-icon" />
                      <p className='feature-text ms-2 mb-0'>{title}</p>
                    </div>
                  ))
                }

                <div className="property-btn">
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
            </Col>
            ))
          }
        </Row>
      </Container>
    </ListProperty2Styled>
  );
};

export default Index;
