import Header from "../components/Header";
import CoursesComp from "@/components/CoursesComp";
import NewCourseButton from "@/components/NewCourseButton";

const Courses = () => {
  return (
    <div>
      <Header />
      <h1 className="text-white text-7xl text-center mt-15 font-oswald font-bold">
        Courses
      </h1>
      {/* <div className="flex justify-end mr-25 items-center">
        <input
          type="text"
          placeholder="Search Courses"
          className="bg-white rounded-md w-60 mt-10"
        />
        <button className="bg-lightcyan-100 drop-shadow-sm drop-shadow-lightcyan-100 w-20 h-5 mt-10 ml-5 rounded-sm text-center text-white">
          Submit
        </button>
      </div> */}
      <div className="ml-25 mr-25 mt-20 mb-20">
        <div className="flex flex-wrap justify-between">
          <CoursesComp />
          <NewCourseButton />
        </div>
      </div>
    </div>
  );
};

export default Courses;
