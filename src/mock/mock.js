import Mock from 'mockjs'

Mock.mock(/getPrice/, {
  'number|1-100': 100
})

Mock.mock(/createOrder/, 'number|1-100')

Mock.mock(/getNewsList/, 'get', {
  'list|5': [
    {
      title: '@ctitle(4,7)',
      url: '@url'
    }
  ]
})

Mock.mock(/getBoardList/, {
  'list': [
    {
      title: '@ctitle(4)',
      description: '@ctitle(8,12)',
      id: 'car',
      toKey: 'analysis',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8,12)',
      id: 'earth',
      toKey: 'analysis',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8,12)',
      id: 'loud',
      toKey: 'analysis',
      saleout: '@boolean'
    },
    {
      title: '@ctitle(4)',
      description: '@ctitle(8,12)',
      id: 'mountain',
      toKey: 'analysis',
      saleout: '@boolean'
    }
  ]
})

Mock.mock(/getProductList/, {
  pc: {
    title: 'PC产品',
    list: [
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      }
    ]
  },
  app: {
    title: '手机应用类',
    last: true,
    list: [
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      },
      {
        name: '@ctitle(4)',
        url: '@url',
        hot: '@boolean'
      }
    ]
  }
})

function getRimg () {
  return Mock.Random.image('900x300', Mock.Random.hex())
}

Mock.mock(/getSlides/, [
  {
    src: getRimg(),
    title: '@ctitle(4,12)',
    ky: 1,
    toKey: 'analysis'
  },
  {
    src: getRimg(),
    title: '@ctitle(4,12)',
    ky: 2,
    toKey: 'analysis'
  },
  {
    src: getRimg(),
    title: '@ctitle(4,12)',
    ky: 3,
    toKey: 'analysis'
  }

])

export default{}
