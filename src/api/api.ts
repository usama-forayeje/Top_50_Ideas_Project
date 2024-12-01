// api.ts

const API_URL = "http://localhost:5000/ideas"; 

export const addIdea = async (idea: { content: string; username: string; createdAt: string }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idea),
    });

    if (!response.ok) {
      throw new Error("Failed to save the idea.");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error submitting the idea:", error);
    throw error; 
  }
};

// Fetch all ideas
export const fetchIdeas = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch ideas.");
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching the ideas:", error);
    throw error; // Rethrow error for higher-level handling
  }
};


