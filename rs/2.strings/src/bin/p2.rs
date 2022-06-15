use std::{cmp, collections::HashMap};

fn main() {
    todo!();
}

fn find_longest_substring2(text: &str) -> usize {
    if text.len() <= 1 {
        return text.len();
    }

    let mut seen_characters: HashMap<char, usize> = HashMap::new();
    let text_collection: Vec<char> = text.to_string().chars().collect();
    let mut left = 0;
    let mut right = 0;
    let mut max_length = 0;

    while right < text_collection.len() {
        if let Some(founded) = seen_characters.get(&text_collection[right]) {
            if *founded >= left {
                left = founded + 1
            }
        }

        seen_characters.insert(text_collection[right], right);
        max_length = cmp::max(max_length, right - left + 1);
        right = right + 1;
    }

    return max_length;
}

fn find_longest_substring(text: &str) -> usize {
    if text.len() <= 1 {
        return text.len();
    }

    let mut stack: Vec<char> = vec![];
    let mut max: Vec<usize> = vec![];
    let mut max_level = 0;
    let text_collection: Vec<char> = text.to_string().chars().collect();

    let mut index = 0;
    let mut character_start_index = index;
    while index < text_collection.len() {
        let character = text_collection[index];
        if stack.len() > 0 && stack.contains(&character) {
            max.push(max_level);
            max_level = 0;
            stack = vec![];
            index = character_start_index + 1;
            character_start_index = index;
        } else {
            stack.push(character);
            max_level = max_level + 1;
            index = index + 1;
        }
    }

    match max.iter().max() {
        Some(maximum) => {
            return *maximum;
        }
        _ => {
            println!("max vec is empty");
            return 0;
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::find_longest_substring;
    use crate::find_longest_substring2;

    #[test]
    fn first_test() {
        let result = find_longest_substring("abccabb");
        assert_eq!(result, 3);
    }

    #[test]
    fn second_test() {
        let result = find_longest_substring("abcbdaac");
        assert_eq!(result, 4);
    }

    #[test]
    fn first_test_2() {
        let result = find_longest_substring2("abccabb");
        assert_eq!(result, 3);
    }

    #[test]
    fn second_test_2() {
        let result = find_longest_substring2("abcbdaac");
        assert_eq!(result, 4);
    }
}
