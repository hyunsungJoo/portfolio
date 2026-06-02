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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  background-color: var(--bg-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease;
}

.profile-image-wrapper {
  margin-bottom: 2.5rem;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-cyan) 0%, var(--color-orange) 100%);
  object-fit: cover;
  border: 3px solid var(--border-color);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-details {
  text-align: center;
  max-width: 800px;
}

.profile-details h1 {
  margin-top: 0;
  font-size: 48px;
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.profile-details p {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
  transition: color 0.3s ease;
}
</style>
