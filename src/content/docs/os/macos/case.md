---
title: case MacOS Command Guide
description: A comprehensive guide to using the case command in MacOS, including syntax, options, and examples.
---

The case command in MacOS is a powerful tool for performing conditional branching in shell scripts. It allows you to check the value of a variable and execute different commands based on the value. With the case command, you can create more complex and versatile scripts, making it a valuable addition to your scripting toolbox. In this guide, you'll learn the syntax of the case command, how to use it with different options, and explore practical examples to demonstrate its usage in real-world scenarios. Mastering the case command can help you automate tasks, handle different scenarios, and improve the efficiency of your shell scripts on MacOS.
## case Syntax:
```bash
command [option] [parameter]
```
## Options:
| Option      | Description                      |
|-------------|----------------------------------|
| -a          | Lists all entries including ones starting with a dot (.) |
| -l          | Lists in long format              |
| -h          | Prints sizes in a human-readable format                  |
| -t          | Sorts by modification time       |

## Parameters:
| Parameter   | Description                        |
|-------------|------------------------------------|
| directory   | Specifies the directory to list    |
| file        | Specifies the file to display information                  |

:::caution
Exercise caution when using the command with powerful options like '-f' or when manipulating system files. Misuse of such options can lead to data loss or system instability.
:::
## case Command Samples:
### Check the Operating System Version
```bash
case $(uname) in
  "Darwin") echo "MacOS" ;;
  *) echo "Not MacOS" ;;
esac
```

### Check the Day of the Week
```bash
day=$(date +%u)
case $day in
  1) echo "Monday" ;;
  2) echo "Tuesday" ;;
  3) echo "Wednesday" ;;
  4) echo "Thursday" ;;
  5) echo "Friday" ;;
  6) echo "Saturday" ;;
  7) echo "Sunday" ;;
esac
```

### Check the File Type
```bash
file_type=$(file /path/to/file)
case $file_type in
  *"text"*) echo "Text file" ;;
  *"image"*) echo "Image file" ;;
  *"directory"*) echo "Directory" ;;
  *) echo "Unknown file type" ;;
esac
```

### Check if a Number is Even or Odd
```bash
read -p "Enter a number: " num
if (( num % 2 == 0 )); then
  echo "$num is even"
else
  echo "$num is odd"
fi
```

### Check the User's Permission Level
```bash
user=$(whoami)
case $user in
  "root") echo "Superuser" ;;
  "admin") echo "Administrator" ;;
  *) echo "Regular user" ;;
esac
```

### Check the Season Based on the Month
```bash
month=$(date +%m)
case $month in
  12|1|2) echo "Winter" ;;
  3|4|5) echo "Spring" ;;
  6|7|8) echo "Summer" ;;
  9|10|11) echo "Autumn" ;;
  *) echo "Unknown season" ;;
esac
```

### Check the Exit Status of a Command
```bash
ls /non/existent/directory
case $? in
  0) echo "Command executed successfully" ;;
  1) echo "Error: Missing arguments" ;;
  2) echo "Error: File not found" ;;
esac
```
:::tip
When using the case command in MacOS, make sure to specify the appropriate syntax for pattern matching and actions to be taken based on the matched pattern. Additionally, remember that case statements are typically used for more complex conditional branching compared to if-else statements.
:::

### How do I use case in MacOS?
To use the case command in MacOS, execute the following command:
```bash
case $variable in
    pattern1)
        # actions for pattern1
        ;;
    pattern2)
        # actions for pattern2
        ;;
    *)
        # default case
        ;;
esac
```

### How can I match multiple patterns in a case statement in MacOS?
To match multiple patterns in a case statement in MacOS, you can use the vertical bar "|" to separate the patterns within a single parentheses group. Here is an example:
```bash
case $variable in
    pattern1|pattern2)
        # actions for pattern1 or pattern2
        ;;
    pattern3)
        # actions for pattern3
        ;;
    *)
        # default case
        ;;
esac
```

### How can I make my case statement in MacOS case-insensitive?
To make your case statement in MacOS case-insensitive, you can use the "shopt" command to set the "nocasematch" option before executing the case statement. Here is an example:
```bash
shopt -s nocasematch
case $variable in
    pattern1)
        # actions for pattern1
        ;;
    pattern2)
        # actions for pattern2
        ;;
    *)
        # default case
        ;;
esac
```

### How do I perform pattern substitution in a case statement in MacOS?
To perform pattern substitution in a case statement in MacOS, you can utilize parameter expansion within the case statement itself. Here is an example:
```bash
case ${variable/match/replace} in
    pattern1)
        # actions for pattern1
        ;;
    pattern2)
        # actions for pattern2
        ;;
    *)
        # default case
        ;;
esac
```

### How can I use regular expressions in a case statement in MacOS?
To use regular expressions in a case statement in MacOS, you can leverage the "extended regular expression" operator "=~" along with the "if" statement to achieve pattern matching with regex. Here is an example:
```bash
if [[ $variable =~ pattern ]]; then
    # actions if the variable matches the pattern using regex
else
    # actions if the variable does not match the pattern
fi
```
## Applications of the case command

1. Conditional execution in shell scripts
2. Providing a cleaner and more readable alternative to nested if statements
3. Implementing multi-way branching in shell scripts