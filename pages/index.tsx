import { useState } from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";

const Home: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div>
      <Header setSelectedItem={setSelectedItem} />
      {selectedItem === "Dashboard" && <Dashboard />}
    </div>
  );
};

export default Home;