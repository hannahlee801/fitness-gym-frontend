import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-white text-center font-oswald pt-20">
        <h1 className="text-5xl text-bold">Title Placeholder</h1>
        <h3 className="text-xl pt-5">I don't know what to call this:///</h3>
      </div>
      <img
        src="gym-colors.png"
        alt="gym"
        className="pl-25 pr-25 pt-10 drop-shadow-xl drop-shadow-lightcyan-100"
      />
    </div>
  );
};

export default Home;
