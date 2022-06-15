use regex::Regex;

fn main() {
    todo!();
}

fn compare_two_string_with_regex(first: &str, second: &str) -> bool {
    let re = Regex::new(".#").unwrap();

    let first = re.replace_all(first, "".to_string()).to_string();
    let second = re.replace_all(second, "".to_string()).to_string();

    println!("first ,{:?}", first);
    println!("second ,{:?}", second);

    return first.eq(&second);
}

fn pars_text(chars_collection: Vec<char>) -> String {
    let mut result: Vec<char> = vec![];
    chars_collection
        .iter()
        .enumerate()
        .for_each(|(index, character)| {
            if index + 1 < chars_collection.len()
                && chars_collection[index + 1] != '#'
                && chars_collection[index] != '#'
            {
                result.push(*character);
            }
        });

    let result: String = result.into_iter().collect();
    return result;
}

fn compare_two_string(first: &str, second: &str) -> bool {
    let first_collection: Vec<char> = first.to_string().chars().collect();
    let second_collection: Vec<char> = second.to_string().chars().collect();

    let first_result: String = pars_text(first_collection);
    let second_result: String = pars_text(second_collection);

    return first_result.eq(&second_result);
}

#[cfg(test)]
mod tests {

    use crate::compare_two_string;
    use crate::compare_two_string_with_regex;

    #[test]
    fn first_compare() {
        let result = compare_two_string("axeqq#a", "asexq#a");
        assert_eq!(result, false);
    }

    #[test]
    fn second_compare() {
        let result = compare_two_string("axeqq#a", "axeqW#a");
        assert_eq!(result, true);
    }

    #[test]
    fn first_compare_with_regex() {
        let result = compare_two_string_with_regex("axeqq#a", "asexq#a");
        assert_eq!(result, false);
    }

    #[test]
    fn second_compare_with_regex() {
        let result = compare_two_string_with_regex("axeqq#a", "axeqW#a");
        assert_eq!(result, true);
    }
}
