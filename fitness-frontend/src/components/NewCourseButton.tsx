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

type CreateNewCourseFormData = {
  name: string;
  date: string;
  duration: number;
  trainer_id: number;
};

const NewCourseButton: React.FC = () => {
  const [formData, setFormData] = useState<CreateNewCourseFormData>({
    name: "",
    date: "",
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

    fetch("https://fitness-and-gym-production.up.railway.app/courses", {
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
        <button className="fixed z-10 right-[5%] bottom-[5%] border-1 bg-white rounded hover:cursor-pointer p-2 active:bg-richblack-100 active:text-white hover:bg-richblack-100 hover:text-white border-darkpink-100 drop-shadow-lg drop-shadow-darkpink-100">
          +
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Course</DialogTitle>
            <DialogDescription>Create a new course.</DialogDescription>
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
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="trainer_id">Trainer ID</Label>
              <Input
                id="trainer_id"
                name="trainer_id"
                value={formData.trainer_id}
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

export default NewCourseButton;
