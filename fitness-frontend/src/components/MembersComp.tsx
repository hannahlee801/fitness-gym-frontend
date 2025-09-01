import MembersCard from "./MembersCard";
import { useEffect, useState } from "react";

type MembersResponse = {
  id: number;
  name: string;
  active: boolean;
};

function MembersComp() {
  const [members, setMembers] = useState<MembersResponse[]>([]);

  useEffect(() => {
    const url: string =
      "https://fitness-and-gym-production.up.railway.app/docs#/";
    const fetchMembers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data: MembersResponse[] = await response.json();
        setMembers(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchMembers();
  }, []);

  return (
    <>
      {members &&
        members.map((member) => (
          <MembersCard
            id={member.id}
            name={member.name}
            activeStatus={member.active}
          />
        ))}
    </>
  );
}

export default MembersComp;
