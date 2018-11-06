module.exports = {
    '@tags': [],
    '@disabled': false,
    'Test Login' : function (client) {
        client.init();

        var login_page = client.page.login();

        login_page
            .navigate()
            .assert.containsText('@loginForm', 'Login');

        login_page
            .navigate()
            .loginAsUser('user1')
            .waitForElementVisible('#logout-link', 3000);

        client.end();
    }
};
