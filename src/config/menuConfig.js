const menuList = [
  {
    path: '/index',
    title: '首页',
    icon: 'HomeOutlined'
  },
  {
    path: '/user',
    title: '用户管理',
    icon: 'HomeOutlined'
  },
  {
    path: '/role',
    title: '角色管理',
    icon: 'HomeOutlined'
  },
  {
    path: '/menus',
    title: '菜单管理',
    icon: 'HomeOutlined',
    children: [
      {
        path: '/menus/menu1',
        title: '菜单1',
        icon: 'HomeOutlined'
      },
      {
        path: '/menus/menu2',
        title: '菜单2',
        icon: 'HomeOutlined'
      }
    ]
  }
]
export default menuList