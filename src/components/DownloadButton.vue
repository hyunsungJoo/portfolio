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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .download-button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-color: #000000;
  }
  
  .download-button {
    width: 170px; /* 너비 설정 */
    height: 30px; /* 높이 설정 */
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif; /* Poppins 폰트 적용 */
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .download-button:hover {
    background-color: #f0f0f0;
  }
  </style>
  