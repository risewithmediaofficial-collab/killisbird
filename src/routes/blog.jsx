import { jsx } from "react/jsx-runtime";
import { createFileRoute, Outlet } from "@tanstack/react-router";
const Route = createFileRoute("/blog")({
  component: BlogLayout,
});
function BlogLayout() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
export { Route };
