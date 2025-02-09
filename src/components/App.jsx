import { FriendList } from "./friend-list/FriendList";
import user from '../user.json';
import { SocialProfile } from "./social-profile/SocialProfile";
import data from '../data.json';
import { Statistics } from "./statistics/Statistics";
import transaction from '../transactions.json';
import { TransactionHistory } from "./transactions-history/Transaction/TransactionHistory";

export const App = () => {
  return <>
  <FriendList/>
  <SocialProfile
   username={user.username}
   tag={user.tag}
   location={user.location}
   avatar={user.avatar}
   stats={user.stats} />
  <Statistics title="Upload stats" stats={data}/>
  <TransactionHistory items={transaction} />
  </>
};
