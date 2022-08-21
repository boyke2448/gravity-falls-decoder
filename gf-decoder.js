function ceaser_3_decode(encrypted_message, offset) {
    var decoded_message = "";
    for (var i = 0; i < encrypted_message.length; i++) {
        var char = encrypted_message.charAt(i);
        var char_code = char.charCodeAt(0);
        var decoded_char_code = char_code - offset;
        var decoded_char = String.fromCharCode(decoded_char_code);
        decoded_message += decoded_char;
    }
    return decoded_message;
} 


var charset = "abcdefghijklmnopqrstuvwxyz";


function vigenere_decode(encrypted_message, key) {
    var decoded_message = "";
    console.log(encrypted_message);
    console.log(key);
    let j = 0;
    for (var i = 0; i < encrypted_message.length; i++) {
        let char_pos = charset.indexOf(encrypted_message.charAt(i));
        if(char_pos == -1) {
            decoded_message +=  ' '
            continue;
        }

        let key_char_pos = charset.indexOf(key.charAt(j % key.length));

        console.log(encrypted_message.charAt(i));
        console.log(char_pos);
        console.log(key.charAt(j % key.length));
        console.log(key_char_pos);
        let decoded_char_pos = char_pos - key_char_pos;
        if (decoded_char_pos < 0) {
            decoded_char_pos += charset.length;
        }
        let decoded_char = charset.charAt(decoded_char_pos);
        console.log(decoded_char);
        decoded_message += decoded_char;
        console.log("----------------");
        j++;
    }
    return decoded_message;
}

function decode() {
    var encrypted_message = document.getElementById("encrypted_message").value;
    var decoded_message = ceaser_3_decode(encrypted_message,3);
    document.getElementById("decoded_message").innerHTML = decoded_message;
}

function decode_vinegere() {
    var encrypted_message = document.getElementById("encrypted_message_vinegere").value;
    var key = document.getElementById("vinegere_key").value;
    var decoded_message = vigenere_decode(encrypted_message,key);
    document.getElementById("decoded_message").innerHTML = decoded_message;
}