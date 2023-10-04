import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ultimate Travel"
              description="This is basically Client Based Project In this project client wants to have a website specially for Tourism in Australia and through this website customers can pick locations they want and book amazing trips and much more through this website. I made this website with Php laravel stack."
              demoLink="https://www.ultimate.travel/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shop At Meme"
              description="This is basically client-based E-commerce website. This website is built-on Shopify Store. In this website different types of cloth selling."
              demoLink="https://shopatmeme.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Carsome Website"
              description="Carsome is a Malaysian-based online platform for buying and selling used cars and it is also client based project through this website and this was built-on shopify store"
              demoLink="https://www.carsome.my/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Kayak Website"
              description="This is basically E-Commerce website in which I provided the solution of travelling , expenses and all kinds of facilities provided by the restaurants and much more things. This website is basically built on MERN stack."
              demoLink="https://www.kayak.com/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Custom Website Agency"
              description="This Website is basically client-based website in this website Client sells software services to the customers. This website is made by using MERN stack."
              ghLink="https://github.com/ABDULQUDDOS-12/Custom-Website-Agency-Website"
              demoLink="https://company-portfolio-website-beta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pro Sales Tech Company Website"
              description="This is basically clients website In this website he offers different services through the website. This website is made by using MERN stack"
              ghLink="https://github.com/ABDULQUDDOS-12/company-project"
              demoLink="https://www.prosalestech.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
