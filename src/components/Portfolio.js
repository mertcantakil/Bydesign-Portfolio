import React from 'react';
import { Col, Row } from 'antd';

const Portfolio = () => {

  const iframe2020 = (
    <iframe title="Portfolio 2020" src="https://www.behance.net/embed/project/195253485?ilo0=1" 
      height="474" width="808" allowfullscreen lazyload frameborder="0"
      allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin">
    </iframe>
  );

  const iframe2022 = (
    <iframe title="Portolio 2022" src="https://www.behance.net/embed/project/195252305?ilo0=1" height="474" width="808"
      allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin">
    </iframe>
  );

  const iframe2024 = (
    <iframe title="Portolio 2024" src="https://www.behance.net/embed/project/179460903?ilo0=1" height="474" width="808"
      allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin">
    </iframe>
  );

  const iframe2021 = (
    <iframe title="Portolio 2021" src="https://www.behance.net/embed/project/164077963?ilo0=1" height="474" width="808" allowfullscreen
      lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin">
    </iframe>
  );
   
  return (
    <main>
      <h1 style={{ textAlign: 'center', fontWeight: '400'}}>My Portfolios</h1>
      <Row style={styles.dFlexCenter}>
        <Col span={12}>
          <div style={{ padding: '20px', display:'flex', justifyContent: 'center'}}>
            {iframe2020}
          </div>
        </Col>
        <Col span={12}>
          <div style={{ padding: '20px', display:'flex', justifyContent: 'center'}}>
            {iframe2021}
          </div>
        </Col>
        <Col span={12}>
          <div style={{ padding: '20px', display:'flex', justifyContent: 'center'}}>
            {iframe2022}
          </div>
        </Col>
        <Col span={12}>
          <div style={{ padding: '20px', display:'flex', justifyContent: 'center'}}>
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
  },
};

export default Portfolio;
