import { NavbarConfigType, ServiceConfigType, WorkConfigType } from "./types";

export const navbarConfig: NavbarConfigType[] = [
  {
    id: 1,
    title: "Home",
    path: "#Home"
  },
  {
    id: 2,
    title: "Services",
    path: "#Service"
  },
  {
    id: 3,
    title: "What We Do",
    path: "#How-we-work"
  },
  {
    id: 4,
    title: "Book A Call",
    path: "#Get-in-touch"
  },
];

export const serviceConfig: ServiceConfigType[] = [
  {
    id: 1,
    title: "Social Media Management",
  },
  {
    id: 2,
    title: "Social Media Marketing",
  },
  {
    id: 3,
    title: "Ads Campaign",
  },
  {
    id: 4,
    title: "Content Creation",
  },
];

export const workConfig: WorkConfigType[] = [
  {
    id: 1,
    title: "Done For You",
    description: [
      "We create the strategy.",
      "We create the campaigns.",
      "We create its media content(s).",
      "We collect data & optimize.",
      "We scale to unseen heights.",
      "We deliver a breathtaking ROI.",
      "We take care of everything. from A-Z.",
      "You sit back and enjoy bi-weekly sales reports."
    ]
  },
  {
    id: 2,
    title: "Done For You",
    description: [
      "Premium ad campaigns & scaling.",
      "Sit-down with your team.",
      "Instruct you on how to scale and maintain it in the future.",
      "Gives your team great insights.",
      "Consulting",
      "In-person workshops last from 2 to 3 days, depending on your individual needs",
    ]
  },
];