import Footer from "./layouts/Footer"
import WorkExperience from "./layouts/sections/WorkExperience"
import Education from "./layouts/sections/Education"
import LanguageCard from "./components/LanguageCard"
import SkillCard from "./components/SkillCard"
import InfoCard from "./components/InfoCard"


function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}\n'
    }}
  />
  {/* Page Container */}
  <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
    {/* The Grid */}
    <div className="w3-row-padding">
      {/* Left Column */}
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img
              src="https://www.w3schools.com/w3images/avatar_hat.jpg"
              style={{ width: "100%" }}
              alt="Avatar"
            />
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2>Jane Doe</h2>
            </div>
          </div>
          <div className="w3-container">
            <InfoCard
              icon="fa-briefcase" name="Designer"
            />
            <InfoCard
              icon="fa-home" name="London, UK"
            />
            <InfoCard
              icon="fa-envelope" name="ex@mail.com"
            />
            <InfoCard
              icon="fa-phone" name="1224435534"
            />
            <hr />
            <p className="w3-large">
              <b>
                <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
                Skills
              </b>
            </p>
            <SkillCard 
              name="Adobe Photoshop" width="90%" level="90%"            
            />
            <SkillCard 
              name="Photography" width="80%" level="80%"            
            />
            <SkillCard 
              name="Illustrator" width="75%" level="75%"            
            />
            <SkillCard 
              name="Media" width="50%" level="50%"            
            />

            <br />
            <p className="w3-large w3-text-theme">
              <b>
                <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
                Languages
              </b>
            </p>
            <LanguageCard 
              name="English" width="100%"
            />
            <LanguageCard 
              name="Spanish" width="55%"
            />      
            <LanguageCard 
              name="German" width="25%"
          />
            <br />
          </div>
        </div>
        <br />
        {/* End Left Column */}
      </div>
      {/* Right Column */}
      <div className="w3-twothird">
        <WorkExperience />
        <Education />
  
      
        {/* End Right Column */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Page Container */}
  </div>
  <Footer />

</>

  );
}

export default App;
