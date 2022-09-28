import { Link } from "react-router-dom";
import {Space} from "antd";
import CustomButton from "../../Components/CustomButton/Index";
import { secondaryGreen } from "../../Components/GlobalStyle";
import deleteIcon from "../../assets/icons/ic_delete.svg";
import editIcon from "../../assets/icons/ic_edit.svg";

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
      title: "StoryLayout",
      dataIndex: "storyLayout",
      key: "storyLayout",
      render: (text, record) => (
          <Link className="ms-3" to='/'>
            {text.slice(0,8)+'...'}
          </Link>
      ),
    },
    {
      title: "picture - video",
      dataIndex: "storyType",
      key: "storyType",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
      ),
    },
    {
      title: "location",
      dataIndex: "location",
      key: "location",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
      ),
    },
    {
      title: "Boost",
      key: "boost",
      dataIndex: "boost",
      render: (text, record) => (
        <Link to='/'>
  
          {text.slice(0,8)+'...'}
        </Link>
      ),
    }, {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
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
      title: "Disappear",
      key: "disappear",
      dataIndex: "disappear",
      render: (text, record) => (
        <Link to='/'>
          {text.slice(0,8)+'...'}
        </Link>
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
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    },
    {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    }, {
      storyLayout: 'Classic Layout',
      storyType: 'picture - video',
      location: 'mississauga, ontario, canada',
      tags: 'yes',
      boost: 'no',
      disappear: '20 mins',
      createdAt: '13-August-2020 12:34 AM'
    },
  ]