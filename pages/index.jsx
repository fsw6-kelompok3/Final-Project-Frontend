import Layout from "../components/general/Layout";
import HomeBanner from "../components/home/HomeBanner";
import Index from "./book";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner />
        <Index />
      </Layout>
    </>
  );
}
