import axios from 'axios';

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
        axios.post(`${BASE_API_URL}/user/login?_format=json`,data, config)
            .then(res => {
                localStorage.setItem('csrf_token', res.data.csrf_token);
                localStorage.setItem('username', payload.username);
                localStorage.setItem('auth_token', btoa(payload.username + ':' + payload.password));
            })
            .catch(({ response }) => {
                console.log('Issue with login')
            })
    },

    addTodo(payload) {
        let config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
                "CSRF-Token": localStorage.getItem('csrf_token'),
                "Content-Type": "application/json"
            }
        };

        return axios.post(`${BASE_API_URL}/api/v1/todos?_format=json`, {title:payload.title, status: false}, config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    editTodo({id, title, status}) {
        let config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
                "CSRF-Token": localStorage.getItem('csrf_token'),
                "Content-Type": "application/json"
            }
        };

        return axios.patch(`${BASE_API_URL}/api/v1/todos/${id}?_format=json`, {title: title, status: status}, config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    removeTodo(id) {
        let config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
                "CSRF-Token": localStorage.getItem('csrf_token'),
                "Content-Type": "application/json"
            }
        };

        return axios.delete(`${BASE_API_URL}/api/v1/todos/${id}?_format=json`, config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },

    getTodos() {
        let config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
                "CSRF-Token": localStorage.getItem('csrf_token'),
                "Content-Type": "application/json"
            }
        };
        return axios.get(`${BASE_API_URL}/api/v1/todos?_format=json`, config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },
}
