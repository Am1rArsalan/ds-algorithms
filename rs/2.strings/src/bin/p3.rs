use regex::Regex;

fn main() {
    println!("hello world");
}

fn parse_text(text: &str) -> String {
    let re = Regex::new("[^a-zA-Z]").unwrap();

    return re
        .replace_all(text, "".to_owned())
        .to_string()
        .to_lowercase();
}

fn is_palindrome3(text: &str) -> bool {
    let mut palindrome = true;
    if text.len() <= 1 {
        return palindrome;
    }

    let text = parse_text(text);

    let mut left = text.len() / 2;
    let mut right = text.len() / 2;

    if text.len() % 2 == 0 {
        left = left - 1;
    }

    let left_part = &text[..=left].to_string().chars().collect::<Vec<char>>();
    let right_part = &text[right..]
        .to_string()
        .chars()
        .rev()
        .collect::<Vec<char>>();

    if left_part.len() != right_part.len() {
        palindrome = false;
    }
    //***
    println!("left part {:?} ", left_part);
    println!("right part {:?} ", right_part);
    //***

    let mut index = 0;
    while index < left_part.len() {
        if left_part[index] != right_part[index] {
            palindrome = false;
            break;
        }

        index = index + 1
    }

    return palindrome;
}

fn is_palindrome2(text: &str) -> bool {
    let mut palindrome = true;
    if text.len() <= 1 {
        return palindrome;
    }

    let text = parse_text(text);
    let mut left = 0;
    let mut right = text.len() - 1;
    let text = text.to_string().chars().collect::<Vec<char>>();

    loop {
        if text[left] != text[right] {
            palindrome = false;
            break;
        }
        if left == 0 || right == text.len() - 1 {
            break;
        }
        left = left + 1;
        right = right - 1;
    }

    if left != 0 || right != text.len() - 1 {
        palindrome = false;
    }

    return palindrome;
}

fn is_palindrome(text: &str) -> bool {
    let mut palindrome = true;
    if text.len() <= 1 {
        return palindrome;
    }

    let text = parse_text(text);
    let mut left = text.len() / 2;
    let mut right = text.len() / 2;

    if text.len() % 2 == 0 {
        left = left - 1;
    }

    let text = text.to_string().chars().collect::<Vec<char>>();

    loop {
        if text[left] != text[right] {
            palindrome = false;
            break;
        }
        if left == 0 || right == text.len() - 1 {
            break;
        }
        left = left - 1;
        right = right + 1;
    }

    if left != 0 || right != text.len() - 1 {
        palindrome = false;
    }

    palindrome
}

#[cfg(test)]
mod test {
    use crate::is_palindrome;
    use crate::is_palindrome2;
    use crate::is_palindrome3;

    #[test]
    fn first_palindrome_test_1() {
        let result = is_palindrome("a , abaa");
        assert_eq!(result, true);
    }

    #[test]
    fn second_palindrome_test_1() {
        let result = is_palindrome("aabb ,aa");
        assert_eq!(result, true);
    }

    #[test]
    fn third_palindrome_test_1() {
        let result = is_palindrome("abc");
        assert_eq!(result, false);
    }

    #[test]
    fn forth_palindrome_test_1() {
        let result = is_palindrome("a");
        assert_eq!(result, true);
    }

    #[test]
    fn fifth_palindrome_test_1() {
        let result = is_palindrome("");
        assert_eq!(result, true);
    }

    #[test]
    fn sixth_palindrome_test_1() {
        let result = is_palindrome("A man, a plan, a canal : Panama");
        assert_eq!(result, true);
    }

    #[test]
    fn first_palindrome_test_2() {
        let result = is_palindrome2("a , abaa");
        assert_eq!(result, true);
    }

    #[test]
    fn second_palindrome_test_2() {
        let result = is_palindrome2("aabb ,aa");
        assert_eq!(result, true);
    }

    #[test]
    fn third_palindrome_test_2() {
        let result = is_palindrome2("abc");
        assert_eq!(result, false);
    }

    #[test]
    fn forth_palindrome_test_2() {
        let result = is_palindrome2("a");
        assert_eq!(result, true);
    }

    #[test]
    fn fifth_palindrome_test_2() {
        let result = is_palindrome2("");
        assert_eq!(result, true);
    }

    #[test]
    fn sixth_palindrome_test_2() {
        let result = is_palindrome2("A man, a plan, a canal : Panama");
        assert_eq!(result, true);
    }

    #[test]
    fn first_palindrome_test_3() {
        let result = is_palindrome3("a , abaa");
        assert_eq!(result, true);
    }

    #[test]
    fn second_palindrome_test_3() {
        let result = is_palindrome3("aabb ,aa");
        assert_eq!(result, true);
    }

    #[test]
    fn third_palindrome_test_3() {
        let result = is_palindrome3("abc");
        assert_eq!(result, false);
    }

    #[test]
    fn forth_palindrome_test_3() {
        let result = is_palindrome3("a");
        assert_eq!(result, true);
    }

    #[test]
    fn fifth_palindrome_test_3() {
        let result = is_palindrome3("");
        assert_eq!(result, true);
    }

    #[test]
    fn sixth_palindrome_test_3() {
        let result = is_palindrome3("A man, a plan, a canal : Panama");
        assert_eq!(result, true);
    }
}
