<template>
    <div class="download-button-wrapper">
      <a :href="fileUrl" download class="download-button">
        Download Portfolio
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadButton', // 컴포넌트 이름
    data() {
      return {
        fileUrl: require('@/assets/주현성_포트폴리오.pdf') // PPT 파일 경로
      };
    }
  };
  </script>
  
  <style scoped>
  .download-button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-color: #000000;
  }
  
  .download-button {
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .download-button:hover {
    background-color: #f0f0f0;
  }
  </style>
  