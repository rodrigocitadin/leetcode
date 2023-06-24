impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let right = x.to_string();
        let left = right.chars().rev().collect::<String>();

        return right == left;
    }
}
