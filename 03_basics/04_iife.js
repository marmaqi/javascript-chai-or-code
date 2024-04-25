// Immediately Invoked Function Expression (IIFE)


(function chai()            // its named immediately invoked function expression
{
    console.log("DB Connected");
})();

(function ()            // its unnamed immediately invoked function expression
{
    console.log("DB Connected 2");
})();

((name) => {
    console.log(`DB CONNECT ${name}`);
})("hitesh")