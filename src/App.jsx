import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const inc = () => {
    setCount((count += 1));
    console.log(count);
  };

  const dec = () => {
    setCount((count -= 1));
    console.log(count);
  };

  const [cars, setCars] = useState(["BMW", "Audi", "Nissan"]);
  const [carValue, setCarValue] = useState("");

  const getInputValue = (evt) => setCarValue(evt.target.value);

  const [data, setData] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const bold = () => {
    setData({
      ...data,
      bold: !data.bold
    });
  };

  const italic = () => {
    setData({
      ...data,
      italic: !data.italic
    });
  };

  const underline = () => {
    setData({
      ...data,
      underline: !data.underline
    });
  };

  const styled = {
    fontWeight: data.bold ? "bold" : "normal",
    fontStyle: data.italic ? "italic" : "normal",
    textDecoration: data.underline ? "underline" : "none",
  };

  return (
    <div>
      <p style={styled}>Hello React</p>
      <div>
        <button onClick={bold} >B</button>
        <button onClick={italic} >I</button>
        <button onClick={underline} >U</button>
      </div>

      <h1>Count: {count}</h1>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
      {/* <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <div className="card text-left">
            <img
              className="card-img-top"
              src="https://picsum.photos/300/250"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                eos natus, rerum veniam incidunt fugiat sunt maxime, ipsum
                facere ut tenetur? Vel deserunt accusantium laborum ratione
                dolore in? Tempore, voluptatibus.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card text-left">
            <img
              className="card-img-top"
              src="https://picsum.photos/300/250"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                eos natus, rerum veniam incidunt fugiat sunt maxime, ipsum
                facere ut tenetur? Vel deserunt accusantium laborum ratione
                dolore in? Tempore, voluptatibus.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card text-left">
            <img
              className="card-img-top"
              src="https://picsum.photos/300/250"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                eos natus, rerum veniam incidunt fugiat sunt maxime, ipsum
                facere ut tenetur? Vel deserunt accusantium laborum ratione
                dolore in? Tempore, voluptatibus.
              </p>
            </div>
          </div>
        </li>
      </ul> */}

      <h2>Value: {value}</h2>
      <input
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        type="text"
      />

      <h2>{cars.join(",")}</h2>
      <button
        onClick={() => {
          setCars([carValue, ...cars]);
        }}
      >
        Add
      </button>
      <input onChange={getInputValue} type="text" />
      <button
        onClick={() => {
          setCars([...cars, carValue]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
