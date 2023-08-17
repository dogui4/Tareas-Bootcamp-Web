const { config } = require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async readDirectory() {
    try {
      const files = await fs.readdirSync(this.basePath);
      return files;
    } catch (err) {
      console.error('[ERROR - readDirectory]:', err);
    }
  }

  async readFile(x, y,jumping,attacking) {
    try {
      const data = await fs.readFileSync(
        `${this.basePath}/GameStatus.json`,
        'utf8'
      );
      return data;
    } catch (err) {
      console.error('[ERROR - readFile]:', err);
    }
  }

  async createFile(x, y, jumping, attacking, data='') {
    try {
      await fs.writeFileSync(`${this.basePath}/GameStatus.json`, data);
    } catch (err) {
      console.error('[ERROR - createFile]:', err);
    }
  }

  deleteRef(x, y,jumping, attacking) {
    let deleted = true;
    fs.unlink(`${this.basePath}/GameStatus.json`, (err) => {
      if (err) {
        console.error('[ERROR - deleteRef]:', err);
        deleted != deleted;
      }
    });

    return deleted;
  }
}

module.exports = FileService;