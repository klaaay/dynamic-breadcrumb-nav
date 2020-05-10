import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import routes from '@/routers';
const { SubMenu } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState('/home');

  const handleClick = e => {
    setCurrent(e.key);
  };

  const renderMenuItem = routes => {
    return routes.map(({ path, name, routes }) => {
      if (routes) {
        return <SubMenu title="Electronics">{renderMenuItem(routes)}</SubMenu>;
      } else {
        return (
          <Menu.Item key={path}>
            <Link to={path}>{name}</Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {renderMenuItem(routes)}
    </Menu>
  );
};

export default memo(NavBar);
