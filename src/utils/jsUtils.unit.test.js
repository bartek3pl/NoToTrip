import { getCurrentYear, convertToUrl, removeSpaces } from './jsUtils';
import emojiStrip from 'emoji-strip';

it('gets current year', () => {
  const currentYear = new Date().getFullYear();
  const expectedCurrentYear = getCurrentYear();
  expect(expectedCurrentYear).toBe(currentYear);
});

it('properly converts string to valid url', () => {
  const testString = '-abśżźla dećf? --zyąx-uń-,--';
  const resultString = 'abszzla-decf-zyaxun';
  const expectedString = convertToUrl(testString);
  expect(expectedString).toBe(resultString);
});

it('properly removes spaces in string', () => {
  const testString = 'I  like         testing simple    functions    ';
  const resultString = 'Iliketestingsimplefunctions';
  const expectedString = removeSpaces(testString);
  expect(expectedString).toBe(resultString);
});

it('properly removes emojis in string', () => {
  const testString = '🌊a🐵🐵bc de f🗻🥥🐢 g🌴h';
  const resultString = 'abc de f gh';
  const expectedString = emojiStrip(testString);
  expect(expectedString).toBe(resultString);
});
