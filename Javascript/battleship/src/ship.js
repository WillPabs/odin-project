const Ship = (length) => {
    let obj = Object.create(shipFunctions);
    obj.length = length;
    obj.hitArray = Array(length).fill(false);
    return obj;
}

const shipFunctions = {
    isSunk() {
        return this.hitArray.every(hitbox => hitbox === true);
    }
}

export default Ship;