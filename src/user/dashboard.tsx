import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { t } = useTranslation();

  const user = useSelector((state: any) => state.user);

  const now = new Date();
  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const message = currentTime.includes("PM")
    ? `${t("goodEvening")}, ${user.username}`
    : `${t("goodMorning")}, ${user.username}`;

  return (
    <div className="space-y-5 text-center w-full py-10">
      <h1 className="text-3xl">{currentTime}</h1>
      <p className="text-3xl ">{message}</p>
    </div>
  );
};
