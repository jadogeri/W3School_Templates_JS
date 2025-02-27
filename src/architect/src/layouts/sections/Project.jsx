import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const Project = () => {
  return (
    <>
        <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                Projects
            </h3>
        </div>
        <div className="w3-row-padding">
            <ProjectCard       
                title="Summer House" src="https://www.w3schools.com/w3images/house5.jpg"
                alt="House" width="100%"
            />
            <ProjectCard       
                title="Brick House" src="https://www.w3schools.com/w3images/house2.jpg"
                alt="House" width="100%"
            />
            <ProjectCard       
                title="Renovated" src="https://www.w3schools.com/w3images/house3.jpg"
                alt="House"  width= "100%" 
            />
            <ProjectCard       
                title="Barn House" src="https://www.w3schools.com/w3images/house4.jpg"
                alt="House" width="100%"
            />
        </div>
        <div className="w3-row-padding">
            <ProjectCard       
                title="Summer House"  src="https://www.w3schools.com/w3images/house2.jpg"
                alt="House" width= "99%" 
            />
            <ProjectCard       
                title="Brick House" src="https://www.w3schools.com/w3images/house5.jpg"
                alt="House" width= "99%" 
            />
            <ProjectCard       
                title="Renovated"  src="https://www.w3schools.com/w3images/house4.jpg"
                alt="House" width= "99%"
            />
            <ProjectCard       
                    title="Barn House"  src="https://www.w3schools.com/w3images/house3.jpg"
                    alt="House"  width= "99%" 
            />
        </div>
      
    </>
  );
}

export default Project;
