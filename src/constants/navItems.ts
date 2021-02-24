const navItems = [
  { name: "Home", link: "/", children: [] },
  {
    name: "About",
    link: "",
    children: [
      { name: "My Journey", link: "/about/my-journey", children: [] },
      { name: "Certifications", link: "/about/certifications", children: [] },
    ],
  },
  { name: "Client Testimonials", link: "/client-testimonials", children: [] },
  { name: "Online Coaching", link: "/online-coaching", children: [] },
  { name: "Contact", link: "/contact", children: [] },
];

export default navItems;
