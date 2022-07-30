function validateEmail(email) {
    // Regular expression for email validation
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    // Regular expression for phone number validation
    let regex = new RegExp("^[0-9]{11}$");
    return regex.test(phoneNumber);
}

function verifyMangos(mango1, mango2, mango3) {
    if (0 <= mango1 <= 10 && 0 <= mango2 <= 10 && 0 <= mango3 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validateForm() {
    // Pull elements from DOM
    let email = document.getElementById("emailInput").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let mango_3eweasy = document.getElementById("mango_3eweasy").value;
    let mango_fas = document.getElementById("mango_fas").value;
    let mango_sedekah = document.getElementById("mango_sedekah").value;

    console.log(email);
    console.log(phoneNumber);
    console.log(mango_3eweasy);
    console.log(mango_fas);
    console.log(mango_sedekah);

    errorString = ""; // String that we'll alert to the user if there is an errror

    // Validate email
    if (email == "" || email == "someone@example.com") {
        errorString += "البريد الالكتروني مطلوب.\n";
    } else if (!validateEmail(email)) {
        errorString += "البريد الالكتروني غير صحيح.\n";
    }

    // Validate phone number
    if (phoneNumber == "" || phoneNumber == "0") {
        errorString += "رقم المحمول مطلوب.\n";
    } else if (!validatePhoneNumber(phoneNumber)) {
        errorString += "رقم المحمول غير صحيح.\n";
    }

    // Validate mangoes
    if (!verifyMangos(mango_3eweasy, mango_fas, mango_sedekah)) {
        // make a string with the following text translated to arabic: The amount of mangos is not valid.
        errorString += "الكمية المطلوبة للمنجوزات غير صحيحة.\n";
    }

    // If there is an error, alert the user
    if (errorString != "") {
        alert(errorString);
        return false;
    } else {
        return true;
    }
}

function authSuperUser() {
    const _0xecbc21 = _0x1e0d;

    function _0x5e6c() {
        const _0x50ddb4 = ['2070695xMZksP', '1525347uPGAvA', '10NzCYvH', 'Enter\x20superuser\x20password', '1128fIUScg', 'Password00@work218', '2411USMOOs', '49MqJmiF', '470tLQwtI', '190576QtWTZI', '3189Dqnlrc', '3836129rEnNbq', '1518252zkHYum'];
        _0x5e6c = function () {
            return _0x50ddb4;
        };
        return _0x5e6c();
    }

    function _0x1e0d(_0x2bb4a2, _0xbc2705) {
        const _0x5e6ca4 = _0x5e6c();
        return _0x1e0d = function (_0x1e0da2, _0x8ebc2c) {
            _0x1e0da2 = _0x1e0da2 - 0x190;
            let _0x324e72 = _0x5e6ca4[_0x1e0da2];
            return _0x324e72;
        }, _0x1e0d(_0x2bb4a2, _0xbc2705);
    } (function (_0x4a8831, _0x35aee6) {
        const _0x3d82b7 = _0x1e0d,
            _0x27972e = _0x4a8831();
        while (!![]) {
            try {
                const _0x3fbf22 = -parseInt(_0x3d82b7(0x196)) / 0x1 * (-parseInt(_0x3d82b7(0x198)) / 0x2) + -parseInt(_0x3d82b7(0x19a)) / 0x3 * (-parseInt(_0x3d82b7(0x194)) / 0x4) + -parseInt(_0x3d82b7(0x190)) / 0x5 + parseInt(_0x3d82b7(0x19c)) / 0x6 + parseInt(_0x3d82b7(0x197)) / 0x7 * (parseInt(_0x3d82b7(0x199)) / 0x8) + -parseInt(_0x3d82b7(0x191)) / 0x9 * (parseInt(_0x3d82b7(0x192)) / 0xa) + -parseInt(_0x3d82b7(0x19b)) / 0xb;
                if (_0x3fbf22 === _0x35aee6) break;
                else _0x27972e['push'](_0x27972e['shift']());
            } catch (_0x927d08) {
                _0x27972e['push'](_0x27972e['shift']());
            }
        }
    }(_0x5e6c, 0x565fa));
    let password = prompt(_0xecbc21(0x193));
    return password == _0xecbc21(0x195) ? !![] : ![];
}
