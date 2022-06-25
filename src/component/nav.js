import React from "react";
import { Col, Row, Button, Divider } from 'antd';
import ResumeLogo from '../assets/icon/ClipboardOutlined.svg'

function Nav(){
    return(
        <div className="nav">
                <Row>
                  <Col span={6}>
                  <img src={ResumeLogo} alt="First slide"/>
                  <span className="logo"> Resume Builder</span>
                  </Col>
                  <Col span={18}>
                    <span className="nav-cta">
                          <Button className="import-btn" type="text">
                            Import
                          </Button>
                          <Button className="export-btn" type="text">
                            Export
                          </Button>
                    </span>
                  </Col>
                </Row>
        </div>
    )
}

export default Nav;