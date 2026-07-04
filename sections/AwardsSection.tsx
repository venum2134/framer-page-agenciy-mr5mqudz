// AwardsSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import ResponsiveVariant from "../lib/ResponsiveVariant"
import AwardCard from "../components/AwardCard.js"
import Tag from "../components/Tag.js"

export default function AwardsSection() {
  return (
    <section className="o-FnBaAIBg_">
      <div className="o-lkGyoUOdi">
        <motion.div className="o-dbOGTmK5I" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }}>
          <Tag variant="A4iEYljPJ" PSRqUmr0R="Our Award" />
        </motion.div>
        <motion.div className="o-UIpBxHLGP" initial={{ y: 36, scale: 0.94 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.7, delay: 0.1 }}>
          <motion.div className="o-JX0jeHRgf" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }}>
            <ResponsiveVariant Component={AwardCard} entries={[{"query":"(max-width: 809.98px)","variant":"d70NvcvxW"}]} fallback={"DK_PpXsWq"} bfhSbJx3y="Awwwards" INvVKlnsK="SOTY 2025 - 1st Winner" CoaS8SwAt="A.I Car Landing page" style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-G7r6jHfLZ" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
            <ResponsiveVariant Component={AwardCard} entries={[{"query":"(max-width: 809.98px)","variant":"d70NvcvxW"}]} fallback={"DK_PpXsWq"} bfhSbJx3y="Css Awards" INvVKlnsK="Top 5 Best of eCommerce Websites 2024" CoaS8SwAt="Theo Agency, Re-branding" style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-C9VXJqBkz" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.4 }}>
            <ResponsiveVariant Component={AwardCard} entries={[{"query":"(max-width: 809.98px)","variant":"d70NvcvxW"}]} fallback={"DK_PpXsWq"} bfhSbJx3y="Behance" INvVKlnsK="Winner - US Behance Portfolio Review 2024" CoaS8SwAt="Virtual Reality, Encounter" style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-PA9JaGcnW" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.5 }}>
            <ResponsiveVariant Component={AwardCard} entries={[{"query":"(max-width: 809.98px)","variant":"d70NvcvxW"}]} fallback={"DK_PpXsWq"} bfhSbJx3y="Awwwards" INvVKlnsK="Honor SOTD November, 2024" CoaS8SwAt="The News" style={{ width: "100%" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
