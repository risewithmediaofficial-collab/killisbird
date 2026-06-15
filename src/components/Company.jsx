import { useRef } from "react";
import { content } from "../data/content";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";

const iconMap = {
  innovation: TipsAndUpdatesIcon,
  performance: VerifiedIcon,
  engineering: EngineeringIcon,
};

export default function Company() {
  return (
    <section id="company" className="kb-section-know">
      <div className="kb-container">
        {/* Top intro — like Skyroot "know" section */}
        <div className="kb-know__row">
          <div className="kb-know__left" slide-up="">
            <p className="kb-know__para-large">
              We're redefining what is possible in unmanned aerial systems —
              delivering indigenous UAV components that empower the next
              generation of operators and engineers across India.
            </p>
          </div>
          <div className="kb-know__right">
            <p slide-up="" className="kb-know__para-small">
              At Killis Bird, we build a future where high-performance drone
              technology is accessible, reliable, and made in India.
            </p>
            <div slide-up="" className="kb-know__cta-row">
              <button
                className="kb-btn kb-btn--primary"
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>ABOUT US</span>
                <div className="kb-btn__corners">
                  <i /><i /><i /><i />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Image with scroll scale */}
        <div className="kb-know__image-wrap">
          <div className="kb-know__image-inner" style={{ overflow: "hidden" }}>
            <div
              data-scroll-scale
              className="kb-know__image-bg"
              style={{
                background:
                  "linear-gradient(135deg, #0f1620 0%, #1b2d6b 40%, #e8450a 100%)",
                width: "100%",
                height: "100%",
                minHeight: "480px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Abstract drone circuit pattern */}
              <svg
                data-svg-draw
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "70%", opacity: 0.5, position: "absolute" }}
                data-draw-section=""
              >
                <path
                  d="M100 200 H350 M450 200 H700"
                  stroke="#e8450a"
                  strokeWidth="2"
                  visibility="hidden"
                />
                <path
                  d="M400 50 V170 M400 230 V350"
                  stroke="#e8450a"
                  strokeWidth="2"
                  visibility="hidden"
                />
                <path
                  d="M200 100 L350 200 L200 300"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  visibility="hidden"
                />
                <path
                  d="M600 100 L450 200 L600 300"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  visibility="hidden"
                />
                <path
                  d="M340 190 L400 140 L460 190 L400 240 Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  visibility="hidden"
                />
                <circle cx="200" cy="100" r="8" stroke="#e8450a" strokeWidth="2" visibility="hidden" />
                <circle cx="600" cy="100" r="8" stroke="#e8450a" strokeWidth="2" visibility="hidden" />
                <circle cx="200" cy="300" r="8" stroke="#e8450a" strokeWidth="2" visibility="hidden" />
                <circle cx="600" cy="300" r="8" stroke="#e8450a" strokeWidth="2" visibility="hidden" />
              </svg>

              {/* Center emblem */}
              <div className="kb-know__emblem">
                <div className="kb-know__emblem-ring" />
                <div className="kb-know__emblem-inner">
                  <span className="kb-know__emblem-label">KILLIS BIRD</span>
                  <span className="kb-know__emblem-sub">UAV SYSTEMS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corner bracket decor */}
          <div className="kb-image-corners">
            <i className="kb-corner kb-corner--tl" />
            <i className="kb-corner kb-corner--tr" />
            <i className="kb-corner kb-corner--bl" />
            <i className="kb-corner kb-corner--br" />
          </div>
        </div>

        {/* Stats row */}
        <div className="kb-know__stats" data-stagger-children="">
          {[
            { value: "5+", label: "Years of Innovation" },
            { value: "1000+", label: "Products Delivered" },
            { value: "500+", label: "Active Customers" },
            { value: "3+", label: "Product Categories" },
          ].map((s) => (
            <div key={s.label} className="kb-know__stat-item">
              <div className="kb-know__stat-value">{s.value}</div>
              <div className="kb-know__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="kb-know__features" data-stagger-children="">
          {content.features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.id} className="kb-feature-card">
                <div className="kb-feature-card__icon-wrap">
                  {Icon && <Icon className="kb-feature-card__icon" />}
                </div>
                <h4 className="kb-feature-card__title">{feature.title}</h4>
                <p className="kb-feature-card__desc">
                  Delivering excellence through precision engineering and
                  innovation.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
