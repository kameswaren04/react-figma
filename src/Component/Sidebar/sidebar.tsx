import React from "react";
import "antd/dist/antd.less";
import { Layout, Menu } from "antd";
import "./sidebar.css";
import 'antd/dist/antd.css';

import Images from './ImagePath';
// import img1 from '../../../public/Image/icon1.png';
// import img2 from '../../../public/Image/L2.png';
// import img3 from '../../../public/Image/L3.png';
// import img4 from '../../../public/Image/L4.png';
// import img5 from '../../../public/Image/L5.png';
// import img6 from '../../../public/Image/L6.png';
// import img7 from '../../../public/Image/L7.png';
// import img8 from '../../../public/Image/L8.png';
// import img9 from '../../../public/Image/L9.png';
// import "./Image/L1.png"
// import img1 from '../Image/L1.png';
// import img2 from '../Image/L2.png';
// import img3 from '../Image/L3.png';
// import img4 from '../Sidebar/Image/L4.png';
// import img5 from './Image/L5.png';
// import img6 from './Image/L6.png';
// import img7 from './Image/L7.png';
// import img8 from './Image/L8.png';
// import img9 from './Image/L9.png';


const { Sider } = Layout;

function sidebar() {
  return(
    <div>
    
    <Sider  className="sidebar" >
      <div className="logo" >      
        <img src={Images.img1} />
      </div>

      <Menu className="middle" >
        <Menu.Item>
          <img src={Images.img2} />
        </Menu.Item>
        <Menu.Item>
          <img src={Images.img3} />
        </Menu.Item>
        <Menu.Item>
          <img src={Images.img4} />
        </Menu.Item>
        <Menu.Item>
          <img src={Images.img5} />
        </Menu.Item>
        <Menu.Item>
          <img src={Images.img6} />
        </Menu.Item>
      </Menu>
      <div className="bottom" >
          <img src={Images.img7} />
          <img src={Images.img8} />
          <img src={Images.img9} />
          
      </div>
      
    </Sider>
    
  </div>
    
  )
  
}

export default sidebar