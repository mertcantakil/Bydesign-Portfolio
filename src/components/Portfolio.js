import React from 'react';
import { Col, Row } from 'antd';

const Portfolio = () => {
  // iframe'lerin responsive olması için style ekleyelim
  const iframeStyle = {
    width: '100%',
    maxWidth: '808px',
    height: '474px',
    border: 'none'
  };

  const iframe2020 = (
    <iframe 
      title="Portfolio 2020" 
      src="https://www.behance.net/embed/project/195253485?ilo0=1" 
      style={iframeStyle}
      allowFullScreen 
      loading="lazy"
      allow="clipboard-write" 
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );

  // Diğer iframe'ler için de aynı style'ı uygulayalım
  const iframe2022 = (
    <iframe 
      title="Portolio 2022" 
      src="https://www.behance.net/embed/project/195252305?ilo0=1" 
      style={iframeStyle}
      allowFullScreen 
      loading="lazy"
      allow="clipboard-write" 
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );

  const iframe2024 = (
    <iframe 
      title="Portolio 2024" 
      src="https://www.behance.net/embed/project/179460903?ilo0=1" 
      style={iframeStyle}
      allowFullScreen 
      loading="lazy"
      allow="clipboard-write" 
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );

  return (
    <main>
      <h1 style={{ textAlign: 'center', fontWeight: '400', margin: '2rem 0' }}>My Portfolios</h1>
      <Row style={styles.dFlexCenter}>
        <Col xs={24} md={12}>
          <div style={styles.iframeContainer}>
            {iframe2020}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={styles.iframeContainer}>
            {iframe2022}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={styles.iframeContainer}>
            {iframe2024}
          </div>
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
    flexWrap: 'wrap'
  },
  iframeContainer: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden'
  }
};

export default Portfolio;
