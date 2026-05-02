import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Terms — Killis Bird" },
      { name: "description", content: "Terms of use and privacy policy for Killis Bird LLP — compliant with Indian laws and regulations." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Compliance" title={<>Terms & <span className="text-neon">Privacy</span>.</>} />

      <section className="container-edge pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-12">
          <Block index="01" title="Terms & Conditions">
            <p>By purchasing and using Killis Bird products, you agree to adhere to these Terms of Use, compliant with Indian laws and regulations.</p>
            <SubBlock title="1. Legal Compliance">
              <p>Use of products must comply with:</p>
              <ul className="space-y-1.5 list-none">
                {["The Indian Penal Code, 1860", "The Arms Act, 1959", "The Information Technology Act, 2000", "The Explosives Act, 1884", "The Drone (Amendment) Rules, 2023", "The Environment (Protection) Act, 1986", "The Consumer Protection Act, 2019"].map((l) => (
                  <li key={l} className="flex gap-3"><span className="text-neon">▸</span>{l}</li>
                ))}
              </ul>
              <p>Illegal activities, including terrorism, espionage, hacking, or manufacturing weaponry, will result in legal action.</p>
            </SubBlock>
            <SubBlock title="2. Prohibited Uses"><p>Using products to harm living beings, directly or indirectly, is strictly prohibited and punishable under relevant laws.</p></SubBlock>
            <SubBlock title="3. Limitation of Liability"><p>Killis Bird is not liable for any misuse of products, including modifications or integrations. Users bear full responsibility for legal compliance.</p></SubBlock>
            <SubBlock title="4. Consequences of Illegal Activities"><p>Illegal use will lead to legal action, potential criminal prosecution, termination of sales, and reporting to authorities.</p></SubBlock>
            <SubBlock title="5. Modification and Liability"><p>Modifications of products are the user's responsibility. Killis Bird disclaims liability for modified products.</p></SubBlock>
            <SubBlock title="6. Indemnification"><p>Users indemnify Killis Bird against liabilities arising from illegal or harmful use.</p></SubBlock>
            <SubBlock title="7. Changes to Terms"><p>Terms are subject to change. Continued use constitutes acceptance of new terms.</p></SubBlock>
            <SubBlock title="8. Contact"><p>For queries, contact via the website.</p></SubBlock>
          </Block>

          <Block index="02" title="Privacy Policy">
            <SubBlock title="Information Collection"><p>Killis Bird may collect personal identification information when users visit the site, register, fill out a form, or engage in activities. Information may include name, email, phone, and other relevant data. Users may visit anonymously; personal information is only collected if voluntarily submitted.</p></SubBlock>
            <SubBlock title="Information Usage">
              <ul className="space-y-1.5 list-none">
                {["To personalize user experience", "To improve the site and services", "To respond to customer service requests", "To administer promotions, surveys, or other site features", "To send periodic emails regarding latest updates and news"].map((l) => (
                  <li key={l} className="flex gap-3"><span className="text-neon">▸</span>{l}</li>
                ))}
              </ul>
            </SubBlock>
            <SubBlock title="Information Sharing"><p>Killis Bird does not share, sell, or rent users' personal identification information to third parties without consent, unless required by law.</p></SubBlock>
            <SubBlock title="Data Security"><p>Appropriate data collection, storage, processing practices, and security measures are implemented to protect against unauthorized access, alteration, disclosure, or destruction of personal data.</p></SubBlock>
            <SubBlock title="Cookies"><p>The site uses cookies to enhance user experience and provide personalized browsing. Cookies do not contain personal identification information. Users can disable cookies in their browser, though some site features may not function properly.</p></SubBlock>
            <SubBlock title="Age of Consent"><p>By using the site, users represent that they are at least the age of majority in their state or province, or have obtained parental/legal guardian consent if a minor.</p></SubBlock>
            <SubBlock title="Changes to Privacy Policy"><p>Killis Bird reserves the right to modify this privacy policy at any time. Users are encouraged to review it periodically.</p></SubBlock>
          </Block>
        </div>

        <aside className="lg:col-span-5">
          <div className="glass p-8 sticky top-28 corner-brackets relative space-y-4">
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon">// JURISDICTION</div>
            <h3 className="text-2xl font-semibold tracking-tight">Operating under Indian law.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">All Killis Bird products and services are governed by the laws of the Republic of India. Cross-border use is subject to applicable export and security regulations.</p>
            <div className="pt-4 border-t border-border/50 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              LAST UPDATED: 2026
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Block({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <SectionLabel index={index} label={title} />
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 pt-4 border-t border-border/40">
      <h3 className="text-base font-semibold text-foreground tracking-tight">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
