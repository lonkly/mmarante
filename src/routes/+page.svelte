<script>
  import SEO from '$lib/SEO.svelte';
</script>

<SEO 
  title="Главная"
  description="Мария Маранте - клинический психолог, сексолог, EMDR-практик. Профессиональная помощь при тревоге, стрессе, травмах. Онлайн-консультации."
  keywords="Мария Маранте, психолог Москва, сексолог, EMDR терапия, КПТ терапевт, IFS терапия, онлайн консультация психолога"
/>

<div class="max-w-6xl mx-auto py-8 px-4">
  <!-- White card container -->
  <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-10 items-start">
    <!-- Photo Section -->
    <div class="flex-1 max-w-sm lg:max-w-md">
      <img
        src="/images/other/photo.jpg"
        alt="Мария Маранте"
        class="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Text Section -->
    <div class="flex-1 max-w-xl text-gray-700">
      <h1 class="text-4xl font-bold mb-4">Мария Маранте</h1>
      <ul class="list-none space-y-1">
        <li class="text-lg font-semibold">Клинический психолог</li>
        <li class="text-lg font-semibold">Сексолог</li>
        <li class="text-lg font-semibold">Европейский EMDR-практик</li>
        <li class="text-lg font-semibold">КПТ и IFS терапевт</li>
        <li class="text-lg font-semibold">Член Национальной Ассоциации EMDR</li>
        <li class="text-lg font-semibold">
          Член Ассоциации когнитивно-поведенческой психотерапии АКПП
        </li>
        <li class="text-lg font-semibold">Член Ассоциации Сексологов</li>
      </ul>

      <p class="mt-4 text-base leading-relaxed">
        Привет! Я Мария — клинический психолог и сексолог.
        Вместе мы сможем разобраться в ваших чувствах, вернуть баланс и справиться с тревогой,
        стрессом или прошлыми травмами. Я использую современные подходы, такие как EMDR,
        когнитивно-поведенческую терапию и IFS, чтобы помочь вам лучше понять себя и улучшить
        качество жизни. Моя цель — поддержать вас на пути к личным изменениям.
        <br>
        Давайте начнем этот путь вместе!
      </p>

      <a
        href="/client"
        class="inline-block mt-5 mb-10 bg-primary-light hover:bg-primary-light text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md  transition-all duration-300 transform hover:scale-120"
      >
        Записаться
      </a>
    </div>
  </div>
</div>
