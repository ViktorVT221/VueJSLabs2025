<template>
  <section id="faq" class="py-16 max-w-4xl mx-auto px-6">
    <h2 class="text-3xl font-bold mb-10">FAQ — Часті питання</h2>

    <Accordion>
      <AccordionTab header="Як працює персональна програма?">
        <p>
          Ти проходиш коротке опитування — ми генеруємо тренувальний план під твої цілі:
          маса, сила, рельєф або витривалість.
        </p>
      </AccordionTab>

      <AccordionTab header="Чи можна змінювати рівень складності?">
        <p>
          Так. Програма автоматично підлаштовується під твій прогрес і оновлюється щотижня.
        </p>
      </AccordionTab>

      <AccordionTab header="Чи підходить TrainX новачкам?">
        <p>
          Звісно! Є стартовий рівень, який повільно підводить тебе до більш інтенсивних тренувань.
        </p>
      </AccordionTab>

      <AccordionTab header="Чи потрібне спеціальне обладнання?">
        <p>
          Ні. Є тренування з власною вагою, які можна виконувати вдома або на вулиці.
        </p>
      </AccordionTab>
    </Accordion>
  </section>
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style scoped>
.faq {
  padding-left: 80px; /* зміщує весь FAQ правіше */
}

</style>