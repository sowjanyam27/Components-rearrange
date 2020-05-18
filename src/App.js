// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Section from "./components/Section/Section";

export default function App() {
  const headerContent = [
    {
      badgeTitle: "Do you want to",
      compTitle: "Learn how to code",
      description:
        "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    },
    {
      badgeTitle: "Courses",
      compTitle: "Our Courses",
      description:
        "We have created courses to help you learn, with easy to followsteps and some sparks of fun!",
    },
    {
      badgeTitle: "Why?",
      compTitle: "Why do we do this",
      description:
        "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun whendoing it together.",
    },
  ];
  const items = [
    [
      {
        source: "https://learntocodetogether.nl/assets/team.svg",
        compTitle: "",
        title: "Get help from experienced developers",
      },
      {
        source: "https://learntocodetogether.nl/assets/community.svg",
        compTitle: "",
        title: "Learn &amp; share with our community",
      },
      {
        source: "https://learntocodetogether.nl/assets/personal-speed.svg",
        compTitle: "",
        title: "Personal &amp; at your own speed",
      },
    ],
    [
      {
        source: "https://learntocodetogether.nl/assets/expand-horizon.svg",
        compTitle: "",
        title: "Learn new skills and expand your horizon",
      },
      {
        source: "https://learntocodetogether.nl/assets/developers.svg",
        compTitle: "",
        title: "Follow courses created by experienced developers",
      },
      {
        source: "https://learntocodetogether.nl/assets/step-by-step.svg",
        compTitle: "",
        title: "Fun, hands on and easy to follow",
        inlineStyle: { width: "200px" },
      },
    ],
    [
      {
        source: "https://learntocodetogether.nl/assets/technology.svg",
        compTitle: "Technology",
        title:
          "We love to experiment and create awesome stuff from the comfort of our couch",
      },
      {
        source: "https://learntocodetogether.nl/assets/community.svg",
        compTitle: "People",
        title:
          "It’s always fun to do things together, the excitement and the collaborations",
      },
      {
        source: "https://learntocodetogether.nl/assets/personal-speed.svg",
        compTitle: "Teaching",
        title: "We like to learn and to teach others the stuff we know.",
      },
    ],
  ];

  const classes = [
    "section section-what-usp",
    "section section-courses-usp",
    "section section-why-usp",
  ];
  return (
    <div>
      <Header />
      <div className="section-header-spacer"></div>

      <div className="content">
        <Section
          sectionClass={classes[0]}
          headerContent={headerContent[0]}
          items={items[0]}
        />
        <Section
          sectionClass={classes[1]}
          headerContent={headerContent[1]}
          items={items[1]}
        />
        <Section
          sectionClass={classes[2]}
          headerContent={headerContent[2]}
          items={items[2]}
        />
      </div>

      <Footer />
    </div>
  );
}
