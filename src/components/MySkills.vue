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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.skills {
  text-align: center;
  color: purple; /* 보라색 */
  padding: 20px;
  font-family: 'Poppins', sans-serif; /* Poppins 폰트 적용 */
  background-color: #000000; /* 배경색을 검정색으로 설정 */
}

.skills h2 {
  font-size: 35px; /* 글씨 크기 설정 */
  font-weight: 800; /* extra bold 설정 */
  margin-bottom: 20px; /* 제목과 아이템 사이의 간격 설정 */
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; /* 아이템 사이의 간격 설정 */
}

/* 동그라미 안에 이미지와 텍스트를 포함한 설정 */
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aa9cbd; /* 배경색을 지정 */
  padding: 10px;
  border-radius: 50%;
  width: 80px; /* 원의 너비를 고정 */
  height: 80px; /* 원의 높이를 고정 */
  justify-content: center;
  box-sizing: border-box; /* 패딩과 보더를 너비에 포함 */
  flex-shrink: 0; /* 줄어들지 않도록 설정 */
}

/* 이미지 설정 */
.skill-icon {
  width: 150px; /* 이미지의 너비를 동그라미의 크기에 맞게 설정 */
  height: 50px; /* 이미지의 높이를 동그라미의 크기에 맞게 설정 */
  object-fit: contain; /* 이미지 비율을 유지하면서 크기 조정 */
  border-radius: 50%; /* 이미지도 동그라미 형태로 보이게 설정 */
  margin-bottom: 5px; /* 이미지와 텍스트 사이의 간격 설정 */
}

/* 한 줄에 정확히 7개의 아이템을 배치하기 위한 설정 */
.skills-container {
  width: calc(80px * 7 + 10px * 6); /* 7개 아이템과 6개의 간격을 포함 */
  margin: 0 auto; /* 중앙 정렬 */
}
</style>
