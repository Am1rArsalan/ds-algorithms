fn main() {
    todo!();
}

fn squared_stored_array(arr: &mut Vec<i32>) -> Vec<i32> {
    return vec![1, 2, 3];
}

#[cfg(test)]
mod tests {
    use crate::squared_stored_array;

    #[test]
    fn validate_subsequence_test_1() {
        let mut arr = vec![1, 2, 3, 5, 6, 8, 9];
        let sol = vec![1, 4, 9, 25, 36, 64, 81];
        assert_eq!(squared_stored_array(&mut arr), sol);
    }

    #[test]
    fn validate_subsequence_test_2() {
        let mut arr = vec![-3, -1, 2, 5, 10];
        let sol = vec![1, 4, 9, 25, 100];
        assert_eq!(squared_stored_array(&mut arr), sol);
    }

    #[test]
    fn validate_subsequence_test_3() {
        let mut arr = vec![-6, -4, -2, 0, 1];
        let sol = vec![0, 1, 4, 16, 36];
        assert_eq!(squared_stored_array(&mut arr), sol);
    }
}
