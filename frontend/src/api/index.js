import axios from 'axios';

export default {
    getToken() {
        if (localStorage.getItem('csrf_token')) {
            return
        }
        let data =JSON.stringify({
            name: "admin",
            pass: "admin"
        })
        let config = JSON.stringify({
            headers: {
                "Content-Type": "application/json"
            }
        });
        axios.post('http://drupal-vue-todo.localhost:8610/user/login?_format=json',data, config)
            .then(res => localStorage.setItem('csrf_token', res.data.csrf_token))
            .catch(({ response }) => {
                console.log('Issue with login')
            })
    },
    addTodo(payload) {
        let config = JSON.stringify({
            headers: {
                "CSRF-Token": localStorage.getItem('csrf_token'),
                "Content-Type": "application/json"
            }
        });

        console.log(payload);
        return axios.post('http://drupal-vue-todo.localhost:8610/api/v1/todos?_format=json', {title:payload.title, status: false}, config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },
    getTodos() {
        let config = JSON.stringify({
            headers: {
                "CSRF-Token": localStorage.getItem('csrf_token')
            }
        });
        return axios.get('http://drupal-vue-todo.localhost:8610/api/v1/todos?_format=json', config)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
    },
}
