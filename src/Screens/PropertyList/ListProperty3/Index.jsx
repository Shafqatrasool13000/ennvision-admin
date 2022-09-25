import React, { useState } from "react";
import CustomButton from "../../../Components/CustomButton/Index";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ListProperty3Styled from "./style";
import { Col, Container, Row } from "react-bootstrap";
import Headbar from "../../../Components/Headbar/Headbar";
import { BlackDot, lightblue2, pureDark, tertiaryGrey18, TertiraryHeading, UnderlineRed } from "../../../Components/GlobalStyle";
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

const features1 = ['Picture of Property (if available)', 'Property Address', 'Municipality', 'Roll Number', 'Postal Code', 'Province, Real-time Market Value (AVM', 'AVM Valuation Date', 'AVM Confidence Rating', 'AVM Range, Roll Number', 'Address', 'Property Style', 'Year Built'];

const features2 = [
  'Picture of Property (if available)', 'Property Address', 'Municipality', 'Roll Number', 'Postal Code', 'Province, Real-time Market Value (AVM', 'AVM Valuation Date', 'AVM Confidence Rating', 'AVM Range, Roll Number', 'Address', 'Property Style', 'Year Built'
]

const features = [
    {
        title: 'Property Value Sales Report',
        propertyName: '3 Easy Steps To Create A Professional Listing',
        price: '$50.00',
        features: features1

    },
    {
        title: 'Comparable Report',
        propertyName: 'We Will Auto Populate Your Home Listing Information',
        price: '$50.00',
        features: features2

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
        <ListProperty3Styled>

            <Container>
              <div className="d-flex justify-content-between">
                <div>
                <TertiraryHeading>You May Also Like</TertiraryHeading>
                <div>
                    <UnderlineRed />
                    <BlackDot />
                </div>
                </div>
                <div className="d-flex">
                  <div className="me-2">
                <CustomButton
                bgcolor={tertiaryGrey18}
                color={pureDark}
                padding="8px 8px"
                width="150px"
                type="submit"
                title="SKIP"
                margin="auto"
                fontSize='16px'
                fontFamily='EnnVisionsMedium'
                />
                </div>
             <CustomButton
              bgcolor={lightblue2}
              color="white"
              padding="8px 8px"
              width="150px"
              type="submit"
              title="Next"
              margin="auto"
              fontSize='16px'
              fontFamily='EnnVisionsMedium'
          />
                </div>
              </div>
                <Row>
                    {
                        features.map(({ features, price, propertyName, title }, index) => (
                            <Col key={index} md={6} className="property-card">
                                <Headbar title={propertyName} rightText={price} />
                                <div className="property-card-inner-section">
                                    {
                                        features.map((title, index) => (
                                            <div key={index} className="d-flex feature mt-2">
                                                <img src={redTickIcon} alt="check-icon" />
                                                <p className='feature-text ms-2 mb-0'>{title}</p>
                                            </div>
                                        ))
                                    }
                                    <div className="property-below-btn">
                                        <CustomButton
                                            bgcolor={index===0?'#F3F3F3':"#049CCE"}
                                            color={index===0?pureDark:"white"}
                                            padding="8px 8px"
                                            width="120px"
                                            type="submit"
                                            title="You Want?"
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
        </ListProperty3Styled>
    );
};

export default Index;
