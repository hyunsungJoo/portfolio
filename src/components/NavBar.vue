<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li class="navbar-item" v-for="(item, index) in menuItems" :key="index">
        <a @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
      </li>
    </ul>
    <button class="theme-toggle" @click="$emit('toggle-theme')" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
      <span v-if="isDarkMode" class="theme-icon">☀️</span>
      <span v-else class="theme-icon">🌙</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    isDarkMode: {
      type: Boolean,
      default: true
    }
  },
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
  background-color: var(--bg-secondary);
  padding: 1.25rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
}

.navbar-item a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
}

.navbar-item a:hover {
  color: var(--color-cyan);
}

.theme-toggle {
  background: linear-gradient(135deg, var(--color-cyan), var(--color-cyan));
  border: 2px solid var(--color-cyan);
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(var(--color-cyan), 0.25);
  flex-shrink: 0;
}

.theme-toggle:hover {
  background: linear-gradient(135deg, var(--color-orange), var(--color-orange));
  border-color: var(--color-orange);
  box-shadow: 0 6px 16px rgba(var(--color-orange), 0.35);
  transform: translateY(-2px);
}

.theme-toggle:active {
  transform: translateY(0);
}

.theme-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
</style>
