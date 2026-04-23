import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-primary/10 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Profile photo" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl -m-4 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              A BIT ABOUT <span className="text-primary italic">ME</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a computer science graduate who loves crafting digital solutions that solve real-world problems. 
              My journey started with a curiosity for how things work under the hood, and it has evolved into a passion for building robust applications.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs.
              I believe in continuous learning and always strive to improve my craft.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-xl mb-1">Education</h4>
                <p className="text-muted-foreground">B.S. in Computer Science</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Experience</h4>
                <p className="text-muted-foreground">Fresh Graduate / Entry Level</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Interests</h4>
                <p className="text-muted-foreground">AI, UI Design, Blockchain</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
