import { W as ensure_array_like, a7 as escape_html } from "../../../chunks/index.js";
function _page($$payload) {
  const topics = [
    {
      title: "Травма",
      details: [
        "Посттравматическое стрессовое расстройство (ПТСР)",
        "Комплексное посттравматическое стрессовое расстройство (КПТСР)",
        "Насилие (Сексуализированное, физическое, эмоциональное)",
        "Травма привязанности",
        "Травматические, беспокоящие воспоминания"
      ]
    },
    {
      title: "Тревога",
      details: [
        "Генерализованное тревожное расстройство",
        "Панические атаки/паническое расстройство",
        "Фобии",
        "Ночные кошмары",
        "Обсессивно-компульсивное расстройство (ОКР)"
      ]
    },
    {
      title: "Сексология",
      details: [
        "Снижение или отсутсвие сексуального влечения",
        "Сложности в достижении оргазма",
        "Синдром тревожного ожидания сексуальной неудачи (СТОСН)",
        "Вагинизм, Диспареуния",
        "Сексуальные страхи",
        "Неудовлетворенность в сексуальных отношениях",
        "Ревность и измена",
        "Порнозависимость",
        "и другие"
      ]
    },
    {
      title: "Расстройства пищевого поведения",
      details: [
        "Нервная анорексия",
        "Нервная булимия",
        "Орторексия",
        "Приступообразное переедание",
        "Компульсивное переедание",
        "Очистительное расстройство",
        "Синдром ночной еды",
        "Избегающее/Ограничительное расстройство приема пищи",
        '"Диета-срыв"'
      ]
    },
    {
      title: "Расстройства привязанности",
      details: [
        "Помощь в сложных отношениях, связанных с расстройствами привязанности."
      ]
    },
    {
      title: "Депрессия",
      details: [
        "Работа с клиентами для восстановления радости и наслаждения жизнью."
      ]
    },
    {
      title: "СДВГ",
      details: [
        "Помощь клиентам с синдромом дефицита внимания с гиперактивностью (СДВГ)."
      ]
    }
  ];
  const each_array = ensure_array_like(topics);
  $$payload.out += `<div class="max-w-5xl mx-auto py-8 px-4"><h1 class="text-3xl font-bold mb-8 text-center text-gray-800">Работаю со следующими запросами:</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let topic = each_array[$$index_1];
    const each_array_1 = ensure_array_like(topic.details);
    $$payload.out += `<div class="card bg-white shadow-lg rounded-lg p-6 svelte-18x3lrt"><h2 class="text-xl font-bold mb-4 text-gray-700">${escape_html(topic.title)}</h2> <ul class="list-disc pl-5 text-gray-700 text-sm space-y-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let detail = each_array_1[$$index];
      $$payload.out += `<li>${escape_html(detail)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  _page as default
};
