use std::collections::HashMap;
use std::io;

fn get_input() -> String {
    let mut buffer = String::new();
    io::stdin().read_line(&mut buffer);
    let buffer = buffer.trim();
    return buffer.to_owned();
}

fn sum(up: &Vec<i32>, down: &Vec<i32>) -> i32 {
    let mut up = up.clone();
    let mut down = down.clone();
    let up: Vec<i32> = up.splice(1..4, []).collect();
    let down: Vec<i32> = down.splice(1..4, []).collect();
    let mut first = up.get(0).unwrap_or(&0) + down.get(0).unwrap_or(&1);
    first = match first {
        0..=9 => first,
        _ => first - 10,
    };

    let mut second = up.get(1).unwrap_or(&1) + down.get(1).unwrap_or(&1);
    second = match second {
        0..=9 => second,
        _ => second - 10,
    };

    let mut third = up.get(2).unwrap_or(&1) + down.get(2).unwrap_or(&1);
    third = match third {
        2..=9 => third,
        _ => third - 12,
    };

    let result = first * 100 + second * 10 + third;
    return result;
}

fn compute(disks: Vec<Vec<i32>>) -> Option<i32> {
    let mut disk_one = disks.get(0)?.clone();
    let mut disk_two = disks.get(1)?.clone();

    for _ in 0..6 {
        for _ in 0..6 {
            if sum(&disk_one, &disk_two) % 6 == 0 {
                return Some(sum(&disk_one, &disk_two));
            };
            disk_two.rotate_left(1);
        }
        disk_one.rotate_right(1);
    }

    return None;
}

fn main() {
    let mut disks = vec![];
    for _ in 0..2 {
        let user_input = get_input();
        let mut disk: Vec<i32> = user_input
            .split(" ")
            .map(|s| s.trim())
            .filter(|s| !s.is_empty())
            .map(|s| s.parse().unwrap())
            .collect();

        disks.push(disk);
    }

    match compute(disks) {
        Some(result) => println!("with this sum {:?} you can go", result),
        None => println!("You can not access"),
    }
}

// test is in progress
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum() {
        let up = vec![1, 8, 9, 7, 2];
        let down = vec![3, 4, 5, 0, 6];
        //assert_eq!(sum(up, down));
    }

    #[test]
    fn test_compute() {
        let result = compute(vec![vec![1, 8, 9, 7, 2], vec![3, 4, 5, 0, 6]]);
        //assert_eq!();
    }
}
