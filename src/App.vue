<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <Profile /> <!-- 프로필 컴포넌트를 메뉴바 아래에 추가 -->
      <DownloadButton/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Profile from './components/UserProfile.vue' // Profile 컴포넌트 임포트
import DownloadButton from './components/DownloadButton.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Profile, // Profile 컴포넌트 등록
    DownloadButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  margin-top: 0px;  /* 메뉴바 높이 만큼 여백을 추가하여 내용이 메뉴바 아래에서 시작되도록 설정 */
}
</style>
