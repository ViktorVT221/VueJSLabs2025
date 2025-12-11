<template>
  <section class="testimonials">
    <h2 class="title">Відгуки клієнтів</h2>

    <div class="testimonials-grid">
      <div class="testimonial">
        <p class="text">"Супер сервіс! Дуже сподобалось."</p>
        <h4 class="author">— Андрій</h4>
      </div>

      <div class="testimonial">
        <p class="text">"Швидко, якісно, професійно."</p>
        <h4 class="author">— Марина</h4>
      </div>

      <div class="testimonial">
        <p class="text">"Буду рекомендувати друзям."</p>
        <h4 class="author">— Олег</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
};
</script>

<style scoped>
.testimonials {
  padding: 60px 20px;
  background: #fff;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.testimonial {
  background: #f3f3f3;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.text {
  font-style: italic;
  margin-bottom: 10px;
}

.author {
  font-weight: bold;
}
</style>
