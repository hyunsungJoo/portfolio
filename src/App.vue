<template>
  <div id="app">
    <NavBar />
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
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000000;
  color: #2c3e50;
}

.content {
  margin-top: 0; /* 여백을 0으로 설정하여 메뉴바와 내용이 붙도록 설정 */
}
</style>
