/////////// animition
// import { useState } from "react";
// function App() {
//   const [transform, settransform] = useState("100vw");

//   return (
//     <div
//       style={{
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "red",
//           width: "400px",
//           height: "400px",
//           transform: `translateX(${transform})`,
//           transition: "0.3s all",
//         }}
//       ></div>
//       <button onClick={() => settransform("0")}>click</button>
//     </div>
//   );
// }
// export default App;
/////////// animition

////////// toUpperCase()
// function App() {
//   const aha = ["aha", "man", "ksd"];
//   let map = aha.map((a) => {
//     return <p>{a[0].toUpperCase() + a.slice(1)}</p>;
//   });
//   return <div>{map}</div>;
// }
// export default App;
////////// toUpperCase()

/////////////data props1 card

// import Aha from "./tamrin/Aha";
//// or
// function Aha({ name }) {
//   return <p>{name}</p>;
// }

// let data = [
//   {
//     id: 1,
//     name: "artin",
//   },
//   {
//     id: 2,
//     name: "armin",
//   },
//   {
//     id: 3,
//     name: "ali",
//   },
// ];

// const App = () => {
//   return (
//     <div>
//       {data.map((item) => {
//         return <Aha name={item.name} key={item.id} />;
//       })}
//     </div>
//   );
// };

// export default App;

////////////data props1 card

////////////random url number anything in data
// let data = [
//   {
//     id: 1,
//     name: "artin",
//   },
//   {
//     id: 2,
//     name: "armin",
//   },
//   {
//     id: 3,
//     name: "ali",
//   },
//   {
//     id: 4,
//     name: "abass",
//   },
// ];

// const App = () => {
//   let random = Math.floor(Math.random() * data.length);
//   let div = data[random].name;
//   return <div>{div}</div>;
// };

// export default App;
////////////random url number anything in data

//////////usestate tip
// let [count, setcount] = useState(0);
// setcount((prevcount) => prevcount + 1);

//////////api and filter() /////////  () in react are importent

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/comments?_limit=10"
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <h1 key={item.id}>{item.email}</h1>
//       ))}
//     </div>
//   );
// };
// export default App;

// 2 filter

import { useState, useEffect } from "react";
const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  let api = data.filter((item) => {
    return item.id <= 100;
  });
  return (
    <div>
      {api.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};
export default Fetch;
//////////api and filter() /////////  () in react are importent
