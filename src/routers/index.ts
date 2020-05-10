import {
  Home,
  Books,
  Electronics,
  Mobile,
  Desktop,
  Laptop,
  Foods,
} from '@/pages';
const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    path: '/books',
    component: Books,
    name: 'Book',
  },
  {
    path: '/foods',
    component: Foods,
    name: 'Food',
  },
  {
    path: '/electronics',
    component: Electronics,
    name: 'Electronics',
    routes: [
      {
        path: '/electronics/mobile',
        component: Mobile,
        name: 'Mobile Phone',
      },
      {
        path: '/electronics/desktop',
        component: Desktop,
        name: 'Desktop PC',
      },
      {
        path: '/electronics/laptop',
        component: Laptop,
        name: 'Laptop',
      },
    ],
  },
];

export default routes;
