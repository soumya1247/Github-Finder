import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);
    // const author = users.forEach(user => {
    //     console.log(user.id);
    //     if(user.id === userId){
    //         return user
    //     }
    // });
    
    return (
        <span> by {author ? author.name : 'Unknown Author'}</span>
    )
}

export default PostAuthor