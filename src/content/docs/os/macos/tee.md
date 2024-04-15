---
title: tee MacOS command
description: Learn how to use the tee command in MacOS to read from standard input and write to both standard output and files simultaneously.
---

The tee command in MacOS is a useful tool for reading from standard input and writing to both standard output and files simultaneously. It allows you to capture and store the output of a command while also displaying it in the terminal. This can be helpful when you want to save the output of a command for future reference without losing the real-time display. The tee command takes input from standard input and writes it to standard output as well as one or more files. It can be especially handy when you need to monitor the progress of a command that produces a lot of output. By using tee, you can save the output to a file for later analysis while still being able to see it on the screen in real-time. Overall, the tee command in MacOS is a versatile tool that can come in handy in various situations where you need to capture and save command output.

## tee Syntax:
```bash
tee [-ai] [file]
```
## Options:
| Option | Description         |
|--------|---------------------|
| -a     | Append to the given file. If the file does not exist, create it. |
| -i     | Ignore interrupt signals. |

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| file      | Specify the file to write the output to. If not provided, tee will use standard output. |

:::caution
Ensure proper permissions are set for the specified file. Overwriting existing files without caution can lead to data loss.
:::
## tee bash Examples:
### Append output to a file
```bash
ls | tee -a filelist.txt
```
Sends the output of the "ls" command to both the standard output and appends it to a file named "filelist.txt".

### Redirect both stdout and stderr to a file
```bash
ls -l /nonexistent 2>&1 | tee error.log
```
Executes the "ls" command on a nonexistent directory, redirects both standard output and standard error to a file named "error.log".

### Display output and save to a file
```bash
ps aux | tee processes.txt
```
Shows the running processes using the "ps" command and saves the output to a file named "processes.txt" simultaneously.

### Use tee to filter output
```bash
ls -l | tee >(grep txt)
```
Lists the contents of a directory using the "ls" command and filters the output to only display files with "txt" in their names.

### Redirect output to multiple files
```bash
echo "Hello, world!" | tee file1.txt file2.txt
```
Prints the message "Hello, world!" to the standard output and saves it to both "file1.txt" and "file2.txt".

### Interactively view and save output
```bash
find /usr -name "*.conf" | tee >(less) configuration_files.txt
```
Searches for all files with a ".conf" extension under the "/usr" directory, displays the output interactively using "less", and saves the output to a file named "configuration_files.txt".
:::tip
When using the tee command in MacOS, remember that it allows you to read from standard input and write to both standard output and files, making it a useful tool for capturing and redirecting command output.
:::

### How do I use tee in MacOS?
To use the tee command in MacOS, execute the following command:
```bash
tee file.txt
```

### What is the purpose of tee in MacOS?
The tee command in MacOS reads from standard input and writes to standard output and files at the same time.

### How can I append to a file using tee in MacOS?
To append to a file using tee in MacOS, you can use the -a option:
```bash
echo "New content" | tee -a file.txt
```

### How do I display output on the console and save it to a file in MacOS using tee?
You can display output on the console and save it to a file in MacOS using tee by running:
```bash
ls | tee file.txt
```

### How can I ignore the standard output while using tee in MacOS?
To ignore the standard output while using tee in MacOS, you can redirect it to /dev/null:
```bash
ls | tee file.txt >/dev/null
```

### How do I specify multiple files to write to with tee in MacOS?
You can specify multiple files to write to with tee in MacOS by providing the file names as arguments:
```bash
ls | tee file1.txt file2.txt
```

### Can tee in MacOS overwrite an existing file without prompting?
Yes, tee in MacOS can overwrite an existing file without prompting if you use the -a option to append:
```bash
echo "Content" | tee -a file.txt
```

### How do I use tee to show the output of a command in real-time in MacOS?
To show the output of a command in real-time using tee in MacOS, you can use it with the -a flag:
```bash
tail -f /var/log/system.log | tee -a log.txt
```
## Applications of the tee command

- Redirecting output to a file while still displaying it on the screen
- Logging output in a script
- Creating a copy of the output stream to be used by another command