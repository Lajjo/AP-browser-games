import { c as slot, b as pop, p as push } from "../../chunks/index.js";
function Layout($$payload, $$props) {
  push();
  $$payload.out += `<!--[-->`;
  slot($$payload, $$props.children, {});
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Layout as default
};
