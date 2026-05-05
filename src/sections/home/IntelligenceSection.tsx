import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of Tactical Warfare for Bharat",
    date: "MAY 03, 2026",
  },
  {
    title: "FPV Striker Drones: The Future of Tactical Warfare for Bharat",
    date: "APR 28, 2026",
  },
  {
    title: "How Anti-Drone Jammers Are Redefining Modern Warfare in India",
    date: "APR 15, 2026",
  },
];

export function IntelligenceSection() {
  return (
    <section
      id="blog"
      className="container-edge section-y bg-background border-t border-border/50"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Left: Our Blog */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2"
          >
            <h2 className="heading-lg font-black text-foreground">OUR BLOG</h2>
            <p className="text-muted-foreground">Latest insights from our defense and engineering teams.</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer p-6 rounded-2xl border border-border bg-surface-elevated hover:border-neon transition-colors flex flex-col gap-3"
              >
                <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase group-hover:text-neon transition-colors">
                  {blog.date}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug group-hover:text-neon transition-colors">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Trusted Clients */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-2"
          >
            <h2 className="heading-lg font-black text-foreground">TRUSTED CLIENTS</h2>
            <p className="text-muted-foreground">Powering defense and industry leaders.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1"
          >
            {/* Empty boxes for client logos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="h-32 rounded-xl border border-border/50 bg-black/5 flex items-center justify-center filter grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <div className="font-mono text-xs tracking-widest text-muted-foreground/30">LOGO {i+1}</div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
