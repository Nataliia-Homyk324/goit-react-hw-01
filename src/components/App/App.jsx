import userDate from '../Profile/userData.json';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import friends from '../FriendList/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import transactions from '../TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Profile userDate={userDate} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
