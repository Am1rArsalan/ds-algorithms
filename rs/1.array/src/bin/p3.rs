use std::cmp;

fn main() {
    let result = find_max_trapped_area(vec![0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
    println!("result is {:?}", result);
}

fn find_max_trapped_area(arr: Vec<i32>) -> i32 {
    let mut trapped_water = 0;
    let mut current = 0;

    while current < arr.len() {
        let mut max_right = 0;

        for i in current..arr.len() {
            if arr[i] > max_right {
                max_right = arr[i];
            }
        }

        let mut max_left = 0;

        for i in (0..current).rev() {
            if arr[i] > max_left {
                max_left = arr[i];
            }
        }

        let height = cmp::min(max_left, max_right) - arr[current];

        if height > 0 {
            trapped_water = trapped_water + height;
        }

        current = current + 1;
    }

    return trapped_water;
}

#[cfg(test)]
mod tests {
    use crate::find_max_trapped_area;

    #[test]
    fn find_max_trapped_area_test() {
        let result = find_max_trapped_area(vec![0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
        assert_eq!(result, 8);
    }
}
