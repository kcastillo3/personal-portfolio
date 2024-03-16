import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx text-center">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="d-flex justify-content-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">View on GitHub</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
