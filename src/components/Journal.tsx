import { motion } from "framer-motion";
import { Code2, Layers, Cpu, Wrench, Award, GraduationCap, Sparkles, Trophy, CheckCircle2 } from "lucide-react";

interface TechCategory {
  title: string;
  icon: any;
  skills: { name: string; highlight?: boolean }[];
}

const techCategories: TechCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java (DSA Core)", highlight: true },
      { name: "Python" },
      { name: "C++" },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" }
    ]
  },
  {
    title: "Web Development & UI",
    icon: Layers,
    skills: [
      { name: "React 19", highlight: true },
      { name: "Vite 6" },
      { name: "Tailwind CSS 4", highlight: true },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Animations & Media",
    icon: Sparkles,
    skills: [
      { name: "GSAP 3.15", highlight: true },
      { name: "Framer Motion 12", highlight: true },
      { name: "HLS.js Video Engine" },
      { name: "Lucide Icons" }
    ]
  },
  {
    title: "Databases, IoT & Embedded",
    icon: Cpu,
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MySQL" },
      { name: "ESP32 Microcontrollers" },
      { name: "IMU Sensors & Telemetry" },
      { name: "Kalman Filtering" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Adafruit IO" }
    ]
  }
];

interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  icon: any;
  tags: string[];
}

const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2025",
    title: "Smart India Hackathon (SIH) 2025",
    subtitle: "National Grand Finale Runner-Up",
    description: "Designed, built, and deployed 'Eco Breathe' — an IoT air quality monitoring system utilizing ESP32 microcontrollers, PMS sensors, Adafruit IO Wi-Fi streaming, and a React.js & Chart.js live analytics dashboard.",
    badge: "National Runner-Up",
    icon: Trophy,
    tags: ["ESP32", "IoT", "React.js", "Node.js", "MongoDB", "Chart.js"]
  },
  {
    year: "2023 — 2027",
    title: "B.Tech Computer Science (IoT)",
    subtitle: "Lakshmi Narain College of Technology (LNCT), Bhopal",
    description: "Pursuing Bachelor of Technology in CSE with special focus on Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and IoT Hardware Systems. Current CGPA: 7.55/10.",
    badge: "Current Degree",
    icon: GraduationCap,
    tags: ["Data Structures & Algorithms", "OOPs", "DBMS", "Computer Networks", "OS"]
  },
  {
    year: "2026",
    title: "Fullstack Web & AI Innovations",
    subtitle: "AI Resume Analyzer & MyPortfolio Platform",
    description: "Engineered AI Resume Analyzer utilizing Natural Language Processing (NLP) for ATS compatibility scoring, alongside a modern dark-mode portfolio featuring HLS.js video streaming, Framer Motion, GSAP animations, and LeetCode activity tracking.",
    badge: "Key Projects",
    icon: Sparkles,
    tags: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS 4", "GSAP", "Framer Motion"]
  },
  {
    year: "2025 — 2026",
    title: "Certifications & Achievements",
    subtitle: "Industry Verification & Technical Prowess",
    description: "Earned Microsoft Certified SQL AI Developer Associate credential, completed JPMorgan Chase Software Engineering Simulation, Meta React Basics, Data Structures with Java, and competed as a Division Level Kabaddi Player.",
    badge: "Certified",
    icon: Award,
    tags: ["Microsoft SQL AI", "JPMorgan Simulation", "Meta React", "Kabaddi Player"]
  }
];

export default function Journal() {
  return (
    <section 
      id="journal" 
      className="bg-bg py-20 md:py-28 text-text-primary px-6 border-t border-stroke relative"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          id="journal-header"
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#89AACC] font-bold block mb-3">
              JOURNEY & TECH STACK
            </span>
            <h2 className="text-4xl md:text-5xl font-display italic leading-tight">
              Engineering Path & Skill Architecture
            </h2>
          </div>
          <div className="text-muted text-xs md:text-sm font-light font-mono text-left max-w-md leading-relaxed border-l border-stroke pl-4">
            A comprehensive overview of core technologies, frameworks, hardware systems, and key milestones in my development journey.
          </div>
        </motion.div>

        {/* 2-Column Grid Layout: Tech Stack UI (Left) + Journey Timeline (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Modern Tech Stack UI (Fixed/Static, Cannot be hidden) */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-24 z-10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold flex items-center gap-2">
                <Code2 size={16} className="text-[#89AACC]" />
                Modern Tech Stack
              </span>
              <span className="text-[10px] font-mono text-muted/80 px-2.5 py-0.5 rounded-full bg-surface border border-stroke">
                Active Proficiency
              </span>
            </div>

            {techCategories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-surface border border-stroke rounded-[20px] p-5 hover:border-white/20 transition-all duration-300 shadow-md group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-bg/80 border border-stroke flex items-center justify-center text-[#89AACC] group-hover:text-white group-hover:border-white/20 transition-colors">
                      <IconComponent size={16} />
                    </div>
                    <h3 className="text-sm font-display italic text-text-primary group-hover:text-white transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded-full border transition-all duration-300 ${
                          skill.highlight
                            ? "bg-[#89AACC]/10 text-[#89AACC] border-[#89AACC]/30 font-semibold"
                            : "bg-bg/60 text-muted border-stroke hover:text-white hover:border-white/20"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Journey Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold flex items-center gap-2">
                <Trophy size={16} className="text-[#FFD700]" />
                Journey & Achievements
              </span>
              <span className="text-[10px] font-mono text-muted/80 px-2.5 py-0.5 rounded-full bg-surface border border-stroke">
                Milestones
              </span>
            </div>

            <div className="relative border-l border-stroke/60 ml-4 pl-6 md:pl-8 flex flex-col gap-8">
              {journeyMilestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                return (
                  <motion.div
                    key={milestone.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[37px] md:-left-[45px] top-1.5 w-6 h-6 rounded-full bg-bg border-2 border-[#89AACC] flex items-center justify-center text-[#89AACC] group-hover:border-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_12px_rgba(137,170,204,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-[#89AACC] group-hover:bg-white transition-colors" />
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-surface border border-stroke rounded-[24px] p-6 md:p-7 hover:border-white/20 transition-all duration-300 shadow-md">
                      
                      {/* Top Header: Year & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-[#89AACC]">
                          {milestone.year}
                        </span>
                        {milestone.badge && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/25 text-[#FFD700] text-[11px] font-semibold rounded-full">
                            <IconComponent size={13} />
                            {milestone.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-display italic text-text-primary group-hover:text-white transition-colors mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-mono text-muted mb-4 font-medium">
                        {milestone.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-muted font-light leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stroke/40">
                        {milestone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-bg/80 text-[10px] font-mono text-muted/90 rounded-full border border-stroke"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
