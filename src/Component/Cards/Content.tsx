// import './Card.css';
import { Card, Col, Row } from 'antd';
import React from "react";
import '../Sidebar/sidebar';
import "antd/dist/antd.css";
import { Layout } from "antd";
import './CardMap'
import { useState } from 'react';

const { Content } = Layout;

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

  return (
      
<Layout style={{ margin: "30px 10px" }}>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
        <button className='card2btn' >view details</button>
      </div>
      
    </Card>
  </div>
 
</Col>

</Row>
</Layout>
);
}
export default Content1;