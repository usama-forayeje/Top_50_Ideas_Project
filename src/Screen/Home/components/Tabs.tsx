type TabsProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
  function Tabs({ activeTab, setActiveTab }: TabsProps) {
    return (
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          href="/#hot"
          onClick={() => setActiveTab("hot")}
          className={`text-lg font-bold tab ${activeTab === "hot" && "tab-active"}`}
        >
          🔥Hot
        </a>
        <a
          role="tab"
          href="/#new"
          onClick={() => setActiveTab("new")}
          className={`text-lg font-bold tab ${activeTab === "new" && "tab-active"}`}
        >
          ✨New
        </a>
        <a
          role="tab"
          href="/#top"
          onClick={() => setActiveTab("top")}
          className={`text-lg font-bold tab ${activeTab === "top" && "tab-active"}`}
        >
          🏆Top
        </a>
      </div>
    );
  }
  
  export default Tabs;
  