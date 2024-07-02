export const menuData = [
    {
        id: 1,
        name: "Dashboard",
        url: "",
        isSubmenu: false

    },
    {
        id: 2,
        name: "Pages",
        isSubmenu: true,
        submenus: [
            { id: 22, name: "All Pages", url: "/all-pages" },
            { id: 23, name: "Create Page", url: "/create-page" },
        ]
    },
    {
        id: 3,
        name: "Posts",
        isSubmenu: true,
        submenus: [
            { id: 22, name: "All Posts", url: "/all-posts" },
            { id: 23, name: "Create Post", url: "/create-post" },
        ]
    },
    {
        id: 4,
        name: "Menu",
        isSubmenu: true,
        submenus: [
            { id: 22, name: "All Menu", url: "/all-Menus" },
            { id: 23, name: "Create Menu", url: "/create-menu" },
        ]
    },
    {
        id: 5,
        name: "Category",
        isSubmenu: true,
        submenus: [
            { id: 22, name: "All Category", url: "/all-categories" },
            { id: 23, name: "Create Category", url: "/create-category" },
        ]
    },
];