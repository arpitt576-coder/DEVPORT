import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    github: '#',
    link: '#',
  },
  {
    title: 'AI Task Manager',
    description: 'Intelligent task management system that prioritizes work using natural language processing.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    github: '#',
    link: '#',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with interactive charts and automated alerts.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200',
    tech: ['TypeScript', 'D3.js', 'Coingecko API', 'Redux'],
    github: '#',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            FEATURED <span className="text-primary italic">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A small selection of my favorite projects. Each one was a unique challenge 
            that helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-background group">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black rounded-full" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                        {t}
                      </span >
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
          <Button variant="outline" className="rounded-full" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
