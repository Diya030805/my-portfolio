import { Code, Database, Linkedin, Instagram, Github } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative animate-fade-slide-up-clean">
      <div className="container mx-auto max-w-5xl">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-slide-up-clean">
  About <span className="text-primary"> Me</span>
</h2>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Front-End Developer
            </h3>

            <p className="text-muted-foreground">
              I'm currently pursuing BCA at Adamas University, where I'm building my skills in front-end development and modern web technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant and responsive user interfaces, and I'm constantly learning new technologies and techniques to grow as a front-end developer.
            </p>

            <div className="flex gap-4 pt-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/diya-ghosh030508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Linkedin className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/diyaghosh0305?igsh=MXQxOXN0aXdrbWF0MA==&utm_source=ig_contact_invite " 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Instagram className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="https://github.com/Diya030805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Github className="h-6 w-6 relative z-10 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-End Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive websites using HTML, CSS, JavaScript, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Turning design concepts into functional web experiences with clean and efficient code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}