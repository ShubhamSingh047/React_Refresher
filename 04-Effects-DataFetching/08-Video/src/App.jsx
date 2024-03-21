import { useState } from "react";
import Video from "./Video";
import "./App.css";

const obj = [
  {
    id: 1,
    title: "shubham coding",
    time: "1 month",
    view: "999k",
    verified: true,
  },
  {
    id: 2,
    title: "different title",
    time: "2 weeks",
    view: "500k",
    verified: false,
  },
  {
    id: 3,
    title: "another title",
    time: "3 days",
    view: "1M",
    verified: true,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        {obj.map((data, i) => (
          <Video
            key={i}
            Id={data.id}
            Titile={data.title}
            View={data.view}
            Time={data.time}
            Verified={data.verified}
          />
        ))}
      </div>
    </>
  );
}

export default App;
