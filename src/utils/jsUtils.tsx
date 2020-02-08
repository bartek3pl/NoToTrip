export function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

const charsMap = {
  ł: 'l',
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ź: 'z',
  ż: 'z',
  ś: 's',
  ó: 'o',
  ń: 'n',
  å: 'a',
  æ: 'ae',
};

function removeChars(string: string) {
  return string
    .split('-')
    .join('')
    .split(' ')
    .join('-')
    .split('--')
    .join('-')
    .split(',')
    .join('')
    .split('?')
    .join('')
    .toLowerCase();
}

export function convertToUrl(string: string) {
  const convertedString = removeChars(string);
  let urlString = [] as string[];

  convertedString.split('').map((char) => {
    if (charsMap[char]) {
      urlString.push(charsMap[char]);
    } else {
      urlString.push(char);
    }
  });

  return urlString.join('');
}

export function removeSpaces(string: string) {
  return string.replace(/\s/g, '');
}

export default void 0;
