/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    let adj = Array.from({ length: n }, () => []);

    for (let i = 0; i < edges.length; i++) {
        let [from, to] = edges[i];
        adj[from].push([to, succProb[i]]);
        adj[to].push([from, succProb[i]]);
    }

    // Dijkstra's algorithm
    let maxHeap = new MaxHeap();
    let dist = Array(n).fill(0);
    dist[start_node] = 1;
    maxHeap.push([1, start_node]);

    while (!maxHeap.isEmpty()) {
        let [curProb, curNode] = maxHeap.pop();

        if (curNode === end_node) return curProb;

        for (let [nextNode, edgeProb] of adj[curNode]) {
            let newProb = curProb * edgeProb;
            if (newProb > dist[nextNode]) {
                dist[nextNode] = newProb;
                maxHeap.push([newProb, nextNode]);
            }
        }
    }

    return 0;
}


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element[0] <= parent[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] > element[0]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] > element[0]) ||
                    (swap !== null && rightChild[0] > leftChild[0])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
};