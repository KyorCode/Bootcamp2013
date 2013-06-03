jQuery.validator.addMethod("insznummer",
    function (value, element, params) {
        return this.optional(element) || NationaalNummerValidator(element, params);
    },
    (jQuery.validator.messages.insznummer) ? jQuery.validator.messages.insznummer : 'This is not a valid INSZ-number'
);

jQuery.validator.unobtrusive.adapters.addBool("insznummer");

function NationaalNummerValidator(object) {
    var checked = NationaalNummerCheck(object.value);
    if (checked != 0) {
        return false;
    }
    
    object.value = NationaalNummerFormat(object.value);
    return true;
}

function NationaalNummerCheck(value) {
    // cleanup
    var valueFormated = StringCleanup(value, false);

    // Check text is empty
    if (valueFormated == null) {
        return 1;
    }

    // Check length.
    if (valueFormated.length < 11) {
        return 2;
    }
    else if (valueFormated.length > 11) {
        return 3;
    }

    // test op cijfers
    for (var i = 0; i < valueFormated.length; i++) {
        if ((valueFormated.charAt(i) < '0') || (valueFormated.charAt(i) > '9')) {
            return 4;
        }
    }

    // parse controdigit en waarde
    var digit = parseInt(valueFormated.substring(9, 11), 10);
    var checkit = parseInt(valueFormated.substring(0, 9), 10) % 97;

    // controle voor 2000
    if ((97 - checkit) == digit) {
        return 0;
    }

    // voor wie geboren is na 2000
    if (checkit > 28) {
        checkit -= 29;
    }
    else {
        checkit += 68;
    }
    
    if ((97 - checkit) == digit) {
        return 0;
    }

    return 5;
}

function NationaalNummerFormat(value) {
    // cleanup
    var valueFormated = StringCleanup(value, false);

    // Check text is empty
    if (valueFormated == null) {
        return null;
    }
    
    return valueFormated.substring(0, 2) + "."
         + valueFormated.substring(2, 4) + "."
         + valueFormated.substring(4, 6) + "-"
         + valueFormated.substring(6, 9) + "."
         + valueFormated.substring(9, 12);
}

function StringCleanup(value) {
    // Check text is empty
    if (value == null) {
        return null;
    }
    
    value = "" + value;
    
    if (value.length == 0) {
        return "";
    }
    
    return value.replace(/\s+/g, "").replace(/\./g, "").replace(/\,/g, "").replace(/\-/g, "").replace(/_,/g, "").replace(/-,/g, "");
}