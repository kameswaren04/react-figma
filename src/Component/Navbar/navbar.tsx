
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Input , Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Navbar.css'
import { Modal } from 'antd';

import { Image } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';


// const { Header } = Layout;
const { TextArea } = Input;


// import Sidebar from '../Sidebar/sidebar';


const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};



function Navbar({refresh}:any) {


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [empdesignation, setEmployeeDesignation] = useState('');
  const [employeedetails, setEmployeeDetails] = useState('');

  const showModal = () =>{
    setIsModalVisible(true);
  }

  const handleOk = () => {

    let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);

    //Generate Id from Data and Time
    const date =new Date()
    const generateId =date.getTime();

    let payload: any ={
      id: generateId,
      title:employeeName,
      // cardImage: employeeImage,
      description:empdesignation,
      card1paragraph:employeedetails,
      card2paragraph: "This workflow is to enable an employee raise his leave request and to get it approved from his"
    }
    employeeDetail.push(payload);
      //  console.log(payload);
       localStorage.setItem('employeeDetail', JSON.stringify(employeeDetail));
      
      setEmployeeName('');
      setEmployeeDesignation('');
      setEmployeeDetails('');
      // setEmployeeImage('');
      setIsModalVisible(false); 
      refresh();
    };
  

  const handleCancel = () =>{
    setEmployeeName('');
    setEmployeeDesignation('');
    setEmployeeDetails('');
    // setEmployeeImage('');
    setIsModalVisible(false);
  }



  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // const [value, setValue] = useState('');



     //Search Cards
     const [search, setNewSearch] = useState("");

     const handleSearchChange = (event:any) => {
         setNewSearch(event.target.value);
     };
 
     let employeeDetail= JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
     const filtered = !search
                     ? employeeDetail
                     : employeeDetail.filter((card:any) =>
                         card.title.toLowerCase().includes(search.toLowerCase())
                         );




  return (
    <div className='topnav' >
      
      <h2 className='workflow' >Workflows</h2>
      <Input className='search' placeholder='search a workflow' onChange={handleSearchChange}
        prefix={<SearchOutlined />}></Input>

          {filtered.map((card:any) => {
                return (
                //    <Content />
                  console.log(card.title)
                );
              })}



      <Button className='btn1' onClick={showModal}  >create workflow</Button>
      

          <Modal  footer={null} title="Setup Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            
            <div className='modal_design' >
            <div>
              <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange} >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              {/* {imageUrl ? <img src={imageUrl} defaultValue={employeeImage} onChange={(value:any)=>setEmployeeImage(imageUrl)} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}

              </Upload>

            </div>
            <div className='modal_label' >

                   <p>Employee Name</p>
                   <p>Designation</p>
                   <p>Employee Details</p>     

            </div>
            <div className='modal_input' >

            <input className='input_name'  value={employeeName} onChange={(value:any)=>setEmployeeName(value.target.value)} ></input>
            <input className='input_desig' value={empdesignation} onChange={(value:any)=>setEmployeeDesignation(value.target.value)} ></input>
            <TextArea
              value={employeedetails}
              onChange={(value:any)=>setEmployeeDetails(value.target.value)}
              // onChange={e => setValue(e.target.value)}
              placeholder="Controlled autosize"
              autoSize={{ minRows: 3, maxRows: 5 }}
              
            />

            </div>
            


            </div>
            <div className='modal_footer' >

                    <Button type="primary" className="footer_save" onClick={handleOk}>Save</Button>
                    <Button className="footer_cancel" onClick={handleCancel}>Cancel</Button>
            </div>

  
          </Modal>
          



      
      
      
        
    </div>
  )
}

export default Navbar