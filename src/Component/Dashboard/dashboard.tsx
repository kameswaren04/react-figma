// import React from "react";
import React , { useEffect, useState } from "react"; 
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/Navbar';

import '../Navbar/Navbar.css'
import '../Dashboard/dashboard.css'
import '../Sidebar/sidebar.css'
import { Layout } from 'antd'
import Content1 from '../Cards/Content1';


// const { Content } = Layout;


function Dashboard() {


  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
    setCardData(employeeDetail);
    setLoading(false);
  },[loading])

  const refresh = ()=>{
    setLoading(true);
  }

  return (
    <Layout className="full_body" >
      <div className="side_body" >
          <Sidebar />
      </div>
      
      <div className='body_content' >
          <Navbar refresh={refresh} />   
                      <div className="cards" >
            
                        {cardData.map((card: any) => 
                                                 
                          <Content1
                                
                                id={card.id}
                                title={card.title}
                                cardImage={card.cardImage}
                                description={card.description}
                                card1paragraph={card.card1paragraph}
                                card2paragraph={card.card2paragraph}
                                refresh={refresh}
                            />
                
                            )}
                      </div>



          </div>
      
         {/* <Layout className='body_content' >
             

              
         </Layout> */}

    </Layout>
   
    
  )
}

export default Dashboard