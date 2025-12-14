const code_el = document.getElementsByClassName('code')[0];
const username = "monnku";
code_el.innerHTML = `
const username = "monnku"; //ここではmonnku.
fetch("https://api.scratch.mit.edu/users/"+username+"/messages/count")
    .then(r => r.json())
    .then(d => {
        console.log(d.count);
    }
);
`;
let count = 0;
fetch(`https://api.scratch.mit.edu/users/${username}/messages/count`)
    .then(r => r.json())
    .then(d => {
        count = d.count;
    }
);
const result_el = document.getElementsByClassName('result')[0];
result_el.innerHTML = `>> ${String(count)}`;