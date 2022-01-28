#[derive(Debug, std::clone::Clone)]
struct ListNode {
    pub val: usize,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: usize) -> Self {
        Self { val, next: None }
    }
}

fn make_number_from_list(list: Option<Box<ListNode>>) -> usize {
    match list {
        None => 0,
        Some(temp) => {
            let cloned_list = temp.clone();
            let mut result = "".to_owned();
            result = format!("{}{}", result, cloned_list.val);
            let mut iter_cloned_list = cloned_list.next;
            while let Some(iter_cloned_value) = iter_cloned_list {
                result = format!("{}{}", iter_cloned_value.val, result);
                iter_cloned_list = iter_cloned_value.next;
            }

            println!("result number in string mode {} ", result);
            let result: usize = result.parse().unwrap();

            result
        }
    }
}

fn make_list_from_array(list_array: Vec<usize>) -> Option<Box<ListNode>> {
    if list_array.len() <= 0 {
        return None;
    }

    let mut list: Option<Box<ListNode>> = None;
    let mut ref_list = &mut list;

    for item in list_array {
        if let Some(_) = ref_list {
            while let Some(node_value) = ref_list {
                ref_list = &mut node_value.next;
            }
            *ref_list = Some(Box::new(ListNode::new(item)));
        } else {
            *ref_list = Some(Box::new(ListNode::new(item)));
        }
    }

    list
}

fn add_two_list(
    list_one: Option<Box<ListNode>>,
    list_two: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let result = make_number_from_list(list_one) + make_number_from_list(list_two);

    let list_number: Vec<usize> = result
        .to_string()
        .split("")
        .flat_map(|x| x.parse::<usize>())
        .collect();

    make_list_from_array(list_number)
}

fn print_list(list: Box<ListNode>) {
    let mut iter_list = Some(list.clone());

    while let Some(iter_list_value) = iter_list {
        println!("{}", iter_list_value.val);
        iter_list = iter_list_value.next;
    }
}

fn main() {
    match add_two_list(
        make_list_from_array(vec![1, 2, 3]),
        make_list_from_array(vec![2, 3, 4]),
    ) {
        Some(value) => {
            print_list(value);
        }
        None => println!("fucked up"),
    }
}

#[cfg(test)]
mod tests {
    use crate::add_two_list;
    use crate::make_list_from_array;

    #[test]
    fn add_two_list_test() {
        assert_eq!(
            add_two_list(
                make_list_from_array(vec![1, 2, 3]),
                make_list_from_array(vec![2, 3, 4]),
            ),
            make_list_from_array(vec![7, 5, 3])
        );
    }
}
