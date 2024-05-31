"use client";
import { Card, Img, Container, Info } from "../general-css/GeneralStyles";
import { useEffect, useState } from "react";
import { Project } from "../../types/types";

export default function projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Tidigare Projekt</h1>
        <p>Här kan man se några av de projekt jag tidigare gjort</p>
        {projects !== null &&
          projects.map((project: Project) => (
            <Card key={project.project_id}>
              <h2>{project.name}</h2>
              <Img
                src={`http://localhost:8080${project.image}`}
                alt="bild på projektet"
              />
              <Info>{project.description}</Info>
            </Card>
          ))}
      </Container>
    </>
  );
}
