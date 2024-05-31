"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Img,
  Container,
  Info,
  OderButton,
} from "../../../components/general-css/GeneralStyles";
import { Project } from "../../../types/types";

export default function viewProject() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchProjects();
  }, []);

  function fetchProjects() {
    fetch("http://localhost:8080/projects")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
      });
  }

  const handleClick = (clickedItem: Project) => {
    axios
      .post("http://localhost:8080/adminDeleteProjects", {
        project_id: clickedItem.project_id,
      })
      .then((response) => {
        setMessage(response.data.message);
        fetchProjects();
      })
      .catch((error) => {
        console.log("det gick inte att ta bort projektet", error);
      });
  };

  return (
    <>
      <Container>
        <h1>Översikt Projekt</h1>
        {message.length > 0 ? <p>{message}</p> : null}
        {projects !== null &&
          projects.map((project: Project) => (
            <Card key={project.project_id}>
              <h2>Namn: {project.name}</h2>
              <Img
                src={`http://localhost:8080${project.image}`}
                alt="bild på projektet"
              />
              <Info>Beskrivning: {project.description}</Info>
              <OderButton
                type="button"
                value="Ta bort projekt"
                onClick={() => {
                  handleClick(project);
                }}
              />
            </Card>
          ))}
      </Container>
    </>
  );
}
