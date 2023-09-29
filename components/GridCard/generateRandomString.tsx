const keywords = [
  "Alpha",
  "Nero",
  "Technology",
  "Innovation",
  "Future",
  // ... any other keywords or phrases associated with the website
];

export const generateRandomString = (length: number) => {
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomWord = keywords[Math.floor(Math.random() * keywords.length)];
    result += randomWord;

    // Optional: add a separator or some random characters between words
    if (i < length - 1) {
      result += "-";
    }
  }

  return result;
};
