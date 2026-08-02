import { motion } from 'framer-motion'
import { useResponsive } from '../../hooks/useResponsive'
import { ASSETS } from '../../constants/assets'

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/)
  return match ? match[1] : ''
}

export default function ProjectCard({ project }) {
  const { isDesktop, isTablet } = useResponsive()

  const mediaHeight = isDesktop ? '15vw' : isTablet ? '25vw' : '50vw'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
    >
      <div style={{ height: mediaHeight }} className="aspect-video w-full bg-black/5">
        {project.video ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${getYouTubeId(project.video)}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={ASSETS[project.image]}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      <hr className="mx-2.5 border-divider" />

      <div className="flex flex-1 flex-col p-4 text-left">
        <h3 className="text-center text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-2 text-base text-ink">
          <span className="font-bold">Members: </span>
          {project.members}
        </p>
        <p className="mt-1 line-clamp-3 text-base text-ink">{project.description}</p>
        <p className="mt-1 text-base text-ink">
          <span className="font-bold">Technical used: </span>
          {project.technicalUsed}
        </p>
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 text-base text-ink hover:underline"
          >
            <span className="font-bold">{project.link.label}</span>
            {project.link.text}
          </a>
        )}
      </div>
    </motion.div>
  )
}
