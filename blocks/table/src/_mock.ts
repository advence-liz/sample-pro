const Mock = require('mockjs')
// {
//   key: "1",
//   name: "John Brown",
//   age: 32,
//   address: "New York No. 1 Lake Park",
//   tags: ["nice", "developer"]
// },
export default {
  // 支持值为 Object 和 Array
  'GET /api/list': Mock.mock({
    code: 200,
    message: 'succeed',
    data: {
      total: 20,
      'list|20': [
        {
          'id|+1': 1,
          name: '@cname',
          address: '@city(true)',
          web: '@url',
          key: '@guid',
          tags: ['nice', 'good'],
          age: /\d{1,2}/,
        },
      ],
    },
  }),

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK')
  },
}
