import { content } from "../data/content";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const footer = content.footer;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--kb-navy-deep)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Main footer */}
      <div
        className="kb-container"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(3.5rem, 8vw, 7rem) var(--kb-container-px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--kb-white)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              KILLIS BIRD
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--kb-orange)",
                  display: "inline-block",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.8,
                maxWidth: "22rem",
              }}
            >
              {footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { label: "Overview", id: "home" },
                { label: "Company", id: "company" },
                { label: "UAV Solutions", id: "solutions" },
                { label: "Products", id: "products" },
                { label: "Careers", id: "careers" },
                { label: "Get Quote", id: "quote" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "var(--kb-font-body)",
                      transition: "color 0.2s ease",
                      padding: 0,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <span style={{ color: "var(--kb-orange)", fontSize: "0.6rem" }}>→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  <PhoneIcon style={{ color: "var(--kb-orange)", fontSize: "1rem", flexShrink: 0 }} />
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  <EmailIcon style={{ color: "var(--kb-orange)", fontSize: "1rem", flexShrink: 0 }} />
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4
              style={{
                fontFamily: "var(--kb-font-display)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Address
            </h4>
            <address
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontStyle: "normal",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.8,
              }}
            >
              <LocationOnIcon
                style={{
                  color: "var(--kb-orange)",
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.2rem",
                }}
              />
              <span>
                {footer.address.line1}<br />
                {footer.address.line2}<br />
                {footer.address.line3}<br />
                {footer.address.line4}
              </span>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,69,10,0.4), transparent)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
          className="kb-footer__bottom"
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.25)",
              textAlign: "center",
            }}
          >
            {footer.copyright}
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.18)",
              textAlign: "center",
            }}
          >
            {footer.developer}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {["Privacy Policy", "Terms & Conditions", "Contact Us"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        id="scroll-to-top"
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          width: "3rem",
          height: "3rem",
          background: "var(--kb-orange)",
          color: "var(--kb-white)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.25rem",
          fontWeight: 700,
          transition: "background 0.2s ease, transform 0.2s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--kb-white)";
          e.currentTarget.style.color = "var(--kb-orange)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--kb-orange)";
          e.currentTarget.style.color = "var(--kb-white)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        ↑
      </button>
    </footer>
  );
}
