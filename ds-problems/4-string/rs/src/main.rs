fn generate_string(word: &str) -> String {
    let mut stack = vec![];

    for c in word.chars() {
        if c != '#' {
            stack.push(c);
        } else if c == '#' && stack.len() > 0 {
            stack.pop();
        }
    }

    stack
        .iter()
        .fold("".to_owned(), |acc, c| acc + &c.to_string())
}

fn compare_two_strings(word_one: &str, word_two: &str) -> bool {
    generate_string(word_one) == generate_string(word_two)
}

fn main() {
    let word_one = "a#c";
    let word_two = "a#c";

    println!("{}", compare_two_strings(word_one, word_two));
}

//#[cfg(test)]
mod tests {
    use crate::compare_two_strings;
    use crate::generate_string;

    #[test]
    fn generate_string_test() {
        assert_eq!(generate_string("a#c"), "c");
        assert_eq!(generate_string("axeqq#a"), "axeqa");
        assert_eq!(generate_string("asexq#a"), "asexa");
        assert_eq!(generate_string("axeqq#a"), "axeqa");
        assert_eq!(generate_string("axeqW#a"), "axeqa");
    }

    #[test]
    fn compare_two_strings_test() {
        assert_eq!(compare_two_strings("axeqq#a", "asexq#a"), false);
        assert_eq!(compare_two_strings("axeqq#a", "axeqW#a"), true);
    }
}
