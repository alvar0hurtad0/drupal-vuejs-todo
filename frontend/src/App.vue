<template>
  <v-app>
    <v-toolbar fixed app v-if="User.isLoggedIn">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <todo-counter></todo-counter>
    </v-toolbar>
    <v-content v-if="User.isLoggedIn">
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column>
            <todo-form></todo-form>
            <todo-list></todo-list>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="true" app>
      <login-form v-if="!User.isLoggedIn"></login-form>
      <span>drupal&vuejs rock!!!</span>
    </v-footer>
  </v-app>
</template>

<script>
    import LoginForm from './components/LoginForm';
    import TodoCounter  from './components/TodoCounter';
    import TodoList  from './components/TodoList';
    import TodoForm  from './components/TodoForm';
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';

    export default {
      components: {
          'login-form': LoginForm,
          'todo-form': TodoForm,
          'todo-list': TodoList,
          'todo-counter': TodoCounter,
      },
      data () {
        return {
          title: 'Drupal VUEJS todo'
        }
      },
      computed: {
        ...mapState(['User']),
      },
      methods: {
        ...mapActions(['checkUser']),
      },
      mounted() {
        this.checkUser();
      },
  }
</script>
