import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectContainer = ({data}) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map(item => <ProjectCard key={item.name} linkto={item.linkto} imgSrc={item.imgSrc} imgAlt={item.imgAlt} name={item.name} text={item.text} />)}
    </div>
  )
}

export default ProjectContainer