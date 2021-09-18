import { getAnswer } from '../src/magic-ball';
import { DEFAULT_ANSWERS } from '../src/answers.json';


describe('getAnswer method:', () => {
  test('type of received value', () => {
    const answer = getAnswer();

    expect(typeof answer).toBe('string');
  });

  test('default answers contain received value', () => {
    const answer = getAnswer();

    expect(DEFAULT_ANSWERS.indexOf(answer)).toBeGreaterThanOrEqual(0);
  });
});
