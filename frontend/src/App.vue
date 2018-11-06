<template>
  <v-app>
    <v-toolbar app fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer ></v-spacer>
      <todo-counter v-if="User.isLoggedIn"></todo-counter>
      <v-btn to="Logout" fab small v-if="User.isLoggedIn" id="logout-link">
        <v-icon>logout</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer :fixed="true" app>
      <span>drupal&amp;vuejs rock!!!</span>
    </v-footer>
  </v-app>
</template>

<script>
    import TodoCounter  from './components/TodoCounter';
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';

    export default {
      components: {
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
