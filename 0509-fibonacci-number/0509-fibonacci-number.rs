impl Solution {
    pub fn fib(n: i32) -> i32 {
        if (n == 0) {
          return 0
        }
        if (n == 1) {
          return 1
        }
        let mut p = 0;
        let mut q = 1;
        let mut i = 1;
        while i < n {
            let tmp = q;
            q += p;
            p = tmp;
            i += 1;
        }
        return q
    }
}