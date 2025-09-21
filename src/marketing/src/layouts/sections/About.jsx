import React from 'react'
import Team from '../../components/Team'

const About = () => {
  return (
    <section>
            <div className="w3-row-padding" id="about">
      <div className="w3-center w3-padding-64">
        <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
          Who We Are
        </span>
      </div>
      
      <Team src="https://www.w3schools.com/w3images/team1.jpg" alt="John" 
            name="Jane Doe" title="CEO & Founder" message="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum."
      />
      <Team src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike"  name="Mike Ross"
            title="Art Director" message="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum."
         />
      <Team src="https://www.w3schools.com/w3images/team3.jpg" alt="Jane"  name="John Doe"
            title="Designer" message="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum."           
        />
    </div>
    </section>
  )
}

export default About