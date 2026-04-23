import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Layout, Settings, Smartphone, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    icon: <Settings className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            MY TECHNICAL <span className="text-primary italic">ARSENAL</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've spent years mastering various technologies to build seamless digital experiences. 
            Here's a snapshot of the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 bg-background w-fit rounded-xl border">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
