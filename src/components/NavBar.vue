<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li class="navbar-item" v-for="(item, index) in menuItems" :key="index">
        <a @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuItems: [
        { name: 'About Me', link: '#about-me' },
        { name: 'Skills', link: '#skills'},
        { name: 'Projects', link: '#projects' },
        { name: 'Experience', link: '#experience' },
        { name: 'Contact', link: '#contact' }
      ]
    };
  },
  methods: {
    scrollToSection(target) {
      this.$scrollTo(target, 500);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.navbar-item a:hover {
  color: #ff6600;
}
</style>
