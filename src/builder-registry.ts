import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/cta/index")),
  {
    name: "Cta",
    inputs: [
      {
        name: "title",
        type: "text",
        defaultValue:
          "Start Your Journey Today! Explore New Adventures and Create Lasting Memories.",
      },
      { name: "label", type: "text", defaultValue: "join the commuinity" },
      { name: "href", type: "url", defaultValue: "/contact" },
      { name: "target", type: "text", defaultValue: "_blank" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/blogs/index")),
  {
    name: "Blog",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/features/index")),
  {
    name: "Features",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/hero/index")),
  {
    name: "hero",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/meetTeam/index")),
  {
    name: "meetTeam",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Newsletter/index")),
  {
    name: "Newsletter",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Statsistics/index")),
  {
    name: "Statsistics",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/testimonial/index")),
  {
    name: "testimonial",
    inputs: [
      { name: "title", type: "text" },
      { name: "button.label", type: "text" },
      { name: "button.href", type: "url" },
      { name: "button.target", type: "text" }, // Match "button.target" from ctaProps
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/about/about")),
  {
    name: "About",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/contactUs")),
  {
    name: "Contact",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/blogDetails")),
  {
    name: "BlogDetails",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/companies")),
  {
    name: "Company",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/features")),
  {
    name: "Features",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/hero")),
  {
    name: "HeroSection",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/pricing")),
  {
    name: "Pricing",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/services/services")),
  {
    name: "TourServicesCard",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/newsletter/newsletter")),
  {
    name: "Newsletter",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/theme/testimonial/testimonial")),
  {
    name: "Testimonial",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/blogListing")),
  {
    name: "BlogListing",
  }
);
