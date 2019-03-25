import Settings from '../src/js/Settings';

test('default settings', () => {
  const received = new Settings();
  const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  expect(received.runSettings).toEqual(expected);
});

test('my settings', () => {
  const received = new Settings();
  received.theme = 'gray';
  received.music = 'rock';
  received.difficulty = 'normal';
  const expected = new Map([['theme', 'gray'], ['music', 'rock'], ['difficulty', 'normal']]);
  expect(received.runSettings).toEqual(expected);
});

test('my second settings', () => {
  const received = new Settings();
  received.theme = 'light';
  received.music = 'chillout';
  received.difficulty = 'hard';
  const expected = new Map([['theme', 'light'], ['music', 'chillout'], ['difficulty', 'hard']]);
  expect(received.runSettings).toEqual(expected);
});
