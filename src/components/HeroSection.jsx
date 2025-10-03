import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block md:inline">Hi, </span>
            <span className="typewriter text-primary">I am Diya Ghosh</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 animate-fade-in">
            I am passionate about <span className="text-primary">Front-end development</span> and enjoy crafting amazing web experiences while learning modern technologies, building interfaces that are both beautiful and functional.
          </p>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
}