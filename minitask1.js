// membuat object account
const account = {
    id: 'yasir',
    username: 'yasirmaxstyle',
    password: 'yasirgantengjos'
}

const changePassword = { ...account, password: 'yasirsemakinganteng' }; // mengubah password dengan spread
const { username, password } = account; // destructuring object

console.log(username, password); // tampilkan username dan password