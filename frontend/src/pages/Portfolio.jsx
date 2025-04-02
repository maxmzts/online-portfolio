import ProjectCard from "./components/ProjectCard/ProjectCard";
import useFetchProjects from "../hooks/useFetchProjects";

const Portfolio = () => {
    const { projects, loading, error } = useFetchProjects();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className="portfolio-container">
            <h1>My Portfolio</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </main>
    );
};

export default Portfolio;
  