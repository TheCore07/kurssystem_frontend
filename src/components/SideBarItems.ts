import type { SideBarItem } from "@/types/SideBar.ts";
import { House, BookUser, Users, ClipboardClock, GraduationCap } from "lucide-react";

export const SideBarItems: SideBarItem[] = [
    { title: "Dashboard", path: "/", icon: House, group: "Allgemein" },
    { title: "Kundenverwaltung", path: "/customers", icon: BookUser, group: "Verwaltung" },
    { title: "Teilnehmerverwaltung", path: "/participants", icon: Users, group: "Verwaltung" },
    { title: "Kurse", path: "/courses", icon: GraduationCap, group: "Verwaltung" },
    { title: "Termine", path: "/appointments", icon: ClipboardClock, group: "Planung" },
];
