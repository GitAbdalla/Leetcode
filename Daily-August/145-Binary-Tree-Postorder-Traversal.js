/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function solve(root, result) {

    if (!root) return;
    solve(root.left, result);
    solve(root.right, result);
    result.push(root.val);
}
var postorderTraversal = function (root) {
    let result = [];
    solve(root, result);
    return result;
};