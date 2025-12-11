<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="hero-title">Будуй свою форму з нами</h1>
        <p class="hero-subtitle">
          Персональні тренування, що працюють. Твій шлях до сили, витривалості та здоров’я.
        </p>

        <button class="hero-btn">Почати зараз</button>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <h2 class="section-title">Наші переваги</h2>

      <div class="features-grid">

        <div class="feature-card">
          <i class="pi pi-star"></i>
          <h3>Гарантований прогрес</h3>
          <p>Індивідуальні програми, які адаптуються під твій рівень та цілі.</p>
        </div>

        <div class="feature-card">
          <i class="pi pi-bolt"></i>
          <h3>Висока ефективність</h3>
          <p>Науково-базований підхід для максимально швидкого результату.</p>
        </div>

        <div class="feature-card">
          <i class="pi pi-heart"></i>
          <h3>Підтримка здоров’я</h3>
          <p>Тренування, які зміцнюють тіло, а не виснажують його.</p>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* HERO SECTION */
.hero {
  position: relative;
  background: url('/hero-bg.jpg') center/cover no-repeat;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(2px);
}

.hero-content {
  position: relative;
  max-width: 800px;
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: 3.3rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.hero-btn {
  background: #007ad9;
  border: none;
  padding: 14px 34px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.25s;
}

.hero-btn:hover {
  background: #005fa3;
  transform: translateY(-2px);
}

/* FEATURES SECTION */
.features {
  padding: 70px 25px;
  text-align: center;
  background: #f8f9fb;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.feature-card {
  padding: 30px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

.feature-card i {
  font-size: 3rem;
  color: #007ad9;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
}
</style>
