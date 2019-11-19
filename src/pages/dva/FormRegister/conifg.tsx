

const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]
const formDataSource = [
    { label: 'number', value: 11, type: 'number' },
    { label: 'email', value: '', type: 'email' },
    { label: 'text', value: 'text', type: 'text' },
    { label: 'password', type: 'password' },
    { label: 'cascader', type: 'cascader', options: residences, value: ['zhejiang', 'hangzhou', 'xihu'] },
    { label: 'website', type: 'autoComplete', autoComplete: ['.org', '.com'] }

]
export {formDataSource}