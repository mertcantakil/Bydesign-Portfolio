/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import livingRoom1 from '../pictures/living-room/lr-1.jpg';
import avlu1 from '../pictures/avlu/a-1.jpg';
import cesme1 from '../pictures/cesme-kahve-gaziantep/ckg-1.jpg';
import cesmependik1 from '../pictures/cesme-kahve-pendik/ckp-1.jpeg';
import fargo1 from '../pictures/fargo/fr-1.jpg';
import fargoInterior1 from '../pictures/fargo-interior/fri-1.jpg';
import houseofdurum1 from '../pictures/house-of-durum/h-1.jpg';
import icecream1 from '../pictures/icecream/i-1.png';
import muhtelif1 from '../pictures/muhtelif/m-1.jpg';
import nevse1 from '../pictures/nevse/n-1.jpg';
import office1 from '../pictures/office/o-1.png';
import social1 from '../pictures/social/s-1.jpeg';
import villa1 from '../pictures/villa/vl-1.jpg';
import yakakoy1 from '../pictures/yakakoy/yk-1.jpg';

import { Col, Row } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Main = () => {
  const navigate = useNavigate();

  const projects = [
    { 
      id: 'livingRoom',
      image: livingRoom1,
      title: "Living Room",
      description: "İç Mekan Tasarımı"
    },
    { 
      id: 'avlu',
      image: avlu1,
      title: "Avlu",
      description: "Dış Mekan Tasarımı"
    },
    { 
      id: 'cesme1',
      image: cesme1,
      title: "Cesme Kahve",
      description: "Gaziantep"
    },
    { 
      id: 'cesmependik1',
      image: cesmependik1,
      title: "Cesme Kahve",
      description: "Pendik"
    },
    { 
      id: 'fargo1',
      image: fargo1,
      title: "Fargo",
      description: "Fransız Restoran"
    },
    { 
      id: 'fargoInterior1',
      image: fargoInterior1,
      title: "Fargo",
      description: "İç Mekan"
    },
    { 
      id: 'houseofdurum1',
      image: houseofdurum1,
      title: "House of Durum",
      description: "Kebapçılık"
    },
    { 
      id: 'icecream1',
      image: icecream1,
      title: "Ice Cream",
      description: "Dondurma"
    },
    { 
      id: 'muhtelif1',
      image: muhtelif1,
      title: "Muhtelif",
      description: "İçecek"
    },
    { 
      id: 'nevse1',
      image: nevse1,
      title: "Nevşe",
      description: "Kebapçılık"
    },
    { 
      id: 'office1',
      image: office1,
      title: "Office",
      description: "Ofis"
    },
    { 
      id: 'social1',
      image: social1,
      title: "Social",
      description: "Sosyal"
    },
    { 
      id: 'villa1',
      image: villa1,
      title: "Villa",
      description: "Villa"
    },
    { 
      id: 'yakakoy1',
      image: yakakoy1,
      title: "Yakakoy",
      description: "Yakakoy"
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <main>
      <Row style={styles.dFlexCenter}>
        {projects.map((project, index) => (
          <Col span={12} key={index}>
            <div 
              className="image-container" 
              onClick={() => handleProjectClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <LazyLoadImage
                src={project.image}
                effect="blur"
                className="image"
                alt={project.title}
              />
              <div className="overlay">
                <span className="text">{project.title}</span>
                <span className="description">{project.description}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </main>
  );
};

const styles = {
  dFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Main;
