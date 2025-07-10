import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Award,
  Calendar,
  MapPin,
  ChevronDown,
  Eye,
  GitBranch,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      title: "DevOps & Full-Stack Developer",
      company: "Modern Trade Market",
      period: "Feb 2025 – May 2025",
      location: "Nairobi, Kenya",
      description:
        "Developed and deployed a complete e-commerce system with role-based access (Client, Seller, Admin). Implemented secure REST APIs, Google OAuth login, Redis caching, and CI/CD with Docker & Kubernetes. Hosted on Linode and monitored using Prometheus & Grafana.",
      technologies: [
        "Flutter",
        "Python",
        "Dart",
        "Django",
        "Git Actions",
        "AWS",
        "Docker",
        "Kubernetes",
        "Redis",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      title: "Frontend Developer",
      company: "AHF - AIDS Healthcare Foundation",
      period: "Jan 2024 – Feb 2025",
      location: "Nairobi, Kenya",
      description:
        "Developed dashboards and data visualizations for healthcare analytics using React and Recharts. Integrated RESTful APIs and transformed datasets into insights. Built responsive UIs from Figma designs.",
      technologies: ["React", "Recharts", "Mapbox", "REST APIs", "Figma"],
    },
    {
      title: "Full Stack Developer",
      company: "TEKOBLISS LLC (Remote – Contract)",
      period: "Feb 2024 – Oct 2024",
      location: "Washington, D.C., USA",
      description:
        "Built a caregiver management system using Laravel, PHP, and MySQL with React Native. Integrated AWS cloud services for system performance and uptime.",
      technologies: ["Laravel", "PHP", "MySQL", "React Native", "AWS"],
    },
    {
      title: "Software Engineer (Freelance)",
      company: "Freelancing",
      period: "Jun 2022 – Present",
      location: "Remote",
      description:
        "Delivered full-stack, cloud-integrated web and mobile applications across various industries. Applied wide-ranging tech stacks for scalable, performant solutions. Integrated data visualization, mapping, and DevOps practices in client projects.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Vue",
        "Nuxt.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "Flutter",
        "React Native",
        "Kotlin",
        "Swift",
        "Java (Android)",
        "Python",
        "Django",
        "Express",
        "NestJS",
        "PHP",
        "Laravel",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Prisma",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Linode",
        "OCI",
        "Prometheus",
        "Grafana",
        "Power BI",
        "Tableau",
        "Recharts",
        "Chart.js",
        "Mapbox",
        "Google Maps API",
        "D3.js",
        "TensorFlow",
      ],
    },
    {
      title: "Full-stack Software Developer",
      company: "Impact Master Ltd",
      period: "May 2023 – Sep 2023",
      location: "Kenya",
      description:
        "Developed custom CMS solutions with React and .NET Core. Led code reviews and debugging sessions, resulting in a 25% increase in user engagement and improved application stability.",
      technologies: ["React", ".NET Core", "JavaScript", "CSS"],
    },
  ];

  const skills = [
    {
      category: "Backend",
      items: ["Node.js", "Python", "PHP", "Express.js", "Django", "REST APIs"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "Nextjs",
        "Tailwind CSS",
        "Vue.js",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      category: "Mobile",
      items: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
      ],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "Redis", "Firebase"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes (K8s)",
        "Azure DevOps",
        "AWS (EC2, S3)",
        "Linode",
        "OCI",
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "CI/CD",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "YAML",
        "Postman",
        "Azure Pipelines",
      ],
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const projects = [
  {
    title: "ShopEase Online Store",
    description:
      "An end-to-end e-commerce platform built with Next.js and Express. Features product catalog, shopping cart, payment integration, authentication, admin dashboard, and scalable backend architecture.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe", "TailwindCSS"],
    image: "shopease.png",
    liveUrl: "https://e-store-client-eight.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "eBuntu Shop (Amazon Clone)",
    description:
      "A full-stack e-commerce application inspired by Amazon, featuring secure authentication, role-based dashboards, product management, and order processing. Built with React, Redux, Node.js, and MongoDB. Deployed with a scalable, cloud-native architecture.",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Express", "Material UI"],
    image: "ebuntu.png",
    liveUrl: "https://ebuntu.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Modern Trade Market - Web App",
    description:
      "A responsive e-commerce web application with multi-role access (Admin, Seller, Client), REST API integration, OAuth login, Redis caching, and CI/CD via Docker and Kubernetes.",
    technologies: ["Django", "AWS", "Redis", "Docker", "Kubernetes", "Git Actions", "Mysql", "Linode", "Prometheus", "Grafana"],
    image: "moderntr.png",
    liveUrl: "https://moderntrademarket.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Modern Trade Market - Mobile App",
    description:
      "A cross-platform mobile version of the Modern Trade Market e-commerce platform developed using Flutter. Includes secure login, product browsing, and in-app transactions.",
    technologies: ["Flutter", "JWT", "Django", "REST API"],
    image: "mobile.jpg",
    liveUrl: "https://shorturl.at/tHfvv",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Action System",
    description:
      "A productivity automation system built with Node.js and React.js. Provides task triggers, real-time data sync, and user activity logs to streamline internal operations.",
    technologies: ["Node.js", "React.js", "MongoDB", "Express", "WebSockets"],
    image: "auction.png",
    liveUrl: "https://online-auction-system-frontend-jet.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Mobile Transaction Tracker",
    description:
      "An Android application built with Java to track mobile money transactions from SMS and emails using regex. It parses M-Pesa and bank notifications, then logs them into Microsoft 365 for automated reporting.",
    technologies: ["Java", "Android SDK", "Regex", "M365 Graph API", "Firebase"],
    image: "https://images.pexels.com/photos/1619656/pexels-photo-1619656.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  }
];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Nairobi",
      period: "2018 - 2022",
      description:
        "Graduated with honors. Specialized in software engineering and database systems.",
    },
    {
      degree: "Full Stack Web Development Certificate",
      school: "freeCodeCamp",
      period: "2021",
      description:
        "Completed comprehensive course covering modern web development technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-700">
                Brian Otieno
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-600 hover:text-blue-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600 hover:text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Brian <span className="text-blue-700">Otieno</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & Software Engineer passionate about creating
              innovative digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                View Projects
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:brianadem2@gmail.com"
                className="text-gray-600 hover:text-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:0111524408"
                className="text-gray-600 hover:text-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/brian-adem-7164a7209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile software engineer with a proven track record in building
              scalable systems, impactful digital solutions, and
              cloud-integrated platforms across web, mobile, and DevOps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I’m Brian Otieno Adem — a full-stack developer and DevOps
                enthusiast passionate about solving real-world problems through
                technology. With a solid background in computer science and
                hands-on experience delivering production-grade applications, I
                specialize in full-cycle development, from front-end interfaces
                to back-end APIs and cloud deployments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I've built and shipped enterprise dashboards, e-commerce
                platforms, and health-tech systems using modern stacks like
                React, Next.js, Node.js, Laravel, and cloud-native tools
                including Docker, Kubernetes, AWS, and Prometheus. Whether
                collaborating remotely or on-site, I thrive in dynamic teams and
                adapt quickly to new technologies and business domains.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Cloud-Native Solutions",
                  "Cross-Platform Apps",
                  "API Design",
                  "Continuous Integration",
                  "Agile Collaboration",
                  "Data Visualization",
                ].map((trait) => (
                  <span
                    key={trait}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">Based in Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">
                    BSc. in Computer Science
                  </span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">
                    3+ Years in Production Projects
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">
                    Full-Stack | DevOps | Mobile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in software development, building solutions and growing
              expertise.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-700 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-700 text-white p-3 rounded-lg mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and technical expertise across
              various domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-700 hover:text-blue-800 text-sm font-medium"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
                      >
                        <GitBranch className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/incognitoDevOps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-blue-700 font-semibold">
                      {edu.school}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on
              new projects and collaborate with amazing people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:brianadem2@gmail.com"
                    className="flex items-center group"
                  >
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">brianadem2@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:0111524408" className="flex items-center group">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">0111524408</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/brian-adem-7164a7209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors duration-200">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-blue-100">Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Brian Otieno. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
