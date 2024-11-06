function printMultiplicationTables() {

    for (let i = 1; i <= 10; i++){
        let fila = "  ";
        for (let x = 1; x <= 10; x++){
        fila += `${i *x}\t`;
    
        }
        console.log(fila)
        }
    }
    
    printMultiplicationTables()