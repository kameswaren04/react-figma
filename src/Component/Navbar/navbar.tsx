import React from 'react'
import { Layout } from "antd";
import SearchBar from './SearchBar';
import CreateWorkflow from './CreateWorkflow';
import './Navbar.css'
import '../Sidebar/sidebar.css'
const { Header } = Layout


function Navbar({refresh, searchCardCallBack}:any) {
  return (
    <div>
      <Header className='topnav' >
            <div>
               <p className="lefthead">Workflow</p>
            </div>
            <div>
               <SearchBar searchCardCallBack={searchCardCallBack} />
            </div>
            <div>
                <CreateWorkflow refresh={refresh} />
            </div>
                
      </Header>
    </div>
  )
}

export default Navbar