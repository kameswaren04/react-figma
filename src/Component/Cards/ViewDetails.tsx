
import React, { useState } from 'react'
import { Col, Row, Modal, Input, Button } from "antd";

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

function Viewdetails(props:cardDetailsProps) {

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
    <div>
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
  )
}

export default Viewdetails