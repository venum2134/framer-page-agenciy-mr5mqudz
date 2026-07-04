// PricingSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import PricingCard from "../components/PricingCard.js"
import Tag from "../components/Tag.js"

export default function PricingSection() {
  return (
    <section className="o-aRoa6Ogmd">
      <div className="o-kSgAZiZPZ">
        <div className="o-bzuCh_vwW">
          <motion.div className="o-ungukw3l8" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }}>
            <Tag variant="A4iEYljPJ" PSRqUmr0R="Tarifs" />
          </motion.div>
          <motion.div className="o-Ow4VY9nGF" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.1 }}>
            <motion.div className="o-STJnyizuz tsp-p64-italic" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }}>
              <h2>Tarifs </h2>
            </motion.div>
            <motion.div className="o-bnCak0s2M tsp-h2-64" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
              <h2>simples et transparents</h2>
            </motion.div>
          </motion.div>
          <motion.div className="o-BHdUu2qLP tsp-p16-regular" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.4 }}>
            <p>Que tu lances une idée ou que tu scales un produit, choisis le plan adapté à ton usage — sans superflu.</p>
          </motion.div>
        </div>
        <div className="o-qcOph8OT2">
          <motion.div className="o-yxBnNGd7P" initial={{ x: 30, y: 32 }} whileInView={{ x: 0, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.5 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <PricingCard variant="FXyMkB9Ot" dxRHkQ1XN="1" gfpRUUp3F="Starter" Q6IClsSNK="Pour tester Obsidian" itP0_Vbbx="0€" W1mg8mzLD="/ mois" zzwAUpxfw="Commencer" Pqo9SisiQ="/contact" RzilIhtp8="1 site ou 1 deck par mois" vpgkZSHbV="Agent Studio limité" S4kwauAyv="Export standard" VFZf5w6PB="Support communauté" J0GB4b4UI="Watermark Obsidian" style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-E1V8DfqXh" initial={{ x: 30, y: 32 }} whileInView={{ x: 0, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.6 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <PricingCard variant="M8UjihylL" dxRHkQ1XN="2" gfpRUUp3F="Pro" Q6IClsSNK="Pour les créateurs et freelances" itP0_Vbbx="39€" W1mg8mzLD="/ mois" zzwAUpxfw="Choisir Pro" Pqo9SisiQ="/contact" RzilIhtp8="Sites & decks illimités" vpgkZSHbV="Code React exporté" S4kwauAyv="Agent Studio complet" VFZf5w6PB="Scans cybersécurité inclus" J0GB4b4UI="Aucun watermark" style={{ width: "100%" }} />
          </motion.div>
          <motion.div className="o-EDcJzLrHS" initial={{ x: 30, y: 32 }} whileInView={{ x: 0, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.7 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
            <PricingCard variant="FXyMkB9Ot" dxRHkQ1XN="3" gfpRUUp3F="Entreprise" Q6IClsSNK="Pour les équipes et agences" itP0_Vbbx="Sur mesure" W1mg8mzLD="/ Project" zzwAUpxfw="Nous contacter" Pqo9SisiQ="/contact" RzilIhtp8="Tout le plan Pro inclus" vpgkZSHbV="Pentest avancé & rapports" S4kwauAyv="Agents IA personnalisés" VFZf5w6PB="Accès API & intégrations" J0GB4b4UI="Support dédié & SLA" style={{ width: "100%" }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
