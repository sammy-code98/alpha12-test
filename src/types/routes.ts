export const SidebarRoutes  = {
    home: "/",
    events: "/events",
    speakers:"/speakers",
    reports:"/reports",
    notification:"/notification",
    messages:"/messages",
    settings:"/settings",


}

export type  SidebarRoutes = (typeof SidebarRoutes)[keyof typeof SidebarRoutes]