<script>
  let selectedTag = null;

  const topics = [
    {
      title: 'Травма',
      details: [
        'Посттравматическое стрессовое расстройство (ПТСР)',
        'Комплексное посттравматическое стрессовое расстройство (КПТСР)',
        'Насилие (Сексуальное, физическое, эмоциональное)',
        'Травма привязанности',
        'Травматические, беспокоящие воспоминания'
      ]
    },
    {
      title: 'Тревога',
      details: [
        'Генерализованное тревожное расстройство',
        'Панические атаки/паническое расстройство',
        'Фобии',
        'Ночные кошмары',
        'Обсессивно-компульсивное расстройство (ОКР)'
      ]
    },
    {
      title: 'Сексология',
      details: [
        'Снижение или отсутсвие сексуального влечения',
        'Сложности в достижении оргазма',
        'Синдром тревожного ожидания сексуальной неудачи (СТОСН)',
        'Вагинизм, Диспареуния',
        'Сексуальные страхи',
        'Неудовлетворенность в сексуальных отношениях',
        'Ревность и измена',
        'Порнозависимость',
        'и другие'
      ]
    },
    {
      title: 'Расстройства пищевого поведения',
      details: [
        'Нервная анорексия',
        'Нервная булимия',
        'Орторексия',
        'Приступообразное переедание',
        'Компульсивное переедание',
        'Очистительное расстройство',
        'Синдром ночной еды',
        'Избегающее/Ограничительное расстройство приема пищи',
        '"Диета-срыв"'
      ]
    },
    {
      title: 'Расстройства привязанности',
      details: ['Помощь в сложных отношениях, связанных с расстройствами привязанности.']
    },
    {
      title: 'Депрессия',
      details: ['Работа с клиентами для восстановления радости и наслаждения жизнью.']
    },
    {
      title: 'СДВГ',
      details: ['Помощь клиентам с синдромом дефицита внимания с гиперактивностью (СДВГ).']
    }
  ];

  function selectTag(tag) {
    selectedTag = selectedTag === tag ? null : tag;
  }
</script>

<div class="container mx-auto max-w-4xl py-10 px-6">
  <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
    Работаю со следующими запросами:
  </h1>

  <div class="flex flex-wrap gap-4 justify-center mb-8">
    {#each topics as topic}
      <button
              on:click={() => selectTag(topic)}
              class="px-4 py-2 rounded-full bg-[#DDC8C4] text-gray-800 hover:bg-[#C5A9A1] hover:text-white transition-all duration-300 text-sm md:text-base font-medium"
      >
        {topic.title}
      </button>
    {/each}
  </div>

  {#if selectedTag}
    <div
            class="p-6 bg-white shadow-lg rounded-lg transition-opacity duration-300"
            style="opacity: {selectedTag ? 1 : 0}"
    >
      <h2 class="text-2xl font-semibold mb-4 text-[#DDC8C4]">{selectedTag.title}</h2>
      <ul class="list-disc pl-5 text-gray-700">
        {#each selectedTag.details as detail}
          <li class="mb-2">{detail}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
