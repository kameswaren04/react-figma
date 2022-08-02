import React, { useState } from 'react'
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Searchbar({searchCardCallBack}:any) {

     //Search Cards
     const [search, setNewSearch] = useState("");

     const handleSearchChange = (e:any) => {
        setNewSearch(e.target.value);
        let searchValue = e.target.value;
        let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
          if(searchValue.length>2){
            let filteredValue = !searchValue
                    ? employeeDetail
                    : employeeDetail.filter((card:any) =>
                        card.title.toLowerCase().includes(searchValue.toLowerCase())
                        )
          //setFiltered(filteredValue);
          searchCardCallBack(filteredValue);  
          }
        else if(searchValue.length<3){
          searchCardCallBack(employeeDetail);
        }
    }



  return (
    <div>
        <Input className='search' placeholder='search a workflow' onChange={handleSearchChange}
        prefix={<SearchOutlined />}></Input>

          {/* {filtered.map((card:any) => {
                return (
                //    <Content />
                  console.log(card.title)
                );
              })} */}

    </div>
  )
}

export default Searchbar