import { useState } from "react";

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandomNumber(min, max) {
  const randomInt = getRandomArbitrary(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; //Return the hexadecimal color value
}

function getRandomElementFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default function proj1() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
