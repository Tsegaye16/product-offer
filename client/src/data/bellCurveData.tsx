import { Item, Link } from "../types";

interface BellCurveCategory {
  icon: string;
  color: string;
  textColor: string;
  items: Item[];
}

interface BellCurveData {
  [key: string]: BellCurveCategory;
}

const bellCurveData: BellCurveData = {
  Ideation: {
    icon: "/assets/icons/ideation.svg",
    color: "#fdc220",
    textColor: "#333",
    items: [
      {
        title: "Design",
        toolTipTitle: "Design Concepts",
        description:
          "Explore creative design solutions for innovative products.",
        links: [
          {
            title: "Design Example 1",
            description: "Case study on UI design",
            url: "https://example.com/design1",
          },
          {
            title: "Design Example 2",
            description: "Modern design trends",
            url: "https://example.com/design2",
          },
        ],
      },
      {
        title: "Technical Approach",
        toolTipTitle: "Technical Strategy",
        description: "Strategic planning for technical implementations.",
        links: [
          {
            title: "Tech Plan 1",
            description: "Scalable architecture",
            url: "https://example.com/tech1",
          },
        ],
      },
      {
        title: "Technical Architecture",
        toolTipTitle: "Architecture Solutions",
        description: "Robust and scalable system architectures.",
        links: [
          {
            title: "Arch Example",
            description: "Microservices architecture",
            url: "https://example.com/arch1",
          },
        ],
      },
      {
        title: "Technical Stack",
        toolTipTitle: "Tech Stack Selection",
        description: "Choosing the right technologies for your project.",
        links: [
          {
            title: "Stack Guide",
            description: "Best practices for stack",
            url: "https://example.com/stack1",
          },
        ],
      },
    ],
  },
  Design: {
    icon: "/assets/icons/design.svg",
    color: "#cf8935",
    textColor: "#FFFFFF",
    items: [
      {
        title: "UI/UX",
        toolTipTitle: "UI/UX Design",
        description: "User-friendly and visually appealing interfaces.",
        links: [
          {
            title: "UI Case Study",
            description: "Interactive UI prototype",
            url: "https://example.com/ui1",
          },
        ],
      },
      {
        title: "Rapid UX",
        toolTipTitle: "RUX (Rapid User Experience)",
        description:
          "A RUX challenge is a fast-paced design competition focused on user experience (UX) and UI design—typically over a short period (like 24–72 hours). It's used to rapidly explore ideas, design directions, or concept interfaces for a product or feature. Here are 2 example challenge links:",
        links: [
          {
            title:
              "RUX - 72HR Quintessential Home Buying Experience Design Concepts Challenge",
            description:
              "Develop a unified application to streamline the home buying process.",
            url: "https://example.com/ux1",
          },
          {
            title:
              "RUX - 72HR Vulcan Command Centre Portal Dashboard Design Challenge",
            description:
              "Design a command center interface for Vulcan's global operations.",
            url: "https://example.com/ux2",
          },
        ],
      },
      {
        title: "Concepts",
        toolTipTitle: "Design Concepts",
        description: "Innovative design ideas for your product.",
        links: [
          {
            title: "Concept Example",
            description: "Creative concept",
            url: "https://example.com/concept1",
          },
        ],
      },
      {
        title: "Wireframes",
        toolTipTitle: "Wireframe Design",
        description: "Blueprint for your application's structure.",
        links: [
          {
            title: "Wireframe Guide",
            description: "Wireframe best practices",
            url: "https://example.com/wireframe1",
          },
        ],
      },
      {
        title: "Design Systems",
        toolTipTitle: "Design Systems",
        description: "Consistent design components across platforms.",
        links: [
          {
            title: "Design System",
            description: "Scalable design system",
            url: "https://example.com/designsystem1",
          },
        ],
      },
      {
        title: "Digital Style Guides",
        toolTipTitle: "Style Guides",
        description: "Standardized design guidelines for consistency.",
        links: [
          {
            title: "Style Guide",
            description: "Digital style guide example",
            url: "https://example.com/styleguide1",
          },
        ],
      },
    ],
  },
  POCs: {
    icon: "/assets/icons/prototyping.svg",
    color: "#d34e3b",
    textColor: "#FFFFFF",
    items: [
      {
        title: "Minimum Viable Products",
        toolTipTitle: "MVP Development",
        description: "Build MVPs to validate your ideas quickly.",
        links: [
          {
            title: "MVP Example",
            description: "MVP case study",
            url: "https://example.com/mvp1",
          },
        ],
      },
      {
        title: "Rapid Prototypes",
        toolTipTitle: "Rapid Prototyping",
        description: "Fast prototype development for testing.",
        links: [
          {
            title: "Prototype Case",
            description: "Rapid prototype example",
            url: "https://example.com/prototype1",
          },
        ],
      },
      {
        title: "Clickable Prototypes",
        toolTipTitle: "Clickable Prototypes",
        description: "Interactive prototypes for user testing.",
        links: [
          {
            title: "Clickable Demo",
            description: "Interactive prototype",
            url: "https://example.com/clickable1",
          },
        ],
      },
    ],
  },
  "App Dev": {
    icon: "/assets/icons/appDev.svg",
    color: "#c1294f",
    textColor: "#FFFFFF",
    items: [
      {
        title: "IA",
        toolTipTitle: "Information Architecture",
        description: "Structured data organization for apps.",
        links: [
          {
            title: "IA Example",
            description: "Information architecture case",
            url: "https://example.com/ia1",
          },
        ],
      },
      {
        title: "IOT",
        toolTipTitle: "Internet of Things",
        description: "Connected device app development.",
        links: [
          {
            title: "IoT Case",
            description: "IoT application example",
            url: "https://example.com/iot1",
          },
        ],
      },
      {
        title: "AR/VR",
        toolTipTitle: "AR/VR Development",
        description: "Immersive augmented and virtual reality apps.",
        links: [
          {
            title: "AR/VR Demo",
            description: "AR/VR app example",
            url: "https://example.com/arvr1",
          },
        ],
      },
      {
        title: "AI/ML",
        toolTipTitle: "AI/ML Applications",
        description: "Intelligent apps with AI and ML integration.",
        links: [
          {
            title: "AI App Case",
            description: "AI-driven app",
            url: "https://example.com/aiml1",
          },
        ],
      },
      {
        title: "Blockchain",
        toolTipTitle: "Blockchain Apps",
        description: "Secure and decentralized app solutions.",
        links: [
          {
            title: "Blockchain Case",
            description: "Blockchain app example",
            url: "https://example.com/blockchain1",
          },
        ],
      },
      {
        title: "Web Apps",
        toolTipTitle: "Web Applications",
        description: "Scalable and responsive web applications.",
        links: [
          {
            title: "Web App Demo",
            description: "Web app case study",
            url: "https://example.com/webapp1",
          },
        ],
      },
      {
        title: "Mobile Apps",
        toolTipTitle: "Mobile Applications",
        description: "Cross-platform mobile app development.",
        links: [
          {
            title: "Mobile App Case",
            description: "Mobile app example",
            url: "https://example.com/mobileapp1",
          },
        ],
      },
      {
        title: "Modernization",
        toolTipTitle: "App Modernization",
        description: "Update legacy apps to modern standards.",
        links: [
          {
            title: "Modernization Guide",
            description: "App modernization case",
            url: "https://example.com/modernization1",
          },
        ],
      },
      {
        title: "Responsive Apps",
        toolTipTitle: "Responsive Applications",
        description: "Apps optimized for all devices.",
        links: [
          {
            title: "Responsive Demo",
            description: "Responsive app example",
            url: "https://example.com/responsive1",
          },
        ],
      },
    ],
  },
  APIs: {
    icon: "/assets/icons/apis.svg",
    color: "#c87d82",
    textColor: "#FFFFFF",
    items: [
      {
        title: "MOCK APIs",
        toolTipTitle: "Mock API Development",
        description: "Simulated APIs for testing and development.",
        links: [
          {
            title: "Mock API Example",
            description: "Mock API case study",
            url: "https://example.com/mockapi1",
          },
        ],
      },
      {
        title: "REST APIs",
        toolTipTitle: "REST API Development",
        description: "Scalable and flexible RESTful APIs.",
        links: [
          {
            title: "REST API Case",
            description: "REST API example",
            url: "https://example.com/restapi1",
          },
        ],
      },
      {
        title: "SOAP APIs",
        toolTipTitle: "SOAP API Development",
        description: "Structured and secure SOAP APIs.",
        links: [
          {
            title: "SOAP API Example",
            description: "SOAP API case study",
            url: "https://example.com/soapapi1",
          },
        ],
      },
      {
        title: "Web Services",
        toolTipTitle: "Web Services",
        description: "Interoperable web service solutions.",
        links: [
          {
            title: "Web Service Demo",
            description: "Web service example",
            url: "https://example.com/webservice1",
          },
        ],
      },
      {
        title: "Micro Services",
        toolTipTitle: "Microservices",
        description: "Modular and scalable microservices.",
        links: [
          {
            title: "Microservice Case",
            description: "Microservices example",
            url: "https://example.com/microservice1",
          },
        ],
      },
      {
        title: "JSON Structure",
        toolTipTitle: "JSON Data Structures",
        description: "Optimized JSON data formats.",
        links: [
          {
            title: "JSON Example",
            description: "JSON structure case",
            url: "https://example.com/json1",
          },
        ],
      },
      {
        title: "Data Connectors",
        toolTipTitle: "Data Connectors",
        description: "Seamless data integration connectors.",
        links: [
          {
            title: "Connector Demo",
            description: "Data connector example",
            url: "https://example.com/connector1",
          },
        ],
      },
      {
        title: "Spring Boot APIs",
        toolTipTitle: "Spring Boot APIs",
        description: "Robust APIs using Spring Boot.",
        links: [
          {
            title: "Spring Boot Case",
            description: "Spring Boot API example",
            url: "https://example.com/springboot1",
          },
        ],
      },
    ],
  },
  Testing: {
    icon: "/assets/icons/testing.svg",
    color: "#57eac1",
    textColor: "#333",
    items: [
      {
        title: "API Testing",
        toolTipTitle: "API Testing",
        description: "Comprehensive API functionality testing.",
        links: [
          {
            title: "API Test Case",
            description: "API testing example",
            url: "https://example.com/apitest1",
          },
        ],
      },
      {
        title: "UX Testing",
        toolTipTitle: "UX Testing",
        description: "User experience validation and testing.",
        links: [
          {
            title: "UX Test Demo",
            description: "UX testing case study",
            url: "https://example.com/uxtest1",
          },
        ],
      },
      {
        title: "Unit Testing",
        toolTipTitle: "Unit Testing",
        description: "Testing individual components for reliability.",
        links: [
          {
            title: "Unit Test Case",
            description: "Unit testing example",
            url: "https://example.com/unittest1",
          },
        ],
      },
      {
        title: "Monkey Testing",
        toolTipTitle: "Monkey Testing",
        description: "Randomized stress testing for robustness.",
        links: [
          {
            title: "Monkey Test",
            description: "Monkey testing example",
            url: "https://example.com/monkeytest1",
          },
        ],
      },
      {
        title: "Usability Testing",
        toolTipTitle: "Usability Testing",
        description: "Testing for user-friendly interfaces.",
        links: [
          {
            title: "Usability Case",
            description: "Usability testing example",
            url: "https://example.com/usability1",
          },
        ],
      },
      {
        title: "Test Case Creation",
        toolTipTitle: "Test Case Creation",
        description: "Structured test case development.",
        links: [
          {
            title: "Test Case Demo",
            description: "Test case example",
            url: "https://example.com/testcase1",
          },
        ],
      },
      {
        title: "Real World Testing",
        toolTipTitle: "Real World Testing",
        description: "Testing in real-world scenarios.",
        links: [
          {
            title: "Real World Case",
            description: "Real-world testing example",
            url: "https://example.com/realworld1",
          },
        ],
      },
      {
        title: "Exploratory Testing",
        toolTipTitle: "Exploratory Testing",
        description: "Ad-hoc testing for edge cases.",
        links: [
          {
            title: "Exploratory Case",
            description: "Exploratory testing example",
            url: "https://example.com/exploratory1",
          },
        ],
      },
      {
        title: "Accessibility Testing",
        toolTipTitle: "Accessibility Testing",
        description: "Ensuring apps are accessible to all users.",
        links: [
          {
            title: "Accessibility Demo",
            description: "Accessibility testing case",
            url: "https://example.com/accessibility1",
          },
        ],
      },
      {
        title: "Unstructured Testing",
        toolTipTitle: "Unstructured Testing",
        description: "Flexible and creative testing approaches.",
        links: [
          {
            title: "Unstructured Case",
            description: "Unstructured testing example",
            url: "https://example.com/unstructured1",
          },
        ],
      },
    ],
  },
  "Dashboard & Visualizations": {
    icon: "/assets/icons/dashboardData.svg",
    color: "#3ddce9",
    textColor: "#333",
    items: [
      {
        title: "PowerBI, Tableau, Quick and more",
        toolTipTitle: "Data Visualization Tools",
        description: "Leverage leading tools for data visualization.",
        links: [
          {
            title: "PowerBI Demo",
            description: "PowerBI dashboard example",
            url: "https://example.com/powerbi1",
          },
        ],
      },
      {
        title: "New Dashboard",
        toolTipTitle: "New Dashboard Creation",
        description: "Custom dashboards for data insights.",
        links: [
          {
            title: "Dashboard Case",
            description: "New dashboard example",
            url: "https://example.com/dashboard1",
          },
        ],
      },
      {
        title: "Improve/Redesign Existing Dashboard",
        toolTipTitle: "Dashboard Redesign",
        description: "Enhance existing dashboards for better usability.",
        links: [
          {
            title: "Redesign Case",
            description: "Dashboard redesign example",
            url: "https://example.com/redesign1",
          },
        ],
      },
    ],
  },
  "Data Science": {
    icon: "/assets/icons/dataScience.svg",
    color: "#11aff3",
    textColor: "#FFFFFF",
    items: [
      {
        title: "Prediction and Forecasting",
        toolTipTitle: "Predictive Analytics",
        description: "Accurate predictions for business outcomes.",
        links: [
          {
            title: "Prediction Case",
            description: "Forecasting example",
            url: "https://example.com/prediction1",
          },
        ],
      },
      {
        title: "Computer Vision",
        toolTipTitle: "Computer Vision",
        description: "Advanced image and video analysis.",
        links: [
          {
            title: "Vision Demo",
            description: "Computer vision example",
            url: "https://example.com/vision1",
          },
        ],
      },
      {
        title: "Data Engineering",
        toolTipTitle: "Data Engineering",
        description: "Robust data pipelines and processing.",
        links: [
          {
            title: "Data Eng Case",
            description: "Data engineering example",
            url: "https://example.com/dataeng1",
          },
        ],
      },
      {
        title: "Natural Language Processing (NLP)",
        toolTipTitle: "NLP Solutions",
        description: "Advanced text analysis and processing.",
        links: [
          {
            title: "NLP Case",
            description: "NLP application example",
            url: "https://example.com/nlp1",
          },
        ],
      },
      {
        title: "Machine Learning",
        toolTipTitle: "Machine Learning Models",
        description: "Custom ML models for your data.",
        links: [
          {
            title: "ML Model Demo",
            description: "Machine learning example",
            url: "https://example.com/ml1",
          },
        ],
      },
      {
        title: "Optimization Problems",
        toolTipTitle: "Optimization Solutions",
        description: "Solve complex optimization challenges.",
        links: [
          {
            title: "Optimization Case",
            description: "Optimization example",
            url: "https://example.com/optimization1",
          },
        ],
      },
      {
        title: "Reinforcement Learning",
        toolTipTitle: "Reinforcement Learning",
        description: "Dynamic learning for decision-making.",
        links: [
          {
            title: "RL Case",
            description: "Reinforcement learning example",
            url: "https://example.com/rl1",
          },
        ],
      },
      {
        title: "Time Series and Signal Analysis",
        toolTipTitle: "Time Series Analysis",
        description: "Analyze temporal data for insights.",
        links: [
          {
            title: "Time Series Demo",
            description: "Time series example",
            url: "https://example.com/timeseries1",
          },
        ],
      },
    ],
  },
  AI: {
    icon: "/assets/icons/ai.svg",
    color: "#0457b3",
    textColor: "#FFFFFF",
    items: [
      {
        title: "LLM Testing",
        toolTipTitle: "Large Language Model Testing",
        description: "Validate and optimize LLMs for performance.",
        links: [
          {
            title: "LLM Test Case",
            description: "LLM testing example",
            url: "https://example.com/llm1",
          },
        ],
      },
      {
        title: "Model Training",
        toolTipTitle: "AI Model Training",
        description: "Train custom AI models for specific use cases.",
        links: [
          {
            title: "Training Demo",
            description: "Model training example",
            url: "https://example.com/training1",
          },
        ],
      },
      {
        title: "Agent Creation",
        toolTipTitle: "AI Agent Development",
        description: "Build intelligent agents for automation.",
        links: [
          {
            title: "Agent Case",
            description: "AI agent example",
            url: "https://example.com/agent1",
          },
        ],
      },
      {
        title: "Synthetic Users",
        toolTipTitle: "Synthetic User Generation",
        description: "Create synthetic users for testing.",
        links: [
          {
            title: "Synthetic User Demo",
            description: "Synthetic user example",
            url: "https://example.com/synthetic1",
          },
        ],
      },
      {
        title: "Agentic Workflows",
        toolTipTitle: "Agentic Workflows",
        description: "Automate processes with AI-driven workflows.",
        links: [
          {
            title: "Workflow Case",
            description: "Agentic workflow example",
            url: "https://example.com/workflow1",
          },
        ],
      },
      {
        title: "Domain Use Case Exploration",
        toolTipTitle: "Domain-Specific AI",
        description: "Explore AI applications for your industry.",
        links: [
          {
            title: "Domain AI Case",
            description: "Domain-specific AI example",
            url: "https://example.com/domainai1",
          },
        ],
      },
    ],
  },
};

export default bellCurveData;
