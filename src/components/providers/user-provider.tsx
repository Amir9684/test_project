import { createContext, useMemo, useState, type Dispatch } from "react";

import { getItem } from "../../lib/utils";

export const UserContext = createContext({
  userData: {},
  setUserData: (() => undefined) as Dispatch<any>,
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const userInfo = useMemo(() => getItem("user"), []);

  const [userData, setUserData] = useState(userInfo || null);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
