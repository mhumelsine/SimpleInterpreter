import * as codes from './codes';
import * as utils from './utils';
import Token from './token';

class Interpreter{
    constructor(text){
        this.position = 0;
        this.text = text;
        this.currentToken = null;
    }
    error(){
        throw new Error('Error parsing input');
    }
    getNextToken(){
        const text = this.text;

        //is position index past the end of the text?
        //if so return EOF token; no more input left to create tokens
        if(this.position > text.length){
            return new Token(codes.EOF, null);
        }

        //get single character from next position
        //decide what token to create
        const currentChar = text[this.position];

        //if token is a digit then convert is to an int and create int token
        if(utils.isDigit(currentChar)){
            const token = new Token(codes.INTEGER, parseInt(currentChar));
            this.pos++;
            return token;
        }

        if(currentChar === codes.PLUS){
            const token = new Token(codes.PLUS, parseInt(currentChar));
            this.pos++;
            return token;
        }

        //if control makes it here input is not valid
        this.error();
    }
    eat(tokenType){
        
    }
}