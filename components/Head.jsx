import Head from "next/head";

const MyHead = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon_io/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon_io/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon_io/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon_io/site.webmanifest" />
    {/* add any other meta tags or links here */}
  </Head>
);

export default MyHead;
