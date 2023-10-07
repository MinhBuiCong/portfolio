import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Projects({ data }) {
  const { id, title, shortDescription, gitLink } = data;
  return (
    <a href={gitLink} key={id} className="card-link" state={{ data: data }}>
      <Card className="card-container" key={id}>
        <Card.Body className="card-text-container">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-description">{shortDescription}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
Projects.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
  }),
};
export default Projects;
