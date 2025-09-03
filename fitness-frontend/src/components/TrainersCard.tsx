type MemberCardInfo = {
  name: string;
  id: number;
  specialty: string;
};

const MembersCard: React.FC<MemberCardInfo> = ({ name, specialty, id }) => {
  return (
    <div className="text-white text-center bg-richblack-100 w-68 h-86 drop-shadow-xl drop-shadow-magenta-100 border-magenta-100 mb-10">
      <img
        src="../avatar-placeholder.png"
        alt="Avatar"
        className="h-58 w-58 pt-7 pl-9"
      />
      <h1 className="mt-3 font-bold">{name}</h1>
      <h2 className="mt-1">{specialty}</h2>
      <h2 className="mt-1">{id}</h2>
    </div>
  );
};

export default MembersCard;
