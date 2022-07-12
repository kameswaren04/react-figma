import React from 'react'
import cardDetails from '../Cards/CardData'
import Content from '../Cards/Content'

import "antd/dist/antd.less";
import { Col, Row } from 'antd';

function Body() {
  return (
    <div className="contentGrid">
                {cardDetails.map((card: any) => {
                  //console.log(card.title);
                  return(
                        <Row>
                          <Col span={6}>
                              <Content 
                                  title={card.title}
                                  cardImage={card.cardImage}
                                  description={card.description}
                                  card1paragraph={card.card1paragraph}
                                  card2paragraph={card.card2paragraph}
                              />
                          </Col>
                        </Row>
                        )
                   })}
     </div>
  )
}

export default Body