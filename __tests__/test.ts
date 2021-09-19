import { MagicBall } from '../dist';
import { DEFAULT_ANSWERS } from '../src/answers.json';
import { TEST_ANSWERS } from './test-answers.json';

describe('MagicBall instance with default values:', () => {
  const magicBall = new MagicBall();

  test('type of received value', () => {
    expect(typeof magicBall.getAnswer()).toBe('string');
  });

  test('default answers contain received value', () => {
    expect(DEFAULT_ANSWERS.indexOf(magicBall.getAnswer())).toBeGreaterThanOrEqual(0);
  });
});

describe('MagicBall instance with custom values:', () => {
  const magicBall = new MagicBall(TEST_ANSWERS);

  test('type of received value', () => {
    expect(typeof magicBall.getAnswer()).toBe('string');
  });

  test('default answers does not contain received value', () => {
    expect(DEFAULT_ANSWERS.indexOf(magicBall.getAnswer())).toBeLessThan(0);
  });

  test('custom answers contain received value', () => {
    expect(TEST_ANSWERS.indexOf(magicBall.getAnswer())).toBeGreaterThanOrEqual(0);
  });
});
