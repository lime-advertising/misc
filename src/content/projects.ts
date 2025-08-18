export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link?: string; // later for case study
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-commerce Starter (Demo)",
    blurb: "Fast, SEO-ready storefront with product grid and checkout flow.",
    tags: ["WordPress", "WooCommerce", "Design"],
    comingSoon: true,
  },
  {
    title: "Service Business Website",
    blurb: "Local SEO landing pages + analytics tracking and lead forms.",
    tags: ["WordPress", "SEO", "Analytics"],
    comingSoon: true,
  },
];
