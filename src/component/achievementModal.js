import React from 'react';
import { Button, Modal, Form, Input, Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';

const { TextArea } = Input;

//modal content
function AchievementModal({achievements,setAchievements, setModal1Visible,changeData,setChangeData,idx,setIdx}) {
    const [title, setTitle] = useState(changeData?achievements[idx].title:'');
    const [sdate, setSdate] = useState(changeData?achievements[idx].sdate:'');
    const [description, setDescription] = useState(changeData?achievements[idx].description:'');
    const [handle, setHandle] = useState(false);
    const onChange1 = (date, dateString) => {
        setSdate(dateString);
      };
  return (
    <>
        <div className="modal-head" style={{padding:'0 5px'}}>Add new achievement</div><br/>
        <div>
            <Form layout="vertical" style={{padding:'0 5px'}}>
                <Form.Item label="Title" validateStatus={handle && title.length<1?"error":""} className="label-font">
                    <Input value={title} onChange={e => {setTitle(e.target.value)}}/>
                </Form.Item>
                <Form.Item label="Date" validateStatus={handle && sdate.length<1?"error":""} className="label-font">
                    <DatePicker value={sdate !== "" ? moment(sdate) : null} onChange={onChange1} style={{width:'100%'}}/>
                </Form.Item>
                <Form.Item label="Description" validateStatus={handle && description.length<1?"error":""} className="label-font">
                    <TextArea autoSize={{ minRows: 5, maxRows: 5 }} value={description} onChange={e => {setDescription(e.target.value)}}/>
                </Form.Item>

                <Row>
                    <Col>
                    {/**Adding or Updating */}
                       {!changeData?
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(title.length>0 && sdate.length>0 && description.length>0){setAchievements(achievements => [...achievements,{title:title, sdate: sdate, description:description}]);setTitle('');setSdate('');setDescription('');setHandle(false);setModal1Visible(false);}}}>Save</Button>:
                       <Button className="save-btn" onClick={ () => {setHandle(true); if(title.length>0 && sdate.length>0 && description.length>0){setAchievements(achievements.map((ach,index)=>index===idx?{...ach,title:title, sdate: sdate, description:description}:{...ach}));setHandle(false);setModal1Visible(false);setChangeData(false);setIdx();}}}>Update</Button>
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

export default AchievementModal;