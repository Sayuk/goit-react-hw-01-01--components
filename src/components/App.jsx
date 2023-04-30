import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';
import './App.css';
export const App = () => {
  return (
    < div >
      <section class='app-container' >
<Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory  items={transactions}/>
      </section>
      
    </div>
  );
};
export default App;
