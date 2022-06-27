import React, {useState, useEffect} from "react";
import { Layout, Row ,Col, Avatar, Button, Upload, Form, Input, message} from 'antd';
import UploadButton from '../assets/icon/UploadOutlined.svg'

const { Content } = Layout;
const { TextArea } = Input;

//email validation
function emailValidation(email){
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!email || regex.test(email) === false){
      return false;
  }
  return true;
}
//----------

function FillAbout({name,email,shortbio,setName,setEmail,setShortBio,showform,setShowForm,selectedImage,setSelectedImage,edit,setEdit}){
  const [handle, setHandle] = useState(false);
  const [emailValidate, setEmailValidate] = useState();
  //image upload
    const props = {
        name: 'file',
        action: 'https://upload.imagekit.io/api/v1/files/upload',
        headers: {
          authorization: 'authorization-text',
        },
      
        onChange(info) {
            setSelectedImage("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
      
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      //---------------
    return(
        <div class="about-section">
            <Row style={{textAlign:'center'}} gutter={[16, 16]}>
              {/** Image Upload */}
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
                    <Avatar style={handle && selectedImage===null?{background:'#F9F9F9',border:'0.5px red solid'}:{background:'#F9F9F9'}} size={{ xs: 120, sm: 120, md: 120, lg: 140, xl: 140, xxl: 140 }}>
                       <Upload {...props} accept="image/*">
                              {selectedImage===null?<span className="upload-btn">
                               <img width="12" height="12" src={UploadButton} alt="First slide"/>
                               Upload Photo
                              </span>: <span className="upload-btn"><img width="12" height="12" src={UploadButton} alt="First slide"/>Uploaded</span>}
                       </Upload>
                    </Avatar>
                </Col>
              {/** input name email shortBio */}
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }}>
                    <Form layout="vertical" style={{padding:'0 5px'}}>
                        <Form.Item label="Name" validateStatus={handle && name.length<1?"error":""}  className="label-font">
                         <Input value={name} onChange={e => {setName(e.target.value);}}/>
                        </Form.Item>
                        <Form.Item label="Email-ID" rules={[{type: 'email', message: 'The input is not valid E-mail!'}]} validateStatus={handle && email.length<1?"error":""} className="label-font">
                         <Input value={email} onChange={e => {setEmail(e.target.value);}}/>
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
                    <Form layout="vertical" style={{padding:'0 10px'}}>
                        <Form.Item label="Short Bio" validateStatus={handle && shortbio.length<1?"error":""} className="label-font">
                        <TextArea autoSize={{ minRows: 5, maxRows: 5 }} value={shortbio} onChange={e => {setShortBio(e.target.value);}}/>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 19 }}>
                <Form style={{padding:'0 5px'}}>
                   <Form.Item>
                       <Button htmlType="submit" className="save-btn" onClick={ () => {setHandle(true); if(name.length>0 && email.length>0 && shortbio.length>0 && selectedImage!==null && emailValidation(email)){setShowForm(false);setHandle(false);setEdit(false);}}}>Save</Button>
                    </Form.Item>
                </Form>
            </Col>

            </Row>
        </div>
    )
}

export default FillAbout;