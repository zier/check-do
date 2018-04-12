import React from 'react';
import { Menu, Icon } from 'antd';

const MenuItemGroup = Menu.ItemGroup;

class LeftBar extends React.Component {

  handleClick = (e: object) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <MenuItemGroup key="g1" title="Category">
          <Menu.Item key="1">All</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key="g2" title="Other">
          <Menu.Item key="2"><Icon type="setting" />Settings</Menu.Item>
        </MenuItemGroup>
      </Menu>
    );
  }
}

export default LeftBar;
