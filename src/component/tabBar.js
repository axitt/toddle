import React, {useState} from 'react';
import { Tabs } from 'antd';
import ModalDisplay from './modal';
import {CollapseBar1,CollapseBar2,CollapseBar3} from './collapseBar';
const { TabPane } = Tabs;
//3 tab for navigation
function TabBar({education,setEducation,experience,setExperience,achievements,setAchievements}){
    return(
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab={<span>Education ({education.length})</span>} key="1">
            <div className="tab-section">
                <ModalDisplay keyword={1} education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} achievements={achievements} setAchievements={setAchievements}/>
                <div className="collapse-bar">
                  <CollapseBar1 education={education} setEducation={setEducation}/>
                </div>
            </div>
          </TabPane>
          <TabPane tab={<span>Work Experience ({experience.length})</span>} key="2">
            <div className="tab-section">
                <ModalDisplay keyword={2} education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} achievements={achievements} setAchievements={setAchievements}/>
                <div className="collapse-bar">
                  <CollapseBar2 experience={experience} setExperience={setExperience}/>
                </div>
            </div>
          </TabPane>
          <TabPane tab={<span>Achievements ({achievements.length})</span>} key="3">
            <div className="tab-section">
                <ModalDisplay keyword={3} education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} achievements={achievements} setAchievements={setAchievements}/>
                <div className="collapse-bar">
                  <CollapseBar3 achievements={achievements} setAchievements={setAchievements}/>
                </div>
            </div>
          </TabPane>
        </Tabs>
    )
} 

export default TabBar;