---
title: rename command in Linux
description: Learn how to efficiently rename multiple files in Linux using the rename command. 
---

The Linux rename command is a powerful tool that allows users to efficiently rename multiple files at once by specifying a pattern to match and a pattern to replace it with. This command is particularly useful for batch renaming files in a directory quickly and easily. By utilizing regular expressions, users can customize the renaming process to suit their specific needs, saving time and effort.
## rename Syntax:
```bash
rename [options] perlexpr files
```
## Linux rename Options:
| Option | Description                               |
|--------|-------------------------------------------|
| -v     | Verbose mode - print names of files after they are renamed. |
| -n     | No action - show what files would have been renamed. |
| -f     | Force - remove existing files without prompting. |
| -e     | Expression - specify Perl expression to act on filenames. |

## rename Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| perlexpr  | Perl expression to match and modify filenames. |
| files     | List of files to rename. |

:::caution
Exercise caution when using the rename command, as it can permanently rename multiple files at once. Ensure that the perlexpr provided is accurate to avoid unintended renaming of files.
:::

## How to use rename command:
### Rename files with a specific file extension
```bash
rename 's/\.txt$/\.md/' *.txt
```
This command renames all files with a .txt extension to have a .md extension.

### Rename files with a specific prefix
```bash
rename 's/^file/file_/' file*
```
This command adds a prefix "file_" to all files that start with "file".

### Rename files with a specific suffix
```bash
rename 's/_old$/_new/' *_old
```
This command replaces the suffix "_old" with "_new" for all files ending in "_old".

### Rename files using regular expressions
```bash
rename 's/(\d{4})-(\d{2})-(\d{2})/$3-$2-$1/' *.txt
```
This command reorders dates in the format "yyyy-mm-dd" to "dd-mm-yyyy" for all .txt files.

### Renaming files by changing case
```bash
rename 'y/A-Z/a-z/' *
```
This command changes all file names to lowercase.

### Rename files by replacing spaces with underscores
```bash
rename 's/ /_/g' *
```
This command replaces all spaces in file names with underscores.

### Rename files by appending a timestamp
```bash
rename 's/$/_20220630/' *
```
This command appends "_20220630" to the end of every file name.

### Rename files by removing a specific string
```bash
rename 's/\(copy\)//' *
```
This command removes the string "(copy)" from all file names.
:::tip
When using the `rename` command in Linux, it's essential to understand the syntax and options to ensure the desired renaming is achieved. Always test the command on a small set of files before running it on a large number of files to avoid unintentional renaming or data loss.
:::

### How do I use rename in Linux?
To use the rename command in Linux, execute the following command:
```bash
rename --option <value>
```

### How can I rename multiple files in Linux using the rename command?
To rename multiple files in Linux with the `rename` command, you can use patterns and substitution. For example, to replace all spaces with underscores in file names, you can run:
```bash
rename 's/ /_/g' *
```

### How can I change the file extension for multiple files with the rename command?
To change the file extension for multiple files in Linux using the `rename` command, you can use pattern matching and substitution. For example, to change all .txt files to .md, you can run:
```bash
rename 's/\.txt$/\.md/' *.txt
```

### How do I force rename in Linux using the rename command?
To force rename files in Linux with the `rename` command, you can use the `-f` or `--force` option. This option overrides existing files with the same name. For example, to forcefully rename files, you can run:
```bash
rename -f 's/old/new/' *
```

### How can I preview the file name changes before renaming with the rename command in Linux?
To preview the changes that will occur before actually renaming files using the `rename` command in Linux, you can use the `-n` or `--no-act` option. This option shows a preview of the changes without renaming the files. For example, to preview changes, you can run:
```bash
rename -n 's/pattern/replacement/' *
```

### How do I recursively rename files and directories in Linux using the rename command?
To recursively rename files and directories in Linux with the `rename` command, you can use the `-R` or `--recursive` option. This option allows renaming files within subdirectories as well. For example, to rename recursively, you can run:
```bash
rename -R 's/old/new/' *
```

### How can I rename files based on a specific pattern or regex with the rename command in Linux?
To rename files based on a specific pattern or regex in Linux using the `rename` command, you can use regular expressions. For example, to add a prefix to all file names, you can run:
```bash
rename 's/^/prefix_/' *
```

### How do I revert a renaming operation in Linux using the rename command?
To revert a renaming operation in Linux with the `rename` command, you need to consider the original file names. If you have a list of the original file names, you can rename the files back to the original names. Always double-check before executing any renaming operations to avoid irreversible changes.
```bash
rename 's/new/old/' *
```

## Applications of the rename command

- Bulk renaming files
- Changing file extensions
- Removing or replacing certain characters in file names
- Padding file names with zeros or other characters
- Converting uppercase to lowercase (and vice versa) in file names