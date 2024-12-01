type IdeaListProps = {
    ideas: any[];
  };
  
  function IdeaList({ ideas }: IdeaListProps) {
    return (
      <div className="mt-6">
        {ideas.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4">
            {ideas.map((idea, index) => (
              <li
                key={idea.id}
                
              >
               <div className="relative p-6 transition-shadow border rounded-lg shadow-md hover:shadow-lg">
                {/* Vote/Dislike Section */}
                <div className="absolute flex items-center gap-3 top-1 right-2">
                  <div className="flex flex-col items-center gap-3 pt-3 my-auto text-center">
                    <span className="text-xl cursor-pointer">🔥</span>
                    <span className="text-sm font-medium ">{idea.vote || 0}</span>
                    <span className="text-xl cursor-pointer">👎</span>
                  </div>
                </div>
                {/* Idea Content */}
              
                  <h3 className="flex gap-3 mr-4 text-lg font-semibold ">
                     {/* Index Label */}
                     <span>{index + 1}.</span>
                  <span>{idea.content}</span>
                    
                  </h3>
                <div className="mt-6 ml-8">
                <span className="flex items-center gap-2 mt-4">
                    <p className="text-sm text-gray-400 ">By: @{idea.username}</p>
                  <p className="text-sm text-gray-400 "> on {idea.createdAt}</p> 
                </span>
                </div>
                  
                
               </div>
                
               
               
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No ideas found for this category.</p>
        )}
      </div>
    );
  }
  
  export default IdeaList;
  