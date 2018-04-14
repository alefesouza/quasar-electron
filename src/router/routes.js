export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [{ path: '', component: () => import('pages/index') }],
  },
  {
    path: '/events/:id',
    component: () => import('layouts/default'),
    children: [{ path: '', component: () => import('pages/details') }],
  },
  {
    // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
