import { X as attr, T as pop, Q as push } from "../../chunks/index.js";
import { g as getTranslationFunctions } from "../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="max-w-6xl mx-auto py-8 px-4"><div class="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-10 items-start"><div class="flex-1 max-w-sm lg:max-w-md"><img src="/images/other/photo.jpg" alt="Мария Маранте" class="w-full h-auto object-cover rounded-lg shadow-lg"></div> <div class="flex-1 max-w-xl text-gray-700"><h1 class="text-4xl font-bold mb-4">Мария Маранте</h1> <h6 class="text-lg font-semibold">Клинический психолог</h6> <h6 class="text-lg font-semibold">Сексолог</h6> <h6 class="text-lg font-semibold">Европейский EMDR-практик</h6> <h6 class="text-lg font-semibold">КПТ и IFS терапевт</h6> <h6 class="text-lg font-semibold">Член Национальной Ассоциации EMDR</h6> <h6 class="text-lg font-semibold">Член Ассоциации когнитивно-поведенческой психотерапии АКПП</h6> <h6 class="text-lg font-semibold">Член Ассоциации Сексологов</h6> <p class="mt-4 text-base leading-relaxed">Привет! Я Мария — клинический психолог и сексолог.
        Вместе мы сможем разобраться в ваших чувствах, вернуть баланс и справиться с тревогой,
        стрессом или прошлыми травмами. Я использую современные подходы, такие как EMDR,
        когнитивно-поведенческую терапию и IFS, чтобы помочь вам лучше понять себя и улучшить
        качество жизни. Моя цель — поддержать вас на пути к личным изменениям. <br> Давайте начнем этот путь вместе!</p> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/client`, void 0))} class="inline-block mt-5 mb-10 bg-primary text-gray-700 px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-primary-light transition">Записаться</a></div></div></div>`;
  pop();
}
export {
  _page as default
};
