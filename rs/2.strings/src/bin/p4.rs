use regex::Regex;

fn main() {
    todo!();
}

fn check_palindrome(text: &str) -> bool {
    let mut palindrome = true;
    if text.len() <= 1 {
        return palindrome;
    }

    let re = Regex::new("[^a-zA-Z]").unwrap();
    let text = re
        .replace_all(text, "".to_owned())
        .to_string()
        .chars()
        .collect::<Vec<char>>();

    let mut left = text.len() / 2;
    let mut right = text.len() / 2;

    if text.len() % 2 == 0 {
        left = left - 1;
    }

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

    return palindrome;
}

fn find_longest_palindrome(text: &str) {
    let mut max = "";
    for i in 0..text.len() {
        let j = i;
        while j < text.len() {
            let substring = &text[i..=j];
            if check_palindrome(substring) && substring.len() > max.len() {
                max = substring;
            }
        }
    }
}

#[cfg(test)]
mod tests {

    #[test]
    fn find_longest_palindrome_test() {
        todo!()
    }
}
