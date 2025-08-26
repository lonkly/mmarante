import { i as i18n } from "./i18n.js";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const handleParaglide = i18n.handle();
const handleGeoBlocking = async ({ event, resolve }) => {
  const country = event.request.headers.get("CF-IPCountry") || event.request.headers.get("X-Country") || event.request.headers.get("X-Nf-Country-Code");
  if (country === "US" || country === "KZ") {
    return new Response("", {
      status: 200,
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
  return resolve(event);
};
const handle = sequence(handleGeoBlocking, handleParaglide);
export {
  handle
};
