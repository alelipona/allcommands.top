---
title: Linux break command
description: Learn about the Linux break command and how it can be used to exit a loop in a shell script.
---

The Linux break command is used to exit a loop before its normal termination condition is met. It is commonly used in shell scripts to prematurely end a loop iteration based on certain conditions. By using the break command, you can efficiently control the flow of your script and avoid unnecessary iterations. This can help improve the performance and readability of your code by allowing you to handle exceptional cases without needing to execute all iterations of a loop. The break command is a powerful tool for writing more efficient and flexible shell scripts.

## break Syntax:
```bash
break [n]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| n      | Specifies the number of levels to break out of. Default is 1. |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| None      |                                        |

:::caution
Use caution when using the break command as it can affect the flow control of loops or switch statements in a script or program.
:::
## break Usage:
### Exit a Loop on a Condition
```bash
for i in {1..10}
do
    if [ $i -eq 5 ]
    then
        break
    fi
    echo $i
done
```
Exits the loop when the value of "i" reaches 5.

### Stop Reading Input
```bash
while true
do
    read -p "Enter a name: " name
    if [ "$name" == "exit" ]
    then
        break
    fi
    echo "Hello, $name!"
done
```
Stops reading input when the user types "exit".

### Terminate a Script Execution
```bash
for file in *
do
    echo "Processing file: $file"
    if [ "$file" == "stop.txt" ]
    then
        break
    fi
    # Processing the file contents
done
```
Terminates the script execution when a file named "stop.txt" is encountered.

### Early Exit from a Function
```bash
check_disk_space() {
    df -h
    if [ "$1" -ge 90 ]
    then
        echo "Disk usage is above 90%"
        break
    fi
}
check_disk_space 92
```
Causes an early exit from a function if the disk usage exceeds 90%.
:::tip
When using the break command in a loop in Linux, make sure to carefully consider the conditions under which you want to exit the loop to avoid unintended results.
:::

### How do I use break in Linux?
To use the break command in Linux, execute the following command:
```bash
break
```

### How can I break out of a loop in Linux based on a condition?
To break out of a loop in Linux based on a condition, you can use the break command with an if statement. Here's an example:
```bash
while [ condition ]; do
    if [ another_condition ]; then
        break
    fi
done
```

### Is it possible to use a label with break in Linux?
Yes, you can use a label with break in Linux to exit a specific loop. Here's an example:
```bash
outerloop:
while [ condition ]; do
    innerloop:
    while [ another_condition ]; do
        break outerloop
    done
done
```

### How can I break multiple levels of nested loops in Linux?
To break multiple levels of nested loops in Linux, you can use a label with the break command. Here's an example:
```bash
outerloop:
while [ condition ]; do
    innerloop:
    while [ another_condition ]; do
        break outerloop
    done
done
```

### Can I break out of a loop in a shell script function using break?
Yes, you can break out of a loop in a shell script function using break in Linux. Here's an example:
```bash
my_function() {
    while [ condition ]; do
        if [ another_condition ]; then
            break
        fi
    done
}
```

### How do I break out of a loop in Linux after a certain number of iterations?
To break out of a loop in Linux after a certain number of iterations, you can use a counter variable with the break command. Here's an example:
```bash
counter=0
while [ condition ]; do
    ((counter++))
    if [ $counter -eq 5 ]; then
        break
    fi
done
```

## Applications of the break Command

- To terminate a loop from within a `for`, `while`, or `until` loop
- To exit a `case` block
- To interrupt and exit from a `switch` statement