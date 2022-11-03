import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../public/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="./favicon_io/site.webmanifest" />
    </Helmet>
  );
}
