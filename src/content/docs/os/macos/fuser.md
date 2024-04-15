---
title: fuser MacOS command
description: Discover how to use the fuser command on MacOS to identify processes that are currently accessing a file or directory. Learn the syntax, options, and practical examples.
---

The fuser command on MacOS is a useful tool for identifying processes that are currently accessing a file or directory. By using this command, you can determine which processes may be preventing you from modifying or deleting a specific file. The fuser command displays the process IDs (PIDs) of the processes that are accessing the file or directory, allowing you to take appropriate action. Additionally, you can use various options with the fuser command to customize its behavior and get more detailed information. This can help you troubleshoot issues related to file access and resolve conflicts efficiently. Overall, the fuser command is a handy utility for managing processes and files on a MacOS system.

## fuser Syntax:
```bash
fuser [options] [file]
```

## fuser Options:
| Option | Description                     |
|--------|---------------------------------|
| -k     | Kill processes accessing the file|
| -m     |  Select which file system the process accesses the file on      |
| -M     |  Specify file system to report on when multiple file systems are in use      |
| -v     |  Verbose output      |
| -x     | Show processes using X11      |

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| file      |  Specifies the file to check for processes accessing it      |

:::caution
Exercise caution when using the fuser command as it can potentially terminate processes that are accessing the specified file if the -k option is used.
:::
## fuser Command Usage Examples:
### Check which process is using a specific file
```bash
fuser ~/Documents/example.txt
```
This command will display the process ID of the process that is currently using the file "example.txt" located in the ~/Documents directory.

### Kill a process using a specific port
```bash
fuser -k 8080/tcp
```
The fuser command with the -k option followed by the port number and the protocol (tcp) will kill the process using port 8080.

### List processes using a specific file system
```bash
fuser -v /Volumes/ExternalDrive
```
Using the fuser command with the -v option followed by the directory path will display a more detailed list of processes using the specified file system.

### Display processes using a specific device
```bash
fuser -cu /dev/disk0
```
By using the -c and -u options with the fuser command followed by the device file, it will display the user and the command associated with processes using the specified device.

### Show processes holding a specific directory
```bash
fuser -m /var/www/html
```
The fuser command with the -m option followed by the directory path will show the processes that are keeping a lock on the "html" directory within /var/www.
:::tip
When using the fuser command in MacOS, remember to check the available options and their descriptions in the command's manual page (`man fuser`) to effectively manage processes and files.
:::

### How do I use fuser in MacOS?
To use the fuser command in bash, execute the following command:
```bash
fuser -k 8000/tcp
```

### How can I list processes using a specific file with fuser in MacOS?
To list processes using a specific file with fuser in MacOS, run the following command:
```bash
fuser /path/to/file
```

### How to forcefully kill processes using fuser in MacOS?
To forcefully kill processes using fuser in MacOS, use the following command:
```bash
fuser -k -TERM 8000/tcp
```

### How do I show detailed information about processes using fuser in MacOS?
To show detailed information about processes using fuser in MacOS, execute the following command:
```bash
fuser -v /path/to/file
```

### Can I use fuser to display PIDs of processes using a file in MacOS?
Yes, you can use fuser to display PIDs of processes using a file in MacOS by running the following command:
```bash
fuser -uf /path/to/file
```

### How to run fuser with a specific interval in MacOS?
To run fuser with a specific interval in MacOS, you can use the watch command along with fuser. For example:
```bash
watch -n 1 fuser -u /path/to/file
```

### How to suppress output of fuser command in MacOS?
To suppress the output of the fuser command in MacOS, you can use the `-s` option. Here is an example:
```bash
fuser -s /path/to/file
```
## Applications of the fuser command

- Finding which processes are using a specific file
- Terminating processes that are using a file
- Determining if a file is currently being accessed or used
- Checking for any locks on a file