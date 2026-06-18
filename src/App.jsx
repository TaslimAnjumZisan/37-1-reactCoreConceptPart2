import { Suspense } from 'react';
import Counter from './counter.jsx';
import Batsman from './Batsman.jsx';
import Users from './users.jsx';
import Friends from './friends.jsx';
import Posts from './posts.jsx';
import Players from './players.jsx';
import './App.css'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then (res => res.json())


const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends(); 
  const postsPromise = fetchPosts();
function handleClick(){
  alert('I am clicked');
}
  return (
    <>
    

      <h3> Vite + React</h3>

      <Suspense>
        <Players></Players>
      </Suspense>

      <Suspense fallback={<h3>Posts are comming</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>


     <Suspense fallback={<h3>friends are comming for treat</h3>}>
      <Users fetchUsers={fetchUsers} ></Users>

     </Suspense>
     <Suspense fallback={<h3>Loading...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
     </Suspense>


      {/* <button onClick='handleClick()'> Click Me</button> */}
      <button onClick={handleClick}> Click Me</button>

      <Batsman></Batsman>

      <Counter></Counter>
      
    </>
  )
}

export default App
