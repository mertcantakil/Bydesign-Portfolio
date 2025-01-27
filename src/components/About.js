import React from "react";
import profilPic from '../pictures/profil.jpg';
import { Row, Col } from "antd";

const About = () => {
    return (
        <Row style={{ marginBottom: '3rem' }}>
            <Col 
                xs={24}
                md={10} 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    marginBottom: { xs: '2rem', md: '0' }
                }}
            >
                <img 
                    src={profilPic} 
                    alt="profil" 
                    style={{
                        width: '100%',
                        maxWidth: '700px',
                        height: 'auto',
                        objectFit: 'cover',
                        padding: { xs: '0 1rem', md: '0' }
                    }}
                />
            </Col>
            <Col 
                xs={24}
                md={14} 
                style={{ 
                    fontSize: '1rem',
                    padding: { xs: '0 1rem', md: '0' }
                }}
            >
                <h2 style={{ 
                    paddingLeft: '2rem', 
                    textAlign: 'start',
                    fontSize: { xs: '1.8rem', md: '2rem' }
                }}>
                    About Me
                </h2>
                <p style={{ 
                    padding: '2rem', 
                    textAlign: 'start', 
                    lineHeight: '1.6rem'
                }}>
                    As a master architect, I completed my bachelor's degree in 2020 at the Department of Architecture, Eskişehir Osmangazi University,
                    graduating with a second degree in my class with high honors. I obtained my master's degree in 2024 from the Graduate School of
                    Natural and Applied Sciences, Department of Architecture, Building Science Program, at Dokuz Eylül University, with a thesis.
                    Throughout my academic journey and professional career, I have garnered extensive experience in architectural design, working
                    on a diverse range of projects including residential buildings, franchise restaurants-cafes, shopping centers, marinas, and municipal 
                    license projects. My expertise spans various aspects of architectural design and project management, encompassing both 2D and 3D design, 
                    conceptualization, team collaboration, restoration, surveying, construction oversight, and material procurement. Additionally, I have 
                    honed my skills through internships, international exchange programs, and travels abroad, enhancing my proficiency in foreign languages 
                    and cultural understanding.<br /> <br />I possess advanced proficiency in a multitude of software essential to the architectural field, including 
                    MS Office, Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, AutoCAD, SketchUp, Rhino, Revit, Premiere, Vray, and Lumion. 
                    Furthermore, I am actively seeking to expand my knowledge in graphic design and user experience design to complement my architectural expertise.
                    <br /> <br /> Currently, I work as a freelance architect on residential, commercial, cafe, and restaurant projects both domestically and internationally.
                    I am enthusiastic about the prospect of contributing to your team and believe that my qualifications align well with the requirements of the 
                    position. I am flexible in terms of work arrangements and am available for full-time, part-time, or remote work as per your needs.
                    Thank you for your interest.
                    <br /><br />
                    Warm regards.
                    <br /> <br />
                    For more architecture and graphic design works;
                    https://lnkd.in/dypR4XXe
                </p>
            </Col>
        </Row>
    );
};

export default About;
