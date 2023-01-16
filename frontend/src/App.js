import Sidebar from "./layout/Sidebar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Explore from "./pages/Explore";
import Home from "./pages/Explore";

import {
  Avatar,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { UserContext } from "./user-context/UserContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./auth_pages/LogIn";
import SignUp from "./auth_pages/SignUp"

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: "" }
  );
  
  const _user = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  return (
    <Router>
      <UserContext.Provider value={_user}>
        <Sidebar>
          <Wrap justify={"center"}>
          
            {user.username !== "" ? (
              <WrapItem _hover={{ cursor: "pointer" }}>
                <Avatar
                  ml='2'
                  mb={"2"}
                  as={Link}
                  to={`/profile/${user.username}`}
                  name={`${user.username}`}
                />
              </WrapItem>
            ) : (
              <>
                <WrapItem>
                  <Button as={Link} to="/login" bgColor="green.600">
                    Log In
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button as={Link} to="/signup" bgColor="red.600">
                    Sign Up
                  </Button>
                </WrapItem>
              </>
            )}
          </Wrap>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<Explore />} />

            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />

            <Route path="profile/:username" element={<Profile />} />

            <Route path="settings" element={<Settings />} />
          </Routes>
        </Sidebar>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
