import userDate from "../Profile/userData.json";
import Profile from "../Profile/Profile.jsx";

export default function App() {
  return (
    <>
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
    </>
  );
}

