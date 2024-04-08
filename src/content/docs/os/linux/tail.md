---
title: Linux tail command
description: Learn how to use the powerful Linux tail command to display the last part of files or streams. Perfect for monitoring log files and tracking real-time changes.
---

The Linux tail command is a useful tool for viewing the end of files or streams in real-time. It is commonly used to monitor log files and track changes as they occur. With tail, you can easily follow the newest entries in a file without having to open the entire document. This command is essential for system administrators and developers who need to stay updated on the latest information within a file. By using various options and flags, you can customize the output to suit your specific needs, making tail a versatile and powerful tool in the Linux environment.

## tail Syntax:
```bash
tail [option] [file]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -n NUM | Output the last NUM lines     |
| -f     | Output appended data as file grows |
| -q     | Never output headers giving file names |
| -v     | Always output headers giving file names |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| file      | The file to display        |

:::caution
Exercise caution when using the tail command with the -f option as it continuously monitors the file for new data and might lead to high resource consumption.
:::
## tail Usage:
### Display the last 10 lines of a file
```bash
tail filename.txt
```
This command will display the last 10 lines of the file named "filename.txt".

### Continuously display new lines added to a file
```bash
tail -f log.txt
```
Using the -f option with tail allows for continuous monitoring and display of new lines added to the file "log.txt".

### Display the last 20 lines of a file
```bash
tail -n 20 example.log
```
By specifying the -n option followed by the number of lines (in this case 20), tail will display the last 20 lines of the file named "example.log".

### Display and update the last 5 lines of a file every 2 seconds
```bash
tail -n 5 -f -s 2 data.txt
```
This command will continuously display and update the last 5 lines of the file "data.txt" every 2 seconds.
:::tip
When using the tail command in Linux, remember that the default behavior is to display the last 10 lines of a file. However, you can customize this behavior using various options available with the tail command.
:::

### How do I use tail in Linux?
To use the tail command in Linux, execute the following command:
```bash
tail file.txt
```

### What option can I use to show a specific number of lines from the end of a file?
You can use the `-n` or `--lines` option followed by the number of lines to display. For example:
```bash
tail -n 15 file.txt
```

### How can I continuously monitor a file for new lines being added?
To continuously monitor a file for new lines, use the `-f` or `--follow` option. This will keep the file open and show any new lines added in real-time. For example:
```bash
tail -f file.txt
```

### How can I output lines from the beginning of a file instead of the end?
You can use the `-r` or `--rev` option to display lines from the beginning of a file, starting with the specified number of lines. For example:
```bash
tail -r -n 5 file.txt
```

### How do I display lines from the end of a file along with line numbers?
You can use the `-n` or `--lines` option along with the `-n` option to display line numbers along with the lines from the end of the file. For example:
```bash
tail -n 10 -n file.txt
```

### How can I ignore a specific number of lines from the end of a file?
You can use the `+` symbol followed by the number of lines to ignore from the end of a file. For example, to ignore the last 3 lines:
```bash
tail +4 file.txt
```

### How do I display the last part of multiple files at once?
To display the last part of multiple files concurrently, you can specify the files as arguments after the options. For example:
```bash
tail -n 5 file1.txt file2.txt file3.txt
```

## Applications of the tail command

- Displaying the last n lines of a file
- Following a file in real-time as it grows
- Viewing the end of log files
- Monitoring log files for changes
- Extracting the last few lines of a file