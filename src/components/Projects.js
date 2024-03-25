import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import teamifyImg from "../assets/img/Teamify.webp";
import hitlistImg from "../assets/img/Hitlist.webp";
import carcapsuleImg from "../assets/img/CarCapsule.webp"
import museImg from "../assets/img/Muse.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hitlist",
      description: "Created with HTML, CSS and JavaScript",
      imgUrl: hitlistImg,
      githubLink: "https://github.com/kcastillo3/phase1_project",
    },
    {
      title: "Muse",
      description: "Created with React",
      imgUrl: museImg,
      githubLink: "https://github.com/kcastillo3/phase2-project",
    },
    {
      title: "Teamify",
      description: "Created with Python",
      imgUrl: teamifyImg,
      githubLink: "https://github.com/kcastillo3/Teamify-Phase3-Project",
    },
    {
      title: "Car Capsule Museum",
      description: "Created with Flask SQLAlchemy and React",
      imgUrl: carcapsuleImg,
      githubLink: "https://github.com/kcastillo3/phase-4-carcapsule-museum",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In the projects section, you'll see a progression of my skills, starting from basic web applications to more complex systems that incorporate a range of technologies and approaches. Each project reflects a step in my learning journey, demonstrating how I've tackled new challenges and incorporated feedback to improve. You'll notice an evolution in the complexity of the projects and the sophistication of the solutions, showcasing a growing understanding of both front-end and back-end development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-End Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back-End Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Fullstack Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.filter(project => project.title === "Hitlist" || project.title === "Muse").map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.filter(project => project.title === "Teamify").map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.filter(project => project.title === "Car Capsule Museum").map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
                      }
