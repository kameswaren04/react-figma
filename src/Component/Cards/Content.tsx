// import './Card.css';
import { Card, Col, Row } from 'antd';
import React from "react";
import '../Sidebar/sidebar';
import '../Body/Body'
import './content.css'
import "antd/dist/antd.css";
import { Layout, Input } from "antd";
import './CardMap'
import { useState } from 'react';
import { Modal } from 'antd';



const { Content } = Layout;
const { TextArea } = Input;

type cardDetailsProps = {
  title: string
  cardImage: string
  description: string
  card1paragraph: string
  card2paragraph: string
}

const Content1 = (props:cardDetailsProps) => {

  const [isActive,setIsActive] = useState(true);
  function cardChange () {
    setIsActive(current => !current);
  }

  const [isModalVisible,setIsModalVisible] = useState(false);
  const [value, setValue] = useState('');


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    
<Layout >

<Row >
<Col className="gutter-row" span={6}>
  <div >
    <Card style={{ width: 290, height: 130 }} className="maincard">
      <div className={isActive ? "card1" : "card2"} onMouseEnter ={cardChange} >
      <Row>
        <Col span={6}>
          <img src={props.cardImage} className="cardImg" /> 
        </Col>
        <Col span={18}>
          <h3 className="cardTitile">{props.title}</h3>
          <p className="cardPara">{props.description}</p>
          <p className="cardSpan">{props.card1paragraph}</p>
        </Col>
      </Row>

      </div>
      <div className={isActive ? 'card2' : 'card1'} onMouseLeave = {cardChange} >
        <p className='card2para' >{props.card2paragraph}</p>
        <button className='card2btn1'>Delete</button>
        <button className='card2btn2'  onClick={showModal}  >view details</button>

        <Modal title="Basic Modal" className='viewbutton' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Row>
        <Col span={6}>
          <img src={props.cardImage} className="cardImg" /> 
        </Col>
        <Col span={18}>
          <h3 className="viewbutton_head">{props.title}</h3>
          <p className="viewbutton_para">{props.description}</p>
          <p className="viewbutton_secpara">{props.card1paragraph}</p>

          
        </Col>
      </Row>
      <Row className='second_row' >
        <Col  className='label_details' span={8}>
        <label className='label_details_name' >Employee name</label> 
        <br></br>
        <label className='label_details_desig' >Designation</label>
        <br></br>
        <label className='label_details_dt' >Employee details</label>
          
        </Col>
        <Col span={16}>
        
          <input className='input_details_name'  ></input> 
          <input className='input_details_name' ></input>
  
          <TextArea
          className='input_details_name'
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="details"
              autoSize={{ minRows: 3, maxRows: 5 }}
           />
        </Col>


      </Row>
        
      </Modal>

      </div>
      
    </Card>
  </div>
 
</Col>

</Row>
</Layout>
);
}
export default Content1;