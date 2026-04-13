import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sevilleCat from "@/assets/seville-cat.png";
import paraglidingBag from "@/assets/paragliding-bag.png";
import cooking from "@/assets/cooking.png";
import guitar from "@/assets/guitar.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.58, 1] },
  }),
};

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
      {/* Hero Section — bento style */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        {/* Main hero card */}
        <motion.div
          custom={0}
          variants={fadeUp}
          className="sm:col-span-2 glass-card p-8 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="font-pixel text-primary-foreground text-lg">HD</span>
            </div>
            <div>
              <h1 className="text-xs sm:text-sm leading-relaxed gradient-text">
                HUGO DURAND
              </h1>
              <p className="font-modern text-muted-foreground text-sm mt-1">
                Consultant Acquisition Digitale
              </p>
            </div>
          </div>
          <p className="font-modern text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Consultant en acquisition digitale (SEO, SEA & SMA)
            et en analyse de données — Customer Intelligence.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["SEO", "SEA", "SMA", "DATA"].map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Status card */}
        <motion.div
          custom={1}
          variants={fadeUp}
          className="glass-card p-6 flex flex-col justify-between"
        >
          <div>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse mb-4" />
            <p className="font-pixel text-[8px] text-primary leading-relaxed">
              DISPONIBLE
            </p>
            <p className="font-modern text-sm text-muted-foreground mt-2">
              Ouvert aux missions freelance et CDI.
            </p>
          </div>
          <a
            href="/cv-hugo-durand.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 font-pixel text-[8px] bg-primary text-primary-foreground px-4 py-2.5 rounded-lg pixel-btn inline-block text-center"
          >
            MON CV
          </a>
        </motion.div>
      </motion.section>

      {/* About */}
      <motion.section
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="glass-card p-6 sm:p-8 mb-6"
      >
        <h2 className="text-[10px] sm:text-xs mb-4 gradient-text">QUI SUIS-JE ?</h2>
        <p className="font-modern text-base sm:text-lg leading-relaxed text-foreground/75">
          Passionné par le marketing digital et la data, j'accompagne les entreprises
          dans leur stratégie d'acquisition en ligne. Mon approche : allier technique,
          créativité et analyse pour des résultats concrets et mesurables.
        </p>
        <p className="font-modern text-base sm:text-lg leading-relaxed text-foreground/75 mt-3">
          Curieux, rigoureux et toujours de bonne humeur — je crois qu'un bon consultant
          est avant tout quelqu'un avec qui on a envie de travailler.
        </p>
      </motion.section>

      {/* Quick links grid */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        {[
          { to: "/services", title: "SERVICES", desc: "SEO, SEA, formations et conseil stratégique." },
          { to: "/ressources", title: "RESSOURCES", desc: "Blog, études de cas et retours d'expérience." },
          { to: "/outils", title: "OUTILS", desc: "Ma boîte à outils du quotidien." },
        ].map((link, i) => (
          <motion.div key={link.to} custom={3 + i} variants={fadeUp}>
            <Link
              to={link.to}
              className="glass-card p-6 pixel-btn block h-full border border-border/30 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-[9px] sm:text-[10px] mb-3 text-primary">{link.title}</h3>
              <p className="font-modern text-sm text-muted-foreground">{link.desc}</p>
              <span className="font-modern text-xs text-primary mt-4 inline-block">Explorer →</span>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Séville + Hobbies bento */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
      >
        {/* Séville */}
        <motion.div custom={6} variants={fadeUp} className="glass-card p-5 flex flex-col items-center text-center">
          <img src={sevilleCat} alt="Séville, mon chat" className="w-16 h-16 sm:w-20 sm:h-20 animate-float" style={{ imageRendering: "pixelated" }} />
          <h2 className="font-pixel text-[8px] text-primary mt-3">SEVILLE</h2>
          <p className="font-modern text-xs text-muted-foreground mt-1">Mon superviseur officiel</p>
        </motion.div>

        {/* Hobbies */}
        {[
          { src: paraglidingBag, alt: "Parapente", label: "PARAPENTE" },
          { src: cooking, alt: "Cuisine", label: "CUISINE" },
          { src: guitar, alt: "Guitare", label: "GUITARE" },
        ].map((hobby, i) => (
          <motion.div
            key={hobby.label}
            custom={7 + i}
            variants={fadeUp}
            className="glass-card p-5 flex flex-col items-center text-center pixel-btn"
          >
            <img src={hobby.src} alt={hobby.alt} className="w-14 h-14 sm:w-18 sm:h-18" style={{ imageRendering: "pixelated" }} />
            <span className="font-pixel text-[7px] text-muted-foreground mt-3">{hobby.label}</span>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Index;
