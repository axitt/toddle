import React, {useState, useEffect} from "react";
import FillAbout from "./fillAbout";
import { Layout, Row ,Col, Avatar, Button, Upload, Form, Input, message} from 'antd';

const { Content } = Layout;
const { TextArea } = Input;

function About({name,email,shortbio,setName,setEmail,setShortBio,showform,setShowForm,selectedImage,setSelectedImage,edit,setEdit}){
    return(
        <div class="about-section">
            {/** display image name email shortBio */}
           <div style={{padding:'0 5px'}}>
              <Row gutter={[16, 16]}>
                  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
                    <Avatar style={{background:'none'}} size={{ xs: 120, sm: 120, md: 120, lg: 140, xl: 140, xxl: 140 }} src={selectedImage} alt="First slide"/>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 19 }}>
                    <div className="about-name">{name}</div>
                    <div className="about-email">{email}</div>
                    <div className="about-bio">{shortbio}</div>
                  </Col>
              </Row>
           </div>

            <br/>
            <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
            </Col>
            {/** Edit Button */}
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 19 }}>
                <Form style={{padding:'2px 4px'}}>
                   <Form.Item>
                       <Button className="edit-btn" onClick={()=>{ setEdit(true) }}>Edit</Button>
                    </Form.Item>
                </Form>
            </Col>

            </Row>
        </div>
    )
}

export default About;