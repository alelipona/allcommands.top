---
title: Linux basename command
description: Learn how to use the Linux basename command to strip directory and suffix from filenames, with examples and tips.
---

The Linux basename command is used to strip directory and suffix from filenames. It is a handy tool for manipulating file paths and extracting specific parts of a file name. By using this command, you can easily isolate the base name of a file, which can be useful for various scripting and automation tasks. The basename command can be customized to remove a specified suffix or only display a specific part of the file name. This command is particularly helpful when working with large numbers of files or when needing to process file names in a consistent manner. Familiarizing yourself with the basename command can streamline your workflow and make file manipulation tasks more efficient.
## basename Syntax:
```bash
basename [option] [parameter]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -a     | Support multiple arguments   |
| -s     | Remove the suffix STRING     |
| -z     | Separate output by NULL byte |
| --      | Treat all further arguments as file names (even if they start with '-') |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| string    | The string from which to extract base name  |
| path      | The path for which to extract the base name | 

:::caution
Caution: Be careful when using the `basename` command with the `-s` option, as it modifies the output by removing a specific suffix from the parameter. Ensure that the suffix specified is correct to avoid unintended results.
:::
## basename Usage:
### Extract the file name from a path
```bash
basename /home/user/Documents/example.txt
```
This command will output "example.txt".

### Strip file extension from a file name
```bash
basename /folder/document.pdf .pdf
```
The output will be "document".

### Get only the directory name from a path
```bash
basename /home/user/Documents/
```
Will return "Documents".

### Extract the last element from a path
```bash
basename /home/user/Documents/example/file.txt
```
The result will be "file.txt".
:::tip
When using the basename command in Linux, remember that it is used to strip directory and suffix from filenames. Make sure to understand the options and arguments that can be used with the basename command to effectively manipulate filenames as needed.
:::

### How do I use basename in Linux?
To use the basename command in Linux, execute the following command:
```bash
basename /path/to/file.txt
```

### How can I get the filename without its full path using basename?
To extract just the filename without the directory path, you can use the basename command with the file path as shown below:
```bash
basename /home/user/documents/report.txt
```

### How do I remove the file extension using basename in Linux?
To remove the file extension from a filename, you can use the basename command along with the appropriate options. Here's an example:
```bash
basename -s .txt document.txt
```

### How can I remove multiple file extensions using basename?
You can remove multiple file extensions from a filename using the basename command with the -a option. Here's an example:
```bash
basename -a -s .txt -s .bak backup_file.txt
```

### How can I remove a suffix from a filename using basename?
To remove a specific suffix from a filename, you can use the basename command with the -s option followed by the suffix to be removed. Here's an example:
```bash
basename -s .txt document.txt
```

### How do I use basename to extract the directory path of a file?
If you need to extract the directory path of a file using basename, you can do so by providing the full file path. Here's an example:
```bash
basename /home/user/documents/report.txt
```

### How can I handle filenames with spaces when using basename in Linux?
When working with filenames that contain spaces, make sure to enclose the file path in quotes to avoid any issues. Here's an example:
```bash
basename "/home/user/my documents/report.txt"
```

## Applications of the basename Command

1. Stripping directory and suffix from filenames
2. Parsing filenames in shell scripts
3. Manipulating file paths in scripts
4. Extracting a specific part of a file path