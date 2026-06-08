import {
  Cpu,
  Eye,
  Layers,
  Network,
  Radar,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
const heroMetrics = [
  ["100+", "DRONES / SWARM"],
  ["480MHz", "FLIGHT MCU"],
  ["48H", "DEPLOYMENT"],
];
const tickerItems = [
  "INDIGENOUS - MADE IN BHARAT",
  "STM32H743 - 480MHz",
  "MIL-STD-810G COMPLIANT",
  "SWARM CAPABLE 100+",
  "AEROSPACE GRADE CARBON",
  "OPERATION SINDOOR PROVEN",
  "AI-DRIVEN AUTONOMY",
];
const identityPrinciples = [
  { icon: Sparkles, title: "Imagine", text: "Concepts conceived inside classified labs." },
  { icon: Cpu, title: "Ideate", text: "Engineered through indigenous R&D." },
  { icon: Rocket, title: "Innovative", text: "Deployed across defense and industry." },
];
const systems = [
  {
    icon: Cpu,
    code: "FCC-H743",
    title: "Flight Control Card",
    spec: "A Flight Control Card in a drone is like the brain of the drone. It reads sensor data and pilot commands to keep the drone balanced and flying smoothly.",
  },
  {
    icon: Layers,
    code: "FRM-5IN",
    title: "Frames",
    spec: "A drone frame is the body or structure of the drone. It holds all the parts (motors, flight control card, battery, camera) together and gives shape and strength for flying.",
  },
  {
    icon: Zap,
    code: "PRP-1045",
    title: "Propellers",
    spec: "A drone propeller is the blade that spins to lift the drone into the air. It controls movement and direction by changing speed and rotation.",
  },
  {
    icon: Radar,
    code: "SWM-100X",
    title: "Swarm Drones",
    spec: "A coordinated fleet of 100+ autonomous drones operating in unison. Our swarm technology enables synchronized missions across defense, surveillance, and industrial applications with AI-driven precision.",
  },
];
const intelligenceStats = [
  ["480MHz", "STM32H743 MCU"],
  ["6-AXIS", "ICM42688 IMU"],
  ["8x", "MOTOR OUTPUTS"],
  ["5x", "UART / 2x I2C"],
];
const capabilities = [
  {
    icon: Layers,
    title: "Customization & White Labelling",
    text: "We offer customization and white-labelling solutions for bulk orders to match your brand and needs.",
  },
  {
    icon: Target,
    title: "Custom Drone Solutions",
    text: "Get application-based drone development tailored to your specific requirements and industry.",
  },
  {
    icon: Network,
    title: "Swarm Drones",
    text: "Unlock the power of coordinated drone operations with our cutting-edge swarm drone technology.",
  },
  {
    icon: Shield,
    title: "Warranty",
    text: "Enjoy 6 to 12 months warranty on selected products. Register your warranty at www.killisbird.com within 5 days of purchase.",
  },
  {
    icon: Eye,
    title: "Warranty Terms",
    text: "Covers manufacturing defects only \u2014 excludes physical damage or misuse. Contact us with photos for return or replacement assessment.",
  },
  {
    icon: Sparkles,
    title: "Best Quality",
    text: "Experience premium-quality drone components engineered for performance. Choose us for reliability and a superior experience.",
  },
];
export { capabilities, heroMetrics, identityPrinciples, intelligenceStats, systems, tickerItems };
