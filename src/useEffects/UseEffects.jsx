import React, { useEffect, useState } from "react";

const UseEffects = () => {
  //     const [count, setCount] = useState(0)
  //     useEffect(() => {
  //         console.log(`Count is now ${count}`)

  //     },[count])
  //   return (
  //     <div>
  //         <p>{count}</p>
  //       <button onClick={() => setCount(count + 1)}>Increment</button>
  //     </div>
  //   )

//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <h2 key={user.id}>{user.name}</h2>
//       ))}
//     </div>
//   );

// const [count, setCounter] = useState(0)
// useEffect(() => {
//     const interval = setInterval(() => {
//         setCounter(c => c + 1)
//     }, 1000)
//     return () => clearInterval(interval)
// }, [])

// return <h1>Timer: {count}</h1>

};

export default UseEffects;
