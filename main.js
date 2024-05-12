const userName = prompt("String tipidagi ma'lumot kiriting");
const userAge = +prompt("Number tipidagi ma'lumot kiriting");
const userBolen = prompt("Boolean tipidagi ma'lumot kiriting");
console.log(`
    ${userName} so'zi ${typeof userName} tipiga teng
    ${userAge} so'zi ${typeof Number(userAge)} tipiga teng
    ${userBolen} so'zi ${typeof Boolean(userBolen)} tipiga teng
`);