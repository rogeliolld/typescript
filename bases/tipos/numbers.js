"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos Salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers }); /*Nos da como resultado NaN, y
    para js los NaN son considerados datos numericos*/
})();
