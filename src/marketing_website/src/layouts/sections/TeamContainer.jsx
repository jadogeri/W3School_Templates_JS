import React from 'react'
import TeamMember from '../../components/TeamMember'

const TeamContainer = () => {
  return (
    <section>
          <div className="w3-container w3-padding-64 w3-center" id="team">
    <h2>OUR TEAM</h2>
    <p>Meet the team - our office rats:</p>
    <div className="w3-row">
      <br />
      <TeamMember
        src="https://www.w3schools.com/w3images/avatar.jpg"
        alt="Boss" name="Johnny Walker" title="Web Designer"
      />
      <TeamMember
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Boss" name="Rebecca Flex"  title="Support"
       />
      <TeamMember
        src="https://www.w3schools.com/w3images/avatar.jpg"
        alt="Boss" name="Jan Ringo" title="Boss man"
      />
      <TeamMember
        src="https://www.w3schools.com/w3images/avatar.jpg"
        alt="Boss"  name="Kai Ringo" title="Fixer"
      />
    </div>
  </div>
    </section>
  )
}

export default TeamContainer