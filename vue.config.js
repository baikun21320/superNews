module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    // 设置代理
    proxy: {
      '/api': {//业务类的接口请求地址，这里的api可以是后端的工程名
        changeOrigin: true,
        target: 'http://v.juhe.cn/toutiao',
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, "./src/_theme.less")]
    })
}
