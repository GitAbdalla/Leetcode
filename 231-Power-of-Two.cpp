class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n < 0){
            return false;
        }
        int cntones = __builtin_popcount(n);
        return (cntones ==1);
        
    }
};