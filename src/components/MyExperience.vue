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
          company: '유진 ITS',
          period: 'Aug 2024 - Now',
          description: '그룹웨어 유지보수, SSO를 관리 하였으며 프로젝트로는 ERP와 그룹웨어 전자결제 문서 연동을 진행하였습니다. ',
          logo: 'eugenes.png'
        },
        {
          company: '한화 BEYOND SW 캠프',
          period: 'Oct 2023 - Apr 2024',
          description: '교육프로그램은 6개월 과정으로 백엔드 개발자 과정입니다. 백엔드 기술(JAVA, SPRING, SPRING BOOT)를 중점적으로 학습하였고 프론트 기술(Vue.js)과 DOCKER, JENKINS등과 같은 Devops 기술도 학습하였습니다.5번의 팀프로젝트로 협업능력을 키웠고 LINUX, GIT, GITHUB와 같은 능력도 향상시켰습니다. 이 부트캠프 경험으로 여러사람들과 협업하여 프로젝트를 진행하는 경험을 하여 프로젝트 능력을 발전시켰습니다.',
          logo: 'hanwha.png'
        },
        {
          company: '한림대학교 컴퓨터공학과',
          period: 'Mar 2016 - Feb 2023',
          description: '',
          logo: 'hallym.png'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.experience {
  padding: 5rem 2rem;
  background-color: var(--bg-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease;
}

.experience h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.experience-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.experience-item:hover {
  border-color: var(--color-cyan);
  background-color: var(--bg-secondary);
}

.company-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background-color: var(--bg-tertiary);
  padding: 0.5rem;
}

.experience-details {
  flex: 1;
}

.company-and-period {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.company-and-period h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.company-and-period .period {
  margin: 0;
  font-size: 14px;
  color: var(--color-cyan);
  font-weight: 500;
  white-space: nowrap;
}

.description {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}
</style>
