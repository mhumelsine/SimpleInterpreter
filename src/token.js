import * as codes from './codes';

class Token {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
    toString(){
        return `Token(${this.token}, ${this.value}`;
    }
}

export default Token;