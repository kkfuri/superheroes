import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <h1 className="inset-0 inline-block w-full p-8 text-xl text-center duration-200 cursor-default cursor-pointer md:m-8 md:max-w-xs md:w-auto hover:text-primary-dark hover:shadow-xl">
        Superheroes
      </h1>
    </Link>
  );
}

export default Logo;
