import Head from "next/head";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

import Layout from "@/components/layout";
import api from "utils/api";
import StatInfo from "@/components/stat-info";
import AboutInfo from "@/components/about-info";

const Section = ({ title, children }) => {
  return (
    <section className="p-6 duration-100 rounded-md shadow cursor-default group hover:shadow-lg">
      {title && (
        <h4 className="text-2xl tracking-wider text-center duration-300 font-body group-hover:text-primary">
          {title}
        </h4>
      )}
      {children}
    </section>
  );
};

const translatorAlignment = {
  good: "Good 😇",
  bad: "Bad 😈",
};

const Hero = ({ hero }) => {
  return (
    <Layout>
      <Head>
        <title>{hero.name} - Superhero!</title>
      </Head>
      <Link href="/">
        <h1 className="inset-0 flex items-center justify-center inline-block w-56 p-8 text-xl text-center duration-200 cursor-default cursor-pointer md:m-8 hover:text-primary-dark hover:shadow-xl">
          <span>
            <IoMdArrowRoundBack />
          </span>
          <span className="ml-6">Return</span>
        </h1>
      </Link>
      <div className="container w-full px-2 mx-auto mb-8">
        <div className="relative flex items-center justify-center">
          <div
            className="self-center hidden mr-8 overflow-hidden border-2 rounded-full shadow-md md:block border-primary"
            style={{ width: 80, height: 80 }}
          >
            <img className="object-cover" src={hero?.image.url} width={220} />
          </div>
          <h1 className="text-3xl text-center md:text-6xl text-primary-dark">
            {hero.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-20 p-8 my-6 bg-white rounded-lg md:grid-cols-2 lg:grid-cols-3">
          <div
            className="self-center mx-auto overflow-hidden rounded-lg"
            style={{ width: 220, height: 293 }}
          >
            <img className="object-cover" src={hero?.image.url} width={220} />
          </div>
          <Section title="About">
            <ul className="mt-2 space-y-4">
              <AboutInfo title="Name" value={hero.biography["full-name"]} />
              <AboutInfo title="Height" value={hero.appearance.height} />
              <AboutInfo title="Weight" value={hero.appearance.weight} />
              <AboutInfo title="Gender" value={hero.appearance.gender} />
              <AboutInfo title="Race" value={hero.appearance.race} />
              <AboutInfo
                title="Alignment"
                value={translatorAlignment[hero.biography.alignment]}
              />
            </ul>
          </Section>
          <Section title="Stats">
            <ul className="flex flex-col items-center">
              {Object.entries(hero.powerstats).map((i) => (
                <li className="w-full max-w-xs" key={i[0]}>
                  <StatInfo title={i[0]} value={i[1]} />
                </li>
              ))}
            </ul>
          </Section>
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
