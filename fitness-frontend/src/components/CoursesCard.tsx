type CoursesCardInfo = {
  name: string;
  date: string;
  duration?: number;
  trainer_id?: string;
};

const CoursesCard: React.FC<CoursesCardInfo> = ({
  name,
  date,
  duration,
  trainer_id,
}) => {
  return (
    <div className="text-white bg-richblack-100 w-70 h-76 mb-10">
      <img
        src="courses-image.jpg"
        alt="Course"
        className="ml-5 pt-5 w-60 h-48"
      />
      <div>
        <h1 className="mt-3">{name}</h1>
        <h3 className="mt-2">{date}</h3>
        <h3 className="mt-2">{duration}</h3>
        <h3 className="mt-2">{trainer_id}</h3>
      </div>
    </div>
  );
};

export default CoursesCard;

// type CardInfo = {
//   name: string;
//   activeStatus: boolean;
//   id: number;
// };

// const MembersCard: React.FC<CardInfo> = ({ name, activeStatus, id }) => {
//   return (
//     <div className="text-white text-center bg-richblack-100 w-58 h-70 drop-shadow-xl drop-shadow-bloodorange-100 border-bloodorange-100">
//       <img
//         src="../avatar-placeholder.png"
//         alt="Avatar"
//         className="h-52 w-52 pt-5 pl-6"
//       />
//       <h1 className="mt-3">{name}</h1>
//       <h2 className="mt-2">{activeStatus}</h2>
//       <h2 className="mt-2">{id}</h2>
//     </div>
//   );
// };

// export default MembersCard;
