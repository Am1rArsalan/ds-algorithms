use std::cmp::min;

fn find_max_area(list: Vec<i32>) -> usize {
    let mut max_area = 0;
    if list.len() == 0 {
        return max_area;
    }

    let mut left = 0;
    let mut right = list.len() - 1;

    while left < right {
        let width = right - left;
        let height = min(list[right], list[left]) as usize;
        if width * height > max_area {
            max_area = width * height;
        }

        if list[right] > list[left] {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    max_area
}

fn main() {
    println!("**********************************************************");
    let result = find_max_area(vec![1, 2, 3, 4, 6, 8, 5]);
    println!("what is the result {:?}", result);
    println!("**********************************************************");
}

//#[cfg(test)]
mod tests {
    use crate::find_max_area;

    #[test]
    fn find_max_area_test() {
        assert_eq!(find_max_area(vec![1, 2, 3, 4, 6, 8, 5]), 12);
        assert_eq!(find_max_area(vec![1, 2, 3]), 2);
        assert_eq!(find_max_area(vec![1, 2, 2]), 2);
        assert_eq!(find_max_area(vec![1, 2]), 1);
        assert_eq!(find_max_area(vec![]), 0);
        assert_eq!(find_max_area(vec![1]), 0);
        assert_eq!(find_max_area(vec![7, 1, 2, 3, 9]), 28);
    }
}
