import { content } from "../data/content";
import TuneIcon from "@mui/icons-material/Tune";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const solutionIcons = {
  1: TuneIcon,
  2: EngineeringIcon,
  3: HubIcon,
  4: VerifiedUserIcon,
  5: FactCheckIcon,
  6: WorkspacePremiumIcon,
};

export default function Solutions() {
  return (
    <section id="solutions" className="kb-section-made">
      <div className="kb-container">
        {/* Section header */}
        <div className="kb-section-header" slide-up="">
          <span className="kb-section-eyebrow">WHAT WE OFFER</span>
          <h2 className="kb-section-title">UAV Solutions</h2>
          <p className="kb-section-sub">
            Comprehensive solutions tailored to your specific requirements and
            industry needs
          </p>
        </div>

        {/* Solutions grid */}
        <div className="kb-made__grid" data-stagger-children="">
          {content.solutions.map((solution) => {
            const Icon = solutionIcons[solution.id];
            return (
              <div key={solution.id} className="kb-made__card">
                {/* Corner bracket decor */}
                <div className="kb-made__card-corners">
                  <i className="kb-corner kb-corner--tl" />
                  <i className="kb-corner kb-corner--tr" />
                  <i className="kb-corner kb-corner--bl" />
                  <i className="kb-corner kb-corner--br" />
                </div>

                <div className="kb-made__card-icon-wrap">
                  {Icon && <Icon className="kb-made__card-icon" />}
                </div>
                <h3 className="kb-made__card-title">{solution.title}</h3>
                <p className="kb-made__card-desc">{solution.description}</p>

                <div className="kb-made__card-cta">
                  <span>Learn More</span>
                  <span className="kb-made__card-arrow">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom benefits strip */}
        <div className="kb-made__benefits" data-stagger-children="">
          {[
            { icon: "⚙️", label: "Custom Development" },
            { icon: "🚀", label: "Rapid Deployment" },
            { icon: "🛡️", label: "24/7 Support" },
            { icon: "✓", label: "Quality Assurance" },
          ].map((b) => (
            <div key={b.label} className="kb-made__benefit">
              <span className="kb-made__benefit-icon">{b.icon}</span>
              <span className="kb-made__benefit-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
