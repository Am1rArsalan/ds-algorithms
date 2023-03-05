use std::cmp;

fn main() {
    println!("hello world");
}

fn find_max_trapped_area(arr: Vec<usize>) -> usize {
    if arr.len() == 0 {
        return 0;
    }
    let mut left = 0;
    let mut right = arr.len() - 1;
    let mut max = 0;

    while left < right {
        let width = right - left;
        let height = cmp::min(arr[right], arr[left]);
        let area = width * height;

        if area > max {
            max = area;
        }

        if arr[right] > arr[left] {
            left = &left + 1;
        } else {
            right = &right - 1;
        }
    }

    max
}

#[cfg(test)]
mod tests {
    use crate::find_max_trapped_area;

    #[test]
    fn best_test_case() {
        println!("amir is here");
        let result = find_max_trapped_area(vec![1, 2, 3, 4, 6, 8, 5]);
        println!("result : {:?}", result);
        let expected_result = 12;
        assert_eq!(result, expected_result);
    }

    #[test]
    fn second_test() {
        let result = find_max_trapped_area(vec![1, 2, 3]);
        let expected_result = 2;
        assert_eq!(result, expected_result);
    }

    #[test]
    fn third_test() {
        let result = find_max_trapped_area(vec![1, 2]);
        let expected_result = 1;
        assert_eq!(result, expected_result);
    }

    #[test]
    fn forth_test() {
        let result = find_max_trapped_area(vec![1, 2]);
        let expected_result = 1;
        assert_eq!(result, expected_result);
    }

    #[test]
    fn empty_list() {
        let result = find_max_trapped_area(vec![]);
        let expected_result = 0;
        assert_eq!(result, expected_result);
    }

    #[test]
    fn fifth_test() {
        let result = find_max_trapped_area(vec![7, 1, 2, 3, 9]);
        let expected_result = 28;
        assert_eq!(result, expected_result);
    }
}
