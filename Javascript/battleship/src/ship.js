const Ship = (length) => {
    let obj = {};
    obj.length = length;
    obj.hitArray = Array(length).fill(false);
    return obj;
    
}

export default Ship;