import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "@/redux/user";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const handleClick = () => {
    dispatch(logoutUser());
    navigate("/", { replace: true });
  };

  const now = new Date();
  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const message = currentTime.includes("PM")
    ? `Good Evening, ${user.username}`
    : `Good Morning, ${user.username}`;

  return (
    <div className="space-y-5 text-center w-full max-w-xs mx-auto py-10">
      <h1 className="text-3xl">{currentTime}</h1>
      <p className="text-3xl ">{message}</p>
    </div>
  );
};
