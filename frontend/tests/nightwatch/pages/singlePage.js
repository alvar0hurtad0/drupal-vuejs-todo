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
const singlePageCommands = {
    addTodo(todo) {
        this.waitForElementVisible('@todoForm', 5000)
            .clearValue('@todoFormName')
            .setValue('@todoFormName', todo)
            .click('@todoFormSubmit')
            .api.pause(1000);

        return this;
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },

    commands: [singlePageCommands],
    elements: {
        todoForm: {
          selector: '#todo-form'
        },
        todoFormName: {
          selector: '#todo-form input[type=text]'
        },
        todoFormSubmit: {
            selector: '#todo-form button'
        },
        pendingCounter: {
            selector: '.v-toolbar .v-chip__content .v-avatar'
        },
    }
};
