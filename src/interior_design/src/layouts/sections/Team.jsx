import React from 'react'
import TeamMember from '../../components/TeamMember'

const Team = () => {
  return (
    <section>
      <div className="w3-row-padding w3-grayscale">
        <TeamMember
          src="https://www.w3schools.com/w3images/team2.jpg" alt="John" 
          name="John Doe" title="CEO & Founder"
          description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum."
          />
        <TeamMember
          src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" 
            name="Jane Doe" title="Designer"
            description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum."
        />
        <TeamMember
           src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" 
           name="Mike Ross" title="Architect"
           description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum."
        />
    </div>
    </section>
  )
}

export default Team