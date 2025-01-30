import { X as attr, T as pop, Q as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="max-w-2xl mx-auto py-8 px-4 text-center bg-white shadow-lg rounded-lg"><h1 class="text-2xl font-bold mb-4 text-gray-800">Консультации онлайн</h1> <p class="text-lg font-medium mb-6 text-gray-600"><strong>Стоимость 55 минут:</strong> 8000₽ / 90$ / 90€</p> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/contacts`, void 0))}><button type="button" class="bg-[#DDC8C4] hover:bg-[#C5A9A1] text-gray500 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">Записаться</button></a></div>`;
  pop();
}
export {
  _page as default
};
