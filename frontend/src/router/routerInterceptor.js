import router from '.'

router.beforeEach((to,from,next) => {
    //If visiting login view but you already have logged in, you should not be able to see this view.
    if (to.name == 'Login' && window.localStorage.loggedIn) {
        return next({
            path: '/'
        })
    }

    //Remove session on logout.
    if (to.name == 'Logout') {
        delete window.localStorage.loggedIn;
        return next({
            path: '/login'
        })
    }

    //If you are visiting a page that requires auth and you are a guest then, you must be redirected to login
    if(to.meta.requiresAuth &&  !(window.localStorage.loggedIn)){
        return next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    }

    return next()
})