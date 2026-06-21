import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const getRouterBasepath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const { pathname } = new URL(import.meta.env.BASE_URL, window.location.href);
  return pathname.replace(/\/$/, "") || "/";
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: getRouterBasepath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
