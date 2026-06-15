import { content } from "../data/content";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function CTA() {
  const ctaData = content.cta;

  return (
    <section
      id="quote"
      className="kb-section-cta"
      style={{
        background: "var(--kb-navy-deep)",
        padding: "var(--kb-section-pad-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        data-parallax
        data-parallax-movement="-8%"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "clamp(20rem, 40vw, 50rem)",
          height: "clamp(20rem, 40vw, 50rem)",
          background:
            "radial-gradient(circle, rgba(232,69,10,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />
      <div
        data-parallax
        data-parallax-movement="-5%"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "clamp(20rem, 40vw, 50rem)",
          height: "clamp(20rem, 40vw, 50rem)",
          background:
            "radial-gradient(circle, rgba(27,45,107,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div className="kb-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          slide-up=""
          style={{
            textAlign: "center",
            maxWidth: "56rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--kb-orange)",
            }}
          >
            GET IN TOUCH
          </span>

          <h2
            style={{
              fontFamily: "var(--kb-font-display)",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--kb-white)",
            }}
          >
            {ctaData.title}
          </h2>

          <p
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "40rem",
              lineHeight: 1.8,
            }}
          >
            {ctaData.description}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <button className="kb-btn kb-btn--primary" id="cta-quote-btn">
              <RequestQuoteIcon style={{ fontSize: "1.1rem", marginRight: "0.5rem" }} />
              <span>REQUEST QUOTE</span>
              <div className="kb-btn__corners">
                <i /><i /><i /><i />
              </div>
            </button>
            <button className="kb-btn kb-btn--ghost-white" id="cta-support-btn">
              <SupportAgentIcon style={{ fontSize: "1.1rem", marginRight: "0.5rem" }} />
              <span>CONTACT SUPPORT</span>
            </button>
          </div>

          {/* Contact info strip */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "2.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              width: "100%",
            }}
          >
            <a
              href="tel:+917200743683"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              <PhoneIcon style={{ fontSize: "1.1rem", color: "var(--kb-orange)" }} />
              +91 72007 43683
            </a>
            <a
              href="mailto:info@killisbird.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kb-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              <EmailIcon style={{ fontSize: "1.1rem", color: "var(--kb-orange)" }} />
              info@killisbird.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
