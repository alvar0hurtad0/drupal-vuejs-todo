/*const userLogin = {

    command: function (username) {
        return this
            .clearValue('@userName')
            .setValue('@userName', username)
            .clearValue('@userPassword')
            .setValue('@userPassword', username)
            .click('@loginFormSubmit');
    },
};
*/
const loginCommands = {
    loginAsUser(username) {
        this.waitForElementVisible('@loginFormSubmit', 5000)
            .clearValue('@userName')
            .setValue('@userName', username)
            .clearValue('@userPassword')
            .setValue('@userPassword', username)
            .click('@loginFormSubmit')
            .api.pause(1000);

        return this;
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },

    commands: [loginCommands],
    elements: {
        loginForm: {
          selector: '#login-form'
        },
        userName: {
          selector: '#login-form input[aria-label=username]'
        },
        userPassword: {
            selector: '#login-form input[aria-label=Password]'
        },
        loginFormSubmit: {
            selector: '#login-form button[value=submit]'
        },
    }
};
