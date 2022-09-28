import { Link } from "react-router-dom";
import {Space} from "antd";
import CustomButton from "../../Components/CustomButton/Index";
import {secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import avatar from '../../assets/icons/ic_user_role.svg'

export const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <Link className="table-link" to='/'> {text+1} </Link>
      ),
    },
    {
      title: "BCategory",
      dataIndex: "category",
      key: "category",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
      ),
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      render: ({name,img}, record) => (
          <div className="d-flex align-items-center">
            <img src={avatar} alt="avatar" />
        <Link className="ms-3" to='/'>
          {name}
        </Link>
          </div>
      ),
    }, {
      title: "Receiver",
      dataIndex: "receiver",
      key: "receiver",
      render: ({name,img}, record) => (
          <div className="d-flex align-items-center">
            <img src={avatar} alt="avatar" />
        <Link className="ms-3" to='/'>
          {name}
        </Link>
          </div>
      ),
    },
    {
      title: "Booking Type",
      dataIndex: "bookingType",
      key: "bookingType",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
      ),
    },
    {
      title: "Booking At",
      dataIndex: "bookingAt",
      key: "bookingAt",
      render: (text, record) => (
        <Link to='/'>
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
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
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
            <Link to='/'>
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
  
  export const adminsData = [
    {
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },
    {
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },{
      sender: {
        img: avatar, name: 'Adnan Qureshi',
      },receiver: {
        img: avatar, name: "o'neil mclean",
      },
      category:'Property',
      bookingType: 'in person',
      createdAt: '13-August-2020 12:34 AM',
      bookingAt: '13-August-2020 12:34 AM',
    },
  ]