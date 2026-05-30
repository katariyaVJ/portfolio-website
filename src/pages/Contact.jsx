import ContactSection from "../components/newsletter/Newsletter";
import { motion } from "framer-motion";
import { introduction, site } from "../data/portfolio";

const Contact = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip pb-24">
      <div className="content-container">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactSection />
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
