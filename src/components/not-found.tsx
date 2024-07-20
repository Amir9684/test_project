import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { TriangleAlert } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-20 w-full min-h-full">
      <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold flex items-center justify-center gap-5">
        <TriangleAlert className="text-rose-500 w-24 h-24" />
        404 Not Found
      </h1>
      <Button variant="primary" onClick={handleClick}>
        Back to Login Page
      </Button>
    </div>
  );
};
