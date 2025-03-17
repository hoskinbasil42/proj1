import { randint } from 'stdlib';

function generateRandomCode() {
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += String.fromCharCode(randint(65, 90));
    }
    return code;
}

generateRandomCode();
