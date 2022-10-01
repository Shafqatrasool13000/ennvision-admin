import { Table } from "antd";
import { PostListStyled } from "./style";
import MobileTable from "./MobileTable";
import { Container } from "react-bootstrap";
import { adminsData } from "./TableData";
import { useEffect, useState } from "react";
import CustomModal from "../../Components/Modal/CustomModal";
import EditPost from '../../Screens/PostList/Post_List5';
import { Link } from "react-router-dom";
import { Space } from "antd";
import CustomButton from "../../Components/CustomButton/Index";
import { secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import PostDetails from "../PostDetails/Index";
import Post1 from './Post_List1';
import Post2 from './Post_List2';
import Post3 from './Post_List3';
import Post4 from './Post_List4';


const Index = () => {
  const [isPostModal, setIsPostModal] = useState(false);
  const [isPost1Modal, setIsPost1Modal] = useState(false);
  const [isPost2Modal, setIsPost2Modal] = useState(false);
  const [isPost3Modal, setIsPost3Modal] = useState(false);
  const [isPost4Modal, setIsPost4Modal] = useState(false);
  const [isPostDetailsModal, setIsPostDetailsModal] = useState(false);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className="table-link"> {text + 1} </div>
      ),
    },
    {
      title: "postLayout",
      dataIndex: "postLayout",
      key: "postLayout",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className='cursor-pointer'>
          {text.slice(0, 8) + '...'}
        </div>
      ),
    },
    {
      title: "Story Type",
      dataIndex: "postType",
      key: "postType",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className='cursor-pointer'>
          {text.slice(0, 8) + '...'}
        </div>
      ),
    },
    {
      title: "location",
      dataIndex: "location",
      key: "location",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className='cursor-pointer'>
          {text.slice(0, 8) + '...'}
        </div>
      ),
    },
    {
      title: "Boost",
      key: "boost",
      dataIndex: "boost",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className='cursor-pointer'>

          {text.slice(0, 8) + '...'}
        </div>
      ),
    }, {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)} className='cursor-pointer'>
          {text.slice(0, 8) + '...'}
        </div>
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
      title: "Disappear",
      key: "disappear",
      dataIndex: "disappear",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)}>
          {text.slice(0, 8) + '...'}
        </div>
      ),
    },
    {
      title: "Created At",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (text, record) => (
        <div onClick={() => setIsPostDetailsModal(true)}>

          {text.slice(0, 8) + '...'}
        </div>
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
            <img
              src={deleteIcon}
              alt="delete Icon"
              className="action_icons deleteicon"

            />
            <div>
              <img
                onClick={() => setIsPostModal(true)}
                src={editIcon}
                alt="edit Icon"
                className="action_icons editicon"
              />
            </div>
          </div>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    setIsPost1Modal(true)
  }, []);

  // console.log({isPost1Modal})

  return (
    <div>
      <CustomModal isModalVisible={isPostModal} setIsModalVisible={setIsPostModal}>
        <EditPost setIsPostModal={setIsPostModal} />
      </CustomModal>
      <CustomModal isModalVisible={isPostDetailsModal} setIsModalVisible={setIsPostDetailsModal}>
        <PostDetails setIsPostModal={setIsPostDetailsModal} />
      </CustomModal>
      <CustomModal isModalVisible={isPost1Modal} setIsModalVisible={setIsPost1Modal}>
        <Post1 setIsPost1Modal={setIsPost1Modal} setIsPost2Modal={setIsPost2Modal}  />
      </CustomModal>
      <CustomModal isModalVisible={isPost2Modal} setIsModalVisible={setIsPost2Modal}>
        <Post2 setIsPost2Modal={setIsPost2Modal} setIsPost3Modal={setIsPost3Modal} />
      </CustomModal>
      <CustomModal isModalVisible={isPost3Modal} setIsModalVisible={setIsPost3Modal}>
        <Post3 setIsPost3Modal={setIsPost3Modal} setIsPost4Modal={setIsPost4Modal} />
      </CustomModal>
      <CustomModal isModalVisible={isPost4Modal} setIsModalVisible={setIsPost4Modal}>
        <Post4 setIsPost4Modal={setIsPost4Modal} />
      </CustomModal>
      <div className="d-md-none">
        <MobileTable
        />
      </div>
      <div className="d-none d-md-block">
        <Container>
          <PostListStyled>
            <Table
              pagination={{ pageSize: 21, showLessItems: true }}
              columns={columns}
              scroll={{
                x: 'auto',
                y: '75vh'
              }}
              dataSource={[...adminsData.map(({ postLayout,
                postType,
                location,
                tags,
                boost,
                disappear,
                createdAt }, id) => (
                {
                  id,
                  postLayout,
                  postType,
                  location,
                  tags,
                  boost,
                  disappear,
                  createdAt
                }
              ))]}
            />
          </PostListStyled>
        </Container>

      </div>
    </div>
  );
};

export default Index;
