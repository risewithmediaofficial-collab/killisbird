import { content } from "../data/content";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AirIcon from "@mui/icons-material/Air";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import HubIcon from "@mui/icons-material/Hub";

const techCapabilityIcons = {
  "UAV Components": SettingsInputComponentIcon,
  "Embedded Systems": DeveloperBoardIcon,
  "Flight Controllers": MemoryIcon,
  "Drone Frames": ViewInArIcon,
  "Propulsion Support": AirIcon,
  "Custom Development": BuildCircleIcon,
  "Swarm Drone Technology": HubIcon,
};

export default function TechnicalSection() {
  return (
    <section
      id="support"
      style={{
        background: "var(--kb-light-gray)",
        padding: "var(--kb-section-pad-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="kb-container">
        {/* Header */}
        <div className="kb-section-header" slide-up="">
          <span className="kb-section-eyebrow">ENGINEERING DEPTH</span>
          <h2 className="kb-section-title">Technical Capabilities</h2>
          <p className="kb-section-sub">
            Advanced UAV technology stack with integrated solutions for maximum
            performance
          </p>
        </div>

        {/* Capabilities grid */}
        <div
          data-stagger-children=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5px",
            background: "rgba(0,0,0,0.06)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {content.technicalCapabilities.map((capability, idx) => {
            const Icon = techCapabilityIcons[capability] ?? BuildCircleIcon;
            return (
              <div key={idx} className="kb-tech-card">
                <div className="kb-tech-card__icon-wrap">
                  <Icon className="kb-tech-card__icon" />
                </div>
                <h4 className="kb-tech-card__title">{capability}</h4>
                <p className="kb-tech-card__desc">
                  Cutting-edge technology for optimal performance
                </p>
                <div className="kb-tech-card__bar" />
              </div>
            );
          })}
        </div>

        {/* Advanced features row */}
        <div
          data-stagger-children=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {[
            {
              title: "Real-time Processing",
              desc: "Ultra-fast flight control with millisecond response times",
              icon: "⚡",
            },
            {
              title: "Sensor Fusion",
              desc: "Integrated multiple sensors for precise aerial navigation",
              icon: "📡",
            },
            {
              title: "Scalable Architecture",
              desc: "Modular design supporting swarm operations and scalability",
              icon: "🔗",
            },
          ].map((f, i) => (
            <div key={i} slide-up="" className="kb-feature-card">
              <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{f.icon}</div>
              <h4 className="kb-feature-card__title">{f.title}</h4>
              <p className="kb-feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          data-stagger-children=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5px",
            background: "rgba(0,0,0,0.06)",
          }}
        >
          {[
            { label: "Processing Power", value: "1000+ MHz" },
            { label: "Memory", value: "512+ MB" },
            { label: "Sensor Types", value: "20+" },
            { label: "Flight Time", value: "4+ Hours" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--kb-white)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--kb-font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--kb-orange)",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--kb-mid-gray)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
