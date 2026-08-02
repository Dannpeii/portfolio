import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useResponsive } from '../../hooks/useResponsive'
import { horizontalPadding, verticalPadding } from '../../constants/sizes'
import { NAV_ITEMS } from '../../data/content'

function NavItem({ title, onClick, textClass = 'text-white' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`ml-8 first:ml-0 text-lg font-bold ${textClass} hover:opacity-80 transition-opacity`}
    >
      {title}
    </button>
  )
}

export default function Header({ onNavItemSelected }) {
  const { isDesktop, isTablet, isMobile } = useResponsive()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const hPad = horizontalPadding({ isDesktop, isTablet })
  const vPad = verticalPadding({ isDesktop, isTablet })

  const handleSelect = (item) => {
    setDrawerOpen(false)
    onNavItemSelected(item)
  }

  if (isMobile) {
    return (
      <>
        <header
          className="sticky top-0 z-40 flex items-center justify-between bg-ink px-4 py-3 shadow-sm"
        >
          <span className="text-2xl font-bold text-white">DucBH</span>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="text-white"
          >
            <HiMenu size={28} />
          </button>
        </header>

        <AnimatePresence>
          {drawerOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-50 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
              />
              <motion.aside
                className="fixed left-0 top-0 z-50 h-full w-72 bg-ink text-white shadow-xl"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
              >
                <div className="flex items-center justify-between px-6 py-6">
                  <span className="text-xl font-bold">DucBH</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <HiX size={24} />
                  </button>
                </div>
                <nav className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleSelect(item)}
                      className="px-6 py-4 text-left text-lg font-bold hover:bg-white/10"
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <header
      className="flex items-center justify-between bg-ink"
      style={{ paddingLeft: hPad, paddingRight: hPad, paddingTop: vPad, paddingBottom: vPad }}
    >
      <span className="text-2xl font-bold text-white">DucBH</span>
      <nav className="flex items-center">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item} title={item} onClick={() => onNavItemSelected(item)} />
        ))}
      </nav>
    </header>
  )
}
