import React, {useState} from "react";
import About from "../component/about";
import FillAbout from "../component/fillAbout";
import Nav from "../component/nav";
import TabBar from "../component/tabBar";

function MainContainer(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [shortbio, setShortBio] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showform, setShowForm] = useState(true);
    const [edit, setEdit] = useState(true);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [achievements, setAchievements] = useState([]);

    //3 section divison
    return(
        <>
        {/** Navbar */}
        <Nav name={name} email={email} shortbio={shortbio} setName={setName} setEmail={setEmail} setShortBio={setShortBio} showform={showform} setShowForm={setShowForm} selectedImage={selectedImage} setSelectedImage={setSelectedImage} edit={edit} setEdit={setEdit} education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} achievements={achievements} setAchievements={setAchievements}/>

        {/** About Section */}
        {
           name===''||email===''||shortbio===''||selectedImage===null||showform===true||edit===true?
              <FillAbout name={name} email={email} shortbio={shortbio} setName={setName} setEmail={setEmail} setShortBio={setShortBio} showform={showform} setShowForm={setShowForm} selectedImage={selectedImage} setSelectedImage={setSelectedImage} edit={edit} setEdit={setEdit}/>
              :
              <About name={name} email={email} shortbio={shortbio} setName={setName} setEmail={setEmail} setShortBio={setShortBio} showform={showform} setShowForm={setShowForm} selectedImage={selectedImage} setSelectedImage={setSelectedImage} edit={edit} setEdit={setEdit}/>
        }

        {/** Tab Section */}
        <TabBar education={education} setEducation={setEducation} experience={experience} setExperience={setExperience} achievements={achievements} setAchievements={setAchievements}/>
        </>
    )
}

export default MainContainer;