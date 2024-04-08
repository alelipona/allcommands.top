---
title: tee Linux Command Guide
description: Learn how to use the Linux tee command to read from standard input and write to both standard output and files simultaneously.
---

The Linux tee command is used to read from standard input and write to both standard output and files simultaneously. It allows users to see data on the screen while saving a copy of it to a file. This command is particularly useful when you want to monitor the progress of a command that produces a lot of output or when you want to save the output for later analysis. By default, tee overwrites existing files, but you can use the -a option to append to the existing files instead.
## tee Syntax:
```bash
tee [option] [file(s)]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -a     | Append to the given files     |
| -i     | Ignore interrupt signals      |

## Parameters:
| Parameter    | Description                        |
|--------------|------------------------------------|
| file(s)      | File(s) to output to               |

:::caution
Exercise caution when using the tee command, as it can overwrite files if used incorrectly.
:::
## tee Command Samples:
### Redirect Output to a File
```bash
ls /etc | tee output.txt
```
Redirects the output of the "ls /etc" command to both the standard output and a file named "output.txt".

### Append Output to a File
```bash
ls /var/log | tee -a logs.txt
```
Appends the output of the "ls /var/log" command to both the standard output and a file named "logs.txt".

### Read from a File and Display Output
```bash
tee output.txt < input.txt
```
Reads the contents of "input.txt", displays them on the standard output, and saves them into "output.txt".

### Combine tee with sudo
```bash
sudo ls /root | tee output.txt
```
Uses "sudo" to list the contents of "/root", displays the output on the standard output, and saves it into "output.txt".

### Ignoring Standard Output and Only Saving to a File
```bash
ls /home | tee -a output.txt > /dev/null
```
Lists the contents of "/home", appends the output to "output.txt", and ignores the standard output using "/dev/null".

### Split Output to Multiple Files
```bash
ps aux | tee processes.txt | grep root > root_processes.txt
```
Lists all processes using "ps aux", saves the complete output to "processes.txt", and saves only those lines containing "root" to "root_processes.txt".

### Redirect Standard Error to a File
```bash
ls /directorythatdoesnotexist 2>&1 | tee error_output.txt
```
Attempts to list the contents of a nonexistent directory, combines standard output and error, displays them both, and saves the combined output in "error_output.txt".
:::tip
When using the tee command in Linux, remember that it reads from standard input and writes to both standard output and one or more files simultaneously. This can be helpful for logging output or saving it to a file while still displaying it in the terminal.
:::

## tee FAQ:
### How do I use tee in Linux?
To use the tee command in Linux, execute the following command:
```bash
tee --option <value>
```

### What is the purpose of tee in Linux?
The tee command in Linux is used to read from standard input and write to standard output and files at the same time.

### How can I append output to an existing file using tee in Linux?
To append output to an existing file with tee in Linux, use the -a flag. Here is an example:
```bash
echo "Additional content" | tee -a file.txt
```

### How can I display output in the terminal and save it to a file simultaneously using tee in Linux?
To display output in the terminal and save it to a file at the same time with tee in Linux, use it without any flags. For example:
```bash
ls | tee list_of_files.txt
```

### Is there a way to ignore errors and continue with tee in Linux?
To ignore errors and continue with tee in Linux, you can redirect stderr to stdout. Here is an example command:
```bash
command 2>&1 | tee output.txt
```

### Can tee be used with sudo in Linux?
Yes, tee can be used with sudo in Linux to save output to a file that requires elevated privileges. Here is an example:
```bash
echo "Content that requires sudo" | sudo tee file.txt
```
## Applications of the tee command

- Capture and display output in the terminal.
- Save output to a file while also displaying it in the terminal.
- Combine the standard output stream with a file.