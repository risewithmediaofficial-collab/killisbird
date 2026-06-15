import { content } from "../data/content";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export default function Careers() {
  const careers = content.careers;

  return (
    <section
      id="careers"
      style={{
        background: "var(--kb-foreground)",
        padding: "var(--kb-section-pad-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="kb-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="kb-careers__grid"
        >
          {/* Left column */}
          <div slide-up="">
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--kb-orange)",
                marginBottom: "1.25rem",
              }}
            >
              WORK WITH US
            </span>
            <h2
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--kb-white)",
                marginBottom: "1.5rem",
              }}
            >
              {careers.title}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: "40rem",
                marginBottom: "2.5rem",
              }}
            >
              {careers.description}
            </p>

            <button className="kb-btn kb-btn--primary" id="careers-apply-btn">
              <span>APPLY NOW</span>
              <div className="kb-btn__corners"><i /><i /><i /><i /></div>
            </button>
          </div>

          {/* Right column — job details card */}
          <div slide-up="" className="kb-careers__card">
            {/* Corner brackets */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
              }}
            >
              {["tl","tr","bl","br"].map(pos => (
                <i key={pos} className={`kb-corner kb-corner--${pos}`}
                   style={{ borderColor: "rgba(232,69,10,0.4)" }} />
              ))}
            </div>

            <h3
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--kb-white)",
                letterSpacing: "0.03em",
                marginBottom: "2rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              Current Opening
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  Icon: LocationOnIcon,
                  label: "Location",
                  value: careers.location,
                },
                {
                  Icon: SchoolIcon,
                  label: "Qualification",
                  value: careers.qualification,
                },
                {
                  Icon: WorkHistoryIcon,
                  label: "Experience",
                  value: careers.experience,
                },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "rgba(232,69,10,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ color: "var(--kb-orange)", fontSize: "1.2rem" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "0.25rem",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.5,
                        fontWeight: 400,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Role tags */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {["ECE", "EEE", "Embedded", "Power Electronics"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.35rem 0.85rem",
                    border: "1px solid rgba(232,69,10,0.3)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--kb-orange)",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
