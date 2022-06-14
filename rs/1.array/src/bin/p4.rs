use std::cmp;
use std::collections::HashMap;

fn main() {
    todo!();
}

fn min_cost(stair: usize, arr: &Vec<i32>, cache: &mut HashMap<usize, i32>) -> i32 {
    if stair < 2 {
        return arr[stair];
    }

    if let Some(minimum_cost) = cache.get(&stair) {
        return *minimum_cost;
    }

    let minimum_cost = cmp::min(
        min_cost(stair - 1, arr, cache),
        min_cost(stair - 2, arr, cache),
    ) + arr[stair];

    cache.insert(stair, minimum_cost);

    return minimum_cost;
}

/// top down approach
fn calculate_min_cost(arr: Vec<i32>) -> i32 {
    let last = arr.len();
    let mut cache: HashMap<usize, i32> = HashMap::new();

    return cmp::min(
        min_cost(last - 1, &arr, &mut cache),
        min_cost(last - 2, &arr, &mut cache),
    );
}

/// bottom up approach
fn calculate_min_cost_2(arr: Vec<i32>) -> i32 {
    let last = arr.len();
    let mut cache: HashMap<usize, i32> = HashMap::new();

    arr.iter().enumerate().for_each(|(index, cost)| {
        if index < 2 {
            cache.insert(index, *cost);
        } else {
            let min = cmp::min(cache.get(&(index - 1)), cache.get(&(index - 2)));

            if let Some(min_level) = min {
                let value = min_level + cost;
                cache.insert(index, value);
            }
        }
    });

    match cmp::min(cache.get(&(last - 1)), cache.get(&(last - 2))) {
        Some(minimum_cost) => {
            return *minimum_cost;
        }
        _ => {
            return -1;
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::calculate_min_cost;
    use crate::calculate_min_cost_2;

    #[test]
    fn calculate_min_cost_test() {
        let result = calculate_min_cost(vec![20, 15, 30, 5]);
        assert_eq!(result, 20);
    }

    #[test]
    fn calculate_min_cost_test_2() {
        let result = calculate_min_cost_2(vec![20, 15, 30, 5]);
        assert_eq!(result, 20);
    }
}
