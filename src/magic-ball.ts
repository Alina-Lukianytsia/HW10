import random from 'lodash.random/index.js';
import { DEFAULT_ANSWERS } from './answers.json';

/**
 * @classdesc
 * Class creates random answers generator with custom or default answers
 *
 *
 * @example
 * - with default values:
 * const magicBall = new MagicBall();
 * const answer = magicBall.getAnswer(); // => answer='It is decidedly so'
 *
 * - with custom values:
 * const magicBall = new MagicBall(['yes', 'no']);
 * const answer = magicBall.getAnswer(); // => answer='yes'
 */
class MagicBall {
  #answers: string[];

  /**
   * Create a MagicBall
   * @param { string[] | undefined } answers - Sets the answers array, not mandatory.
   * If is not passed - will be used DEFAULT_ANSWERS array.
   */
  constructor(answers?: string[] | undefined) {
    this.#answers = answers || DEFAULT_ANSWERS;
  }

  /**
   *@description
   * Generates the random answer
   *
   * @return {string} Random answer.
   */
  getAnswer = ():string => this.#answers[random(this.#answers.length - 1)];
}

export default MagicBall;
