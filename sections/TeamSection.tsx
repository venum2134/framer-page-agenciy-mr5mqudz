// TeamSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import ResponsiveVariant from "../lib/ResponsiveVariant"
import Tag from "../components/Tag.js"
import TeamCards from "../components/TeamCards.js"

export default function TeamSection() {
  return (
    <div className="o-JDIw7s9_4">
      <div className="o-QXjj6DG_l">
        <motion.div className="o-MW59kX_vo" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }}>
          <Tag variant="A4iEYljPJ" PSRqUmr0R="Team Members" />
        </motion.div>
        <motion.div className="o-y9SxdyDwA" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.1 }}>
          <motion.div className="o-RFpx237vT tsp-h2-64" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }}>
            <h2>Meet Our</h2>
          </motion.div>
          <motion.div className="o-tekv5OA8g tsp-p64-italic" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
            <h2> Team Members</h2>
          </motion.div>
        </motion.div>
      </div>
      <div className="o-i1qqQuiFu">
        <motion.div className="o-RRSuM4YLR" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.4 }}>
          <ResponsiveVariant Component={TeamCards} entries={[{"query":"(min-width: 810px) and (max-width: 1439.98px)","variant":"mKnb_Z91b"},{"query":"(max-width: 809.98px)","variant":"mKnb_Z91b"}]} fallback={"Tkcr77J1d"} style={{ width: "100%" }} />
        </motion.div>
      </div>
      <div className="o-AmapAYycz" role="img" aria-label="bg-pattern" />
    </div>
  )
}
