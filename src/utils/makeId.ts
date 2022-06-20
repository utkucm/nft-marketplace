export const makeId = (length: number) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const alphabetLength = alphabet.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
  }

  return result;
};
