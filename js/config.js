const langs = [
  { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
  { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
  landing: 'landing.html',
  title: 'hello',
  nav: [
    // 首页
    {title: 'Home', path: '/'},
    // 中文文档
    {title: '中文文档', path: '/language/chinese'}
  ],
  plugins: [
      evanyou()
  ]
});
