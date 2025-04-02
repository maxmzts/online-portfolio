import { useState, useEffect } from "react";

const useFetchProjects = (endpoint = "") => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`/api/projects${endpoint}`);
                if (!response.ok) {
                    throw new Error("Error fetching projects");
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [endpoint]);

    return { projects, loading, error };
};

export default useFetchProjects;
