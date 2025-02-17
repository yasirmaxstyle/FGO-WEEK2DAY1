// membuat object account
const account = {
    id: 'yasir',
    username: 'yasirmaxstyle',
    password: 'yasirgantengjos',
    changePassword: function (passw) {
        this.password = { ...this, password: passw }.password; //method mengubah password dengan spread
    }
}

account.changePassword('yasirsemakinganteng');

const { username, password } = account; // destructuring object

console.log(username, password); // tampilkan username dan password