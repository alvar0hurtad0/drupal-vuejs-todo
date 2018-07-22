import axios from 'axios';

axios.interceptors.request.use(function(config) {
    const authToken = localStorage.getItem('auth_token');
    const csrfToken = localStorage.getItem('csrf_token');
    if(authToken && csrfToken) {
      config.headers.common = {
        "Authorization": `Basic ${authToken}`,
        "CSRF-Token": csrfToken,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      };
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});
