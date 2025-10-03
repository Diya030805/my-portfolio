const projects = [
  {
    id: 1,
    title: "Hotel Booking Platform",
    description:
      "A seamless hotel booking platform where users can search hotels, check availability, and book rooms with secure payments.",
    image: "projects/HotelBooking.png",
    tags: ["HTML", "React.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Restaurant Website",
    description:
      "An elegant restaurant website with digital menu, online table booking, and customer-friendly UI for food lovers.",
    image: "projects/Restraunt.png",
    tags: ["HTML", "React.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "CookMate Recipe Finder",
    description:
      "An interactive recipe finder app where users can explore dishes, search by ingredients, and save their favorite recipes.",
    image: "projects/CookMate.png",
    tags: ["HTML", "React.js", "Tailwind CSS"],
  },
];

const tagHoverColors = {
  HTML: "hover:bg-red-500 hover:text-white hover:shadow-md",
  "React.js": "hover:bg-blue-500 hover:text-white hover:shadow-md",
  "Tailwind CSS": "hover:bg-teal-500 hover:text-white hover:shadow-md",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore some of my recent work, crafted with precision and passion for
          performance and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:bg-primary/10 hover:shadow-xl hover:border hover:border-primary"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-semibold border border-primary rounded-full text-primary transition-all duration-300 ease-in-out transform hover:scale-105 ${tagHoverColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
