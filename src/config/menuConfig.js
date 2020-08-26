const menuList = [
  {
    path: '/index',
    title: '首页',
    icon: 'HomeOutlined',
    component: 'index/index',
    hidden: false
  },
  {
    path: '/news',
    title: '新闻',
    icon: 'UsergroupAddOutlined',
    component: 'news/news',
    hidden: false
  },
  {
    path: '/news/detail/:sid',
    title: '新闻详情页',
    component: 'news/detail',
    hidden: true
  },
  {
    path: '/user',
    title: '用户管理',
    icon: 'UsergroupAddOutlined',
    component: 'user/user',
    hidden: false
  },
  {
    path: '/role',
    title: '角色管理',
    icon: 'SolutionOutlined',
    component: 'role/role',
    hidden: false
  },
  {
    path: '/menus',
    title: '菜单管理',
    icon: 'InsertRowLeftOutlined',
    hidden: false,
    children: [
      {
        path: '/menus/menu1',
        title: '菜单1',
        // icon: 'HomeOutlined',
        component: 'menu1/menu1',
        hidden: false
      },
      {
        path: '/menus/menu1/detail',
        title: '菜单1详情',
        // icon: 'HomeOutlined',
        component: 'menu1/menu1Detail',
        hidden: true
      },
      {
        path: '/menus/menu2',
        title: '菜单2',
        // icon: 'HomeOutlined',
        component: 'menu2/menu2',
        hidden: false
      }
    ]
  }
]
export default menuList