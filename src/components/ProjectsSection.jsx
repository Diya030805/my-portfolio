import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Hotel Booking Platform",
		description:
			"A seamless hotel booking platform where users can search hotels, check availability, and book rooms with secure payments.",
		image: "/projects/HotelBooking.png",
		tags: ["HTML", "React.js", "Tailwind CSS"],
		demoUrl: "#",
	},
	{
		id: 2,
		title: "Restraunt Website",
		description:
			"An elegant restaurant website with digital menu, online table booking, and customer-friendly UI for food lovers.",
		image: "/projects/Restraunt.png",
		tags: ["HTML", "React.js", "Tailwind CSS"],
		demoUrl: "#",
	},
	{
		id: 3,
		title: "CookMate Recipe Finder",
		description:
			"An interactive recipe finder app where users can explore dishes, search by ingredients, and save their favorite recipes.",
		image: "/projects/CookMate.png",
		tags: ["HTML", "React.js", "Tailwind CSS"],
		demoUrl: "#",
	},
];

const tagHoverColors = {
	HTML: "hover:bg-red-500 hover:text-white hover:shadow-red-500/50",
	"React.js": "hover:bg-blue-500 hover:text-white hover:shadow-blue-500/50",
	"Tailwind CSS": "hover:bg-teal-500 hover:text-white hover:shadow-teal-500/50",
};

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured{" "}
					<span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully
					crafted with attention to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className={`px-2 py-1 text-xs font-medium border border-primary rounded-md text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 ${tagHoverColors[tag]}`}
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
