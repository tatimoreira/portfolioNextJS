import React from 'react';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
import { headerCls, drawerCls } from './styles';
import LeftMenu from './LeftMenu';

const Header: React.FC = () => {

    /* state = {
         visible: false,
     };
 
     showDrawer = () => {
         this.setState({
             visible: true,
         });
     };
 
     onClose = () => {
         this.setState({
             visible: false,
         });
     };*/

    return (
        <div css={headerCls}>
            <nav className="menuBar">
                <div className="logo">
                    <Link href="/">
                        <img src="/static/images/logo@1x.png" alt="logo" />
                    </Link>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">

                    </div>
                    <Button className="barsMenu">
                        <span className="barsBtn" />
                    </Button>
                    <Drawer
                        css={drawerCls}
                        placement="right"
                        closable={false}
                    >

                    </Drawer>
                </div>
            </nav>
        </div>
    );

}

export default Header;