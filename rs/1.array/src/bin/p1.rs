use std::collections::HashMap;

fn main() {
    println!("hello world");
}

fn find_indexes(arr: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: HashMap<&i32, i32> = HashMap::new();
    let mut result: Vec<i32> = vec![-1, -1];


    if arr.len() == 1 && arr[0] == target {
        return vec![0];
    }

    arr.iter().enumerate().for_each(|(index, value)| {
        let sth = target - value;

        match map.get(&sth) {
            Some(res) => {
                result[0] = *res;
                result[1] = index as i32;
            }
            None => {
                // FIXME
                map.insert(value, index as i32);
            }
        };
    });

    result
}

#[cfg(test)]
mod tests {
    use crate::find_indexes;

    #[test]
    fn first_test() {
        let expected_result = vec![1, 4];
        let result = find_indexes(vec![1, 2, 3, 7, 9], 11);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn second_test() {
        let expected_result = vec![1, 5];
        let result = find_indexes(vec![1, 2, 3, 4, 6, 9], 11);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn without_result() {
        let expected_result = vec![-1, -1];
        let result = find_indexes(vec![1, 2, 3, 4, 5], 25);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn vector_with_length_2() {
        let expected_result = vec![0, 1];
        let result = find_indexes(vec![1, 6], 7);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn vector_with_length_2_without_result() {
        let expected_result = vec![-1, -1];
        let result = find_indexes(vec![1, 6], 77);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn empty_vec_without_result() {
        let expected_result = vec![-1, -1];
        let result = find_indexes(vec![], 4);
        assert_eq!(result, expected_result);
    }

    #[test]
    fn vec_with_length_1() {
        let expected_result = vec![0];
        let result = find_indexes(vec![5], 5);
        assert_eq!(result, expected_result);
    }
}
