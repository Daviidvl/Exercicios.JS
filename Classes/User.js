class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Login feito com sucesso!")
        }else{
            console.log("Falha ao logar, verifique sua senha ou email!")
        }
    }
}

const joao = new User("Joao ninguem","joaoninguem@email","123455")

joao.login("joaoninguem@email","123455")