
import React from 'react';
import 'antd/dist/antd.css';
import { Input , Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './navbar.css'
// import Sidebar from '../Sidebar/sidebar';

function navbar() {
  return (
    <div className='topnav' >
      
      <h2 className='workflow' >Workflows</h2>
      <Input className='search' placeholder='search a workflow' 
        prefix={<SearchOutlined />}></Input>
      <Button className='btn1' >create workflow</Button>
      
        
    </div>
  )
}

export default navbar