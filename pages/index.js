import Search from "@/components/search";
import Logo from "@/components/logo";

function Home() {
  function handleSearch(value) {
    if (value) {
      alert(value);
    }
  }

  return (
    <main className="bg-primary-light min-h-screen">
      <Logo />
      <div className="mx-auto container">
        <div className="flex flex-col items-center">
          <Search onSearch={handleSearch} />
        </div>
      </div>
    </main>
  );
}

export default Home;
