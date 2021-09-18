import random from 'lodash.random/index.js';
import { DEFAULT_ANSWERS } from './answers.json';

/**
 * @description
 * Generates random answer.
 *
 * @returns {string}
 *
 * @example
 * const answer = getAnswer();
 * // => answer='It is decidedly so'
 **/
function getAnswer(): string {
  return DEFAULT_ANSWERS[random(DEFAULT_ANSWERS.length - 1)];
}

export default getAnswer;

