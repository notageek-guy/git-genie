import type { GetServerSideProps, NextPage } from "next";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";
import { getSession } from "next-auth/react";
import Layout from "@/components/Layout";
import Content from "@/components/Content";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Git Genie</title>
        <meta
          name="description"
          content="Git Genie your only github search point"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-theme ">
        <Layout>
          <div className="container px-4 py-6 mx-auto">
            <Content />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
