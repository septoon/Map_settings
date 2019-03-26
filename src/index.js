import Settings from './js/Settings';
/* eslint-disable no-console */
const userSettings = new Settings();

console.log(userSettings.runUserSettings);
console.log(userSettings.runSettings);

userSettings.theme = 'gray';
userSettings.music = 'rock';
userSettings.difficulty = 'normal';

console.log(userSettings.runSettings);

userSettings.theme = 'light';
userSettings.music = 'chillout';
userSettings.difficulty = 'hard';

console.log(userSettings.runSettings);
