import { Link } from "react-router-dom";
import { Space, Rate } from "antd";
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
          <div className="d-flex align-items-center">
            <img src={avatar} alt="avatar" />
        <Link className="ms-3" to='/'>
          {text.slice(0,10)+'...'}
        </Link>
          </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,10)+'...'}
        </Link>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,10)+'...'}
        </Link>
      ),
    },
    {
      title: "Property Type",
      key: "propertyType",
      dataIndex: "propertyType",
      render: (text, record) => (
        <Link to='/'>
  
          {text.slice(0,10)+'...'}
        </Link>
      ),
    },
    {
      title: "Bed",
      key: "bed",
      dataIndex: "bed",
      render: (text, record) => (
        <Link to='/'>
  
          {"0"+text}
        </Link>
      ),
    },
    {
      title: "Bath",
      key: "bath",
      dataIndex: "bath",
      render: (text, record) => (
        <Link to='/'>
          {"0"+text}
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
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },
    {
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },{
      title: 'executive home central erin mills',
      price: '$1,284,997 CAD',
      location:'mississauga, ontario, canada',
      propertyType: 'house - sale',
      bed: '3',
      bath: '2'
    },
  ]