import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getItem } from "../utils";

export const useIsAuthenticated = () => {
  const user = getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    const redirectUser = () => {
      if (!user) return navigate("/", { replace: true });
      else return navigate("/user/dashboard", { replace: true });
    };
    redirectUser();
  }, []);
};
