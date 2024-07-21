import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getItem } from "../utils";
import { useLanguage } from "@/components/providers/language-provider";

export const useIsAuthenticated = () => {
  const { lang } = useLanguage();
  const user = getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    const redirectUser = () => {
      if (!user) return navigate(`/?lng=${lang}`, { replace: true });
      else return navigate(`/user/dashboard/?lng=${lang}`, { replace: true });
    };
    redirectUser();
  }, []);
};
