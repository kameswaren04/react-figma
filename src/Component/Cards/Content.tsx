
import { Card, Col, Row } from 'antd';
import React from "react";
import '../Sidebar/sidebar';
import "antd/dist/antd.css";
import { Layout } from "antd";
import './CardMap'

const { Content } = Layout;

type cardDetailsProps = {
  title: string
  cardImage: string
  description: string
  card1paragraph: string
  card2paragraph: string
}

const Content1 = (props:cardDetailsProps) => {
  return (
      
<Layout style={{ margin: "30px 10px" }}>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
<Col className="gutter-row" span={6}>
  <div className="site-card-border-less-wrapper">
    <Card style={{ width: 290, height: 130 }} className="card1">
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
    </Card>
  </div>
 
</Col>

</Row>
</Layout>
);
}
export default Content1;