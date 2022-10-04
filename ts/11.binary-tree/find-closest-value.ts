import { BinaryTree } from './BinaryTree';
import { Node } from './Node';

export function findClosestNumber(bt: BinaryTree<number>, target: number) {
    let q = [bt.getRoot()] ;
    let dist = Infinity ; 


    while(q.length > 0) { 
        const v = q.shift() as Node<number>; 

        v.left && q.push(v.left) ;
        v.right && q.push(v.right) ;


        if (Math.abs(target - v.value) < Math.abs(target - dist)) { 
            dist = v.value; 
        }
    }

    return dist ;
}

function dfs(
    node: Node<number> | null,
    target: number,
    closest: number
): number {
    if (!node) return closest;

    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
        closest = node.value;
    }

    if (node.right && target > node.value) {
        return dfs(node.right, target, closest);
    } else if (node.left && target < node.value) {
        return dfs(node.left, target, closest);
    } else {
        return closest;
    }
}

export function findClosestNumberDfs(bt: BinaryTree<number>, target: number) {
    return dfs(bt.getRoot(), target, Infinity);
}
