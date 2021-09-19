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
declare class MagicBall {
    #private;
    /**
     * Create a MagicBall
     * @param { string[] | undefined } answers - Sets the answers array, not mandatory.
     * If is not passed - will be used DEFAULT_ANSWERS array.
     */
    constructor(answers?: string[] | undefined);
    /**
     *@description
     * Generates the random answer
     *
     * @return {string} Random answer.
     */
    getAnswer: () => string;
}
export default MagicBall;
