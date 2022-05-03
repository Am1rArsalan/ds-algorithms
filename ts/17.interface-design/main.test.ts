import { MonarchyImpl } from './main';
import { assert, it, test } from 'vitest';

test('test monarchy implementation', () => {
    let monarchy = new MonarchyImpl('Jake');
    monarchy.birth('Catherine', 'Jake');
    monarchy.birth('Jane', 'Catherine');
    monarchy.birth('Farah', 'Jane');
    monarchy.birth('Tom', 'Jake');
    monarchy.birth('Celine', 'Jake');
    monarchy.birth('Mark', 'Catherine');
    monarchy.birth('Peter', 'Celine');
    console.log(
        'what is monarachy',
        JSON.stringify(monarchy.getMonarchy(), null, 2)
    );

    let orderOfSuccess = monarchy.getOrderOfSuccession();
    console.log('what is the result', orderOfSuccess);

    //'Jake',  'Catherine', 'Tom',   'Celine', 'Jane',  'Mark', 'Peter', 'Farah' ]

    let expectedOrderOfSuccess = [
        'Jake',
        'Catherine',
        'Jane',
        'Farah',
        'Mark',
        'Tom',
        'Celine',
        'Peter',
    ];

    assert.deepEqual(orderOfSuccess, expectedOrderOfSuccess);

    monarchy.death('Jake');
    monarchy.death('Jane');

    orderOfSuccess = monarchy.getOrderOfSuccession();
    expectedOrderOfSuccess = [
        'Catherine',
        'Farah',
        'Mark',
        'Tom',
        'Celine',
        'Peter',
    ];

    assert.deepEqual(orderOfSuccess, expectedOrderOfSuccess);
});
