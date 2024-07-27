/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return

    let values = []
    let node = head
    // put the linked list into array
    while (node !== null) {
        values.push(node.val)
        node = node.next
    }
    let length = values.length
    node = head
    for (let i = 0; i < Math.floor(length / 2); i++) {
        node.val = values[i]
        node = node.next
        node.val = values[length - i - 1]
        node = node.next
    }
    if (length % 2 != 0) {
        node.val = values[ Math.floor(length / 2) ]
    }
}