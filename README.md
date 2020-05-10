## 动态的面包屑和导航

- [动态的面包屑和导航](#%e5%8a%a8%e6%80%81%e7%9a%84%e9%9d%a2%e5%8c%85%e5%b1%91%e5%92%8c%e5%af%bc%e8%88%aa)
  - [在 routers 文件夹中定义路由表](#%e5%9c%a8-routers-%e6%96%87%e4%bb%b6%e5%a4%b9%e4%b8%ad%e5%ae%9a%e4%b9%89%e8%b7%af%e7%94%b1%e8%a1%a8)
  - [在 App.tsx 中配合 renderRoutes 方法渲染路由表](#%e5%9c%a8-apptsx-%e4%b8%ad%e9%85%8d%e5%90%88-renderroutes-%e6%96%b9%e6%b3%95%e6%b8%b2%e6%9f%93%e8%b7%af%e7%94%b1%e8%a1%a8)
  - [自定义 BreadCrumb 组件配合 matchRoutes 方法 和路由表以及当前的 pathName 渲染出动态面包屑组件](#%e8%87%aa%e5%ae%9a%e4%b9%89-breadcrumb-%e7%bb%84%e4%bb%b6%e9%85%8d%e5%90%88-matchroutes-%e6%96%b9%e6%b3%95-%e5%92%8c%e8%b7%af%e7%94%b1%e8%a1%a8%e4%bb%a5%e5%8f%8a%e5%bd%93%e5%89%8d%e7%9a%84-pathname-%e6%b8%b2%e6%9f%93%e5%87%ba%e5%8a%a8%e6%80%81%e9%9d%a2%e5%8c%85%e5%b1%91%e7%bb%84%e4%bb%b6)
  - [自定义 Nav 组件配合路由表渲染出导航栏](#%e8%87%aa%e5%ae%9a%e4%b9%89-nav-%e7%bb%84%e4%bb%b6%e9%85%8d%e5%90%88%e8%b7%af%e7%94%b1%e8%a1%a8%e6%b8%b2%e6%9f%93%e5%87%ba%e5%af%bc%e8%88%aa%e6%a0%8f)

### 在 routers 文件夹中定义路由表

```ts
type IRouterItem = {
  path: string;
  component: React.Component;
  name: string;
  routes?: IRouterItem[];
};
type IRouter = IRouterItem[];
```

### 在 App.tsx 中配合 renderRoutes 方法渲染路由表

```tsx
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routers';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>{renderRoutes(routes)}</Switch>
        <Redirect to="/home" />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 自定义 BreadCrumb 组件配合 matchRoutes 方法 和路由表以及当前的 pathName 渲染出动态面包屑组件

```tsx
// 此处使用了Antd
import React from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../../routers';
import { Breadcrumb as AntBreadcrumb } from 'antd';

const Breadcrumb = ({ locationPath }) => {
  let matchedRoutes = matchRoutes(routes, locationPath);
  return (
    <AntBreadcrumb>
      {matchedRoutes.map((matchRoute, i) => {
        const { path, name } = matchRoute.route;
        const isActive = path === locationPath;
        return (
          <AntBreadcrumb.Item>
            {isActive ? name : <Link to={path}>{name}</Link>}
          </AntBreadcrumb.Item>
        );
      })}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
```

### 自定义 Nav 组件配合路由表渲染出导航栏

```tsx
// 此处使用了Antd
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
```
