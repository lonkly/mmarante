import { W as ensure_array_like, X as attr, T as pop, Q as push, a9 as stringify } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index2.js";
import "photoswipe/lightbox";
function _page($$payload, $$props) {
  push();
  let images = [];
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="gallery-container svelte-1gn20mu"><div class="masonry svelte-1gn20mu" id="masonry-gallery">`;
  if (images.length) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(images);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { src, title, width, height, loaded } = each_array[$$index];
      $$payload.out += `<a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(src, void 0))} class="masonry-item svelte-1gn20mu"${attr("title", title)}${attr("data-pswp-width", width || 800)}${attr("data-pswp-height", height || 600)}><img${attr("src", src)}${attr("alt", title)} loading="lazy"${attr("class", `svelte-1gn20mu ${stringify([loaded ? "loaded" : ""].filter(Boolean).join(" "))}`)}></a>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Loading images...</p>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
