import css from '../friend-list/Friendlist.module.css'

console.log(css);

export const FriendList = ({friends})=>{
 return <ul>
    {
        friends.map((friend)=>{
            return <li className={css.item} key={friend.id}>
                <div className= {friend.isOnline ? css.online : css.offline}></div>
                <img src={friend.avatar} alt={friend.name} width="70px"/>
                <p>{friend.name}</p>
            </li>
        })
    }
 </ul>
}