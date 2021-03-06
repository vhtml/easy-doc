module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://cn.vuejs.org/images/logo.png',
        title: 'Vue Easy Doc',
        href: 'https://github.com/vhtml'
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍',
                noExample: true
              },
              {
                path: '/quickstart',
                title: '快速上手',
                noExample: true
              },
              {
                path: '/changelog',
                title: '更新日志',
                noExample: true
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/loading',
                title: 'Loading - 加载'
              }
            ]
          }
        ]
      }
    ]
  }
}
