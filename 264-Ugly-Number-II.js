/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let ugly;
    const st = new Set();
    st.add(1);

    for (let i = 0; i < n; i++) {
        ugly = Math.min(...st);
        st.delete(ugly);

        st.add(ugly * 2);
        st.add(ugly * 3);
        st.add(ugly * 5);
    }

    return ugly;
};