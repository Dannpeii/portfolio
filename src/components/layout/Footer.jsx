import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useResponsive } from '../../hooks/useResponsive'
import { horizontalPadding, verticalPadding } from '../../constants/sizes'
import { ASSETS } from '../../constants/assets'
import { FOOTER } from '../../data/content'

function ContactInfo() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-xl font-bold text-ink">Contact</h3>
      <p className="mt-2 font-bold text-ink">{FOOTER.name}</p>
      <a
        href={`mailto:${FOOTER.email}`}
        className="mt-2 flex items-center gap-1.5 text-ink hover:underline"
      >
        <FiMail /> {FOOTER.email}
      </a>
      <a
        href={FOOTER.github.url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 flex items-center gap-1.5 text-ink hover:underline"
      >
        <FaGithub /> {FOOTER.github.label}
      </a>
      <a
        href={FOOTER.linkedin.url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 flex items-center gap-1.5 text-ink hover:underline"
      >
        <FaLinkedin /> {FOOTER.linkedin.label}
      </a>
    </div>
  )
}

export default function Footer() {
  const { isDesktop, isTablet } = useResponsive()
  const hPad = horizontalPadding({ isDesktop, isTablet })
  const vPad = verticalPadding({ isDesktop, isTablet })

  const avatar = (
    <img src={ASSETS.logo} alt="DucBH logo" className="h-[10vh] object-cover" />
  )
  const quote = (
    <p className="whitespace-pre-line text-ink">{FOOTER.quote}</p>
  )
  const copyright = <p className="text-ink">{FOOTER.copyright}</p>

  return (
    <footer
      className="bg-page-bg"
      style={{ paddingLeft: hPad, paddingRight: hPad, paddingTop: vPad, paddingBottom: vPad }}
    >
      {isDesktop ? (
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col items-start">
            {avatar}
            <div className="h-4" />
            {quote}
            <div className="h-2" />
            {copyright}
          </div>
          <ContactInfo />
        </div>
      ) : (
        <div className="flex flex-col items-start">
          {copyright}
          <div className="h-4" />
          <ContactInfo />
          <div className="h-7.5" />
          {avatar}
          <div className="h-4" />
          {quote}
        </div>
      )}
    </footer>
  )
}
