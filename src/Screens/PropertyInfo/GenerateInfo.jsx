import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import * as Yup from "yup";
import Headbar from "../../Components/Headbar/Headbar"
import { GenerateInfoStyled } from "./style"
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import plusIcon from '../../assets/icons/ic_add_property_address_add_field.svg';
import minusIcon from '../../assets/icons/ic_add_property_address_remove_field.svg';

const GenerateInfo = () => {

    const [additionalInputs, setAdditionalInputs] = useState([{ title: 'Bedrooms', name: 'bedroom',value:'' }, { title: 'Bathroom', name: 'bathroom',value:'' }, { title: 'Drawing Rooms', name: 'drawingRooms',value:'' }, { title: 'Bath', name: 'bath',value:'' }, { title: 'Dining Room', name: 'diningRoom',value:'' }, { title: 'Store Rooms', name: 'storeRooms',value:'' }, { title: 'Kitchens', name: 'kitchens',value:'' }, { title: 'Servant Rooms', name: 'servantRooms',value:'' }, { title: 'Parking Space', name: 'parkingSpace',value:'' }]);

    let initialValues = {
        email: "",
        password: "",
    };

    console.log({additionalInputs});
    const validationSchema = Yup.object({
        password: Yup.string()
            .required("Password is required!")
            .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
        email: Yup.string().email('Email should be valid')
            .required("Email isGenerateInfo required")
    });

    return (
        <GenerateInfoStyled>
            <Container>
            <Headbar title='Property Generate Info' />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
            // onSubmit={onSubmit}
            >
                {(formik) => {
                    return (
                      
                            <Row className="justify-content-center align-items-center">
                                <Col className='input-section' sm={6} md={4}>
                                    <FormControl
                                        control="select"
                                        type="email"
                                        name="fullName"
                                        border='1px solid #EFEFF4'
                                        placeholder="Year Build"
                                        className={
                                        formik.errors.email && formik.touched.email
                                        ? "is-invalid"
                                        : "customInput"
                                        }
                                    />
                                </Col>
                                <Col className='input-section' sm={6} md={4}>
                                    <FormControl
                                        control="select"
                                        type="email"
                                        name="fullName"
                                        border='1px solid #EFEFF4'
                                        placeholder="Year Furnished"
                                        className={
                                        formik.errors.email && formik.touched.email
                                        ? "is-invalid"
                                        : "customInput"
                                        }
                                    />
                                </Col>
                                <Col className='input-section' sm={6} md={4}>
                                    <FormControl
                                        control="input"
                                        type="email"
                                        name="fullName"
                                        border='1px solid #EFEFF4'
                                        placeholder="Year Furnished"
                                        className={
                                        formik.errors.email && formik.touched.email
                                        ? "is-invalid"
                                        : "customInput"
                                        }
                                    />
                                </Col>
                                {
                                    additionalInputs.map(({title,name,value}, index) => (
                                    <Col key={index} className='input-section d-flex align-items-center' sm={6} md={4}>
                                    <img src={minusIcon} className='mt-1' alt="minus-icon" />
                                    <FormControl
                                    control="input"
                                    type="input"
                                    name="fullName"
                                    border='1px solid #EFEFF4'
                                    placeholder="Year Furnished"
                                    className={
                                    formik.errors.email && formik.touched.email
                                    ? "is-invalid"
                                    : "customInput"
                                    }
                                    />
                                    <img src={plusIcon} className='mt-1' alt="plus" />
                                    </Col>
                                    ))
                                }
                            </Row>
                    )
                }}
            </Formik>
            </Container>
        </GenerateInfoStyled>
    )
}

export default GenerateInfo