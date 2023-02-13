import { FC, useState, ChangeEvent } from "react";
import "./App.css";
import Grid from "./components/Grid";

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

const App: FC = () => {
  const initialSize = 50;
  const [size, setSize] = useState<number>(initialSize);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);

    if (!Number.isNaN(newSize)) {
      setSize(clamp(newSize, 0, 99));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title" data-testid="title">
          Bounding box
        </div>
        <input
          type="text"
          className="InputBox"
          value={size}
          onChange={handleChange}
        />
      </header>
      <Grid size={size} />
    </div>
  );
};

export default App;
