import userDate from "../Profile/userData.json";
import Container from "./App.styled.js";
import Profile from "../Profile/Profile.jsx";

export default function App() {
  return (
    <Container>
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
      </Container>
  );
}

