---
title: Linux select command
description: Learn how to use the Linux select command to create simple menus in shell scripts.
---

The Linux select command is a built-in feature of shell scripts that allows users to create simple menus for selecting options. It provides an interactive way to present choices to users, making it easier to navigate through a script. With the select command, users can create custom menus with a list of options displayed on the screen. By choosing a specific option, users can trigger a specific action or command within the script. The select command simplifies the user experience and enhances the interactivity of shell scripts.
## select Syntax:
```bash
select [options] [parameters]
```
## Options:
| Option            | Description                            |
|-------------------|----------------------------------------|
| -a, --all         | Select all fields                      |
| -c, --characters  | Specify characters to select            |
| -t, --lines       | Select by line numbers                  |
| -f, --fields      | Select by field number                 |

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| file      | File to select from                |
| pattern   | Pattern to match in the selection  |

:::caution
Be cautious when using the `select` command as it operates similarly to `cut` and may alter the output based on the options and parameters provided. Make sure to properly specify the desired selection to avoid unintended results.
:::
## select Usage:
### Monitor Multiple File Descriptors
```bash
select file in /var/log/syslog /var/log/messages /var/log/auth.log
do
    tail -f $file
done
```
This command allows you to monitor multiple file descriptors interactively by using the select loop.

### Select from a List of Options
```bash
select option in "Option 1" "Option 2" "Option 3" "Exit"
do
    case $option in
        "Option 1")
            echo "Selected Option 1"
            ;;
        "Option 2")
            echo "Selected Option 2"
            ;;
        "Option 3")
            echo "Selected Option 3"
            ;;
        "Exit")
            break
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done
```
This example demonstrates how to create a menu system using the select command to choose from a list of options.

### Monitor System Processes Using Select
```bash
select process in "httpd" "sshd" "mysql" "quit"
do
    case $process in
        "httpd")
            ps aux | grep httpd
            ;;
        "sshd")
            ps aux | grep sshd
            ;;
        "mysql")
            ps aux | grep mysql
            ;;
        "quit")
            break
            ;;
        *)
            echo "Invalid process"
            ;;
    esac
done
```
With this command, you can monitor system processes by selecting a specific process to display detailed information using the ps command and grep.

### Select from a List of Options and Execute Commands
```bash
select option in "Create file" "Delete file" "Exit"
do
    case $option in
        "Create file")
            read -p "Enter file name: " filename
            touch $filename
            echo "File created: $filename"
            ;;
        "Delete file")
            read -p "Enter file name: " filename
            rm $filename
            echo "File deleted: $filename"
            ;;
        "Exit")
            break
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done
```
In this example, the select command is used to prompt the user to choose between creating a file, deleting a file, or exiting the script, and performs the respective actions based on the selection made.
:::tip
When using the select command in Linux, make sure to provide a list of options for the user to choose from. The select command is commonly used in shell scripts to create interactive menus for user selection.
:::

### How do I use select in Linux?
To use the select command in Linux, execute the following command:
```bash
select option in option1 option2 option3
do
    case $option in
        option1)
            # Commands to execute for option1
            ;;
        option2)
            # Commands to execute for option2
            ;;
        option3)
            # Commands to execute for option3
            ;;
        *)
            echo "Invalid option selected"
            ;;
    esac
done
```

### What is the purpose of the select command in Linux?
The select command in Linux is used to create a simple menu system for interactive shell scripts. It allows the user to choose from a list of options presented by the script.

### How do I handle user input with the select command in Linux?
To handle user input with the select command in Linux, you can use a case statement to execute different commands based on the option selected by the user.

### Can I customize the prompt text displayed by the select command in Linux?
Yes, you can customize the prompt text displayed by the select command in Linux by providing a different message before presenting the list of options. 

### How can I add a default option in the select menu in Linux?
To add a default or exit option in the select menu in Linux, you can include it as one of the choices presented to the user, allowing them to exit the menu if desired.

### Is it possible to use select within a function in a shell script?
Yes, you can use the select command within a function in a shell script to create interactive menus that are part of a larger script or program.

### How can I loop the select menu in a Linux shell script until a specific condition is met?
You can loop the select menu in a Linux shell script until a specific condition is met by enclosing the select block within a while loop that checks for the desired condition before exiting the loop.


## Applications of the select command

1. Creating a simple menu for user selection in a shell script.
2. Automating the selection process for a predefined list of options.
3. Handling user input validation and error prevention in interactive scripts.