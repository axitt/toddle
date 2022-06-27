import React, {useState} from 'react';
import { Button, Modal } from 'antd';
import EducationModal from './educationModal';
import ExperienceModal from './experienceModal';
import AchievementModal from './achievementModal';

//tab content and modal
function ModalDisplay ({keyword, education,setEducation,experience,setExperience,achievements,setAchievements}){
    const [modal1Visible, setModal1Visible] = useState(false);
    const [changeData, setChangeData] = useState(false);
    return(
        <>
        <Button className="add-btn" block onClick={() => setModal1Visible(true)} size="large">Add new</Button>

        <Modal
          centered='true'
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
          footer={null}
        >
          {keyword===1?
          <EducationModal education={education} setEducation={setEducation} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData}/>:
           keyword===2?
           <ExperienceModal experience={experience} setExperience={setExperience} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData}/>:
           keyword===3?
           <AchievementModal achievements={achievements} setAchievements={setAchievements} setModal1Visible={setModal1Visible} changeData={changeData} setChangeData={setChangeData}/>:null
        }
        </Modal>
    </>
    )


}

export default ModalDisplay;