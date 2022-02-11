use std::collections::HashMap;

fn find_longest_substring(_str: &str) -> usize {
    let s = String::from(_str);
    let mut max = 0;

    for c in s.chars() {
        let mut stack = vec![c];
        for c in s.chars() {
            let result = stack.iter().find(|&item| item == &c);

            match result {
                Some(_value) => {
                    if stack.len() > max {
                        max = stack.len();
                    }

                    break;
                }
                None => {
                    stack.push(c);
                }
            }
        }
    }

    max
}

fn find_longest_substring_sliding_window_solution(_str: &str) -> usize {
    if _str.len() == 0 {
        return 0;
    }

    let mut map = HashMap::new();
    let mut max = 0;
    let mut counter = 0;
    let mut left = 0;
    let mut right = 0;

    while right < _str.len() {
        let c = _str.chars().nth(right).unwrap();
        if map.contains_key(&c) && map.get(&c).unwrap() < &right {
            *map.get_mut(&c).unwrap() = right;
            left = left + 1;
            right = left;

            if counter > max {
                print!("{}", counter);
                max = counter
            }
            counter = 0;
        } else {
            counter += 1;
            map.insert(c, right);
            right = right + 1;
        }
    }

    max
}

fn main() {
    println!(
        "what {:?}",
        find_longest_substring_sliding_window_solution("abcbdaac")
    );
}

//#[cfg(test)]
mod tests {
    use crate::find_longest_substring;
    use crate::find_longest_substring_sliding_window_solution;

    #[test]
    fn find_longest_substring_test() {
        assert_eq!(find_longest_substring("abccabb"), 3);
        assert_eq!(find_longest_substring("abcbdaac"), 4);
    }

    #[test]
    fn find_longest_substring_sliding_window_solution_test() {
        assert_eq!(find_longest_substring_sliding_window_solution("abccabb"), 3);
        assert_eq!(
            find_longest_substring_sliding_window_solution("abcbdaac"),
            4
        );
    }
}
