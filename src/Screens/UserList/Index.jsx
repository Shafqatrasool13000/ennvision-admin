import { useState } from "react";
import { Link } from "react-router-dom";
import {Table} from "antd";
import  { UserList } from "./style";
import MobileTable from "./MobileTable";
import { Container } from "react-bootstrap";
import { adminsData } from "./TableData";
import avatar from '../../assets/icons/ic_user_role.svg'
import CustomButton from "../../Components/CustomButton/Index";
import {secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import {Space, Rate } from "antd";
import CustomModal from '../../Components/Modal/CustomModal';
import Confirmation from "../Confirmation/Index";
import EditPost from '../PostList/Post_List5';

const Index = () => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);

  const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text, record) => (
      <Link className="table-link" to={`/user-profile/${record.id}`}> {text+1} </Link>
    ),
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: ({name,img}, record) => (
        <div className="d-flex align-items-center">
          <img src={avatar} alt="avatar" />
      <Link className="ms-3" to={`/user-profile/${record.id}`}>
        {name.slice(0,8)+'...'}
      </Link>
        </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text, record) => (
      <Link to={`/user-profile/${record.id}`}>
        {text.slice(0,8)+'...'}
      </Link>
    ),
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
    render: (text, record) => (
      <Link to={`/user-profile/${record.id}`}>

        {text.slice(0,8)+'...'}
      </Link>
    ),
  },

  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text, record) => (
      <CustomButton
        bgcolor={`${secondaryGreen}`}
        color="white"
        padding="2px 4px"
        width="80%"
        type="submit"
        title="Active"

      />

    ),
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (text, record) => (
      <Link to={`/user-profile/${record.id}`}>

        {text.slice(0,8)+'...'}
      </Link>
    ),
  },
  {
    title: "Rating",
    key: "rating",
    dataIndex: "rating",
    render: (text, record) => (
      <Rate allowHalf defaultValue={2.5} />
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="large">
        <div style={{ display: "flex", gap: "6px" }}>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <img onClick={()=>setIsDeleteModal(true)}
            src={deleteIcon}
            alt="delete Icon"
            className="action_icons deleteicon"

          />
          <Link to={`/edit-user/${record.id}`}>
            <img
              src={editIcon}
              alt="edit Icon"
              className="action_icons editicon"
            />
          </Link>
        </div>
      </Space>
    ),
  },
];

  return (
    <>
      <div className="d-md-none">
        <MobileTable/>
      </div>
      <CustomModal isModalVisible={isDeleteModal} setIsModalVisible={setIsDeleteModal}>
        <Confirmation setIsModalVisible={setIsDeleteModal}/>
      </CustomModal>
      
      <div className="d-none d-md-block">
      
        <Container>
          <UserList>
            <Table
              pagination={{pageSize:21}}
              columns={columns}
                  scroll={{
                x:'auto',
                y:'75vh'
              }}
              
              dataSource={[...adminsData.map(({fullName,createdAt,email,phone},index)=>(
                  {
                    id: index,
                    fullName: fullName,
                    email,
                    phone,
                    createdAt,
                  }
              ))]}
            />
          </UserList>
        </Container>

      </div>
    </>
  );
};

export default Index;
