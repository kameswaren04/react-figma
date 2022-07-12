import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'
import '../Navbar/Navbar.css'
import '../Dashboard/dashboard.css'
import '../Sidebar/sidebar.css'
import { Layout } from 'antd'



function dashboard() {
  return (
    <Layout>
      <Sidebar/>
         <Layout>
              <Navbar/ >       
              <Body/>
         </Layout>

    </Layout>
   
        
        
        
    
    
    
  )
}

export default dashboard