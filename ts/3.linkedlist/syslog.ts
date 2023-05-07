import * as readline from 'readline';
import { LinkedListImpl } from './LinkedList';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

function getInput() {
    return new Promise((resolve, reject) => {
        rl.on('line', (line) => {
            resolve(line);
        });
    });
}

getInput().then(async function (line: any) {
    let [q1, q2] = line.split(' ');
    const queues = Array.from(
        { length: +q1 },
        () => new LinkedListImpl<number>()
    );
    const deletedResults = [] as number[];

    for (let i = 0; i < q2; i++) {
        const item = (await getInput()) as string;
        const [a, b, c] = item.split(' ');

        switch (a) {
            case '1': {
                for (let i = 0; i < queues.length; i++) {
                    queues[i].push(+b);
                }
                console.log(queues);
                break;
            }
            case '2': {
                let levelRes = 0;
                for (let i = 0; i < +c; i++) {
                    levelRes += queues[+b - 1].shift() as number;
                }
                deletedResults[levelRes];
                console.log(queues);
                break;
            }
        }
    }

    console.log('amir is here', deletedResults);
    for (let i = 0; i < deletedResults.length; i++) {
        console.log(deletedResults[i]);
    }
});
