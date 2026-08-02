import { motion } from 'framer-motion'

export default function Button({ icon: Icon, label, onClick, href, outlined = false }) {
  const classes = outlined
    ? 'border border-ink text-ink bg-transparent hover:bg-ink/5'
    : 'bg-ink text-white hover:bg-ink/85'

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-medium transition-colors duration-200 ${classes}`}
    >
      {Icon && <Icon size={18} />}
      {label}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
