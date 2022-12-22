import React from "react";
import styles from "./homePage.module.css";
import {Header} from '../../components/header/Header'
import { Footer, SideMenu, Carousel, ProductCollection, BusinessPartners} from '../../components'
import {Row,Col} from 'antd'

export class HomePage extends React.Component {
    render(): React.ReactNode {
        return <>
            <Header />
            {/*content*/}
            <div className={styles['page-content']}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 20 }}>
                    <Col span={6} >
                        <SideMenu />
                    </Col>
                    <Col span={18}>
                        <Carousel />
                    </Col>
                </Row>
                <ProductCollection />
            </div>
            <BusinessPartners />
            <Footer />
        </>
    }
}