import React from "react";
import { Col, Row, Button, Divider } from 'antd';
import { about, educationList, experienceList, achievementList, data} from "../utils/data";
import ResumeLogo from '../assets/icon/ClipboardOutlined.svg'

function Nav({name,email,shortbio,setName,setEmail,setShortBio,showform,setShowForm,selectedImage,setSelectedImage,edit,setEdit,education,setEducation,experience,setExperience,achievements,setAchievements}){

  // Download json
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

    return(
        <div className="nav">
                <Row>
                  <Col span={6}>
                  <img src={ResumeLogo} alt="First slide"/>
                  <span className="logo"> Resume Builder</span>
                  </Col>
                  <Col span={18}>
                    <span className="nav-cta">
                          <Button className="import-btn" onClick={()=>{setName(about.name);setEmail(about.email);setShortBio(about.shortbio);setSelectedImage(about.selectedImage);setShowForm(false);setEdit(false); setEducation(educationList);setExperience(experienceList); setAchievements(achievementList)}} type="text">
                            Import
                          </Button>
                          <Button className="export-btn" onClick={exportData} type="text">
                            Export
                          </Button>
                    </span>
                  </Col>
                </Row>
        </div>
    )
}

export default Nav;