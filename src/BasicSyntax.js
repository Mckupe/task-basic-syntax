import { EALREADY } from 'constants';

export function romanToInteger(str) {
    let result = 0;
    const alphabet = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    for (let i = 0; i < str.length; i++) {
        if (alphabet[str[i]] < alphabet[str[i + 1]]) {
            result += alphabet[str[i + 1]] - alphabet[str[i]];
            i++;
        } else result += alphabet[str[i]];
    }
    return result;
}
