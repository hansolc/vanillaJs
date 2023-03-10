import Home from "./pages/Home.js";
import Posts from "./pages/Posts.js";
import Settings from "./pages/Settings.js";
import NotFound from "./pages/NotFound.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
  ];

  const pageMatch = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  console.log(pageMatch);
  let matchPage = pageMatch.find((page) => page.isMatch);
  if (!matchPage) {
    matchPage = {
      isMatch: true,
      route: {
        path: "",
        view: NotFound,
      },
    };
  }
  const page = new matchPage.route.view();
  document.querySelector("#root").innerHTML = await page.getHtml();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});

window.addEventListener("popstate", () => {
  router();
});
