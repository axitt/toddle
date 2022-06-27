import React from 'react';
import { Button, Modal, Form, Input, Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';

const { TextArea } = Input;

//modal content
function ExperienceModal({experience,setExperience,setModal1Visible,changeData,setChangeData,idx}) {
    const [company, setCompany] = useState(changeData?experience[idx].company:'');
    const [roles, setRoles] = useState(changeData?experience[idx].roles:'');
    const [sdate, setSdate] = useState(changeData?experience[idx].sdate:'');
    const [edate, setEdate] = useState(changeData?experience[idx].edate:'');
    const [description, setDescription] = useState(changeData?experience[idx].description:'');
    const [handle, setHandle] = useState(false);
    const onChange1 = (date, dateString) => {
        setSdate(dateString);
      };
    const onChange2 = (date, dateString) => {
      setEdate(dateString);
    };
  return (
    <>
        <div className="modal-head" style={{padding:'0 5px'}}>Add new experience</div><br/>
        <div>
        <Form layout="vertical" style={{padding:'0 5px'}}>
                <Form.Item label="Company" validateStatus={handle && company.length<1?"error":""} className="label-font">
                    <Input value={company} onChange={e => {setCompany(e.target.value)}}/>
                </Form.Item>
                <Form.Item label="Role" validateStatus={handle && roles.length<1?"error":""} className="label-font">
                   <Input value={roles} onChange={e => {setRoles(e.target.value)}}/>
                </Form.Item>
                <Row>
                    <Col span={11}>
                        <Form.Item label="Start date" validateStatus={handle && sdate.length<1?"error":""} className="label-font">
                           <DatePicker value={sdate !== "" ? moment(sdate) : null} onChange={onChange1} style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={11} offset={2}>
                        <Form.Item label="End date" validateStatus={handle && edate.length<1?"error":""} className="label-font">
                           <DatePicker value={edate !== "" ? moment(edate) : null} onChange={onChange2} style={{width:'100%'}}/> 
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Description" validateStatus={handle && description.length<1?"error":""} className="label-font">
                    <TextArea autoSize={{ minRows: 5, maxRows: 5 }} value={description} onChange={e => {setDescription(e.target.value)}}/>
                </Form.Item>

                <Row>
                    <Col>
                    {/**Adding or Updating */}
                    {!changeData?
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(company.length>0 && roles.length>0 && sdate.length>0 && edate.length>0 && description.length>0){setExperience(experience => [...experience,{company:company, roles:roles, sdate: sdate, edate:edate, description:description}]);setCompany('');setRoles('');setSdate('');setEdate('');setDescription('');setHandle(false);setModal1Visible(false);}}}>Save</Button>:
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(company.length>0 && roles.length>0 && sdate.length>0 && edate.length>0 && description.length>0){setExperience(experience.map((exp,index)=>index===idx?{...exp,company:company, roles:roles, sdate: sdate, edate:edate, description:description}:{...exp}));setHandle(false);setModal1Visible(false);setChangeData(false);}}}>Update</Button>
                        }
                    </Col>
                    <Col offset={1}>
                       <Button className="edit-btn" onClick={ () => setModal1Visible(false)}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </>
  );
};

export default ExperienceModal;