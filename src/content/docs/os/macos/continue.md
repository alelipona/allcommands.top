---
title: continue MacOS Command Guide
description: Learn how to use the continue command in MacOS to resume the next iteration of a loop in a script or program.
---

The `continue` command in MacOS allows you to skip the current iteration of a loop and proceed with the next one. This can be useful for avoiding certain actions or conditions within a loop without exiting the loop entirely. By using `continue`, you can efficiently manage the flow of your script or program and customize the execution based on specific criteria.

## continue Syntax:
```bash
continue [n]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| n      | Specify the number of levels to continue executing                |

## Parameters:
| Parameter | Description                      |
|-----------|----------------------------------|
| n         | Number of levels to continue executing                       |

:::caution
Exercise caution when using the continue command as it can lead to unexpected results if not used correctly.
:::
## continue Command Samples:
### Continue a Loop Iteration
```bash
for i in {1..5}; do
    if [ $i -eq 3 ]; then
        continue
    fi
    echo "Iteration $i"
done
```
Skips the iteration where the value of $i is equal to 3 in a bash for loop.

### Skip Specific Conditions in a Loop
```bash
for file in *.txt; do
    if [ ! -r "$file" ]; then
        continue
    fi
    echo "Processing $file"
done
```
Skips processing files that are not readable in a bash loop iterating over text files.

### Ignoring Specific Files in a Loop
```bash
for file in *; do
    if [[ "$file" == *".log" ]]; then
        continue
    fi
    echo "Processing $file"
done
```
Skips processing files with a ".log" extension in a loop iterating over all files in a directory.

### Retrieve User Input With Specific Conditions
```bash
while true; do
    read -p "Enter a number between 1 and 10: " num
    if [ $num -lt 1 ] || [ $num -gt 10 ]; then
        continue
    fi
    echo "Valid number entered: $num"
    break
done
```
Continues prompting the user for input until a number between 1 and 10 is provided.

### Simple Password Validation
```bash
while true; do
    read -s -p "Enter your password: " password
    if [ ${#password} -lt 8 ]; then
        echo "Password must be at least 8 characters long."
        continue
    fi
    echo "Thank you! Password accepted."
    break
done
```
Prompts the user for a password, requiring it to be at least 8 characters long.

### Filtering and Processing Array Elements
```bash
colors=("red" "green" "blue" "yellow")
for color in "${colors[@]}"; do
    if [[ "$color" == "blue" ]]; then
        continue
    fi
    echo "Color: $color"
done
```
Outputs all colors in the array except for the color "blue".

### Skip Incorrect User Input
```bash
while true; do
    read -p "Enter your username: " username
    if [ "$username" != "admin" ]; then
        echo "Incorrect username. Try again."
        continue
    fi
    echo "Welcome, $username!"
    break
done
```
Continues asking for the username until the correct username "admin" is provided.
:::tip
When using the continue command in MacOS, make sure to understand that it is typically used within loop structures like for, while, or until loops in bash scripts to skip the remaining part of the loop and start the next iteration. 
:::

## continue FAQ:
### How do I use continue in MacOS?
To use the continue command in MacOS, execute the following command:
```bash
continue
```

### What is the purpose of the continue command in MacOS?
The continue command in MacOS is used to skip the remaining commands in a loop and move to the next iteration of the loop.

### Can I include options with the continue command in MacOS?
No, the continue command in MacOS does not support any options or arguments. It is used as a standalone command within loop structures.

### How can I combine the continue command with a conditional statement in MacOS?
You can use the continue command within an if statement to conditionally skip the remaining part of the loop based on a specific condition. See the example below:
```bash
for i in {1..5}
do
    if [ $i -eq 3 ]
    then
        continue
    fi
    echo $i
done
```

### Is the continue command exclusive to MacOS?
No, the continue command is a standard feature in most Unix-like operating systems, including MacOS.

### Can I use the continue command outside of a loop in MacOS?
No, the continue command is specifically designed to be used within loop structures and will result in an error if used outside of a loop in MacOS.
## Applications of the continue command

- To resume the execution of a loop in a script
- To skip the remaining code in a loop iteration and move on to the next iteration