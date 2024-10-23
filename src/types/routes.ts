export const SidebarRoutes = {
  home: "/",
  events: "/events",
  speakers: "/speakers",
  reports: "/reports",
  notification: "/notification",
  messages: "/messages",
  settings: "/settings",
  profile: "/profile"
};

export type SidebarRoutes = (typeof SidebarRoutes)[keyof typeof SidebarRoutes];
