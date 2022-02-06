use std::cmp::{max, min};

fn find_max_trapped_area(heights: Vec<i32>) -> i32 {
    let mut total = 0;
    for (current_pointer, current_height) in heights.iter().enumerate() {
        let mut max_right = 0;
        let mut max_left = 0;
        let mut right_pointer = current_pointer as i32;
        let mut left_pointer = current_pointer as i32;

        while right_pointer < heights.len() as i32 {
            max_right = max(heights[right_pointer as usize], max_right);
            right_pointer = right_pointer + 1;
        }

        while left_pointer >= 0 {
            max_left = max(max_left, heights[left_pointer as usize]);
            left_pointer = left_pointer - 1;
        }

        let current_trapped_area = min(max_left, max_right) - current_height;

        if current_trapped_area >= 0 {
            total += current_trapped_area;
        }
    }

    total
}

fn main() {
    let result = find_max_trapped_area(vec![0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
    println!("result is {:?}", result);
}

//#[cfg(test)]
mod tests {
    use crate::find_max_trapped_area;

    #[test]
    fn find_max_trapped_area_test() {
        assert_eq!(
            find_max_trapped_area(vec![0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]),
            8
        );
    }
}
