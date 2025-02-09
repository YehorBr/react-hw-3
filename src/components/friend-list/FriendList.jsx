import css from '../friend-list/Friendlist.module.css'

export const FriendList = ({friends})=>{
 return <ul>
    {
        friends.map((friend)=>{
            return <li key={friend.id}>
                <div className={friends.isOnline ? "online" : "offline"}></div>
                <img src={friend.avatar} alt={friend.name} />
                <p>{friend.name}</p>
            </li>
        })
    }
 </ul>
}