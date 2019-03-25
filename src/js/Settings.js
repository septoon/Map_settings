/* eslint-disable no-underscore-dangle */
const themeSettings = ['dark', 'light', 'gray'];
const musicSettings = ['trance', 'pop', 'rock', 'chillout', 'off'];
const difficultySettings = ['easy', 'normal', 'hard', 'nightmare'];

class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', themeSettings[0]], ['music', musicSettings[0]], ['difficulty', difficultySettings[0]]]);
    this._settings = new Map([['theme', new Set(themeSettings)], ['music', new Set(musicSettings)], ['difficulty', new Set(difficultySettings)]]);
  }

  get runSettings() {
    return this.defaultSettings;
  }

  set theme(selectTheme) {
    if (this._settings.get('theme').has(selectTheme)) this.defaultSettings.set('theme', selectTheme);
  }

  set music(selectMusic) {
    if (this._settings.get('music').has(selectMusic)) this.defaultSettings.set('music', selectMusic);
  }

  set difficulty(selectDifficulty) {
    if (this._settings.get('difficulty').has(selectDifficulty)) this.defaultSettings.set('difficulty', selectDifficulty);
  }
}

export default Settings;
