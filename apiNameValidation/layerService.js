function nameValidation(name){
    let valid = name.length >= 1 ? true : false;
    return valid;
}

exports.nameValidation = nameValidation;