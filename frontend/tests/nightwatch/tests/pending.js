module.exports = {
    '@tags': [],
    '@disabled': false,
    'Test Login' : function (client) {
        client.init();

        var login_page = client.page.login();
        var single_page = client.page.singlePage();

        login_page
            .navigate()
            .loginAsUser('user1');

        single_page
            .waitForElementVisible('@pendingCounter', 3000)
            .expect.element('@pendingCounter').text.to.contain('2').before(1000);

        single_page.click('#logout-link');

        login_page
            .navigate()
            .loginAsUser('user2');

        single_page
            .waitForElementVisible('@pendingCounter', 3000)
            .expect.element('@pendingCounter').text.to.contain('1').before(1000);

        client.end();
    }
};
