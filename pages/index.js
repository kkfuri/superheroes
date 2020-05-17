import { useState, useEffect } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import Search from "@/components/search";
import Logo from "@/components/logo";
import Results from "@/components/results";
import api from "utils/api";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState();

  async function handleSearch(value) {
    setError(null);
    if (!value) return setItems([]);
    setLoading(true);
    try {
      const response = await api.get(`/search/${value}`);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setItems(response.data);
      }
    } catch (err) {
      setError(err.response);
    }
    setLoading(false);
  }

  console.log(error);

  useEffect(() => {
    if (loading) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return clearAllBodyScrollLocks();
  });

  return (
    <main className="min-h-screen pb-20 bg-primary-light">
      <Logo />
      <div className="container px-2 mx-auto md:px-0">
        <div className="flex flex-col items-center">
          <Search onSearch={handleSearch} />
        </div>
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-overlay">
            <div className="z-20 spinner" />
          </div>
        )}
        {items.results && (
          <div className="p-2 mt-20 bg-white rounded-lg shadow-lg md:p-8">
            <h2 className="text-2xl font-light text-center font-body">
              Results for:{" "}
              <strong className="text-primary-dark">
                {items["results-for"]}
              </strong>
            </h2>
            <Results list={items?.results} />
          </div>
        )}
        {error && (
          <div className="mt-20 text-center">
            <h2 className="text-6xl font-bold text-primary-dark font-body">
              No results! 😢
            </h2>
            <p className="text-xl text-primary-dark font-body">try again</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
