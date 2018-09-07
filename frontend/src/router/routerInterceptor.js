import router from '.'

router.beforeEach((to,from,next) => {
    // If visiting login view but you already have logged in redirect to home.
    if (to.name == 'Login' && window.localStorage.loggedIn) {
        return next({
            path: '/'
        })
    }

    // Remove session on logout.
    if (to.name == 'Logout') {
        delete window.localStorage.loggedIn;
        return next({
            path: '/login'
        })
    }

    // Redirect to login all request that need authentication if user is not logged.
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
