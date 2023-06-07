import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { AddForm } from '../AddForm/AddForm';
import { Route, Routes } from 'react-router';
import { EditForm } from '../EditForm/EditForm';
import { NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export const Settings: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={50} width={200}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:  <NavLink to={'./addform'}> <VideoCameraOutlined /></NavLink>,
              label: 'Add New',
            },
            {
              key: '2',
              icon: <NavLink to={'./editform'}> <VideoCameraOutlined /></NavLink>,
              label: 'Edit',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
          
        />


      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height:'75vh',
            background: colorBgContainer,
          }}
        >

          <Routes>
            <Route path={'/addform'} element={<AddForm/>}/>
            <Route path={'/editform'} element={<EditForm/>}/>
          </Routes>

        </Content>
      </Layout>
    </Layout>
  );
};

