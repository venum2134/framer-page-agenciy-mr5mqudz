// ProcessSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import ProcessCard from "../components/ProcessCard.js"
import Tag from "../components/Tag.js"

export default function ProcessSection() {
  return (
    <section className="o-CilvxhedE">
      <div className="o-EEuHhWZvF">
        <div className="o-N9LGi5HaK" role="img" aria-label="bg-pattern" />
        <div className="o-aA1ulvca6">
          <motion.div className="o-e8niBdOrz" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }}>
            <Tag variant="A4iEYljPJ" PSRqUmr0R="Comment ça marche" />
          </motion.div>
          <motion.div className="o-ObKPuXBpu" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.1 }}>
            <motion.div className="o-cUhYHh3vf" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }}>
              <motion.div className="o-KRd7zz3mO tsp-p64-italic" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
                <h2>Tu décris, </h2>
              </motion.div>
              <motion.div className="o-svcvTINkz tsp-h2-64" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.4 }}>
                <h2>Obsidian crée</h2>
              </motion.div>
            </motion.div>
            <motion.div className="o-mW5DuDN6a tsp-p16-regular" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.5 }}>
              <p>Pas de configuration, pas d’outil à apprendre. Du prompt au résultat production-ready, sans le chaos.</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="o-dU9h4aEnM">
          <motion.div className="o-PR1pegrzS" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.6 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <ProcessCard HDwwZ4ZDT="/01" ykAvJna1D="Décris" V4PP4Dd6y="Explique ton besoin en langage naturel — un site, un deck, un scan ou un agent. Aucune compétence technique requise." style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-ypEvyPPgt" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.7 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <ProcessCard HDwwZ4ZDT="/02" ykAvJna1D="Génère" V4PP4Dd6y="Obsidian raisonne, structure et produit un résultat premium en quelques secondes." style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-DHVwaeQ09" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.8 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <ProcessCard HDwwZ4ZDT="/03" ykAvJna1D="Affine" V4PP4Dd6y="Ajuste le résultat et itère par la conversation jusqu’à la perfection." style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-cmE3RJiES" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.9 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <ProcessCard HDwwZ4ZDT="/04" ykAvJna1D="Possède" V4PP4Dd6y="Récupère un livrable production-ready : code, deck, rapport ou agent — il t’appartient." style={{ width: "100%" }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
