fn main() {
    println!("make number test {:?}", makeNumber(vec![1, 2, 3, 4]));
}

fn make_number(numbers: Vec<i64>) -> i64 {
    let mut result = 0;
    for (current_index, number) in numbers.iter().enumerate() {
        result += number * i64::pow(10, current_index.try_into().unwrap());
    }

    result
}

struct ListNode {
    value: i32,
    next: Box<Option<ListNode>>,
}

fn generate_number_from_list(list: ListNode) {}

fn add_two_number(l1: Option<ListNode>, l2: Option<ListNode>) -> Result<i64, String> {
    let result_one = vec![];
    let result_two = vec![];

    Ok(3232)
}

fn check_list(l1: Option<ListNode>) -> Option<String> {
    if l1.is_none() {
        return Some(String::from("the list is not valid"));
    }

    None
}
