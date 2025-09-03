import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-white text-center font-oswald pt-20">
        <h1 className="text-5xl font-bold">Welcome Back to Gym Manager!</h1>
        <h3 className="text-xl pt-5">Click the tabs above to navigate.</h3>
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
