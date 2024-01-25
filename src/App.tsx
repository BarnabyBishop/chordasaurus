import { useEffect, useState } from "react";

const tones = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "B", "E", "A", "D", "G"];
const qualities = ["maj7", "-7", "7"];

const rnd = (count: number) => Math.floor(Math.random() * count);

const getChord = () => {
  const tone = tones[rnd(tones.length)];
  const quality = qualities[rnd(qualities.length)];
  return { tone, quality };
};
const duration = 5;

function App() {
  const [chord, setChord] = useState<{ tone: string; quality: string }>(
    getChord()
  );
  const animationStyle = {
    animation: `shrink ${duration}s linear forwards`,
  };

  useEffect(() => {
    const newChord = () => setChord(getChord());
    const timer = setTimeout(newChord, duration * 1000);

    return () => clearTimeout(timer);
  }, [setChord, chord]);

  return (
    <div className="h-dvh border flex flex-col items-center justify-center gap-5">
      <div className="text-9xl">
        {chord.tone}
        <sup>{chord.quality}</sup>
      </div>
      <div className="flex items-start w-80 h-5">
        <div
          key={`${chord.tone}${chord.quality}`}
          className="w-full h-full bg-blue-300 border border-blue-500 rounded"
          style={animationStyle}
        ></div>
      </div>
    </div>
  );
}

export default App;
