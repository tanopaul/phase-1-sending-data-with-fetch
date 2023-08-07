// Add your code here
// function submitData(name, email) {
//     let url = 'http://localhost:3001/users';
//     const obj = {
//         name: name,
//         email: email
//     }
   
//    return fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(obj)
//     })
//     .then(resp => resp.json())
//     .then(obj => console.log(obj))
// }

// submitData('Tano', 'tanopaul34@gmail.com')

let user = 'Tano';
let email = 'tanopaul34@gmail.com';

const url = 'http://localhost:3000/users';

// function renderId(obj) {
//     let body = document.body;
//     let p = document.querySelector('p');
//     p.innerText = obj.id;
//     body.append(p)
      
// }
function submitData(name, email) {
    let newUser = {
        name: name,
        email: email
    }
    
   return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(obj => {
        document.body.innerHTML = obj.id;
    })
    .catch(err => {
        document.body.innerHTML = err;
    })
}


submitData(user, email)
