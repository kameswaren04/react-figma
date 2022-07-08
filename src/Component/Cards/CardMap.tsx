import React from 'react'
import cardDetails from './CardData';
//import { Card } from 'antd';
import '../Sidebar/sidebar';
import Content1 from './Content';

const CardMap = () => {
  return (
    <div>
        {cardDetails.map((card,id) => {
            console.log(card.title);
            return(
                <Content1 
                    title={card.title}
                    cardImage={card.cardImage}
                    description={card.description}
                    card1paragraph={card.card1paragraph}
                    card2paragraph={card.card2paragraph}
                />
            )
        })}
    </div>
  )
}

export default CardMap;