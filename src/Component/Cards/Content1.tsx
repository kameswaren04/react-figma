// import './Card.css';
import React from "react";
import { Card, Col, Row, Button} from 'antd';

import '../Sidebar/sidebar';
// import '../Body/Body'
import './content.css'
import "antd/dist/antd.css";
import { Layout, Input } from "antd";
// import './CardMap'
import { useState } from 'react';
import { Modal } from 'antd';
// import '../Dashboard/dashboard'



const { Content } = Layout;

const { TextArea } = Input;

type cardDetailsProps = {
  id?: any,
  title?: string,
  cardImage?: string,
  description?: string,
  card1paragraph?: string,
  card2paragraph?: string,
  refresh?:any
}

const Content1 = (props:cardDetailsProps) => {

  const [isActive,setIsActive] = useState(true);
  function cardChange () {
    setIsActive(current => !current);
  }


    //delete card
    const deleteCard = () =>{
      
      let employeeDetail =JSON.parse(`${localStorage.getItem('employeeDetail')}`);
      for(let index = 0; index<employeeDetail.length; index++){
        if(props.id === employeeDetail[index].id){
          employeeDetail = [
            ...employeeDetail.slice(0, index),
            ...employeeDetail.slice(index+1)
          ];
        }
      }
      
      localStorage.setItem("employeeDetail", JSON.stringify(employeeDetail));
      
      props.refresh();        
    }


  // const deleteCard = (id) =>{
    
  //   let items =JSON.parse(`${localStorage.getItem('employeeDetail')}`);
    
    
  //   items.splice(id,1);
  //   localStorage.setItem("employeeDetail", JSON.stringify(items));
    
  //   // props.refresh();
          
  // }




  const [isModalVisible,setIsModalVisible] = useState(false);
  


  const showModal = () => {
    console.log('hi');
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const [employeeName, setEmployeeName] = useState(props.title);
  const [empdesignation, setEmployeeDesignation] = useState(props.description);
  const [employeedetails, setEmployeeDetails] = useState(props.card1paragraph);

  const handleEdit = () => {
    
    let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail')}`);
    let data= employeeDetail && employeeDetail.map((value:any) =>{
      if(props.title === value.title && props.description === value.description && props.card1paragraph === value.card1paragraph){
       
        return{
            ...value,
            title:employeeName,
            description:empdesignation,
            card1paragraph:employeedetails
          }
      }
      return value;
    })
    localStorage.setItem('employeeDetail', JSON.stringify(data));
    setIsModalVisible(false); 
  
  }


  return (
    
<Layout >

<Row >
<Col className="gutter-row" span={24}>
  <div >
    <Card className="maincard">
      <div className={isActive ? "card1" : "card2"} onMouseEnter ={cardChange} >
        <Row className='card_alone' >
          <Col span={6}>
            <img src='../image/icon1.png'  className="cardImg" /> 
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
        <button className='card2btn1'  onClick={deleteCard} >Delete</button>
        <button className='card2btn2'  onClick={showModal}  >view details</button>

        <Modal title="Basic Modal" footer={null} className='viewbutton' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Row>
              <Col span={6}>
                <img src='../image/icon1.png' className="cardImg" /> 
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
              <Input type="hidden" value={props.id} />
              <input className='input_details_name' value={employeeName} onChange={(value:any)=>setEmployeeName(value.target.value)}  ></input> 
              <input className='input_details_name' value={empdesignation} onChange={(value:any)=>setEmployeeDesignation(value.target.value)} ></input>
      
              <TextArea
              className='input_details_name'
                  value={employeedetails}
                  onChange={(value:any)=>setEmployeeDetails(value.target.value)}
                  placeholder="details"
                  autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Col>
            


          </Row>

          <Col>
                      <Button  className="popupbtn" onClick={handleEdit}>Edit</Button>
                      <Button className="popupdelbtn" onClick={handleCancel}>Cancel</Button>
            </Col>
        
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