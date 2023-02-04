import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Test Name",
    email: "Test@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
