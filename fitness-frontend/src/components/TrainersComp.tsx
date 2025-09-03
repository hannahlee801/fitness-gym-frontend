import TrainersCard from "./TrainersCard";
import { useEffect, useState } from "react";

type TrainersResponse = {
  id: number;
  name: string;
  specialty: string;
};

function TrainersComp() {
  const [members, setMembers] = useState<TrainersResponse[]>([]);

  useEffect(() => {
    const url: string =
      "https://fitness-and-gym-production.up.railway.app/trainers";
    const fetchMembers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data: TrainersResponse[] = await response.json();
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
        <TrainersCard key={i} {...member} />
      ))}
    </div>
  );
}

export default TrainersComp;
