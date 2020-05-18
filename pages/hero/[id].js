import Head from "next/head";

import Layout from "@/components/layout";
import api from "utils/api";
import Logo from "@/components/logo";

const Hero = ({ hero }) => {
  function getColor(value) {
    const val = Number(value);
    if (val < 20) {
      return { bg: "bg-red-400", text: "text-red-400" };
    } else if (val < 40) {
      return { bg: "bg-red-600", text: "text-red-600" };
    } else if (val < 60) {
      return { bg: "bg-yellow-500", text: "text-yellow-500" };
    } else if (val < 80) {
      return { bg: "bg-green-500", text: "text-green-500" };
    } else {
      return { bg: "bg-primary", text: "text-primary" };
    }
  }

  return (
    <Layout>
      <Head>
        <title>{hero.name} - Superhero!</title>
      </Head>
      <Logo />
      <div className="container w-full px-2 mx-auto mb-8">
        <h1 className="w-full text-6xl text-center text-primary-dark">
          {hero.name}
        </h1>

        <div className="grid grid-cols-1 gap-20 p-8 my-6 bg-white rounded-lg md:grid-cols-4">
          <section className="p-6 border border-gray-300 rounded-md">
            <h4 className="text-2xl tracking-wider text-center font-body">
              About
            </h4>
            <ul>
              <li>
                Full name: <strong>{hero.biography["full-name"]}</strong>
              </li>
            </ul>
          </section>
          <section className="px-12 py-6 border border-gray-300 rounded-md">
            <h4 className="text-2xl tracking-wider text-center font-body">
              Stats
            </h4>
            <ul className="flex flex-col items-center">
              {Object.entries(hero.powerstats).map((i) => {
                const color = getColor(i[1]);
                return (
                  <li className="flex items-center w-full max-w-xs py-2 capitalize">
                    <p className="inline-block w-full mr-8">{i[0]}</p>
                    <p className="flex items-center flex-1 text-left">
                      <div className={`p-1 mr-2 rounded-full ${color.bg}`} />
                      <strong className={color.text}>{i[1]}</strong>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await api.get(`/${params.id}`);
  return {
    props: { hero: response.data },
  };
}

export default Hero;
