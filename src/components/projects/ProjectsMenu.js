import {React, useContext} from 'react';
import { SelfProjects as PROJECTS }  from '../../commons/masterData/masterData';
import './projects.css';
import { ProjectContext } from '../../store/projects-context';

export default function ProjectsMenu() {

    const {selectedProjectId,handleProjectSelection} = useContext(ProjectContext)
  return (
    <div className="project_menu ">
       {
        PROJECTS.reverse().map(element => 
            <div key={"project"+element.id} className= {element.id == selectedProjectId ? "project_menu_item active":"project_menu_item"} onClick={()=>handleProjectSelection(element.id)}>
                {element.title} 
            </div> )
       }

    </div>
  )
}
