---
title: exit Linux command
description: Learn how to gracefully terminate a shell session with the exit command. Find out how to exit from a terminal window or a script efficiently.
---

The Linux exit command is used to gracefully terminate a shell session. It allows users to exit from a terminal window or a script efficiently. By typing 'exit' and pressing Enter, the current shell session will be closed, returning the user to the parent shell or logging them out of the system if it's the last shell running. This command is useful for both interactive and scripted sessions, ensuring that all processes are properly closed before ending the session.

## exit Syntax:
```bash
exit [n]
```

## Options:
| Option | Description                 |
|--------|-----------------------------|
| n      | The exit status to return   |

## Parameters:
| Parameter | Description                                                        |
|-----------|--------------------------------------------------------------------|
| n         | Integer value representing the exit status (default is 0)          |

:::caution
The exit command should be used with caution as it immediately closes the current shell session. Make sure to save any important work before using this command.
:::
## exit bash Examples:
### Exit with a Success Code
```bash
exit 0
```
Exits the current shell session with a success status code.

### Exit with an Error Code
```bash
exit 1
```
Exits the current shell session with an error status code.

### Exit after a Specific Command Execution
```bash
ls && exit
```
Executes the "ls" command and then exits the shell session.

### Exit with a Custom Message
```bash
echo "Goodbye!" && exit
```
Prints "Goodbye!" to the terminal before exiting the shell session.

### Exit from a Loop
```bash
for i in {1..5}; do echo $i; done; exit
```
Executes a loop printing numbers 1 to 5, then exits the shell session.

### Exit After a 5-second Delay
```bash
sleep 5 && exit
```
Waits for 5 seconds using the "sleep" command before exiting the current shell session.
:::tip
When using the exit command in Linux, make sure to understand that this command is used to close the current shell or terminal session. Exiting the terminal session will terminate all processes and close the terminal window.
:::

## exit Command Help Center:

### How do I use exit in Linux?
To use the exit command in Linux, execute the following command:
```bash
exit
```

### How can I exit a shell script with a custom exit status?
To exit a shell script with a custom exit status, use the exit command followed by the desired exit status code. For example:
```bash
exit 1
```

### How do I force an immediate exit in Linux terminal?
To force an immediate exit in the Linux terminal without waiting for processes to finish, use the following command:
```bash
exit -f
```

### How can I exit a script if a command fails in Linux?
To exit a script immediately if a command fails, you can use the following syntax in the script:
```bash
set -e
command1
command2
exit $?
```

### How do I exit an SSH session in Linux?
To exit an SSH session in Linux, use the exit command as follows:
```bash
exit
```

### How do I exit a loop in a bash script?
To exit a loop in a bash script, you can use the break command. Here's an example:
```bash
for ((i=1; i<=5; i++))
do
  if [ $i -eq 3 ]
  then
    break
  fi
  echo $i
done
```

### How can I exit a script with a specific message in Linux?
To exit a script with a specific message in Linux, you can use the following command:
```bash
echo "Custom message" && exit
```

### How do I exit a script with an error message in Linux?
To exit a script with an error message in Linux, you can use the following command:
```bash
echo "Error message" >&2 && exit 1
```
## Applications of the exit command

- Terminating a shell session
- Exiting from a script or program
- Returning an exit status to the parent process