// ProjectSection — généré par Obsidian Export depuis Agenciy - Creative Agency Framer Template (copy)
import { motion } from "framer-motion"
import ResponsiveVariant from "../lib/ResponsiveVariant"
import Primary from "../components/Primary.js"
import ProjectCard from "../components/ProjectCard.js"

export default function ProjectSection() {
  return (
    <section className="o-JaqzSO_00">
      <div className="o-akw5kNrKY">
        <div className="o-bffMJRNjm">
          <motion.div className="o-yv8e4H4tS" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ type: "spring", stiffness: 300, damping: 60, mass: 1, delay: 0 }}>
            <a className="o-BhJlIRNOF" href="/projects/">
              <motion.div className="o-altaC7mUZ" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
                <ResponsiveVariant Component={ProjectCard} entries={[{"query":"(min-width: 810px) and (max-width: 1439.98px)","variant":"cDLkQz_oy"},{"query":"(max-width: 809.98px)","variant":"YwH5add_0"}]} fallback={"ayG4PwkCj"} VBhHtMjS3="" FbjMOhKM2="" fZIuLptpx="" NUlKytqc1="" K8GuJoVR5="" cLlnKlPk3="" jOkWj50hz="" lL2_Y4ham="" style={{ width: "100%" }} />
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="o-Fzdk0yV_c" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ type: "spring", stiffness: 300, damping: 60, mass: 1, delay: 0 }}>
            <a className="o-nFfb3pQoW" href="/projects/">
              <motion.div className="o-KvJzffTKC" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.1 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
                <ResponsiveVariant Component={ProjectCard} entries={[{"query":"(min-width: 810px) and (max-width: 1439.98px)","variant":"cDLkQz_oy"},{"query":"(max-width: 809.98px)","variant":"YwH5add_0"}]} fallback={"ayG4PwkCj"} VBhHtMjS3="" FbjMOhKM2="" fZIuLptpx="" NUlKytqc1="" K8GuJoVR5="" cLlnKlPk3="" jOkWj50hz="" lL2_Y4ham="" style={{ width: "100%" }} />
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="o-Y9Kt45Be_" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ type: "spring", stiffness: 300, damping: 60, mass: 1, delay: 0 }}>
            <a className="o-kcJAEWYGX" href="/projects/">
              <motion.div className="o-NiMC3yrZZ" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.2 }} whileHover={{ y: -1, scale: 1.02, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }} whileTap={{ scale: 0.99, transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.18, delay: 0 } }}>
                <ResponsiveVariant Component={ProjectCard} entries={[{"query":"(min-width: 810px) and (max-width: 1439.98px)","variant":"cDLkQz_oy"},{"query":"(max-width: 809.98px)","variant":"YwH5add_0"}]} fallback={"ayG4PwkCj"} VBhHtMjS3="" FbjMOhKM2="" fZIuLptpx="" NUlKytqc1="" K8GuJoVR5="" cLlnKlPk3="" jOkWj50hz="" lL2_Y4ham="" style={{ width: "100%" }} />
              </motion.div>
            </a>
          </motion.div>
        </div>
        <div className="o-OUkoXAaFr">
          <motion.div className="o-FdsJSYWkA" initial={{ y: 32 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: 0.3 }}>
            <Primary variant="xr67Zvz4N" veoDi54e4="View All Projects" AFYf7sdfO="/projects" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
