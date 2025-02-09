import friends from '../../friends.json'

export const FriendList = ()=>{
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