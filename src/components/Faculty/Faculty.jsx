import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./faculty.css";

const Faculty = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <h2 className="mb-4 hero__title" style={{ color: "black" }}>
                                <br /> <strong>supportive Faculty</strong><br /><b>HAVE</b>
                            </h2>
                            <p style={{ color: "black" }}>
                                We have an excellent group of highly qualified teachers who believe in concept-based education,
                                which might help the scholars develop critical and analytical skills as well as a spirit of exploratory, 
                                independent thinking and self-confidence.
                                Management attaches great importance to personnel selection.
                                After proper training, a dedicated specialist with proven expertise will be inducted into the system.
                                Our faculty is our most valuable resource for getSnapshotBeforeUpdate(prevProps, prevState) {

                                }
                                G.S. PU & Degree College. The commitment of the faculty at G.S. 
                                PU & Degree College goes far beyond the classroom and has an impact on all aspects of campus life. In addition to their teaching responsibilities,
                                faculty members guide and mentor students, participating with enthusiasm in their curriculum, research, and co-curriculum activities.
                            </p>
                        </div>

                    </Col>

                    <Col lg="6" md="6">
                        <img src={"https://th.bing.com/th/id/OIP.houeoMOn3zchfChn8NbiaQHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="" className="w-100 hero__img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faculty;