---
title: What is sed Linux command?
description: The Linux sed command, stream editor, is a powerful tool for text manipulation. It can perform search, find and replace, insert, and delete operations on text files efficiently.
---

The sed command in Linux is a versatile stream editor used for text manipulation tasks. It can search, find and replace, insert, and delete text in files quickly and efficiently. Sed is a valuable tool for automating tasks and editing text in scripts and command-line operations.

## sed Syntax:
```bash
sed [option] [script] [filename]
```
## sed Options:
| Option | Description                       |
|--------|-----------------------------------|
| -e     | Add the script to the commands to be executed.|
| -i     | Edit files in place (make changes directly in the file).|
| -n     | Suppress automatic printing of pattern space.|
| -r     | Use extended regular expressions in the script.|

:::caution
Use sed command carefully as it can make changes directly in the files being edited.
:::

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| script    | The script to be executed on each line of the input file.|
| filename  | The file to be processed by the sed command.       |
## sed Command Usage Examples:

### Replace a Specific Word in a File
```bash
sed 's/original_word/replacement_word/g' file.txt
```
This command replaces every occurrence of "original_word" with "replacement_word" in the file "file.txt".

### Delete Empty Lines in a File
```bash
sed '/^$/d' file.txt
```
This command removes all empty lines from the file "file.txt".

### Substitute Text Using a Regular Expression
```bash
sed 's/[0-9][0-9]$/XY/' file.txt
```
This command replaces the last two digits of each line in the file "file.txt" with "XY".

### Print Lines Between Two Patterns
```bash
sed -n '/start_pattern/,/end_pattern/p' file.txt
```
This command prints all lines between "start_pattern" and "end_pattern" from the file "file.txt".

### Append Text at the End of Each Line
```bash
sed 's/$/ - added text/' file.txt
```
This command adds " - added text" at the end of each line in the file "file.txt".
:::tip
When using the sed command in Linux, make sure to familiarize yourself with its various options and syntax to manipulate text files efficiently. It is a powerful tool for searching, replacing, and editing text within files using regular expressions.
:::

### How do I perform a basic search and replace operation with sed in Linux?
To perform a basic search and replace operation using sed in Linux, you can use the following command:
```bash
sed 's/search_pattern/replace_pattern/' input_file
```

### How do I delete specific lines from a file using sed in Linux?
To delete specific lines from a file using sed in Linux, you can use the following command:
```bash
sed '/pattern_to_delete/d' input_file
```

### How do I append a line after a specific pattern in a file using sed in Linux?
To append a line after a specific pattern in a file using sed in Linux, you can use the following command:
```bash
sed '/pattern_to_match/a\new_line_to_append' input_file
```

### How do I replace text in a specific line using sed in Linux?
To replace text in a specific line using sed in Linux, you can use the following command:
```bash
sed 'line_number s/search_pattern/replace_pattern/' input_file
```

### How do I perform a case-insensitive search and replace operation with sed in Linux?
To perform a case-insensitive search and replace operation using sed in Linux, you can use the following command:
```bash
sed 's/search_pattern/replace_pattern/i' input_file
```

### How do I save the changes made by sed directly to the original file in Linux?
To save the changes made by sed directly to the original file in Linux, you can use the following command:
```bash
sed -i 's/search_pattern/replace_pattern/' input_file
```

### How do I perform a search and replace operation only on lines matching a specific pattern with sed in Linux?
To perform a search and replace operation only on lines matching a specific pattern using sed in Linux, you can use the following command:
```bash
sed '/pattern_to_match/s/search_pattern/replace_pattern/' input_file
```

### How do I substitute a specific occurrence of a pattern in a line using sed in Linux?
To substitute a specific occurrence of a pattern in a line using sed in Linux, you can use the following command:
```bash
sed 's/search_pattern/replace_pattern/occurrence_number' input_file
```
## Applications of the sed command

- Search and replace text in files
- Text substitution
- Remove lines from a file
- Insert text at specific line numbers
- Text pattern matching and removal
- Stream editing
- Text transformation
- Batch processing of files
- File content manipulation