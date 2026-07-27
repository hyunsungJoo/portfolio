<template>
  <div class="projects">
    <h2>PROJECTS</h2>
    <div class="projects-container">
      <div class="project" v-for="project in projects" :key="project.name">
        <div class="flip-card" :class="{ flipped: flippedProjects.includes(project.name) }">
          <div class="flip-card-inner">
            <!-- 카드 앞면 -->
            <div class="flip-card-front">
              <img :src="require(`@/assets/projects/${project.image}`)" :alt="project.name" class="project-image" />
              <div class="project-info">
                <div class="project-info-bar">
                  <h3>{{ project.name }}</h3>
                  <a @click.prevent="flipCard(project.name)" class="more-info-button">자세히 보기</a>
                </div>
              </div>
            </div>
            <!-- 카드 뒷면 -->
            <div class="flip-card-back">
              <p>{{ project.description }}</p>
              <p><strong>GitHub:</strong> <a :href="project.github" target="_blank">{{ project.github }}</a></p>
              <p><strong>Document:</strong> <a :href="project.document" target="_blank">{{ project.document }}</a></p>
              <p><strong>Tech Stack:</strong> {{ project.techStack }}</p>
              <button @click="flipCard(project.name)">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      projects: [
        {
          name: '할인 모아보기 웹, 모바일 사이트',
          description: '직원들의 참여와 동기부여를 증진시키기위해 디지털 배지를 추가한 인사관리 시스템을 개발하였습니다.',
          techStack: 'Linux, Next.js, Supabase, Docekr, jenkins, Playwright, N8N',
          image: 'discount-moa.png' // Image file can be added if needed
        },
        {
          name: '디지털 배지를 더한 인사관리 시스템',
          description: '직원들의 참여와 동기부여를 증진시키기위해 디지털 배지를 추가한 인사관리 시스템을 개발하였습니다.',
          github: 'https://github.com/orgs/9-1379/repositories',
          document: 'https://drive.google.com/drive/folders/1STHo8GCeXOdwqUNwRMNgFFPmqKjmcDMv',
          techStack: 'Linux, HTML, CSS, Vue.js, Java, Spring Boot, Jpa, Jwt, MariaDB, Nginx, Docker, Jenkins, AWS',
          image: 'hrd.png' // Image file can be added if needed
        },
        {
          name: '개인 웹 포트폴리오',
          description: '포트폴리오 용도로 제작한 웹사이트입니다. 지금 화면이 바로 이 웹사이트 입니다.',
          github: 'https://github.com/hyunsungJoo/portfolio',
          document: '',
          techStack: 'Linux, HTML, CSS, Vue.js',
          image: 'portfolio.png' // Image file can be added if needed
        },
        {
          name: '프로젝트 성능, 부하 테스트',
          description: '기존에 있던 Spring 프로젝트에 nginx proxy서버와 Caching을 설정하여 Ngrinder부하테스트 및 성능 개선을 시도해 본 프로젝트입니다.',
          github: 'https://github.com/orgs/devops-team-project-4nd/repositories',
          document: 'https://drive.google.com/drive/folders/1E7LBtnw-6dbyvwZruF8XkbblYqjfyGGZ',
          techStack: 'Linux, Docker, Nginx, Ngrinder',
          image: 'devops-project.png' // Image file can be added if needed
        },
        {
          name: '사내 테라피 예약 시스템',
          description: '인사관리시스템 프론트엔드를 개발, 배포하였고 데이터베이스를 Json 서버로 따로 배포하여 관리하였습니다.',
          techStack: 'Next.js, Vercel.app, Apps Script, Google Sheets',
          image: 'muscle.png' // Image file can be added if needed
        },
        {
          name: '사내 식당 설문조사 시스템',
          description: 'ToDoList에 감정표현을 추가한 프로젝트로, 다수의 인원이 일정을 공유할 수 있는 서비스를 개발하였습니다.',
          techStack: 'Next.js, Vercel.app, Apps Script, Google Sheets',
          image: 'survey.png' // Image file can be added if needed
        },
      ],
      flippedProjects: []
    };
  },
  methods: {
    flipCard(projectName) {
      const index = this.flippedProjects.indexOf(projectName);
      if (index > -1) {
        this.flippedProjects.splice(index, 1);
      } else {
        this.flippedProjects.push(projectName);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.projects {
  padding: 5rem 2rem;
  background-color: var(--bg-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease;
}

.projects h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  letter-spacing: -1px;
  transition: color 0.3s ease;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project {
  width: 100%;
  aspect-ratio: 4 / 3;
  perspective: 1000px;
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.flip-card-front {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  justify-content: flex-end;
  overflow: hidden;
  transition: all 0.3s ease;
}

.flip-card-back {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  justify-content: space-between;
  padding: 1.5rem;
  transform: rotateY(180deg);
  box-sizing: border-box;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 1;
}

.project-info {
  padding: 1rem;
  background: linear-gradient(to top, var(--bg-primary), rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
}

.project-info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.project-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
  flex: 1;
  transition: color 0.3s ease;
}

.more-info-button {
  font-size: 14px;
  color: var(--color-cyan);
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.more-info-button:hover {
  color: var(--color-orange);
}

.flip-card-back p {
  font-size: 14px;
  margin: 0.75rem 0;
  word-wrap: break-word;
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color 0.3s ease;
}

.flip-card-back strong {
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.flip-card-back a {
  color: var(--color-cyan);
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;
}

.flip-card-back a:hover {
  color: var(--color-orange);
}

.flip-card-back button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-cyan);
  color: var(--text-primary);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.flip-card-back button:hover {
  background-color: var(--color-orange);
}
</style>
