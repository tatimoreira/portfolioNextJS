import React from 'react';
import { string } from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const RightMenu = ({ mode: any }) => (
    <Menu mode={mode}>
        <Menu.Item key="search">
            <Link href="/search">Search</Link>
        </Menu.Item>
        <Menu.Item key="login">
            <Link href="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="cart">
            <Link href="/cart">Cart</Link>
        </Menu.Item>
    </Menu>
);


export default RightMenu;