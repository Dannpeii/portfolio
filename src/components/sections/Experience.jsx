import { useResponsive } from '../../hooks/useResponsive'
import { PROJECTS } from '../../data/content'
import ProjectCard from '../common/ProjectCard'

export default function Experience() {
  const { isDesktop } = useResponsive()

  return (
    <div className={isDesktop ? 'mx-[14%]' : ''}>
      <h2 className="text-center text-5xl font-bold text-ink">Experience</h2>
      <div className="h-4" />
      <h3 className="text-center text-2xl font-bold text-ink">
        What I Have Experienced?
      </h3>
      <div className="h-7.5" />

      <div className={isDesktop ? 'flex items-stretch gap-7.5' : 'flex flex-col gap-4'}>
        {PROJECTS.map((project) => (
          <div key={project.id} className={isDesktop ? 'flex-1' : ''}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="h-7.5" />
    </div>
  )
}
