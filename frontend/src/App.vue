<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <todo-counter></todo-counter>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column>
            <todo-form></todo-form>
            <todo-list></todo-list>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>drupal&vuejs rock!!!</span>
    </v-footer>
  </v-app>
</template>

<script>
    import TodoCounter  from './components/TodoCounter';
    import TodoList  from './components/TodoList';
    import TodoForm  from './components/TodoForm';

    export default {
      components: {
          'todo-form': TodoForm,
          'todo-list': TodoList,
          'todo-counter': TodoCounter,
      },
      data () {
        return {
          clipped: false,
          drawer: true,
          fixed: false,
          items: [
            { icon: 'bubble_chart', title: 'Inspire' }
          ],
          miniVariant: false,
          right: true,
          title: 'Drupal VUEJS todo'
        }
      }
  }
</script>
