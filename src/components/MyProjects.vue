<template>
    <div class="projects">
      <h2>PROJECTS</h2>
      <div class="projects-container">
        <div class="project" v-for="project in projects" :key="project.name">
          <div class="flip-card" :class="{ flipped: flippedProject === project.name }">
            <div class="flip-card-inner">
              <!-- 카드 앞면 -->
              <div class="flip-card-front">
                <!-- 이미지가 필요하면 주석 해제 -->
                <!-- <img :src="require(`@/assets/projects/${project.image}`)" :alt="project.name" class="project-image" /> -->
                <div class="project-info">
                  <h3>{{ project.name }}</h3>
                  <p>{{ project.description }}</p>
                  <a @click.prevent="flipCard(project.name)">자세히 보기</a>
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
    background-color: #000000;
  }
  
  .projects h2 {
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* 오렌지 그라데이션 */
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  
  .project {
    width: 600px;
    height: 400px; /* 카드의 높이 조정 */
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
    position: absolute;
    width: 100%;
    height: 100%;
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
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  
  .project-info h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .project-info p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .project-info a {
    font-size: 16px;
    color: #ffcc00;
    text-decoration: none;
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
  