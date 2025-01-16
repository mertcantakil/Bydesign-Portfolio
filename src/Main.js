/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import livingRoom1 from './pictures/livingRoom/livingRoom1.jpg';
// import livingRoom2 from './pictures/livingRoom/livingRoom2.jpg';
// import livingRoom3 from './pictures/livingRoom/livingRoom3.jpg';
// import livingRoom4 from './pictures/livingRoom/livingRoom4.jpg';

import avlu1 from './pictures/avlu1.jpg';
import burro1 from './pictures/burro1.png';
import cesme1 from './pictures/cesme1.jpg';
import cesmependik1 from './pictures/cesmependik1.jpeg';
import fargo1 from './pictures/fargo1.jpg';
import fargoInterior1 from './pictures/fargoInterior1.jpg';
import habura1 from './pictures/habura1.jpg';
import houseofdurum1 from './pictures/houseofdurum1.jpg';
import icecream1 from './pictures/icecream1.png';
import interior1 from './pictures/interior1.jpg';
import muhtelif1 from './pictures/muhtelif1.jpg';
import nevse1 from './pictures/nevse1.jpg';
import office1 from './pictures/office1.png';
import pendikShopping1 from './pictures/pendikShopping1.jpg';
import social1 from './pictures/social1.jpeg';
import villa1 from './pictures/villa1.jpg';
import yakakoy1 from './pictures/yakakoy1.jpg';

import { Col, Row } from 'antd';

const Main = () => {

  const mainPictures = [
    livingRoom1, avlu1,burro1,cesme1,cesmependik1,
    fargo1,fargoInterior1,habura1,houseofdurum1,
    icecream1,interior1,muhtelif1,nevse1,office1,
    pendikShopping1,social1,villa1,yakakoy1
  ];

  const livingRoomText = "Living Room Furniture Interior Design";

  return (
    <main>
      <Row style={styles.dFlexCenter}>
        {
          mainPictures.map(pictures => (
            <Col span={12}>
               <div className="image-container">
                <img src={pictures} className="image" />
                <div className="overlay">
                  <span className="text">{livingRoomText}</span>
                </div>
              </div>
            </Col>
          ))
        }
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
