<template>
  <div class="projects">
    <h2>PROJECTS</h2>
    <div class="projects-container">
      <div class="project" v-for="project in projects" :key="project.name">
        <div class="flip-card" :class="{ flipped: flippedProject === project.name }">
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
          name: '인사관리시스템 프론트엔드 개발',
          description: '인사관리시스템 프론트엔드를 개발, 배포하였고 데이터베이스를 Json 서버로 따로 배포하여 관리하였습니다.',
          github: 'https://github.com/orgs/Workflow-Ease/repositories',
          document: 'https://drive.google.com/drive/folders/1vtyhetWmrONe_bnrrJTmbZ5IBXi7wWdI',
          techStack: 'Linux, HTML, CSS, Vue.js, Fly.io, Firebase',
          image: 'hrd-vue.png' // Image file can be added if needed
        },
        {
          name: '감정표현을 더한 ToDoList',
          description: 'ToDoList에 감정표현을 추가한 프로젝트로, 다수의 인원이 일정을 공유할 수 있는 서비스를 개발하였습니다.',
          github: 'https://github.com/hyunsungJoo/be01-2nd-5Team-To-Do-List',
          document: 'https://drive.google.com/drive/folders/1sSPMl0pjmu6vPPA6dkUTNJMtUYi4OV4P',
          techStack: 'Java, Spring Boot, Jpa, Jwt, MariaDB, Docker',
          image: 'todolist-project.png' // Image file can be added if needed
        },
      ],
      flippedProject: null
    };
  },
  methods: {
    flipCard(projectName) {
      this.flippedProject = this.flippedProject === projectName ? null : projectName;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.projects {
  text-align: center;
  color: purple;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #000000; /* 전체 배경색 */
}

.projects h2 {
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* 오렌지 그라데이션 */
  -webkit-background-clip: text;
  color: transparent;
}

.projects-wrapper {
  padding: 0 15rem; /* 왼쪽과 오른쪽 여백 */
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 한 줄에 카드 2개 */
  gap: 20px; /* 카드 간의 간격 */
  justify-content: center; /* 카드 중앙 정렬 */
  margin-left: 15rem;
  margin-right: 15rem;
}

.project {
  width: 100%; /* 부모 요소에 맞춰 너비 조정 */
  max-width: 600px; /* 카드의 최대 너비 */
  aspect-ratio: 4 / 3; /* 카드의 비율을 유지 */
  perspective: 1000px; /* 카드 뒤집기 효과를 위한 시점 설정 */
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* 3D 변환 유지 */
  transition: transform 0.6s; /* 카드가 뒤집힐 때의 전환 효과 */
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg); /* 카드가 180도 회전하여 뒤집힘 */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%; /* 카드의 고정 높이 */
  transition: transform 0.6s;
  transform-style: preserve-3d; /* 3D 변환 유지 */
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* 카드 뒷면이 보이지 않도록 설정 */
}

.flip-card-front {
  background-color: #aa9cbd;
  color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
}

.flip-card-back {
  background-color: #aa9cbd;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotateY(180deg); /* 카드 뒷면의 기본 회전 상태 */
  box-sizing: border-box;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  flex: 1;
}

.project-info {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-info-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.project-info h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.more-info-button {
  font-size: 16px;
  color: #ffcc00;
  text-decoration: none;
  cursor: pointer;
}

.flip-card-back p {
  font-size: 16px;
  margin-bottom: 10px;
  word-wrap: break-word; /* 긴 URL이 카드 밖으로 삐져나오지 않도록 설정 */
}

.flip-card-back a {
  font-size: 16px;
  color: #ffcc00;
  text-decoration: none;
  word-wrap: break-word; /* 긴 URL이 카드 밖으로 삐져나오지 않도록 설정 */
}

.flip-card-back button {
  margin-top: 10px;
  padding: 10px;
  background-color: #ff7e5f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
