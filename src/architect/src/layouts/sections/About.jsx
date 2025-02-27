import React from 'react';
import AboutCard from '../../components/AboutCard';

const About = () => {
  return (
    <>
        <div className="w3-container w3-padding-32" id="about">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                About
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="w3-row-padding w3-grayscale">
            <AboutCard
                src="https://www.w3schools.com/w3images/team2.jpg" alt="John" name="John Doe"
                title="CEO &amp; Founder" description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            />
            <AboutCard
                src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" name="Jane Doe"
                title="Architect"  description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            />
            <AboutCard
                src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike"  name="Mike Ross"
                title="Architect"  description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            />
            <AboutCard
                src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan"  name="Dan Star"
                title="Architect" description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            />
        </div>
      
    </>
  );
}

export default About;
