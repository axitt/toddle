import React from 'react';
import { Button, Modal, Form, Input, Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';

const { TextArea } = Input;

//modal content
function EducationModal({education,setEducation,setModal1Visible,changeData,setChangeData,idx,setIdx}) {
    const [institute, setInstitute] = useState(changeData?education[idx].institute:'');
    const [degree, setDegree] = useState(()=>changeData?education[idx].degree:'');
    const [sdate, setSdate] = useState(()=>changeData?education[idx].sdate:'');
    const [edate, setEdate] = useState(()=>changeData?education[idx].edate:'');
    const [description, setDescription] = useState(()=>changeData?education[idx].description:'');
    const [handle, setHandle] = useState(false);
    const onChange1 = (date, dateString) => {
        setSdate(dateString);
      };
    const onChange2 = (date, dateString) => {
      setEdate(dateString);
    };
  return (
    <>
        <div className="modal-head" style={{padding:'0 5px'}}>Add new education</div><br/>
        <div>
            <Form layout="vertical" style={{padding:'0 5px'}}>
                <Form.Item label="Institute" validateStatus={handle && institute.length<1?"error":""} className="label-font">
                    <Input value={institute} onChange={e => {setInstitute(e.target.value)}}/>
                </Form.Item>
                <Form.Item label="Degree" validateStatus={handle && degree.length<1?"error":""} className="label-font">
                   <Input value={degree} onChange={e => {setDegree(e.target.value)}}/>
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
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(institute.length>0 && degree.length>0 && sdate.length>0 && edate.length>0 && description.length>0){setEducation(education => [...education,{institute:institute, degree:degree, sdate: sdate, edate:edate, description:description}]);setInstitute('');setDegree('');setSdate('');setEdate('');setDescription('');setHandle(false);setModal1Visible(false);}}}>Save</Button>:
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(institute.length>0 && degree.length>0 && sdate.length>0 && edate.length>0 && description.length>0){setEducation(education.map((edu,index)=>index===idx?{...edu,institute:institute, degree:degree ,sdate:sdate, edate:edate, description:description}:{...edu}));setHandle(false);setModal1Visible(false);setChangeData(false);setIdx();}}}>Update</Button>
                        }
                    </Col>
                    <Col offset={1}>
                       <Button htmlType="submit" className="edit-btn" onClick={ () => setModal1Visible(false)}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </>
  );
};

export default EducationModal;