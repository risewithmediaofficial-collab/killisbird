import { content } from "../data/content";

const clients = [
  "Aerospace Corp",
  "TechDrone India",
  "SkyForce Labs",
  "AeroVision Systems",
  "UAV Dynamics",
  "FlyTech Solutions",
  "Precision Wings",
  "DroneBase Pro",
];

export default function TrustedClients() {
  const doubledClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      style={{
        background: "var(--kb-white)",
        padding: "clamp(3rem, 6vw, 5rem) 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Eyebrow label */}
      <div
        className="kb-container"
        style={{ marginBottom: "2.5rem", textAlign: "center" }}
      >
        <span
          slide-up=""
          style={{
            display: "inline-block",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--kb-mid-gray)",
          }}
        >
          TRUSTED BY INDUSTRY LEADERS
        </span>
      </div>

      {/* Infinite ticker — left to right */}
      <div
        style={{
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="animate-ticker"
          style={{
            display: "flex",
            gap: "4rem",
            width: "max-content",
          }}
        >
          {doubledClients.map((client, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {/* Abstract logo placeholder */}
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  background: "rgba(232,69,10,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                ✦
              </div>
              <span
                style={{
                  fontFamily: "var(--kb-font-display)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "var(--kb-mid-gray)",
                  textTransform: "uppercase",
                }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip below */}
      <div
        className="kb-container"
        style={{ marginTop: "3rem" }}
      >
        <div
          data-stagger-children=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.06)",
          }}
        >
          {[
            { value: "5+", label: "Years Active" },
            { value: "1000+", label: "Products Delivered" },
            { value: "500+", label: "Happy Customers" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--kb-white)",
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--kb-font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--kb-foreground)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
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
