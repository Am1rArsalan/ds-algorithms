fn main() {
    todo!();
}

fn validate_subsequence(input: &Vec<i32>, inner_input: &Vec<i32>) -> bool {
    let mut counter = 0;

    for value in input.iter() {
        if counter < inner_input.len() && *value == inner_input[counter] {
            counter = counter + 1;
        }
    }

    counter == inner_input.len()
}

#[cfg(test)]
mod tests {
    use crate::validate_subsequence;

    #[test]
    fn validate_subsequence_test_1() {
        let input = vec![5, 1, 22, 25, 6, -1, 8, 10];
        let inner_input = vec![1, 6, -1, 10];
        let result = validate_subsequence(&input, &inner_input);

        assert_eq!(result, true);
    }

    #[test]
    fn validate_subsequence_test_2() {
        let input = vec![5, 1, 22, 25, 6, -1, 8, 10];
        let inner_input = vec![1, 6, 10, -1];
        let result = validate_subsequence(&input, &inner_input);

        assert_eq!(result, false);
    }
}
