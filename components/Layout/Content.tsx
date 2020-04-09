import React from 'react';
import { Layout } from 'antd';
const AppContent = Layout.Content;
const Content = ({ children, ...props }) =>
    <AppContent {...props}>{children}</AppContent>;

export default Content;