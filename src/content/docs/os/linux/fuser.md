---
title: Linux fuser command
description: Learn how to use the Linux fuser command to identify processes that are using specific files or directories.
---

The Linux fuser command is used to identify processes that are using specific files or directories. By displaying the process IDs (PIDs) of the processes that are accessing the file, it provides valuable information for troubleshooting and managing system resources efficiently. The fuser command can help in situations where you need to know which processes are preventing a file from being unmounted or deleted. It is a powerful tool for system administrators to track and manage processes on a Linux system.
## fuser Syntax:
```bash
fuser [options] [filename]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -k     | Kill the processes using the specified file. |
| -m     | Interpret named files as a mounted filesystem. |
| -M     | Specify a list of filesystem types to ignore. |
| -n     | Restrict the selection of processes using the file to those accessing it in the specified mode. |
| -s     | Silent mode; suppress most error messages. |
| -v     | Verbose mode; detailed information about processes is provided. |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| filename  | The name of the file for which processes are to be listed. | 

:::caution
Exercise caution when using the fuser command, as using the -k option to kill processes can have unintended consequences and lead to data loss or other issues.
:::
## fuser Usage:
### List Process IDs of Open Files
```bash
fuser -v /path/to/file
```
Lists the process IDs of the processes currently accessing the specified file.

### Terminate Processes Using a File
```bash
fuser -k /path/to/file
```
Terminates the processes that are currently using the specified file.

### List Process IDs of Open Sockets
```bash
fuser -v -u /path/to/socket
```
Lists the process IDs of the processes currently accessing the specified socket and the user names associated with those processes.

### Forcefully Unmount a Filesystem
```bash
fuser -km /mnt/usb
```
Forcefully unmounts the filesystem mounted on the specified mount point by killing the processes using it.
:::tip
When using the fuser command in Linux, ensure you have the necessary permissions to view process information and that you correctly identify the file or directory you want to check for processes.
:::

### How do I use fuser in Linux?
To use the fuser command in Linux, execute the following command:
```bash
fuser /path/to/file
```

### What options can I use with fuser in Linux?
You can use various options with the fuser command in Linux, such as:
```bash
fuser -v /path/to/file
```

### How do I show PIDs along with the processes using fuser in Linux?
To display PIDs along with the processes using the fuser command in Linux, use the following command:
```bash
fuser -u /path/to/directory
```

### How can I kill processes using fuser in Linux?
You can send signals to kill processes using the fuser command in Linux by using the following command:
```bash
fuser -k /path/to/file
```

### How do I specify a signal when killing processes with fuser in Linux?
To specify a particular signal when killing processes using the fuser command in Linux, use the following command:
```bash
fuser -k -INT /path/to/directory
```

### How can I search for processes using symbolic links with fuser in Linux?
To include processes using symbolic links when using the fuser command in Linux, execute the following command:
```bash
fuser -s /path/to/file
```

### How do I list processes accessing a specific file system on Linux with fuser?
To list processes accessing a specific file system using the fuser command in Linux, use the following command:
```bash
fuser -m /mount/point
```

## Applications of the fuser command

- Find out which processes are using a specific file
- Terminate processes that are accessing a file
- Identify the users and process IDs using a file
- Troubleshoot file access issues