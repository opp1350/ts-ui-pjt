module.exports = {
  devServer: {
    proxy: { // 이부분 추가
      '/': {
        target: 'http://localhost:1111/', // 요청할 서버 주소
        pathRewrite: { '^/': '' },
        changeOrigin: true,
        secure: false
      },
    },
  },
}
