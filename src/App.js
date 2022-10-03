import { Routes ,Route, Navigate, useParams, Link } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import ProfileComponent from "./Components/ProfileComponent";
import { observer } from "mobx-react-lite";
import ProtectedProfle from "./Components/ProtectedProfile";
import ProtectedRoutesAfterLogin from "./Components/ProtectedRoutesAfterLogin";
import { NotFoundComponent } from "./Components/not-found-page/NotFoundComponent";
import authStore from "./store/authStore";
import LatestPostsOfUser from "./Components/posts/LatestPostsOfUser";
import ListUserPosts from "./Components/posts/ListUserPosts";
import Navbar from "./Components/navbar/ResponsiveAppBar";
import "./App.css";

const App = observer(() => {
  const authenticated = authStore.isAuthenticated();
  return (
    <div>

    {authenticated && <Navbar></Navbar>}
    <div className="container">
      <Routes>
        <Route path="/login" exact element={<ProtectedRoutesAfterLogin>
          <LoginComponent/>
          </ProtectedRoutesAfterLogin>} />
        <Route path="/register" exact element={<ProtectedRoutesAfterLogin>
          <RegisterComponent/>
          </ProtectedRoutesAfterLogin>} />
        <Route path="/profile/:userName/posts" exact element={<ListUserPosts/>} />
        <Route path="/profile/:userName/latest" element={<LatestPostsOfUser/>} />
        <Route path="/profile/:userName" element={<ProtectedProfle>
          <ProfileComponent/>
          </ProtectedProfle>} />
          <Route path="/not-found" element={<NotFoundComponent/>} />

          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
      </Routes>
      </div>
    </div>
  );
});

export default App;
