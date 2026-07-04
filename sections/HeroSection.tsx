// HeroSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import HeroSectionInspiration from "../components/HeroSectionInspiration.js"

export default function HeroSection() {
  return (
    <section className="o-TM8Q6AqEw" id="hero">
      <div className="o-E38opWXBr" />
      <motion.div className="o-KyFTnRILC" initial={{ y: 32, scale: 0.96 }} animate={{ y: 0, scale: 1 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.9, delay: 0 }}>
        <HeroSectionInspiration style={{ width: "100%" }} />
      </motion.div>
      <div className="o-wOKcuqXtz" />
      <motion.div className="o-oHp2YPC61" initial={{ y: 16 }} animate={{ y: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 1, delay: 0.3 }} />
    </section>
  )
}
