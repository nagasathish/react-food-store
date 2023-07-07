import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Test User",
    email: "test@domain.com",
  },
});

export default UserContext;
