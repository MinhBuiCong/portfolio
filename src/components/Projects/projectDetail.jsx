import { useLocation } from "react-router-dom";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectDetail() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="detail-container">
      <h1 className="detail-title">{data.title}</h1>
      <div
        className="detail-screenshot"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="detail-description-container">
        <div className="detail-duration-container">
          <span className="detail-start-date">
            <strong>Start:</strong> {data.startDate}
          </span>
          <span className="detail-end-date">
            <strong>End:</strong> {data.endDate}
          </span>
        </div>
        <p className="detail-description">{data.description}</p>
        <div className="detail-link-container">
          <a className="detail-link" href={data.gitLink}>
            Github
            <FaGithub className="icon" />
          </a>
          <a className="detail-link" href={data.liveLink}>
            Live site
            <FaGlobe className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
