/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    let result = []
    function solve(root) {
        if (!root) return

        for (let child of root.children) {
            solve(child)

        }
        result.push(root.val)

    }

    solve(root)
    return result
};