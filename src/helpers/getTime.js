export const getMinutesWithSeconds = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const restOfseconds = seconds - minutes * 60;
  const formattedTime = `${minutes > 9 ? minutes : `0${minutes}`} : ${
    restOfseconds > 9 ? restOfseconds : `0${restOfseconds}`
  }`;

  return formattedTime;
};
