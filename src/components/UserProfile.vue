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
      profileImage: require('@/assets/profile.png'), // 프로필 이미지 경로
      name: '포기하지 않는 개발자 주현성입니다!',
      bio: '개발자에게 가장 중요한 것은 새로운 것을 배우고 적응하는 능력이라고 생각합니다. 끊임없는 노력과 지속적인 학습을 통해 신뢰받는 개발자가 되고 싶습니다. 언제나 멈추지 않는 자세로 미래를 준비하는 개발자가 되겠습니다.'
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');

.profile {
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center; /* 중앙 정렬 */
  padding: 2rem;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-family: 'Poppins', sans-serif; /* 전체에 적용 */
}

.profile-image-wrapper {
  margin-bottom: 1rem; /* 사진과 소개글 사이에 여백 추가 */
}

.profile-image {
  margin-top: 2rem;
  width: 213px;
  height: 213px;
  border-radius: 50%; /* 동그란 이미지 */
  background: linear-gradient(0deg, #ff8600 0%, #8000ff 99%);
  object-fit: cover;
}

.profile-details {
  text-align: center; /* 텍스트 중앙 정렬 */
}

.profile-details h1 {
  margin-top: 1rem;
  font-size: 50px;
  color: white;
  font-weight: 900; /* extra bold */
}

.profile-details p {
  font-size: 18px;
  color: white;
  line-height: 1.5;
  margin-top: 0.5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  font-weight: 200; /* light */
}
</style>
