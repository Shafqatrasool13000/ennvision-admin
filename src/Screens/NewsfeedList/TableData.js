import CustomButton from "../../Components/CustomButton/Index";
import { secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";
import { Link } from "react-router-dom";
import { Space } from "antd";

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
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  }, {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  }, {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  }, {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  }, {
    title: "Shares",
    dataIndex: "shares",
    key: "shares",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  }, {
    title: "Saved",
    dataIndex: "saved",
    key: "saved",
    render: (text, record) => (
        <Link className="ms-3" to='/'>
          {text.slice(0,8)+'...'}
        </Link>
    ),
  },
  {
    title: "Boost",
    dataIndex: "boost",
    key: "boost",
    render: (text, record) => (
      <Link to='/'>
        {text+'ss'}
      </Link>
    ),
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
    render: (text, record) => (
      <Link to='/'>
        {text.slice(0,8)+'...'}
      </Link>
    ),
  },
  {
    title: "Booking",
    key: "booking",
    dataIndex: "booking",
    render: (text, record) => (
      <Link to='/'>

        {text+'ed'}
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
    title: "Create At",
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
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  },
  {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  }, {
    category: 'Property',
    title: 'executive home central...',
    comments: '23,345',
    likes: '23,345',
    shares: '23,345',
    saved: '23,345',
    boost: 'yes',
    views: 'allow',
    booking: 'allow',
    createdAt: '13-August-2020 12:34 AM',
  },



]
