import axios from 'axios';
import './axiosInterceptor';

export default {
    // @todo this part is not really working fine.
    getToken(payload) {
        let data =JSON.stringify({
            name: payload.username,
            pass: payload.password
        });

        let config = JSON.stringify({
            headers: {
                "Content-Type": "application/json"
            }
        });

        localStorage.clear();

        return axios.post(`${BASE_API_URL}/user/login?_format=json`,data, config)
            .then(res => {
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('csrf_token', res.data.csrf_token);
                localStorage.setItem('username', payload.username);
                localStorage.setItem('auth_token', btoa(payload.username + ':' + payload.password));
                window.location.href = '/';
                Promise.resolve(res.data);
            })
            .catch(({ error }) => {
                localStorage.setItem('loggedIn', false);
                console.log('Issue with login');
                Promise.reject(error);
            })
    },

    addTodo(payload) {
        return axios.post(`${BASE_API_URL}/api/v1/todos?_format=json`, {title:payload.title, status: false})
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    editTodo({id, title, status}) {
        return axios.patch(`${BASE_API_URL}/api/v1/todos/${id}?_format=json`, {title: title, status: status})
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    removeTodo(id) {
        return axios.delete(`${BASE_API_URL}/api/v1/todos/${id}?_format=json`)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    getTodos() {
        return axios.get(`${BASE_API_URL}/api/v1/todos?_format=json`)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },
}
