module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let input = req.query.phrase;

    if(!req.query.phrase){
        context.res = {
            status: 400,
            body: "Please pass a word or phrase as an argument"
        };
        return;
    }

    input = input.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const isPalindrome = input === input.split('').reverse().join('');


    if (isPalindrome) {
        context.res = {
            body: input + " is palindrome!"
        };

    }else {
        context.res = {
            body: input + " is not a palindrome!"
        };

    }
};