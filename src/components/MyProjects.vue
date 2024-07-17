<template>
  <div class="projects">
    <h2>PROJECTS</h2>
    <div class="projects-container">
      <div class="project" v-for="project in projects" :key="project.name">
        <div class="flip-card" :class="{ flipped: flippedProject === project.name }">
          <div class="flip-card-inner">
            <!-- 카드 앞면 -->
            <div class="flip-card-front">
              <!-- <img :src="require(`@/assets/projects/${project.image}`)" :alt="project.name" class="project-image" /> -->
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
              <a :href="project.link" target="_blank">링크로 이동</a>
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
          name: 'Project 1',
          description: 'This is a description of project 1.',
          image: 'project1.png',
          link: 'https://example.com/project1'
        },
        {
          name: 'Project 2',
          description: 'This is a description of project 2.',
          image: 'project2.png',
          link: 'https://example.com/project2'
        },
        {
          name: 'Project 3',
          description: 'This is a description of project 3.',
          image: 'project3.png',
          link: 'https://example.com/project3'
        }
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
}

.flip-card-back a {
  font-size: 16px;
  color: #ffcc00;
  text-decoration: none;
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

