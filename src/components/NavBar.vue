<template>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li class="navbar-item" v-for="(item, index) in menuItems" :key="index">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        menuItems: [
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' },
          { name: 'Services', link: '/services' },
          { name: 'Contact', link: '/contact' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    position: fixed;  /* 고정된 위치 */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;  /* 다른 요소보다 위에 오도록 설정 */
    font-family: 'Plus Jakarta Sans', sans-serif;  /* 폰트 적용 */
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 3rem;
    margin: 0;
    padding: 0;
    justify-content: center;  /* 메뉴 항목을 가운데 정렬 */
  }
  
  .navbar-item a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar-item a:hover {
    color: #ff6600;
  }
  </style>
  