import { MonarchyImpl, MonarchyNodeImpl } from './main';
import { assert, it, test } from 'vitest';

test('test monarchy implementation', () => {
    let monarchy = new MonarchyImpl(new MonarchyNodeImpl('Jake'));
    monarchy.birth('Catherine', 'Jake');
    monarchy.birth('Jane', 'Catherine');
    monarchy.birth('Farah', 'Jane');
    monarchy.birth('Tom', 'Jake');
    monarchy.birth('Celine', 'Jake');
    monarchy.birth('Mark', 'Catherine');
    monarchy.birth('Peter', 'Celine');

    let result = monarchy.getOrderOfSuccession();
    let expectedResult = [
        'Jake',
        'Catherine',
        'Jane',
        'Farah',
        'Mark',
        'Tom',
        'Celine',
        'Peter',
    ];
    assert.deepEqual(result, expectedResult);

    monarchy.death('Jake');
    console.log(
        'monarchy after death is',
        JSON.stringify(monarchy.getMonarchy(), null, 2)
    );

    console.log('order after king dies', monarchy.getOrderOfSuccession());
    //order after king dies [ 'Catherine', 'Jane', 'Farah', 'Mark', 'Tom', 'Celine' ] // where is Peter
    monarchy.death('Jane');
    console.log(
        'monarchy after death is 2',
        JSON.stringify(monarchy.getMonarchy(), null, 2)
    );
    console.log('order after jane dies', monarchy.getOrderOfSuccession());

    result = monarchy.getOrderOfSuccession();
    expectedResult = ['Catherine', 'Farah', 'Mark', 'Tom', 'Celine', 'Peter'];
    //order after jane dies [ 'Catherine', 'Jane', 'Farah', 'Mark', 'Tom', 'Celine' ]

    assert.deepEqual(result, expectedResult);
});
