function ErrorState() {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-6xl font-bold text-primary-dark font-body">
        No results! 😢
      </h2>
      <p className="text-xl text-primary-dark font-body">
        try something like:
        <br />
        <strong>spider 🕷️</strong>
        <br />
        <strong>bat 🦇</strong>
        <br />
        <strong>ant 🐜</strong>
      </p>
    </div>
  );
}

export default ErrorState;
