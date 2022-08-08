fn main() {
    todo!();
}

fn squared_stored_array(arr: &Vec<i32>) -> Vec<i32> {
    let mut right = arr.len() - 1;
    let mut left = 0;
    let mut result: Vec<i32> = vec![];
    let mut current = arr.len();

    for _ in arr {
        result.push(0);
    }

    loop {
        if left > right && current < 1 {
            break;
        }

        let left_value = arr[left].abs().pow(2);
        let right_value = arr[right].abs().pow(2);

        if right_value > left_value {
            result[current - 1] = right_value;
            right = right - 1;
        } else {
            result[current - 1] = left_value;
            left = left + 1;
        }
        current = current - 1;
    }

    return result;
}

#[cfg(test)]
mod tests {
    use crate::squared_stored_array;

    #[test]
    fn validate_subsequence_test_1() {
        let arr = vec![1, 2, 3, 5, 6, 8, 9];
        let sol = vec![1, 4, 9, 25, 36, 64, 81];
        assert_eq!(squared_stored_array(&arr), sol);
    }

    #[test]
    fn validate_subsequence_test_2() {
        let arr = vec![-3, -1, 2, 5, 10];
        let sol = vec![1, 4, 9, 25, 100];
        assert_eq!(squared_stored_array(&arr), sol);
    }

    #[test]
    fn validate_subsequence_test_3() {
        let arr = vec![-6, -4, -2, 0, 1];
        let sol = vec![0, 1, 4, 16, 36];
        assert_eq!(squared_stored_array(&arr), sol);
    }
}
