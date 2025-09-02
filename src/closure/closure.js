function greeting(){
    let username = 'oscar';

    function displayUsernName(){
        return `hello ${username}`;
    }
    return displayUsernName()
}

const g = greeting();

console.log(g);
console.log(g());