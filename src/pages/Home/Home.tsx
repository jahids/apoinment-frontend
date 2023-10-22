import Loader from "../../components/Loader/Loader";

const Home = () => {
  const data = false;

  if (data) {
    return <Loader />;
  }

  return (
    <div>
      <p>This is home page</p>
    </div>
  );
};

export default Home;
