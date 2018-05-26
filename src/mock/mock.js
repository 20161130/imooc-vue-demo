import Mock from 'mockjs'

Mock.mock(/getPrice/, {
  'number|1-100': 100
})

Mock.mock(/createOrder/, 'number|1-100')

Mock.mock(/getNewsList/, 'get', {
  // 'list|5': [
  //   {
  //     title: '@ctitle(4,7)',
  //     url: '@url'
  //   }
  // ]
  'list': [
    {
      title: '数据统计',
      url: 'http://starcraft.com'
    },
    {
      title: '数据预测',
      url: 'http://warcraft.com'
    },
    {
      title: '流量分析',
      url: 'http://overwatch.com',
      hot: true
    },
    {
      title: '广告发布',
      url: 'http://hearstone.com'
    }
  ]
})

Mock.mock(/getBoardList/, {
  // 'list': [
  //   {
  //     title: '@ctitle(4)',
  //     description: '@ctitle(8,12)',
  //     id: 'car',
  //     toKey: 'analysis',
  //     saleout: '@boolean'
  //   },
  //   {
  //     title: '@ctitle(4)',
  //     description: '@ctitle(8,12)',
  //     id: 'earth',
  //     toKey: 'analysis',
  //     saleout: '@boolean'
  //   },
  //   {
  //     title: '@ctitle(4)',
  //     description: '@ctitle(8,12)',
  //     id: 'loud',
  //     toKey: 'analysis',
  //     saleout: '@boolean'
  //   },
  //   {
  //     title: '@ctitle(4)',
  //     description: '@ctitle(8,12)',
  //     id: 'mountain',
  //     toKey: 'analysis',
  //     saleout: '@boolean'
  //   }
  // ]
  'list': [
    {
      title: '开放产品',
      description: '开放产品是一款开放产品',
      id: 'car',
      saleout: false
    },
    {
      title: '品牌营销',
      description: '品牌营销帮助你的产品更好地找到定位',
      id: 'earth',
      saleout: false
    },
    {
      title: '使命必达',
      description: '使命必达快速迭代永远保持最前端的速度',
      id: 'loud',
      saleout: true
    },
    {
      title: '勇攀高峰',
      description: '帮你勇闯高峰，到达事业的顶峰',
      id: 'mountain',
      saleout: false
    }
  ]
})

Mock.mock(/getProductList/, {
  // pc: {
  //   title: 'PC产品',
  //   list: [
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     }
  //   ]
  // },
  // app: {
  //   title: '手机应用类',
  //   last: true,
  //   list: [
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     },
  //     {
  //       name: '@ctitle(4)',
  //       url: '@url',
  //       hot: '@boolean'
  //     }
  //   ]
  // }
  pc: {
    title: 'PC产品',
    list: [
      {
        name: '数据统计',
        url: 'http://starcraft.com'
      },
      {
        name: '数据预测',
        url: 'http://warcraft.com'
      },
      {
        name: '流量分析',
        url: 'http://overwatch.com',
        hot: true
      },
      {
        name: '广告发布',
        url: 'http://hearstone.com'
      }
    ]
  },
  app: {
    title: '手机应用类',
    last: true,
    list: [
      {
        name: '91助手',
        url: 'http://weixin.com'
      },
      {
        name: '产品助手',
        url: 'http://twitter.com'
      },
      {
        name: '智能地图',
        url: 'http://maps.com'
      },
      {
        name: '团队语音',
        url: 'http://phone.com'
      }
    ]
  }
})

// function getRimg () {
//   return Mock.Random.image('900x300', Mock.Random.hex())
// }

Mock.mock(/getSlides/, [
  // {
  //   src: getRimg(),
  //   title: '@ctitle(4,12)',
  //   ky: 1,
  //   toKey: 'analysis'
  // },
  // {
  //   src: getRimg(),
  //   title: '@ctitle(4,12)',
  //   ky: 2,
  //   toKey: 'analysis'
  // },
  // {
  //   src: getRimg(),
  //   title: '@ctitle(4,12)',
  //   ky: 3,
  //   toKey: 'analysis'
  // }
  {
    src: require('../assets/slideShow/pic1.jpg'),
    title: 'xxx1',
    href: 'http://xxx.xxx.com'
  },
  {
    src: require('../assets/slideShow/pic2.jpg'),
    title: 'xxx2',
    href: 'http://xxx.xxx.com'
  },
  {
    src: require('../assets/slideShow/pic3.jpg'),
    title: 'xxx3',
    href: 'http://xxx.xxx.com'
  },
  {
    src: require('../assets/slideShow/pic4.jpg'),
    title: 'xxx4',
    href: 'http://xxx.xxx.com'
  }
])

export default{}
