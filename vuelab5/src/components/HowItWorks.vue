<template>
  <section class="hiw">
    <div class="container">
      <h2 class="title">Як це працює?</h2>

      <div class="steps">
        <div class="step">
          <span class="number">1</span>
          <h3>Заповнюєш анкету</h3>
          <p>Вказуєш вік, рівень підготовки та бажаний результат.</p>
        </div>

        <div class="step">
          <span class="number">2</span>
          <h3>Отримуєш план</h3>
          <p>Система генерує індивідуальну програму тренувань.</p>
        </div>

        <div class="step">
          <span class="number">3</span>
          <h3>Тренуєшся правильно</h3>
          <p>Виконуєш вправи та відмічаєш виконання — план адаптується автоматично.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiw {
  padding: 80px 0;
  background: #f5f8ff;
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

.steps {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.step {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
}

.number {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
