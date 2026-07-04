// AboutSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import ResponsiveVariant from "../lib/ResponsiveVariant"
import StatsSection from "../components/StatsSection.js"
import Tag from "../components/Tag.js"
import TextColorLetters from "../components/TextColorLetters.js"

export default function AboutSection() {
  return (
    <div className="o-d9IsQLSJ1">
      <div className="o-A_o1GZsuy">
        <div className="o-OWnbj1b0I">
          <motion.div className="o-TtmPc_nQ3" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }}>
            <Tag variant="A4iEYljPJ" PSRqUmr0R="Notre Principe" />
          </motion.div>
          <motion.div className="o-r9WnFRRb4" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.1 }}>
            <TextColorLetters text="Tu décris. Obsidian crée. Tu possèdes. Pas d’outil à apprendre, pas de configuration, pas d’agence — juste toi, une description, et un résultat production-ready en secondes." fontFamily={{"fontWeight":500,"fontStyle":"normal","fontFamily":"\"Inter\", \"Inter Placeholder\", sans-serif"}} fontSize={24} lineHeight={30} letterSpacing={0} textAlign="center" duration={0.3} easing="easeInOut" transitionStartIndex={90} style={{ width: "100%" }} />
          </motion.div>
          <div className="o-xUszmZJ1n">
            <motion.div className="o-qFfzuF98u" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }}>
              <p>Obsidian</p>
            </motion.div>
          </div>
        </div>
        <div className="o-Vl5t53FVB">
          <motion.div className="o-UO1wqWggS" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
            <ResponsiveVariant Component={StatsSection} entries={[{"query":"(min-width: 810px) and (max-width: 1439.98px)","variant":"VA_3XhZid"},{"query":"(max-width: 809.98px)","variant":"r6DABflfx"}]} fallback={"xZjo8ZVmp"} style={{ width: "100%" }} />
          </motion.div>
        </div>
        <div className="o-fIRIAMbAS" role="img" aria-label="dot pattern" />
      </div>
    </div>
  )
}
