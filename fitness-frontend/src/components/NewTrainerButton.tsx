import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type CreateNewTrainerFormData = {
  name: string;
  specialty: string;
};

const NewTrainerButton: React.FC = () => {
  const [formData, setFormData] = useState<CreateNewTrainerFormData>({
    name: "",
    specialty: "",
  });

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://fitness-and-gym-production.up.railway.app/trainers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed z-10 right-[5%] bottom-[5%] border-1 bg-white rounded hover:cursor-pointer p-2 active:bg-richblack-100 active:text-white hover:bg-richblack-100 hover:text-white border-magenta-100 drop-shadow-lg drop-shadow-magenta-100">
          +
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Trainer</DialogTitle>
            <DialogDescription>Create a new trainer.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTrainerButton;
