import { BinaryTree } from '.';
import { Node } from './Node';

// bfs1 : using different model for storing data in the queue
// bad approach
export function sumDepth(tree: BinaryTree<number>) {
    const queue = [{ node: tree.getRoot() as Node<number>, depth: 0 }];
    let sumDepth = 0;

    while (queue.length > 0) {
        const vertex = queue.shift();

        if (!vertex) continue;

        const { depth, node } = vertex;

        sumDepth += depth;

        node.left && queue.push({ node: node.left, depth: depth + 1 });
        node.right && queue.push({ node: node.right, depth: depth + 1 });
    }

    return sumDepth;
}

// bfs2
export function sumDepth2(tree: BinaryTree<number>) {
    const q = [tree.getRoot()] ; 
    let ql = q.length ;
    let d = 0 ;
    let s = 0;

    while(q.length > 0) { 
        const v = q.shift() as Node<number>; 
        ql-- ;

        v.left && q.push(v.left); 
        v.right && q.push(v.right); 

        s += d ;

        if (ql == 0) { 
            ql = q.length ;
            d++; 
        }
    }
    
    return s ;
}

function dfs(n: Node<number> | null, d: number) :number { 
    if (!n) {
        return 0;
    }

    return d + dfs(n.left, d + 1) + dfs(n.right , d + 1) ;
}

export function sumDepthDfs(bt : BinaryTree<number>) : number { 
    return dfs(bt.getRoot() , 0); 
}
