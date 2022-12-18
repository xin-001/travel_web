import React from 'react';
import styles from './App.module.css';
import {Header} from './components/header/Header'
import { Footer, SideMenu, Carousel,ProductCollection} from './components'
import {Row,Col, Typography} from 'antd'
//import { productList } from './mockups';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/*content*/}
      <div className={styles['page-content']}>
        <Row style={{marginTop:20}}>
          <Col span={6} >
            <SideMenu/>
          </Col>
          <Col span={18} style={{background:'blue'}}>
            <Carousel/>
          </Col>
        </Row>
        <ProductCollection />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
