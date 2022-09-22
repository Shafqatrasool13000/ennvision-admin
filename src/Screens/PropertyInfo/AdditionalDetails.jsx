import { Col, Container, Row } from "react-bootstrap";
import { AdditionalDetailGalleryStyled } from "./style";
import property1 from '../../assets/Image/ic_image_1.png';
import property2 from '../../assets/Image/ic_image_2.png';
import closeIcon from '../../assets/icons/ic_add_property_delete_photo.svg';
import addIcon from '../../assets/icons/ic_add_property_add_photo.svg';

const Gallery = () => {

    const galleryData = [property1, property2, property1, property2, property1, property2, property1, property2];

    return (
        <AdditionalDetailGalleryStyled>
            <Container>

                <div className="head-bar">
                    <div className="head-bar-title">Additional Detaisl</div>
                </div>
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
            </Container>
        </AdditionalDetailGalleryStyled>
    )
}

export default Gallery