export const rusTranslitToEng = (str, isLowerCase, wordSeparator) => {
  str = str || "";
  isLowerCase = isLowerCase === undefined ? true : isLowerCase;
  wordSeparator = wordSeparator || "-";

  const translitToEng = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "YO",
    Ж: "ZH",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "KH",
    Ц: "TS",
    Ч: "CH",
    Ш: "SH",
    Щ: "SCH",
    Ъ: "",
    Ы: "Y",
    Ь: "",
    Э: "E",
    Ю: "YU",
    Я: "YA",
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  if (isLowerCase) {
    str = str.toLowerCase();
  }

  // Replace characters outside the given range with the word separator
  str = str.replace(/[^a-zA-Zа-яёА-ЯЁ0-9_]+/g, wordSeparator);

  // Remove leading and trailing word separators
  str = str.replace(new RegExp(`^${wordSeparator}|${wordSeparator}$`, "g"), "");

  // Handle exceptions
  const exceptions = {
    ъе: "ye",
    ко: "co",
    экс: "ex",
  };

  Object.keys(exceptions).forEach((exception) => {
    str = str.replace(new RegExp(exception, "g"), exceptions[exception] + " ");
  });

  // Translate common endings
  str = str.replace(/([ий])($|[^a-zA-Zа-яёА-ЯЁ0-9_])/g, "$1y$2");

  // Handle uppercase exceptions
  if (!isLowerCase) {
    const uppercaseExceptions = {
      ЪЕ: "YE",
      Ъе: "Ye",
      ЪЕ: "yE",
      ЫЙ: "IY",
      ИЙ: "IY",
      Ый: "Iy",
      Ий: "Iy",
    };

    Object.keys(uppercaseExceptions).forEach((exception) => {
      str = str.replace(
        new RegExp(exception, "g"),
        uppercaseExceptions[exception] + " "
      );
    });

    // Handle uppercase ending
    str = str.replace(/([ИЫ])($|[^a-zA-Zа-яёА-ЯЁ0-9_])/g, "$1Y$2");
  }

  // Translate characters
  str = str.replace(/[а-яёА-ЯЁ]/g, (a) => translitToEng[a]);

  return str;
};
