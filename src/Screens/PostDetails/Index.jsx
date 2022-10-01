import { Col, Container, Row } from "react-bootstrap";
import postImg from '../../assets/Image/ic_image_2.png';
import prof1 from '../../assets/Professional/Professional (7).png';
import prof2 from '../../assets/Professional/Professional (6).png';
import verified from '../../assets/icons/ic_verifed.svg';
import { PostDetailsStyled } from "./style";
import sentIcon from '../../assets/icons/ic_newsfeed_sent.svg';
import likeIcon from '../../assets/icons/ic_newsfeed_like.svg';
import sentComment from '../../assets/icons/ic_newsfeed_comment.svg';
import saved from '../../assets/icons/ic_newsfeed_saved.svg';

const Index = () => {

    const commentsData = [
        { user: 'Sandra Bullock', img: prof1, message: `It is difficult to be patient but to waste the rewards for patience is worse.
        Abu Bakr ( R.A) 
        DM TO PLACE YOUR ORDERS NOW! 
       ` ,hashTags:'#arabic #abubakar #muslim #red #white #sig #siddique'},{ user: 'Adnan Qureshi', img: prof2, message: 'Mashallah Looks Nice..' },
    ]
    
    return (
        <PostDetailsStyled>
            <div className="inner-container">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="left-side">
                        <img className="post-img rounded" src={postImg} alt="post" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="right-side mt-3 mt-md-0">
                        <h6 className="post-owner">Sandra Bullock<span className="ms-2"><img src={verified} alt="verified" /></span></h6>
                        <div className="comments">
                            {commentsData.map(({ user, img, message,hashTags }, index) => (
                                <div key={index}>
                                    <h6 className="prof-profile mb-2"><img className="prof-img me-3" src={img} alt="verified" />{user}</h6>
                                    <code className="message">{message}</code>
                                    <p className="hast-tags">{hashTags}</p>
                                    <div className="d-flex">
                                    <p className="time">5h</p>
                                    <p className="reply">Reply</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className="react-icons d-flex justify-content-between">
                        <div>
                          <img src={sentIcon} alt="sent" />
                          <img src={likeIcon} alt="like" />
                          <img src={sentComment} alt="sent-icon" />
                        </div>
                        <div>
                        <img src={saved} alt="sent-icon" />
                        </div>
                        </div>
                        <div className="comment-section position-relative  d-flex align-align-items-center mt-2">
                        <input className="w-100 " placeholder="Comment" type="text"/>
                        <p className="post-link position-absolute end-0 mb-0">Post</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </PostDetailsStyled>
    )
}

export default Index