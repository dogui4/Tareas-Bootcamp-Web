class WebSpeech {
    constructor(dictionary) {
      this.dictionary = dictionary;
      this.result = "";
  
      this.recognitionList;
      this.recognition;
      this.grammar;
  
      this.__initGrammar__();
      this.__initRecognizer__();
    }
  
    __initGrammar__() {
      const dictionary = this.dictionary;
      this.grammar = `#JSGF V1.0; grammar dictionary; public <dictionary> = ${dictionary.join(
        " | "
      )} ;`;
    }
  
    __initRecognizer__() {
      const SpeechRecognition =
        globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
      const SpeechGrammarList =
        globalThis.SpeechGrammarList || globalThis.webkitSpeechGrammarList;
  
      this.recognitionList = new SpeechGrammarList();
      this.recognitionList.addFromString(this.grammar, 1);
  
      this.recognition = new SpeechRecognition();
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;
      this.recognition.continuous = false;
      this.recognition.lang = "es-CO";
    }
  
    // Getter
  
    get getResult() {
      return this.results ? this.results : "";
    }
  
    // Handlers
  
    startHandler() {
      this.recognition.start();
    }
  
    resultHandler() {

      const inputElement = document.getElementById("getVoice");

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(transcript);
        this.results = transcript + " ";

        // Set the transcript as the value of the input element
        if (inputElement) {
            inputElement.value = transcript;
        }
      };
    }
  
    endHandler() {
      this.recognition.onspeechend = () => {
        this.recognition.stop();
      };
    }
  
    errorHandler() {
      this.recognition.onerror = (event) => {
        console.error(`Speech recognition error detected: ${event.error}`);
      };
    }
  }
  
  export default WebSpeech;