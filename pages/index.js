import Search from "@/components/search";
import Logo from "@/components/logo";
import ListItem from "@/components/list-item";
import { useState } from "react";
import api from "utils/api";

function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState([]);

  async function handleSearch(value) {
    if (value) {
      try {
        const response = await api.get(`/search/${value}`);
        console.log(response.data);
        setItems(response.data);
      } catch (err) {
        console.log(err);
        setError(err.response);
      }
    }
  }

  return (
    <main className="bg-primary-light min-h-screen pb-20">
      <Logo />
      <div className="mx-auto container">
        <div className="flex flex-col items-center">
          <Search onSearch={handleSearch} />
        </div>
        {items.results && (
          <div className="bg-white rounded-lg p-8 mt-20 shadow-lg">
            <h2 className="text-2xl text-center font-body font-light">
              Results for:{" "}
              <strong className="text-primary-dark">
                {items["results-for"]}
              </strong>
            </h2>
            <div className="grid grid-cols-4 gap-8 py-12">
              {items?.results?.map((item) => (
                <ListItem item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
