import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { Collapse, Space, Typography, Row, Col, Button, Modal } from 'antd';
import EducationModal from './educationModal';
import ExperienceModal from './experienceModal';
import AchievementModal from './achievementModal';
import CaretRightFilled from '../assets/icon/CaretRightFilled.svg';
import CaretDownFilled from '../assets/icon/CaretDownFilled.svg';
const { Text, Link } = Typography;

const { Panel } = Collapse;

//collapse content for array list data - education
export function CollapseBar1({education,setEducation}){
  const handleDelete = (index) =>{
    const items = education.filter(item => item.institute !== index);
    setEducation(education=>items);
  }
  const [modal1Visible, setModal1Visible] = useState(false);
  const [changeData, setChangeData] = useState(false);
  const [idx,setIdx] = useState(0);

  useEffect(() => {
    setIdx(idx)
  },[idx]);

    return(
        <>
    <Collapse
    bordered={false}
    className="site-collapse-custom-collapse"
    expandIcon={({ isActive }) => <span>{isActive?<img src={CaretDownFilled} alt="arrow"/>:<img src={CaretRightFilled} alt="arrow"/>}</span>}
    >
      {
        (education.length>0)? education.map((edu,index) => (
          <Panel header={edu.institute} key={index} className="site-collapse-custom-panel" extra={<Text type="secondary">{moment(edu.sdate).format('MMM YYYY')} - {moment(edu.edate).format('MMM YYYY')}</Text>}>
            <p className="tab-content-font1">Degree</p>
            <p className="tab-content-font2">{edu.degree}</p>
            <p className="tab-content-font1">Description</p>
            <div className="tab-content-font3">{edu.description}</div><br/>
            <Row>
              <Col>
                  <Button value={index} className="edit-btn" onClick={()=> {setIdx(index);setChangeData(true);setModal1Visible(true);}}>Edit</Button>
              </Col>
              <Col offset={1}>
                  <Button className="edit-btn" onClick={()=>handleDelete(edu.institute)}>Delete</Button>
              </Col>
            </Row>
            <Modal
                    centered='true'
                    visible={modal1Visible}
                    onOk={() => setModal1Visible(false)}
                    onCancel={() => setModal1Visible(false)}
                    footer={null}
                  >
                    
                    <EducationModal education={education} setEducation={setEducation} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData} idx={idx} setIdx={setIdx}/>:
                     
            </Modal>
          </Panel>
        )):null
      }
  </Collapse>
  <br/>
        </>
    )
}

//collapse content for array list data - experience
export function CollapseBar2({experience, setExperience}){
  const handleDelete = (index) =>{
    const items = experience.filter(item => item.company !== index);
    setExperience(experience=>items);
  }
  const [modal1Visible, setModal1Visible] = useState(false);
  const [changeData, setChangeData] = useState(false);
  const [idx,setIdx] = useState();
    return(
        <>
     <Collapse
    bordered={false}
    className="site-collapse-custom-collapse"
    expandIcon={({ isActive }) => <span>{isActive?<img src={CaretDownFilled} alt="arrow"/>:<img src={CaretRightFilled} alt="arrow"/>}</span>}
    >
      {
        (experience.length>0)? experience.map((exp,index) => (
          <Panel header={exp.company} key={index} className="site-collapse-custom-panel" extra={<Text type="secondary">{moment(exp.sdate).format('MMM YYYY')} - {moment(exp.edate).format('MMM YYYY')}</Text>}>
            <p className="tab-content-font1">Role</p>
            <p className="tab-content-font2">{exp.roles}</p>
            <p className="tab-content-font1">Description</p>
            <div className="tab-content-font3">{exp.description}</div><br/>
            <Row>
              <Col>
                  <Button className="edit-btn" onClick={()=> {setChangeData(true);setModal1Visible(true);setIdx(index);}}>Edit</Button>
              </Col>
              <Col offset={1}>
                  <Button className="edit-btn" onClick={()=>handleDelete(exp.company)}>Delete</Button>
              </Col>
            </Row>
            <Modal
                    centered='true'
                    visible={modal1Visible}
                    onOk={() => setModal1Visible(false)}
                    onCancel={() => setModal1Visible(false)}
                    footer={null}
                  >
                  <ExperienceModal experience={experience} setExperience={setExperience} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData} idx={idx}/>                     
            </Modal>
          </Panel>
        )):null
      }
  </Collapse>
  <br/>
        </>
    )
}

//collapse content for array list data - achievements
export function CollapseBar3({achievements, setAchievements}){
  const handleDelete = (index) =>{
    const items = achievements.filter(achievements => achievements.title !== index);
    setAchievements(achievements=>items);
  }
  const [modal1Visible, setModal1Visible] = useState(false);
  const [changeData, setChangeData] = useState(false);
  const [idx,setIdx] = useState();
    return(
        <>
         <Collapse
    bordered={false}
    className="site-collapse-custom-collapse"
    expandIcon={({ isActive }) => <span>{isActive?<img src={CaretDownFilled} alt="arrow"/>:<img src={CaretRightFilled} alt="arrow"/>}</span>}
    >
      {
        (achievements.length>0)? achievements.map((ach,index) => (
          <Panel header={ach.title} key={index} className="site-collapse-custom-panel" extra={<Text type="secondary">{moment(ach.sdate).format('MMM YYYY')}</Text>}>
            <p className="tab-content-font1">Description</p>
            <div className="tab-content-font3">{ach.description}</div><br/>
            <Row>
              <Col>
                  <Button className="edit-btn" onClick={()=> {setChangeData(true);setModal1Visible(true);setIdx(index);}}>Edit</Button>
              </Col>
              <Col offset={1}>
                  <Button className="edit-btn" onClick={()=>handleDelete(ach.title)}>Delete</Button>
              </Col>
            </Row>
            <Modal
                    centered='true'
                    visible={modal1Visible}
                    onOk={() => setModal1Visible(false)}
                    onCancel={() => setModal1Visible(false)}
                    footer={null}
                  >
                  <AchievementModal achievements={achievements} setAchievements={setAchievements} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData} idx={idx}/>                     
            </Modal>
          </Panel>
        )):null
      }
  </Collapse>
  <br/>
        </>
    )
}
