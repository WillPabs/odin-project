const capitalizeFirstLetterOfString = (string) => {
  const split = string.split(' ');
  for (let i = 0; i < split.length; i += 1) {
    split[i] = split[i][0].toUpperCase() + split[i].substr(1);
  }
  return split.join(' ');
};

export {
  capitalizeFirstLetterOfString,
};
