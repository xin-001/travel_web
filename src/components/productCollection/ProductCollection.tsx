import React from "react";
import { Row, Col, Typography, Divider, Image } from "antd"
import styles from "./productCollection.module.css"
import { productList } from "./mockups";
import sanfran from "../../assets/image/SanFrancisco.png"
import colorado from "../../assets/image/colorado.png"
import newyork from "../../assets/image/newYork.jpeg"
import virginia from "../..//assets/image/Virginia.png"
import santaMonica from "../../assets/image/santaMonica.png"
import florida from "../../assets/image/florida.png"
import az from "../../assets/image/az.png"
import maxico from "../../assets/image/mexico.png"
import wineVa from "../../assets/image/wineVa.png"
import dc from "../../assets/image/dc.png"
import lasVegas from "../../assets/image/lasVegas.png"
import chicago from "../../assets/image/chicago.png"

export const ProductCollection: React.FC = () => {
    return (
        <div className={styles.content}>
            <Divider>EXPLORE BY CATEGORY</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <Image src={newyork} />
                    <div>
                        <Typography.Title level={5}>{productList[0].title}</Typography.Title>
                        <Typography.Text type="danger" strong>
                            ${productList[0].price}
                        </Typography.Text>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Image src={sanfran} />
                    <div>
                        <Typography.Title level={5}>{productList[1].title}</Typography.Title>
                        <Typography.Text type="danger" strong>
                            ${productList[1].price}
                        </Typography.Text>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Image src={colorado} />
                    <div>
                        <Typography.Title level={5}>{productList[2].title}</Typography.Title>
                        <Typography.Text type="danger" strong>
                            ${productList[2].price}
                        </Typography.Text>
                        
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                        <Image src={virginia} />
                        <div>
                            <Typography.Title level={5}>{productList[3].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[3].price}
                            </Typography.Text>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={santaMonica} />
                        <div>
                            <Typography.Title level={5}>{productList[4].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[4].price}
                            </Typography.Text>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={florida} />
                        <div>
                            <Typography.Title level={5}>{productList[5].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[5].price}
                            </Typography.Text>
                        </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                        <Image src={az} />
                        <div>
                            <Typography.Title level={5}>{productList[6].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[6].price}
                            </Typography.Text>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={maxico} />
                        <div>
                            <Typography.Title level={5}>{productList[7].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[7].price}
                            </Typography.Text>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={wineVa} />
                        <div>
                            <Typography.Title level={5}>{productList[8].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[8].price}
                            </Typography.Text>
                        </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                        <Image src={dc} />
                        <div>
                            <Typography.Title level={5}>{productList[9].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[9].price}
                            </Typography.Text>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={lasVegas} />
                        <div>
                            <Typography.Title level={5}>{productList[10].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[10].price}
                            </Typography.Text>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <Image src={chicago} />
                        <div>
                            <Typography.Title level={5}>{productList[11].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[11].price}
                            </Typography.Text>
                        </div>
                </Col>
            </Row>
        </div>
    )
}