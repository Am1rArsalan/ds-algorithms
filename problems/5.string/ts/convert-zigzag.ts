export function convertZigzag(str: string, numRows: number) {
    let result = '';
    let step = numRows;
    let cols = [];

    let counter = 0;
    //numRows = 3
    while (counter < str.length) {
        //PAYPALISHIRING
        step = counter % 2 === 0 ? numRows : 1;
        // step : 3
        const temp = str.substring(counter, counter + step);

        if (temp.length === 1) {
            const temp2 = Array(numRows).fill(-1);
            temp2[Math.floor(numRows / 2)] = temp;
            cols.push(temp2);
        } else {
            cols.push(temp.split(''));
        }

        counter += step;
    }

    for (let j = 0; j < numRows; j++) {
        for (let i = 0; i < cols.length; i++) {
            let char = cols[i][j];
            if (char && char !== -1) {
                result += char;
            }
        }
    }
    return result;
}
