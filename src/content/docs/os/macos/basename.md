---
title: MacOS basename command
description: Learn how to use the MacOS basename command to manipulate file paths and extract the filename or directory name.
---

The MacOS basename command is a handy tool for working with file paths in the terminal. It allows you to extract the filename or directory name from a given path, making it easier to manipulate and work with files. By using various options with the basename command, you can customize the output to suit your needs. Whether you need to remove a file extension, trim a specific suffix, or simply get the base name of a file path, the basename command has got you covered. This versatile command is a must-have for any MacOS user who frequently works with files and directories in the terminal.
## basename Syntax:
```bash
basename [string] [suffix]
```
## Options:
| Option | Description               |
|--------|---------------------------|
| -a     | Support multiple arguments|

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| string    | The string to process    |
| suffix    | The suffix to remove     |

:::caution
Caution: If no suffix is provided, basename will remove the last component of the path before the last slash.
:::
## basename Usage:
### Extract the file name from a path
```bash
basename /path/to/file.txt
```
Returns just the file name "file.txt" from the provided path.

### Extract the file extension from a file
```bash
basename -s .jpg image.jpg
```
Outputs the file extension "jpg" by specifying the suffix to remove using the -s option.

### Strip the suffix from file names
```bash
basename -s .txt file1.txt file2.txt file3.txt
```
Removes the specified suffix ".txt" from each file name provided.

### Remove the directory from a file path
```bash
basename -a /path/to/file1.txt /path/to/file2.txt
```
Strips the directory path and outputs only the file names "file1.txt" and "file2.txt".
:::tip
When using the `basename` command in MacOS, remember to provide the correct path or string that you want to process as an argument. This command is useful for extracting the filename or directory from a given path.
:::

## Common Questions on basename Usage:

### How do I use basename in MacOS?
To use the basename command in MacOS, execute the following command:
```bash
basename /path/to/file.txt
```

### How can I remove a suffix using basename in MacOS?
To remove a suffix from a file using basename in MacOS, you can use the following command:
```bash
basename /path/to/file.txt .txt
```

### Can I get the directory part of a path with basename in MacOS?
Yes, you can extract the directory part of a path using basename in MacOS by using the following command:
```bash
basename /path/to/directory/file.txt
```

### How do I ignore multiple suffixes using basename in MacOS?
To ignore multiple suffixes when using the basename command in MacOS, you can do so with the following command:
```bash
basename /path/to/file.txt .txt .csv
```

### Can I display only the filename without the directory path using basename in MacOS?
Yes, you can display only the filename without the directory path in MacOS by using the following command:
```bash
basename /path/to/file.txt
```

### How do I handle a path that ends with a slash using basename in MacOS?
When dealing with a path that ends with a slash, you can still extract the basename using the following command:
```bash
basename /path/to/directory/
```

### Is it possible to process multiple files using basename in MacOS?
Yes, you can process multiple files at once using basename in MacOS by providing a list of paths as arguments like in the following example:
```bash
basename /path/to/file1.txt /path/to/file2.txt
```
## Applications of the basename command

- Removing directory path from a file
- Extracting the filename from a path