<template>
  <div id="app" :class="{ 'light-mode': !isDarkMode }">
    <NavBar :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" />
    <div class="content">
      <section id="about-me">
        <Profile/>
      </section>
      <section id="download">
        <DownloadButton/>
      </section>
      <section id="skills">
        <MySkills/>
      </section>
      <section id="projects">
        <MyProjects/>
      </section>
      <section id="experience">
        <MyExperience/>
      </section>
      <section id="contact">
        <ContactMe/>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Profile from './components/UserProfile.vue'
import DownloadButton from './components/DownloadButton.vue'
import MySkills from './components/MySkills.vue';
import MyProjects from './components/MyProjects.vue';
import MyExperience from './components/MyExperience.vue';
import ContactMe from './components/ContactMe.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Profile,
    DownloadButton,
    MySkills,
    MyProjects,
    MyExperience,
    ContactMe
  },
  data() {
    return {
      isDarkMode: true
    };
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }
}
</script>

<style>
/* Dark Mode (Default) */
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1f1f1f;
  --bg-tertiary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-muted: #808080;
  --color-cyan: #06B6D4;
  --color-orange: #f97316;
  --border-color: #3a3a3a;
}

/* Light Mode */
#app.light-mode {
  --bg-primary: #f8f8f8;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f0f0f0;
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #888888;
  --color-cyan: #0891b2;
  --color-orange: #ea580c;
  --border-color: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease;
}

#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.content {
  margin-top: 60px;
  padding: 0;
}
</style>
