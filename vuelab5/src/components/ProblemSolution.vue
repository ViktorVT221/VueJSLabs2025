<template>
  <section class="ps-section">
    <div class="container">
      <h2 class="title">Проблема — Рішення</h2>

      <div class="grid">
        <div class="block">
          <h3>Проблема</h3>
          <p>
            Більшість людей не знають, з чого почати тренування — які вправи робити,
            як поєднувати навантаження та скільки разів тренуватися.
          </p>
        </div>

        <div class="block solution">
          <h3>Рішення</h3>
          <p>
            TrainX формує персональний план тренувань на основі твоїх цілей:
            сили, витривалості чи схуднення — і підлаштовує його під твій прогрес.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ps-section {
  padding: 80px 0;
  background: #fafafa;
}

.container {
  width: min(1100px, 90%);
  margin: auto;
}

.title {
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 700;
}

.grid {
  display: grid;
  gap: 30px;
}

.block {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
}

.block h3 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
}

.solution {
  border-left: 4px solid #3b82f6;
}
</style>
