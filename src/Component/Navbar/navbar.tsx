
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Input , Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './Navbar.css'
import { Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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



function Navbar() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [empdesignation, setEmployeeDesignation] = useState('');
  const [employeedetails, setEmployeeDetails] = useState('');

  const showModal = () =>{
    setIsModalVisible(true);
  }

  const handleOk = () => {
    let payload =[{
      name:employeeName,
      designation:empdesignation,
      employedetails:employeedetails
    }]
     console.log(payload);
    //  useEffect(() => {
    //   localStorage.setItem('items', JSON.stringify(payload));
    // }, [payload]);
    localStorage.setItem('Employee Name', employeeName);
    localStorage.setItem('Employee Designation', empdesignation);
    localStorage.setItem('Employee Details', employeedetails);
    setEmployeeName('');
    setEmployeeDesignation('');
    setEmployeeDetails('');
    setIsModalVisible(false); 
  };

  // const handleOk = () =>{
  //   setIsModalVisible(false);
  // }

  const handleCancel = () =>{
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

  const [value, setValue] = useState('');




  return (
    <div className='topnav' >
      
      <h2 className='workflow' >Workflows</h2>
      <Input className='search' placeholder='search a workflow' 
        prefix={<SearchOutlined />}></Input>
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
              </Upload>

            </div>
            <div className='modal_label' >

                   <p>Employee Name</p>
                   <p>Designation</p>
                   <p>Employee Details</p>
                    

                {/* <label className='label1' >Employee name</label>           
                <label className='label1' >Designation name</label>
                <label className='label1' >Employee details</label> */}
                

            </div>
            <div className='modal_input' >

            <input className='input_name'  ></input>
            <input className='input_desig' ></input>
            <TextArea
              value={value}
              onChange={e => setValue(e.target.value)}
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