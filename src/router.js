import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import Task from './components/Task.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HelloWorld,
    props: { msg: 'Welcome to Your Vue.js App' },
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/task',
    component: Task,
  },
];

export default new VueRouter({
  routes,
  mode: 'history',
});
