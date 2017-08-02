var ddd = true;
var timeoutStop;
var ttt = true;


// setInterval(() => {

//     if (ddd) {
//         if (ttt) {
//             timeoutStop = setInterval(querySQLNew_TEST, 1000);
//             ttt = false;
//         }
//         console.log(timeoutStop);
//     }
//     else {
//         clearInterval(timeoutStop);
//     }
// }, 100);

// function querySQLNew_TEST() {
//     console.log("‎111111111111111");
// }

function myTimer(callback, param, seconds){
    var stopTimer = false;
    
    return () => {
        setInterval(callback, seconds, param);
    }
}