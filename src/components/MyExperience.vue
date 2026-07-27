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
          description: 'Java 기반 그룹웨어 및 AWS 인프라 운영을 담당하며 Linux 서버 운영, Jenkins 기반 CI/CD 배포, ERP(SAP·더존) 연동, Microsoft 365 관리, 운영 자동화(Python, Playwright, n8n) 구축을 수행했습니다. 또한 SQL 성능 최적화, 로그 모니터링 구축, 보안 취약점 개선을 통해 서비스 안정성과 운영 효율을 향상시켰습니다.',
          logo: 'eugenes.png'
        },
        {
          company: '한화 BEYOND SW 캠프',
          period: 'Oct 2023 - Apr 2024',
          description: `- Java 백엔드 개발: 자바(Java) 기반 객체지향 프로그래밍 및 Spring Boot를 활용한 안정적인 RESTful API 서버 설계·구현
- CI/CD 파이프라인 구축: Git, GitHub Actions/Jenkins 등을 활용한 빌드 및 배포 자동화 프로세스 구축 경험
- DevOps & 인프라: Docker를 이용한 애플리케이션 컨테이너화 및 클라우드 환경 기반 서비스 배포·운영 역량 함양`,
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

.description {
  white-space: pre-line;
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
