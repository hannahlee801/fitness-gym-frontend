type MemberCardInfo = {
  name: string;
  activeStatus: boolean;
  id: number;
};

const MembersCard: React.FC<MemberCardInfo> = ({ name, activeStatus, id }) => {
  return (
    <div className="text-white text-center bg-richblack-100 w-68 h-80 drop-shadow-xl drop-shadow-bloodorange-100 border-bloodorange-100 mb-10">
      <img
        src="../avatar-placeholder.png"
        alt="Avatar"
        className="h-58 w-58 pt-7 pl-9"
      />
      <h1 className="mt-3">{name}</h1>
      <h2 className="mt-2">{activeStatus}</h2>
      <h2 className="mt-2">{id}</h2>
    </div>
  );
};

export default MembersCard;
