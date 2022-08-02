
import React from "react";
import { Card, Col, Row } from 'antd';
import '../Sidebar/sidebar';

import './content.css'
import "antd/dist/antd.css";
import { Layout } from "antd";
import ViewDetails from './ViewDetails';
import { useState } from 'react';

// import '../Dashboard/dashboard'



const { Content } = Layout;



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

  return (
    
      <Content className="content_body" >

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
              
              <ViewDetails 
                        refresh={props.refresh}
                        id={props.id}
                        title={props.title}
                        cardImage={props.cardImage}
                        description={props.description}
                        card1paragraph={props.card1paragraph}
                        card2paragraph={props.card2paragraph}
                        />
            </div>
            
          </Card>
        </div>
      
      </Col>

      </Row>
      </Content>
);
}
export default Content1;