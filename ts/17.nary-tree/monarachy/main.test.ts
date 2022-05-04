import { MonarchyImpl, MonarchyNodeImpl } from './main';
import { assert, test } from 'vitest';

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
    monarchy.death('Jane');

    result = monarchy.getOrderOfSuccession();
    expectedResult = ['Catherine', 'Farah', 'Mark', 'Tom', 'Celine', 'Peter'];

    assert.deepEqual(result, expectedResult);
});
