import React from 'react';
import '../css/WithHeaderLayout.css';
import { withRouter } from 'react-router-dom';
import Routes from '../utils/Routes';
import { Layout, Menu, Icon } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/menu';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log('dddd-menu-props', props);
  }
  // state = {
  //   collapsed: false,
  //   key:['1']
  // };
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.location.pathname==='/user') {
  //     this.setState({key:['1']})
  //   }else if(nextProps.location.pathname==='/home') {
  //     this.setState({key:['2']})
  //   }else if(nextProps.location.pathname==='/') {
  //     this.setState({key:['3']})
  //   } else if(nextProps.location.pathname==='/redux') {
  //     this.setState({key:['4']})
  //   } else if(nextProps.location.pathname==='/redux2') {
  //     this.setState({key:['5']})
  //   }
  // }
  // componentWillMount() {
  //   if(this.props.location.pathname==='/user') {
  //     this.setState({key:['1']})
  //   }else if(this.props.location.pathname==='/home') {
  //     this.setState({key:['2']})
  //   }else if(this.props.location.pathname==='/') {
  //     this.setState({key:['3']})
  //   } else if(this.props.location.pathname==='/redux') {
  //     this.setState({key:['4']})
  //   } else if(this.props.location.pathname==='/redux2') {
  //     this.setState({key:['5']})
  //   }
  // }
  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={this.props.selectedKey}
            onClick={(item, key, kp) => {
              if (item.key === '1') {
                this.props.history.push('/user');
              } else if (item.key === '2') {
                this.props.history.push('/home');
              } else if (item.key === '3') {
                this.props.history.push('/');
              } else if (item.key === '4') {
                this.props.history.push('/redux');
              } else if (item.key === '5') {
                this.props.history.push('/redux2');
              }
              this.props.actions.changeKey(item.key);
            }}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span>user</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>home</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="notification" />
              <span>app</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="smile-o" />
              <span>reduxexample</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="area-chart" />
              <span>reduxexample2</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.props.actions.changeCollapse()}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('ddd-menu-mapStateToProps', state, props);
  return {
    collapsed: state.menu.collapsed,
    selectedKey: state.menu.selectedKey
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(menuActions, dispatch)
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SiderDemo)
);
