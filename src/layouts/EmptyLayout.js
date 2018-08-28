import React, { Component } from 'react';
import Routes from '../utils/Routes';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

class EmptyLayout extends Component {
  render() {
    const { location } = this.props;
    const breadcrumbNameMap = {
      '/caseList': 'case列表',
      '/caseRecord': 'case录制',
      '/back_scriptSetup': '脚本设置'
    };
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const basebreadcrumb =
      location.pathname.indexOf('back') >= 0
        ? [<Breadcrumb.Item key="home">后台设置</Breadcrumb.Item>]
        : [<Breadcrumb.Item key="home">case管理</Breadcrumb.Item>];
    const breadcrumbItems = basebreadcrumb.concat(extraBreadcrumbItems);
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <h2 className="app-title">图雀-智能会场测试</h2>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <SubMenu title="case管理">
              <Menu.Item key="11">
                <Link to="/caseRecord">case录制</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/caseList">case列表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu title="后台设置">
              <Menu.Item key="21">
                <Link to="/back_scriptSetup">脚本设置</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content style={{ padding: '0 1em', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Routes />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}> */}
        {/* Ant Design ©2018 Created by Ant UED */}
        {/* </Footer> */}
      </Layout>
    );
  }
}
export default withRouter(EmptyLayout);
