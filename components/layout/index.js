function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-light">
      <main className="flex flex-col flex-1 h-full">{children}</main>
      <footer className="w-full mt-8 mb-4 text-center">
        <code>
          Made by{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/kkfuri"
            aria-label="Go to dev github"
          >
            @kkfuri
          </a>{" "}
          with{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://nextjs.org/"
            aria-label="Go to nextjs page"
          >
            Next.js
          </a>
        </code>
      </footer>
    </div>
  );
}

export default Layout;
