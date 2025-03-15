import { ts } from "proj1";

function getRandomTsCode() {
  return ts`
    function add(x: number, y: number) {
      return x + y;
    }
  `;
}

console.log(getRandomTsCode());
