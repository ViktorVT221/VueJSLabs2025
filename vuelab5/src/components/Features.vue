<template>
  <section class="features">
    <div class="container">
      <h2 class="title">Особливості TrainX</h2>

      <div class="grid">
        <div class="item">
          <span class="icon">💪</span>
          <h3>Персональні тренування</h3>
          <p>Ти отримуєш індивідуальний план, адаптований під твої цілі.</p>
        </div>

        <div class="item">
          <span class="icon">📊</span>
          <h3>Контроль прогресу</h3>
          <p>Система автоматично аналізує твої результати.</p>
        </div>

        <div class="item">
          <span class="icon">⚡</span>
          <h3>Швидкий старт</h3>
          <p>Пройди простий тест і отримай свій план вже через 30 секунд.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 80px 0;
}

.container {
  width: min(1100px, 90%);
  margin: auto;
}

.title {
  font-size: 32px;
  margin-bottom: 50px;
  font-weight: 700;
}

.grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.item {
  padding: 25px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
  text-align: center;
}

.icon {
  display: block;
  font-size: 32px;
  margin-bottom: 12px;
}
</style>
