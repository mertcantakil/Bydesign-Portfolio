/* eslint-disable jsx-a11y/alt-text */
// src/components/Body.js
import React from 'react';
import resim1 from './resim1.jpg';
import resim2 from './resim2.jpg';
import resim3 from './resim3.jpg';
import resim4 from './resim4.jpg';
import { Col, Row } from 'antd';

const Main = () => {
  return (
    <main>
      <Row style={styles.dFlexCenter}>
        <Col span={12}>
          <img src={resim1}></img>
        </Col>
        <Col span={12}>
          <img src={resim2}></img>
        </Col>
      </Row>
      <Row style={styles.dFlexCenter}>
        <Col span={12}>
          <img src={resim4}></img>
        </Col>
        <Col span={12}>
          <img src={resim3}></img>
        </Col>
      </Row>
      <Row style={styles.dFlexCenter}>
        <Col span={12}>
          <img src={resim1}></img>
        </Col>
        <Col span={12}>
          <img src={resim2}></img>
        </Col>
      </Row>
    </main>
  );
};

const styles = {
  dFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } 
};

export default Main;
