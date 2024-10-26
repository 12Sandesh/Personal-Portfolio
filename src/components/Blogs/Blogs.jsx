import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import blog1 from "../../Assets/Blogs/img1.webp";
import blog2 from "../../Assets/Blogs/img2.webp";
import blog3 from "../../Assets/Blogs/img3.webp";
import blog4 from "../../Assets/Blogs/img4.jpg";
import blog5 from "../../Assets/Blogs/img5.webp";
import blog6 from "../../Assets/Blogs/img6.png";

const BlogPage = () => {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my thoughts and learning experiences.
        </p>

        {/* Blog 1 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <h2>Embarking on Computer Science with AI</h2>
            <p>Nov 10, 2023</p>
            <i>The Beginning of a New Path in Computer Science</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              I began my journey into Computer Science in Artificial Intelligence when I did my Bachelor's. Learning about algorithms, programming languages, and how the world of AI works opened my eyes as to how technology could shape the future. From learning about neural networks to understanding machine learning models, I have found that I am fascinated by how these systems can solve real-world problems.
            </p>
          </Col>

          <Col className="col-md-6">
            <img src={blog1} alt="Blog Post" className="blog-img" />
          </Col>
        </Row>

        {/* Blog 2 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <img src={blog2} alt="Blog Post" className="blog-img" />
          </Col>

          <Col className="col-md-6">
            <h2>Becoming a Graphics Designer</h2>
            <p>Dec 2, 2023</p>
            <i>Exploring the World of Visual Communication</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            My interest in design started out of a desire to bring ideas to life visually. While I was learning design principles, typography, and color theory, I found a new way of communicating ideas. Whether it's branding projects, digital illustrations, or enhancing UI designs, shaping these visual experiences has been pretty rewarding.
            </p>
          </Col>
        </Row>

        {/* Blog 3 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <h2> Capturing Moments: Photography</h2>
            <p>Feb 25, 2024</p>
            <i>Discovering Storytelling through a Lens</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            Photography became a natural extension of my design work, allowing me to capture moments and details in a unique way. As I learned more, composition, lighting, and editing soon turned into the creation of visuals that complement my digital designs. Each project then became a canvas on which not only to capture images but to tell stories with them.
            </p>
          </Col>

          <Col className="col-md-6">
            <img src={blog3} alt="Blog Post" className="blog-img" />
          </Col>
        </Row>

        {/* Blog 4 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <img src={blog4} alt="Blog Post" className="blog-img" />
          </Col>

          <Col className="col-md-6">
            <h2>Crafting Stories through Video Editing</h2>
            <p>Mar 11, 2024</p>
            <i>The Art of Moving Images</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            Parallel to photography, I developed a taste for video editing. With the help of Adobe Premiere Pro and Davinci Resolve, I came to know the art of making raw footage into an interesting story. Editing videos taught me that pacing, transitions, and emotional expression are effective with sound and visuals.
            </p>
          </Col>
        </Row>

        {/* Blog 5 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <h2>Building Worlds: Game Development</h2>
            <p>Mar 25, 2024 </p>
            <i>Combining Creativity with Interactivity</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            My interest in game development grew through a love of interactive media. I started with simple game engines and created basic games to learn character design, world-building, and how to code interactive mechanics. Game development has allowed me to merge these skills I've learned in coding, design, and storytelling in really exciting and complex ways.
            </p>
          </Col>

          <Col className="col-md-6">
            <img src={blog5} alt="Blog Post" className="blog-img" />
          </Col>
        </Row>

        {/* Blog 6 */}
        <Row className="container my-5 row align-items-center">
          <Col className="col-md-6">
            <img src={blog6} alt="Blog Post" className="blog-img" />
          </Col>

          <Col className="col-md-6">
            <h2>Future Vision: Merging Skills for Impact</h2>
            <p>Sept 30, 2024</p>
            <i>Towards a Future of Innovation</i>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            My journey is about learning continuously and mixing technology with creativity. I am excited to see how my skills in AI, design, photography, video editing, and game development will merge into an impact that would make a difference, be it in professional projects or personal pursuits.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BlogPage;
