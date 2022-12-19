import React from "react";
import styles from "./businessPartners.module.css";
import { Image, Divider, Row, Col } from "antd";
import facebook from "../../assets/image/facebook.png"
import follow from "../../assets/image/follow.png"
import icon from "../../assets/image/icon.png"
import microsoft from "../../assets/image/microsoft.png"


export const BusinessPartners: React.FC = () => {
    return(
        <div className={styles.content}>
            <Divider>BUSINESS PARTNERS</Divider>
            <Row justify="space-around">
                <Col span={4}>
                    <div>
                        <Image src={facebook}  />
                    </div>
                </Col>
                <Col  span={4}>
                    <div>
                        <Image src={follow}/>
                    </div>
                </Col>
                <Col span={4}>
                    <div>
                        <Image src={icon}/>
                    </div>
                </Col>
                <Col  span={4}>
                    <div>
                        <Image src={microsoft} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}