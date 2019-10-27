<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Tech Assessment</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item>
          <router-link to='/'>Home</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to='/about'>About</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to='/task'>Task</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>
