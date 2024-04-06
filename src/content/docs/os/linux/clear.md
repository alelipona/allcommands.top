---
title: clear Linux command
description: Learn how to clear the terminal screen on Linux using the clear command.
---

The clear command in Linux allows users to clear the terminal screen, providing a clean slate for new commands and outputs. By typing "clear" into the terminal and hitting enter, all previous commands and outputs will be removed, leaving a blank screen ready for new interactions. This command is particularly helpful when the terminal screen becomes cluttered, making it difficult to see previous commands or outputs. It provides a quick and efficient way to maintain a tidy and organized working environment within the terminal on Linux systems.

## clear Syntax:
```bash
clear [option]
```
## Options:
| Option  | Description             |
|---------|-------------------------|
| -V      | Print version information |
| -l      | Clear only the current line |
| -q      | Do not ring the terminal bell |

## Parameters:
There are no parameters for the clear command.

:::caution
Avoid using the clear command excessively, especially with the -q option, as it may result in a less visible terminal screen. Only use it when necessary to maintain clarity in the terminal window.
:::
## clear Command Examples:
### Clear the terminal screen
```bash
clear
```
This command clears the output on the terminal screen.

### Add a clear command to the .bashrc file
```bash
echo "clear" >> ~/.bashrc
```
Appends the clear command to the .bashrc file to clear the screen each time a new terminal window is opened.

### Clear the terminal screen with a keyboard shortcut
```bash
Ctrl + L
```
Pressing Ctrl + L will clear the terminal screen without using the clear command.

### Clear the terminal screen and show a message
```bash
clear ; echo "Welcome to the Linux terminal"
```
Executes the clear command and then displays the message "Welcome to the Linux terminal" on a cleared screen.

### Use clear command after a long output
```bash
ls -l ; clear
```
Lists the files in the current directory in long format and then clears the terminal screen.

### Clear the terminal scrollback buffer
```bash
clear ; printf '\033[3J'
```
Clears both the screen and the scrollback buffer in the terminal.
:::tip
When using the clear command in Linux, remember that it does not have any additional options or arguments. It simply clears the terminal screen. 
:::

## clear Command Help Center:

### How do I use clear in Linux?
To use the clear command in Linux, execute the following command:
```bash
clear
```

### Can I use clear with options in Linux?
No, the clear command in Linux does not have any options or arguments.

### How does clear differ from other commands in Linux?
Unlike many other commands in Linux, clear does not have any options or additional arguments. It is used solely for clearing the terminal screen.

### Is there a shortcut to clear the screen in Linux?
Yes, you can use the keyboard shortcut **Ctrl+L** to clear the terminal screen in Linux.

### Can I clear the terminal screen using a different command in Linux?
Yes, you can also use the following command to clear the terminal screen in Linux:
```bash
printf '\33c\e[3J'
```

### Is the clear command available on all Linux distributions?
Yes, the clear command is a standard command found on almost all Linux distributions.

### Can clear be used to clear the terminal history in Linux?
No, the clear command in Linux only clears the current terminal screen and does not affect the command history.

### Does using clear remove any previously executed commands in Linux?
No, using the clear command does not remove or affect any previously executed commands in Linux.
## Applications of the clear command

- Clear the screen
- Improve readability
- Reset terminal display