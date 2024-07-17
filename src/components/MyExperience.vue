<template>
  <div class="experience">
    <h2>EXPERIENCE</h2>
    <div class="experience-container">
      <div class="experience-item" v-for="experience in experiences" :key="experience.company">
        <div class="company-logo">
          <img :src="require(`@/assets/${experience.logo}`)" :alt="experience.company" class="company-logo-img">
        </div>
        <div class="experience-details">
          <div class="company-and-period">
            <h3>{{ experience.company }}</h3>
            <p class="period">{{ experience.period }}</p>
          </div>
          <p class="description">{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyExperience',
  data() {
    return {
      experiences: [
        {
          company: '한화 BEYOND SW 캠프',
          period: 'Oct 2023 - Apr 2024',
          description: 'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google\'s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
          logo: 'hanwha.png'
        },
        {
          company: '한림대학교 컴퓨터공학과',
          period: 'Mar 2016 - Feb 2023',
          description: 'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.',
          logo: 'hallym.png'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.experience {
  padding: 2rem;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  color: white;
  margin-top: 20px;
}

.experience h2 {
  font-size: 35px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  -webkit-background-clip: text;
  color: transparent;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  display: flex;
  align-items: flex-start;
}

.company-logo {
  margin-left: 15rem;
  margin-right: 1.5rem;
}

.company-logo-img {
  width: 50px;
  height: 50px;
}

.experience-details {
  flex: 1;
}

.company-and-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-and-period h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: left;
}

.company-and-period .period {
  margin-right: 15rem;
  font-size: 15px;
  color: #8491a0;
}

.description {
  margin-top: 1rem;
  margin-right: 15rem;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: #8491a0;
  text-align: left;
}
</style>
