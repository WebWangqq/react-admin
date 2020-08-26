import Mock from 'mockjs'
Mock.setup({
  timeout: 200
})

// 登录
Mock.mock(/\/api\/login/, 'post', (req) => {
  const { username, password } = JSON.parse(req.body)
  if (username === 'admin' && password === "admin") {
    return {
      code: 200,
      message: '操作成功',
      data: {
        username: 'admin',
        id: '0',
        token: "fdasfdsafdsafdas"
      }
    }
  } else if (username === 'common' && password === "common") {
    return {
      code: 200,
      message: '操作成功',
      data: {
        username: 'common',
        id: '1',
        token: "dfdfdfdfdfd"
      }
    }
  } else {
    return {
      code: 400,
      message: '用户名或密码错误'
    }
  }
})

Mock.mock(/\/api\/menus/, 'get', {
  code: 200,
  message: '操作成功',
  data: [
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
          component: 'menu1/menu1',
          hidden: false
        },
        {
          path: '/menus/menu1/detail',
          title: '菜单1详情',
          component: 'menu1/menu1Detail',
          hidden: true
        },
        {
          path: '/menus/menu2',
          title: '菜单2',
          component: 'menu2/menu2',
          hidden: false
        }
      ]
    }
  ]
})