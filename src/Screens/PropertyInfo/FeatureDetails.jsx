import { Col, Container, Row } from "react-bootstrap";
import selectIcon from '../../assets/icons/ic_add_property_additional.svg';
import Headbar from "../../Components/Headbar/Headbar";
import { FeatureDetailsStyled } from "./style";
import addFeatureIcon from '../../assets/icons/ic_add_property_general_info_add.svg';

const FeatureDetails = () => {

    const featuresData = [
        'Central Heating', 'Central Cooling', 'Servant Quarter', 'Tv Lounge', 'Lawn', 'Dirty Kitchen', 'Dining Room', 'Swimming Pool', 'Elevators', 'Drawing Room', 'Fully Furnished', 'Study Room', 'Home Theatre', 'Semi Furnished', 'Powder Room', 'Corner House', 'Wifi', 'Security Staff', 'Kitchen', 'Balcony', 'Accessible For Specially-Abled Persons', 'Store Room', 'Laundry Room', 'Nearby Landmark'
    ]
    const facingData = [
        'North', 'North West', 'West', 'North East', 'South West', 'South', 'South East', 'West'
    ]
    const utilitiesData = [
        'Electricity', 'Gas', 'Maintenance', 'Water'
    ]

    return (
        <FeatureDetailsStyled>
            <Container>
                <div className="mt-4">
                <Headbar title='Additional Details' icon={addFeatureIcon}/>
                </div>
                <div className="features-container pb-3">
                    <p className="features-container-title mb-0">Features</p>
                    <Row>
                        {
                            featuresData.map((title, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <div className="feature d-flex align-items-center">
                                        <span><img src={selectIcon} alt="check-icon" /></span>
                                        <p className="feature-text mb-0 ms-2">{title}</p>
                                    </div>

                                </Col>
                            ))
                        }

                    </Row>
                </div>
                <div className="features-container pb-3">
                    <p className="features-container-title mb-0">Utilities</p>
                    <Row>
                        {
                            utilitiesData.map((title, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <div className="feature d-flex align-items-center">
                                        <span><img src={selectIcon} alt="check-icon" /></span>
                                        <p className="feature-text mb-0 ms-2">{title}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div className="features-container pb-3">
                    <p className="features-container-title mb-0">Facing</p>
                    <Row>
                        {
                            facingData.map((title, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <div className="feature d-flex align-items-center">
                                        <span><img src={selectIcon} alt="check-icon" /></span>
                                        <p className="feature-text mb-0 ms-2">{title}</p>
                                    </div>

                                </Col>
                            ))
                        }

                    </Row>
                </div>
            </Container>
        </FeatureDetailsStyled>
    )
}

export default FeatureDetails