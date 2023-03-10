import React from "react";
import styles from "./SideMenu.module.css"
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { StarTwoTone, HeartTwoTone} from "@ant-design/icons";



export const SideMenu: React.FC = () => {
    return (
        <Menu className={styles['side-menu']} mode={'vertical'}
            items={
                sideMenuList.map((m) => ({
                    label: m.title,
                    icon: < StarTwoTone twoToneColor={' #EEE8AA'} spin />,
                    key: m.title,
                    children: m.subMenu.map((sm) => ({
                        label: sm.title,
                        icon: <HeartTwoTone twoToneColor="#ffccff" />,
                        key: sm.title,
                    }))
                }))
            }
        >

        </Menu>
    )
}