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
      fileUrl: '' // 초기값을 빈 문자열로 설정
    };
  },
  created() {
    this.fileUrl = this.getFileUrl();
  },
  methods: {
    getFileUrl() {
      return require('@/assets/주현성_포트폴리오.pdf').default;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.download-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--bg-primary);
  transition: background-color 0.3s ease;
}

.download-button {
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, var(--color-cyan) 0%, var(--color-cyan) 100%);
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(var(--color-cyan), 0.3);
  border: 1px solid var(--color-cyan);
}

.download-button:hover {
  background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange) 100%);
  border-color: var(--color-orange);
  box-shadow: 0 6px 20px rgba(var(--color-orange), 0.4);
  transform: translateY(-2px);
}
</style>
