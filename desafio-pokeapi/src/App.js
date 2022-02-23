import { Charecters } from "./components/charecters";
import { useState } from "react";

export default function App() {
  const [poke, setPoke] = useState();

  // const handle = ({ target }) => {
  //   setPoke(target.value);
  //   console.log(poke);
  // };

  return (
    <>
      <Charecters />
      {/* <span>teste</span>
      <input type="text" onChange={handle} /> */}
    </>
  );
}
