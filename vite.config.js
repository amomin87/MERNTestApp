export default {
  server: {
    proxy: {
      '/api': 'http://backend:5000'
    }
  }
};
