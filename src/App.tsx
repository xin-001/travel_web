import React from 'react';
import styles from './App.module.css';
import {Header} from './components/header/Header'
import { Footer, SideMenu, Carousel, ProductCollection, BusinessPartners} from './components'
import {Row,Col} from 'antd'
//import { productList } from './mockups';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/*content*/}
      <div className={styles['page-content']}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop:20}}>
          <Col span={6} >
            <SideMenu/>
          </Col>
          <Col span={18}>
            <Carousel/>
          </Col>
        </Row>
        <ProductCollection />
      </div>
      <BusinessPartners/>
      <Footer/>
    </div>
  );
}

export default App;
