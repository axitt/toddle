import React from "react";
import { Layout, Row ,Col, Avatar, Button, Upload, Form, Input} from 'antd';
import UploadButton from '../assets/icon/UploadOutlined.svg'

const { Content } = Layout;
const { TextArea } = Input;


function FillAbout(){
    return(
        <div class="about-section">
            <Row style={{textAlign:'center'}} gutter={[16, 16]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
                    <Avatar style={{background:'#F9F9F9'}} size={{ xs: 120, sm: 120, md: 120, lg: 140, xl: 140, xxl: 140 }}>
                       <Upload>
                           <span className="upload-btn">
                              <img width="12" height="12" src={UploadButton} alt="First slide"/>
                               Upload Photo
                           </span>
                       </Upload>
                    </Avatar>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }}>
                    <Form layout="vertical" style={{padding:'0 5px'}}>
                        <Form.Item label="Name" className="label-font">
                         <Input />
                        </Form.Item>
                        <Form.Item label="Email-ID" className="label-font">
                         <Input />
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
                    <Form layout="vertical" style={{padding:'0 10px'}}>
                        <Form.Item label="Short Bio" className="label-font">
                        <TextArea autoSize={{ minRows: 5, maxRows: 5 }} />
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
                       <Button className="save-btn">Save</Button>
                    </Form.Item>
                </Form>
            </Col>

            </Row>
        </div>
    )
}

export default FillAbout;