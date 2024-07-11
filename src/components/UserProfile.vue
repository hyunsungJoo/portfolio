<template>
  <div class="profile">
    <div class="profile-image-wrapper">
      <img :src="profileImage" alt="Profile Image" class="profile-image">
    </div>
    <div class="profile-details">
      <h1>{{ name }}</h1>
      <p>{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile', // 컴포넌트 이름
  data() {
    return {
      profileImage: require('@/assets/profile.jpg'), // 프로필 이미지 경로
      name: 'Your Name',
      bio: 'This is a brief introduction about yourself. You can write about your background, skills, and experiences.'
    };
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 중앙 정렬 */
  padding: 2rem;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.profile-image-wrapper {
  margin-bottom: 1rem; /* 사진과 소개글 사이에 여백 추가 */
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* 동그란 이미지 */
  object-fit: cover;
}

.profile-details {
  text-align: center; /* 텍스트 중앙 정렬 */
}

.profile-details h1 {
  margin: 0;
  font-size: 2rem;
  color: #333;
}

.profile-details p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  margin-top: 0.5rem;
}
</style>
