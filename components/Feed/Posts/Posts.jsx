import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '1',
    username: 'Chrabaszcz',
    userImg: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    img: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    caption: 'The best person in the wrld!'
  },
  {
    id: '2',
    username: 'Chrabaszcz',
    userImg: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    img: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    caption: 'The best person in the wrld!'
  },
  {
    id: '3',
    username: 'Chrabaszcz',
    userImg: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    img: 'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/117195764_388161692147456_3142400905898660416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uLTZFmv87tMAX-CX63h&tn=PZAw6zFv-SOREhFn&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_MV_KdXSOANt_kaPJiS8HoCaZ5myMvjdMVM3R360Ekww&oe=631772D5',
    caption: 'The best person in the wrld!'
  }
]

const Posts = () => {
  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts