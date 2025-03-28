import { motion } from 'framer-motion';
import { Link } from 'lucide-react';

const portfolios = [
  {
    title: 'TryHackMe Profile',
    description: 'View my cybersecurity journey and achievements on TryHackMe.',
    link: 'https://tryhackme.com/p/phantom',
  },
  {
    title: 'Linktree Portfolio',
    description: 'Access all my social media profiles and links in one place.',
    link: 'https://linktr.ee/phantom',
  },
  {
    title: 'GitHub Portfolio',
    description: 'Explore my open-source contributions and personal projects.',
    link: 'https://github.com/phantom0004',
  },
  {
    title: 'Fiverr Profile',
    description: 'Check out my freelance services and client reviews.',
    link: 'https://fiverr.com/phantom',
  }
];

export function PortfoliosSection() {
  return (
    <section className="py-20 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-12 flex items-center gap-4">
          <Link className="w-8 h-8 text-green-500" />
          <span>cat ~/profiles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolios.map((portfolio) => (
            <motion.a
              key={portfolio.title}
              href={portfolio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative bg-black/50 border border-green-500/20 p-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-green-500 group-hover:text-green-400 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {portfolio.description}
                </p>
                <div className="absolute bottom-3 right-3 text-green-500/50 group-hover:text-green-500 transition-colors">
                  <Link className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}