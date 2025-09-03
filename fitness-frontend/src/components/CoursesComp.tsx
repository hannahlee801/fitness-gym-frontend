import { useEffect, useState } from "react";
import CoursesCard from "./CoursesCard";

type CoursesResponse = {
  id: number;
  name: string;
  date: string;
  duration: number;
};

function CoursesComp() {
  const [members, setMembers] = useState<CoursesResponse[]>([]);

  useEffect(() => {
    const url: string =
      "https://fitness-and-gym-production.up.railway.app/courses";
    const fetchMembers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data: CoursesResponse[] = await response.json();
        setMembers(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-wrap space-x-8">
      {members.map((member, i) => (
        <CoursesCard key={i} {...member} />
      ))}
    </div>
  );
}

export default CoursesComp;
