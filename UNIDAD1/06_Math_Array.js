function calculate(data) {
    let sum = 0;
    let max = data[0];
    let min = data[0];

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        sum += element;

        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }

    const media = sum / data.length;

    console.log(`La suma de todos los elementos es: ${sum}`);
    console.log(`El elemento más grande es: ${max}`);
    console.log(`El elemento más pequeño es: ${min}`);
    console.log(`La media de los elementos es: ${media}`);
}

let valores = [10, 20, 30, 40, 50, 60, 70, 71, 72, 73, 74, 75];

calculate(valores);