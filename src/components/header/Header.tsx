import React from "react";
import styles from "./header.module.css";
import { Layout, Typography, Input, Menu, Button, } from 'antd';
import logo from '../../assets/logo.svg';
import { HomeOutlined  } from '@ant-design/icons'

export const Header: React.FC = () => {
    return (
        <div className={styles['app-header']}>
            <div className={styles['top-header']}>
                <Typography.Text strong>Traveling is one of life's great joys!</Typography.Text>
                <Button.Group className={styles['button-group']}  >
                    <Button type="primary" >Sign In</Button>
                    <Button >Register</Button>
                </Button.Group>
            </div>
            <Layout.Header className={styles['main-header']}>
                <img src={logo} alt="logo" className={styles['App-logo']} />
                <Typography.Title level={3} className={styles.title}>Travel The USA</Typography.Title>
                <Input.Search
                    placeholder={'Please enter the destination, theme, or keyword'}
                    enterButton className={styles['search-input']}
                />
            </Layout.Header>
            <Menu className={styles["main-menu"]} mode={'horizontal'}
                items={[
                    { key: 1, label: "Home", icon:<HomeOutlined />},
                    { key: 0, label: "" },
                    { key: 0, label: "" },
                    { key: 2, label: "West" },
                    { key: 0, label: "" },
                    { key: 0, label: "" },
                    { key: 3, label: "East" },
                    { key: 0, label: "" },
                    { key: 0, label: "" },
                    { key: 4, label: "Pacific" }
                ]} >
            </Menu>
        </div>
    );
};