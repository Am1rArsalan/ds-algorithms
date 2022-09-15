fn main() {
    todo!();
}

fn find_non_constructible_change(arr: &mut Vec<i32>) -> i32 {
    let mut change = 0;

    arr.sort();

    for value in arr {
        if change + 1 < *value {
            break;
        }

        change = change + *value;
    }

    change + 1
}

#[cfg(test)]
mod tests {
    use crate::find_non_constructible_change;

    #[test]
    fn validate_subsequence_test_1() {
        let x = 10; 
        let mut arr = vec![5, 7, 1, 1, 2, 3, 22];
        let result = find_non_constructible_change(&mut arr);
        assert_eq!(result, 20);
    }
}
