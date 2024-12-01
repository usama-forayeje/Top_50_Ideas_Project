import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { fetchIdeas } from "../../api/api";
import IdeaList from "./components/IdeaList";

function HomeScreen() {
  const [ideas, setIdeas] = useState<any[]>([]); // State to store ideas
  const [filteredIdeas, setFilteredIdeas] = useState<any[]>([]); // State for filtered ideas
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [activeTab, setActiveTab] = useState<string>("hot"); // State for active tab

  const params = useLocation();

  // Fetch ideas from the API
  useEffect(() => {
    const getAllIdeas = async () => {
      try {
        setLoading(true);
        const fetchedIdeas = await fetchIdeas(); // Fetch ideas from API
        const sortedIdeas = fetchedIdeas.sort((a: any, b: any) => b.votes - a.votes); // Sort by votes (descending)
        setIdeas(sortedIdeas); // Store sorted ideas in state
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Failed to load ideas.");
        setLoading(false);
      }
    };

    getAllIdeas();
  }, []);

  // Filter ideas based on the active tab
  useEffect(() => {
    let filtered = [];
    if (activeTab === "hot") {
      filtered = ideas.filter((idea) => idea.votes >= 10); // "Hot" ideas
    } else if (activeTab === "new") {
      filtered = [...ideas].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ); // "New" ideas
    } else if (activeTab === "top") {
      filtered = [...ideas].sort((a, b) => b.votes - a.votes); // "Top" ideas
    }
    setFilteredIdeas(filtered); // Update filtered ideas state
  }, [activeTab, ideas]);

  // Conditional Rendering
  if (loading) return <p>Loading ideas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <Hero />
      {/* Pass activeTab and setActiveTab to Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Pass filtered ideas to IdeaList */}
      <IdeaList ideas={filteredIdeas} />
    </div>
  );
}

export default HomeScreen;
