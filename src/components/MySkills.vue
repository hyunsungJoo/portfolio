<template>
  <div class="skills">
    <h2>SKILLS</h2>
    <div class="skills-container">
      <div class="skill" v-for="skill in skills" :key="skill.name">
        <img :src="require(`@/assets/skills/${skill.icon}`)" :alt="skill.name" class="skill-icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySkills',
  data() {
    return {
      skills: [
        { name: 'Java', icon: 'java.png' },
        { name: 'Spring', icon: 'spring.png' },
        { name: 'MariaDB', icon: 'mariadb.png' },
        { name: 'HTML5', icon: 'html.png' },
        { name: 'CSS3', icon: 'css.png' },
        { name: 'JavaScript', icon: 'js.png' },
        { name: 'Vue.js', icon: 'vue.png' },
        { name: 'Docker', icon: 'docker.png' },
        { name: 'Jenkins', icon: 'jenkins.png' },
        { name: 'AWS', icon: 'aws.png' },
        { name: 'Linux', icon: 'linux.png' },
        { name: 'Git', icon: 'git.png' },
        { name: 'GitHub', icon: 'github.png' },
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.skills {
  padding: 5rem 2rem;
  background-color: var(--bg-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease;
}

.skills h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border: 1.5px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 12px;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skill:hover {
  background: linear-gradient(135deg, var(--color-cyan), var(--color-cyan));
  border-color: var(--color-cyan);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(var(--color-cyan), 0.3);
}

.skill-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
</style>
