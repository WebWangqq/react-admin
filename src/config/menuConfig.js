const menuList = [
  {
    path: '/index',
    title: '首页',
    icon: 'HomeOutlined',
    component: 'index/index'
  },
  {
    path: '/user',
    title: '用户管理',
    icon: 'HomeOutlined',
    component: 'user/user'
  },
  {
    path: '/role',
    title: '角色管理',
    icon: 'HomeOutlined',
    component: 'role/role'
  },
  {
    path: '/menus',
    title: '菜单管理',
    icon: 'HomeOutlined',
    children: [
      {
        path: '/menus/menu1',
        title: '菜单1',
        icon: 'HomeOutlined',
        component: 'menu1/menu1'
      },
      {
        path: '/menus/menu2',
        title: '菜单2',
        icon: 'HomeOutlined',
        component: 'menu2/menu2'
      }
    ]
  }
]
export default menuList