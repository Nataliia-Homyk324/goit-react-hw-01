import userDate from "../Profile/userData.json";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../FriendList/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import transactions from "../TransactionHistory/transactions.json";

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

