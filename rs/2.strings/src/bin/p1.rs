use regex::Regex;

fn main() {
    todo!();
}

fn compare_two_string_with_regex(first: &str, second: &str) -> bool {
    //
}

fn compare_two_string(first: &str, second: &str) -> bool {
    let mut first_result: Vec<char> = vec![];

    let first_collection: Vec<char> = first.to_string().chars().collect();

    first_collection
        .iter()
        .enumerate()
        .for_each(|(index, character)| {
            if index + 1 < first_collection.len()
                && first_collection[index + 1] != '#'
                && first_collection[index] != '#'
            {
                first_result.push(*character);
            }
        });

    let mut second_result: Vec<char> = vec![];
    let second_collection: Vec<char> = second.to_string().chars().collect();

    second_collection
        .iter()
        .enumerate()
        .for_each(|(index, character)| {
            if index + 1 < second_collection.len()
                && second_collection[index + 1] != '#'
                && second_collection[index] != '#'
            {
                second_result.push(*character);
            }
        });

    let second_result: String = second_result.into_iter().collect();
    let first_result: String = first_result.into_iter().collect();

    return first_result.eq(&second_result);
}

#[cfg(test)]
mod tests {

    use crate::compare_two_string;

    #[test]
    fn first_compare() {
        let result = compare_two_string("axeqq#a", "asexq#a");
        assert_eq!(result, false);
    }

    #[test]
    fn second_compare() {
        let result = compare_two_string("axeqq#a", "axeqW#");
        assert_eq!(result, true);
    }
}
