import { useState } from "react";
import { content } from "../data/content";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CycloneIcon from "@mui/icons-material/Cyclone";

const productIcons = {
  1: DeveloperBoardIcon,
  2: ViewInArIcon,
  3: CycloneIcon,
};

// Frame preview images for each product
const productFrames = {
  1: "/frames/frame_0001.png",
  2: "/frames/frame_0050.png",
  3: "/frames/frame_0100.png",
};

export default function Products() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="products"
      style={{
        background: "var(--kb-off-white)",
        padding: "var(--kb-section-pad-y) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="kb-container">
        {/* Header */}
        <div className="kb-section-header" slide-up="">
          <span className="kb-section-eyebrow">WHAT WE BUILD</span>
          <h2 className="kb-section-title">Our Products</h2>
          <p className="kb-section-sub">
            Premium UAV components engineered for performance and reliability
          </p>
        </div>

        {/* Main product layout — sticky image + content list (Skyroot vikram style) */}
        <div className="kb-products__layout">
          {/* Left: drone frame preview */}
          <div className="kb-products__visual-wrap">
            <div
              className="kb-products__visual"
              data-scroll-scale
              style={{ overflow: "hidden" }}
            >
              <img
                src={active ? productFrames[active] : productFrames[1]}
                alt="Killis Bird Drone Component"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  padding: "2rem",
                  transition: "all 0.5s ease",
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.15))",
                }}
              />
            </div>
            {/* Corner brackets */}
            <div className="kb-image-corners">
              <i className="kb-corner kb-corner--tl" />
              <i className="kb-corner kb-corner--tr" />
              <i className="kb-corner kb-corner--bl" />
              <i className="kb-corner kb-corner--br" />
            </div>
          </div>

          {/* Right: product list */}
          <div className="kb-products__list" data-stagger-children="">
            {content.products.map((product) => {
              const Icon = productIcons[product.id];
              const isActive = active === product.id;
              return (
                <button
                  key={product.id}
                  className={`kb-product-item${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(isActive ? null : product.id)}
                >
                  {/* Number */}
                  <span className="kb-product-item__num">
                    0{product.id}
                  </span>

                  {/* Content */}
                  <div className="kb-product-item__content">
                    <div className="kb-product-item__header">
                      <h3 className="kb-product-item__title">{product.title}</h3>
                      {Icon && (
                        <Icon className="kb-product-item__icon" />
                      )}
                    </div>

                    {/* Expandable desc */}
                    <div
                      className="kb-product-item__desc-wrap"
                      style={{
                        maxHeight: isActive ? "200px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      <p className="kb-product-item__desc">{product.description}</p>
                      <button className="kb-btn kb-btn--primary" style={{ marginTop: "1.25rem" }}>
                        <span>VIEW DETAILS</span>
                        <div className="kb-btn__corners"><i /><i /><i /><i /></div>
                      </button>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <span
                    className="kb-product-item__toggle"
                    style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product features row */}
        <div
          data-stagger-children=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5px",
            background: "rgba(0,0,0,0.06)",
            marginTop: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {[
            { title: "High Performance", desc: "Optimized for speed and precision" },
            { title: "Easy Integration", desc: "Compatible with existing systems" },
            { title: "Proven Reliability", desc: "Tested and certified components" },
            { title: "6–12 Month Warranty", desc: "Comprehensive after-sales service" },
          ].map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--kb-white)",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                borderBottom: "3px solid transparent",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderBottomColor = "var(--kb-orange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderBottomColor = "transparent")
              }
            >
              <h4
                style={{
                  fontFamily: "var(--kb-font-display)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--kb-foreground)",
                  letterSpacing: "0.02em",
                }}
              >
                {f.title}
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--kb-mid-gray)", lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
