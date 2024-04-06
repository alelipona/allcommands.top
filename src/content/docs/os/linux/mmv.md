---
title: What is mmv Linux command?
description: Rename multiple files with ease using the Linux mmv command.
---

The mmv command in Linux allows users to move, copy, append and rename multiple files in bulk with a single command, making file management more efficient.
## mmv Syntax:
```bash
mmv [option] [parameters]
```

## mmv Options:
| Option | Description                |
|--------|----------------------------|
| -h     | Display help information    |
| -n     | Do not perform actions, only show what would be done    |
| -v     | Verbose mode, show detailed information about actions    |

:::caution
It is recommended to use caution when using the mmv command, as it directly renames or moves files and directories without asking for confirmation.
:::

## Parameters:
| Parameter  | Description                             |
|------------|-----------------------------------------|
| source     | The file or pattern of files to rename/move. |
| target     | The target name or pattern to rename/move to. |
## mmv Command Usage Examples:
### Rename Files with a Prefix
```bash
mmv "*.txt" "prefix_#1"
```
Adds a prefix "prefix_" to all files with a .txt extension.

### Rename Files by Changing File Extension
```bash
mmv "*.jpg" "#1.png"
```
Changes the file extension of all .jpg files to .png.

### Move Files to a Different Directory
```bash
mmv "source_dir/*.txt" "destination_dir/#1.txt"
```
Moves all .txt files from source_dir to destination_dir.

### Batch Rename Files with Sequential Numbers
```bash
mmv "*" "#1_part_#2"
```
Renames all files in the directory with a sequential number and a predefined label.

### Perform a Dry Run before Renaming Files
```bash
mmv -n "*.jpeg" "#1.jpg"
```
Performs a dry run without actually renaming any .jpeg files to .jpg.
:::tip
When using the mmv command in Linux, make sure to double-check the source and destination paths to avoid unintended file movements or overwrites.
:::

### How do I use mmv in Linux?
To use the mmv command in bash, execute the following command:
```bash
mmv -r 'file*.txt' 'newfile#1.txt'
```

### What is the purpose of the mmv command in Linux?
The mmv command in Linux is used to move, copy, append, or link multiple files in batch according to pattern matching rules.

### How do I move multiple files using mmv in Linux?
To move multiple files with mmv, use the following command:
```bash
mmv '*.jpg' 'images/#1.jpg'
```

### Can I copy files with mmv in Linux?
Yes, you can copy files using mmv in Linux. To copy files, you can use the following command:
```bash
mmv -C '*.pdf' 'backup/#1.pdf'
```

### How can I rename files with mmv in Linux?
To rename files using mmv in Linux, you can use the following command:
```bash
mmv '*.old' '#1.new'
```

### Can I append a prefix to multiple filenames using mmv in Linux?
Yes, you can append a prefix to multiple filenames with mmv in Linux. Use the following command:
```bash
mmv '*.txt' 'prefix_#1.txt'
```

### How do I use wildcard characters with mmv in Linux?
To use wildcard characters with mmv in Linux, you can specify patterns to match multiple files. For example:
```bash
mmv 'file_?.txt' 'newfile_#1.txt'
```

### Is it possible to link files with mmv in Linux?
Yes, you can create symbolic links with mmv in Linux. To do this, you can use the following command:
```bash
mmv -L '*.log' 'logs/#1.log'
```

## Applications of the mmv command

- Renaming multiple files simultaneously
- Moving multiple files to a different directory
- Copying multiple files to another location
- Mass file renaming based on patterns and rules