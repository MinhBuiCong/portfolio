import React from "react";
import { ProjectData } from "../../data/projectData";
import Projects from "./projects";

function ProjectPage() {
  const projectInfo = ProjectData;

  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      {projectInfo.map(function (data) {
        return <Projects key={data.id} data={data} />;
      })}
    </div>
  );
}
export default ProjectPage;
