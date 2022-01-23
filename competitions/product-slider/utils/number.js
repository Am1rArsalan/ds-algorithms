function replaceMappedChars(value, hashMap) {
  return value
    .split("")
    .map((char) => (hashMap[char] ? hashMap[char] : char))
    .join("");
}

function enToFa(value) {
  const numsMap = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  return replaceMappedChars(String(value), numsMap);
}

const formatPrice = (num, isRials = false) => {
  const tomans = isRials ? Math.floor(num / 10) : num;
  // If number only
  if (!isNaN(tomans)) {
    return enToFa(String(tomans).replace(/\B(?=(\d{3})+(?!\d))/g, "٫"));
  }

  // Text that contains number
  let text = num + "";
  let result = text;

  const prices = (text.match(/[0-9]+/g) || []).map((price) => {
    price = price.trim();
    const leftPad = 3 - ((price.length - (isRials ? 1 : 0)) % 3);

    if (leftPad !== 3) {
      for (let i = 0; i < leftPad; i++) {
        price = " " + price;
      }
    }

    const tmp = [];
    for (let i = 0, j = 3; j <= price.length + 1; i += 3, j += 3) {
      tmp.push(price.slice(i, j));
    }

    return [price.trim(), tmp.join("٫").trim()];
  });

  prices.forEach(([original, formatted]) => {
    result = result.replace(original, formatted);
  });

  return enToFa(result);
};

window.formatPrice = formatPrice;
