import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import LoginForm from '@/components/LoginForm'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginForm
        },
        {
            path: '/logout',
            name: 'Logout',
        },
        {
            path: '/',
            name: 'List',
            component: TodoList,
            meta: {
                requiresAuth : true
            },
        },
    ]
})