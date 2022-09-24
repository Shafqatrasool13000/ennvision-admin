import { Col, Container, Row } from "react-bootstrap";
import { AdditionalDetailGalleryStyled } from "./style";
import property1 from '../../assets/Image/ic_image_1.png';
import property2 from '../../assets/Image/ic_image_2.png';
import closeIcon from '../../assets/icons/ic_add_property_delete_photo.svg';
import addIcon from '../../assets/icons/ic_add_property_add_photo.svg';
import Headbar from "../../Components/Headbar/Headbar";
import CustomButton from "../../Components/CustomButton/Index";
import { lightblue2, tertiaryGrey17 } from "../../Components/GlobalStyle";

const Gallery = () => {

    const galleryData = [property1, property2, property1, property2, property1, property2, property1, property2];

    return (
        <AdditionalDetailGalleryStyled>
            <Container>
                <div className="inner-container">
                <Headbar title='Additional Detaisl'/>
                <Row className="gallery">
                    {
                    galleryData.map((img, index) => (
                    <Col key={index} sm={6} md={4} className="picture">
                    <img className="lg-img w-100" src={img} alt="property" />
                    <img src={closeIcon} className="close-icon" alt="close" />
                    </Col>
                    ))
                    }
                    <div className="add-img-container">            
                    <Col sm={6} md={4} className="add-img d-flex flex-column align-items-center justify-content-center">
                    <span><img className="lg-img w-100" src={addIcon} alt="property" /></span>
                    <p className="add-text">Add more</p>
                    <p className="size-text">(max size: 5mb)</p>
                    </Col>
                    </div>  
                </Row>
                <Row className="justify-content-end mt-3">
                <Col md={4}/>
            <Col className="d-flex justify-content-end"  md={{ span: 2 ,offset:4}} >
            <CustomButton
                bgcolor={tertiaryGrey17}
                color="white"
                padding="8px 8px"
                width="100%"
                type="submit"
                title="Draft"
                margin="auto"
                fontSize='18px'
              />
              </Col>
              <Col className="d-flex justify-content-end mt-2 mt-md-0"  md={{ span: 2  }}>
              <CustomButton
                bgcolor={lightblue2}
                color="white"
                padding="8px 8px"
                width="100%"
                type="submit"
                title="Submit"
                margin="auto"
                fontSize='18px'
                
                />
                </Col>
               </Row>
                </div>
               
            </Container>
        </AdditionalDetailGalleryStyled>
    )
}

export default Gallery