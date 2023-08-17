const FileService = require('./file.service');

class ExampleService extends FileService {
  constructor() {
    super();
  }

  async getDirInfo() {
    const rawInfo = await this.readDirectory();
    let dirInfo = {};

    rawInfo.forEach((file, index) => {
      dirInfo[index] = file;
    });

    return dirInfo;
  }

  async generateFile(x, y, jumping, attacking, data = '') {
    await this.createFile(x, y, jumping, attacking, data);
  }

  async readContent() {
    const existingFile = await this.readDirectory();
    const fileExists = existingFile.includes('GameStatus.json');
  
    if (fileExists) {
      const fileContent = await this.readFile('GameStatus.json');
      const parsedContent = JSON.parse(fileContent);
      return parsedContent;
    }
  
    return null; // Cambié el retorno a null para indicar que el archivo no existe en lugar de una cadena vacía ('').
  }


  /**
   Cambia todo el contenido de un archivo
  */
  async writeContent(x, y, jumping, attacking, rawData) {
    const existingFile = await this.readDirectory();
    const fileExists = existingFile.includes(`GameStatus.json`);

    if (fileExists) {
      await this.createFile(x, y, jumping, attacking, rawData);
    }
    return fileExists;
  }

  

  /**
   Cambia una parte del contenido de un archivo
  */
  async updateContent(x, y, jumping, attacking, rawData) {
    const existingFile = await this.readDirectory();
    const fileExists = existingFile.includes(`GameStatus.json`);

    if (fileExists) {
      const previousData = JSON.parse(await this.readFile(x, y,jumping,attacking));
      const newKeys = Object.keys(rawData);

      newKeys.forEach((key) => {
        previousData[key] = rawData[key];
      });

      await this.createFile(x, y, jumping, attacking, JSON.stringify(previousData));
    }
    return fileExists;
  }

  deleteFile(x,y,jumping,attacking) {
    const isDeleted = this.deleteRef(x, y,jumping, attacking);
    if (isDeleted) {
      return `File ${x} deleted`;
    } else {
      return 'Something went wrong';
    }
  }
}

module.exports = new ExampleService();