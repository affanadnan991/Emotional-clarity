'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="relative z-10 border-t border-[rgba(160,170,210,0.1)] bg-[rgba(10,14,27,0.4)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="font-display text-lg text-[#e8eaf0] mb-2">
              Emotional Clarity
            </h3>
            <p className="text-sm text-[#5a6278] leading-relaxed">
              A space for honest conversation, built with intention and care.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-sm tracking-[0.15em] uppercase text-[#3d4560] font-sans mb-4 font-medium">
              Navigation
            </h4>
            <nav className="space-y-2 text-sm">
              {['Home', 'Story', 'Intent', 'Choice'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#5a6278] hover:text-[#a8b4d4] transition-colors duration-300 inline-block"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h4 className="text-sm tracking-[0.15em] uppercase text-[#3d4560] font-sans mb-4 font-medium">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="p-2 rounded-lg border border-[rgba(160,170,210,0.2)] bg-[rgba(160,170,210,0.05)] text-[#5a6278] hover:text-[#a8b4d4] hover:border-[rgba(160,170,210,0.4)] hover:bg-[rgba(160,170,210,0.1)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[rgba(160,170,210,0.2)] to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5a6278]"
        >
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#a8b4d4]" /> for meaningful
            conversations
          </p>
          <p>© {currentYear} Emotional Clarity. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
