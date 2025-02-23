function primo (n){
    if(n < 2){
        console.log(`o numero ${n}, não é primo`)
        return
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log(`O número ${n} não é primo`);
            return;
        }
    }

    console.log(`O número ${n} é primo`);
}

primo(6)