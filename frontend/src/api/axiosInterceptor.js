import axios from 'axios';

axios.interceptors.request.use(function(config) {
    const auth_token = localStorage.getItem('auth_token');
    if(auth_token) {
      config.headers.Authorization = `Bearer ${auth_token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});
