import { Helmet } from "react-helmet";

const Mata = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default Mata;
