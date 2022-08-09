const Ship = (length) => {
  const obj = Object.create(shipFunctions);
  obj.length = length;
  obj.hitArray = Array(length).fill(false);
  return obj;
};

const shipFunctions = {
  isSunk() {
    return this.hitArray.every((hitbox) => hitbox === true);
  },
  hit(num) {
    this.hitArray[num] = true;
  },
};

export default Ship;
