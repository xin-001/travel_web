import React from "react";
import styles from "./productCollection.module.css"
import { Row, Col, Typography, Divider, Image } from "antd"
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

export const ProductCollection: React.FC= () => {
    return (
        <div className={styles.content}>
            <Divider>EXPLORE BY CATEGORY</Divider>
            <Row>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={newyork} />
                        <div>
                            <Typography.Title level={4}>{productList[0].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[0].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={sanfran} />
                        <div>
                            <Typography.Title level={4}>{productList[1].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[1].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={colorado} />
                        <div>
                            <Typography.Title level={4}>{productList[2].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[2].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={virginia} />
                        <div>
                            <Typography.Title level={4}>{productList[3].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[3].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={santaMonica} />
                        <div>
                            <Typography.Title level={4}>{productList[4].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[4].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={florida} />
                        <div>
                            <Typography.Title level={4}>{productList[5].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[5].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={az} />
                        <div>
                            <Typography.Title level={4}>{productList[6].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[6].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={maxico} />
                        <div>
                            <Typography.Title level={4}>{productList[7].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[7].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={wineVa} />
                        <div>
                            <Typography.Title level={4}>{productList[8].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[8].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={dc} />
                        <div>
                            <Typography.Title level={4}>{productList[9].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[9].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={lasVegas} />
                        <div>
                            <Typography.Title level={4}>{productList[10].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[10].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={styles.divProduct}>
                        <Image width={370} height={260} src={chicago} />
                        <div>
                            <Typography.Title level={4}>{productList[11].title}</Typography.Title>
                            <Typography.Text type="danger" strong>
                                ${productList[11].price}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}