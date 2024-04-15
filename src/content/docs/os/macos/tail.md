---
title: tail MacOS command
description: Learn how to use the tail command in MacOS to display the end of a file. Find syntax, options, and practical examples for efficient file viewing.
---

The tail command in MacOS is used to display the last part of a file. It is a useful tool for monitoring log files in real-time, especially when troubleshooting issues or tracking system activity. With options like -f to follow the output as new lines are added, -n to specify the number of lines to display, and -c to show a certain number of bytes, tail provides flexibility in viewing file content. By mastering the tail command, you can efficiently navigate through large files and extract the information you need.

## tail Syntax:
```bash
tail [options] [file]
```

## tail Options:
| Option       | Description                       |
|--------------|-----------------------------------|
| -n, --lines= | output the last N lines           |
| -c, --bytes= | output the last N bytes           |
| -f, --follow | output data as file grows         |
| -q, --quiet  | never output filename headers     |
| -v, --verbose| always output filename headers    |

:::caution
Ensure to specify a file when using the `tail` command. Incorrect usage may result in unexpected outputs.
:::

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| file      | The file whose end will be displayed by `tail`.  |
## tail Command Usage Examples:
### Display the last 10 lines of a file
```bash
tail file.txt
```
Display the last 10 lines of the file "file.txt".

### Continuously display new lines added to a file
```bash
tail -f logfile.txt
```
Monitor and display new lines added to the "logfile.txt" in real-time.

### Display specific number of lines from the end of a file
```bash
tail -n 20 access.log
```
Display the last 20 lines from the end of the "access.log" file.

### Display lines from the middle of a file to the end
```bash
tail -n +5 data.csv
```
Display all lines starting from line 5 to the end of the "data.csv" file.

### Display the last N bytes of a file
```bash
tail -c 100 myfile.txt
```
Display the last 100 bytes of the file "myfile.txt".
:::tip
When using the tail command in macOS, remember that by default it will output the last 10 lines of a file. You can customize this behavior using different options available with the tail command.
:::

### How do I use tail in MacOS?
To use the tail command in bash, execute the following command:
```bash
tail filename.txt
```

### How to display a specific number of lines from the end of a file in MacOS using tail?
To display a specific number of lines from the end of a file in MacOS using the tail command, use the `-n` option followed by the number of lines you want to display:
```bash
tail -n 20 filename.txt
```

### How to continuously display new lines added to a file in MacOS with tail?
To continuously display new lines added to a file in MacOS using the tail command, use the `-f` option:
```bash
tail -f filename.txt
```

### How to display lines in reverse order in MacOS using tail?
To display lines in reverse order in MacOS using the tail command, use the `-r` option:
```bash
tail -r filename.txt
```

### How to display a specific range of lines from the end of a file in MacOS with tail?
To display a specific range of lines from the end of a file in MacOS using the tail command, use the `-n` option followed by the range in the format `+start,end`:
```bash
tail -n +5,10 filename.txt
```

### How to exclude a specific number of lines from the end of a file in MacOS using tail?
To exclude a specific number of lines from the end of a file in MacOS using the tail command, use the `-n` option with a `+` sign before the number of lines you want to exclude:
```bash
tail -n +5 filename.txt
```

### How to display the last part of multiple files in MacOS using tail?
To display the last part of multiple files in MacOS using the tail command, specify the file names as arguments:
```bash
tail file1.txt file2.txt
```

### How to display the last part of a file and follow new lines in real-time in MacOS with tail?
To display the last part of a file and follow new lines in real-time in MacOS using the tail command, combine the `-f` option with the filename:
```bash
tail -f filename.txt
```

## Applications of the tail command

- Viewing the end of a text file
- Monitoring log files for real-time updates
- Extracting the last few lines of a file
- Receiving updates from continuously growing files
- Tracking changes in files over time