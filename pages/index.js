import { useState, useEffect } from "react";
import Head from "next/head";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import Search from "@/components/search";
import Logo from "@/components/logo";
import Results from "@/components/results";
import api from "utils/api";
import ErrorState from "@/components/error-state";
import Layout from "@/components/layout";

function Home() {
  const [search, setSearch] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState();

  function resetData() {
    setItems([]);
    setError(null);
  }

  async function handleSearch(value) {
    resetData();
    if (!value) return;
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

  useEffect(() => {
    loading ? disableBodyScroll() : enableBodyScroll();
    return clearAllBodyScrollLocks();
  });

  return (
    <Layout>
      <Head>
        <title>Superheroes!</title>
      </Head>
      <Logo />
      <div className="container flex flex-col flex-1 px-2 mx-auto md:px-0">
        <div className="flex flex-col items-center justify-center flex-1 duration-200 transform">
          <Search initialValue={search} onSearch={handleSearch} />
        </div>
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
        {error && <ErrorState onClickSuggestion={(v) => setSearch(v)} />}
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-overlay">
          <div className="z-20 spinner" />
        </div>
      )}
    </Layout>
  );
}

export default Home;
