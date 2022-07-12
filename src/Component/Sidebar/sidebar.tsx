import React from "react";
import "antd/dist/antd.less";
import { Layout, Menu } from "antd";
import "./sidebar.css";
import img1 from "./image/1.png";
import img2 from "./image/2.png";
import img3 from "./image/3.png";
import img4 from "./image/4.png";
import img5 from "./image/5.png";
import img6 from "./image/6.png";
import img7 from "./image/7.png";
import img8 from "./image/8.png";
import img9 from "./image/9.png";
import 'antd/dist/antd.css';

const { Sider } = Layout;

function sidebar() {
  return(
    <div>
    
    <Sider
     
     className="sidebar" >
      <div className="logo" >
       
        <img src={img1} />
      </div>
      <Menu className="middle" >
        <Menu.Item>
          <img src={img2} ></img>
        </Menu.Item>
        <Menu.Item>
          <img src={img3} ></img>
        </Menu.Item>
        <Menu.Item>
          <img src={img4} ></img>
        </Menu.Item>
        <Menu.Item>
          <img src={img5} ></img>
        </Menu.Item>
        <Menu.Item>
          <img src={img6} ></img>
        </Menu.Item>
      </Menu>
      <div className="bottom" >
          <img src={img7} ></img>
          <img src={img8} ></img>
          <img src={img9} ></img>
          
      </div>
      
    </Sider>
    
  </div>
    
  )
  
}

export default sidebar