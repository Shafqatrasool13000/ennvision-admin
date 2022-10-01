import { useContext, useState } from 'react';
import expandIcon from '../../assets/icons/ic_blog_detail_arrow.svg';
import { SidebarContext } from '../../App';
import { SidebarStyled } from './Style';
import { useNavigate } from 'react-router-dom';
import CustomDrawer from '../Drawer/Index';

const Sidebar = () => {
    
    const navigate = useNavigate();

    const { showSidebar } = useContext(SidebarContext);
    const [sidebarData, setSidebarData] = useState([
        { create_link: 'create-user', expand: false, list_link: 'user-list', name: 'User' }, { create_link: 'create-professional', expand: false, list_link: 'professional-list', name: 'Propessional' }, { create_link: 'list-property-1', expand: false, list_link: 'property-list', name: 'Property' }, { create_link: '/post-list', expand: false, list_link: '/post-list', name: 'Post' },
        { create_link: '', expand: false, list_link: 'story-list', name: 'Story' }, { create_link: '', expand: false, list_link: 'newsfeed-list', name: 'Newfeed' }, { create_link: '', expand: false, list_link: 'post-list', name: 'Boost' }, { create_link: '', expand: false, list_link: 'request-list', name: 'Request' },
        { create_link: '', expand: false, list_link: 'user-list', name: 'User' }, { create_link: '', expand: false, list_link: 'professional-list', name: 'Professional' }, { create_link: '', expand: false, list_link: 'property-list', name: 'Property' }, { create_link: '', expand: false, list_link: 'post-list', name: 'Post' },
        { create_link: '', expand: false, list_link: 'story-list', name: 'Story' }, { create_link: '', expand: false, list_link: 'newsfeed-list', name: 'Newfeed' }, { create_link: '', expand: false, list_link: 'post-list', name: 'Boost' }, { create_link: '', expand: false, list_link: 'request-list', name: 'Request' },
    ])

    const expandMenu = (index) => {
        sidebarData[index].expand = !sidebarData[index].expand;
        setSidebarData([...sidebarData]);
    }

    const naivgateDashboard = () => navigate('/');
    const createNavigation = link => navigate(link);
    const listNavigation = link => navigate(link);


    return (
       <CustomDrawer>
         <SidebarStyled className={`${showSidebar ? 'd-block' : 'd-none'}`}>
            <p onClick={naivgateDashboard}>Dashboard</p>
            {
                sidebarData.map(({ name, list_link, create_link, expand }, index) => (
                    <div key={index} className='inner-container'>
                        <p className='mt-2' onClick={() => expandMenu(index)}>{name}</p>
                        {
                            <div className={`expand-menu ${expand ? 'd-block' : 'd-none'}`}>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <p onClick={() => createNavigation(create_link)}>-Create</p>
                                    <img src={expandIcon} alt="create-link" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <p onClick={() => listNavigation(list_link)}>-List</p>
                                    <img src={expandIcon} alt="create_link:'',expand" />
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
        </SidebarStyled>
       </CustomDrawer>
    )
}

export default Sidebar