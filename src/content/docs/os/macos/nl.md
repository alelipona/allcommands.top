---
title: nl MacOS command
description: Learn how to use the nl command in MacOS to add line numbers to files. Explore different options and examples to enhance your text processing tasks.
---

The `nl` command in MacOS is used to add line numbers to files. This can be helpful when working with large amounts of text and you need to keep track of specific lines. The `nl` command offers various options to customize the output, such as adding a header, specifying the line number format, and more.

To use the `nl` command, simply open a terminal window and type `nl` followed by the file you want to add line numbers to. You can also use options like `-b` to specify how to number non-empty lines, `-w` to set the line number width, and `-s` to define the line number separator.

Overall, the `nl` command is a useful tool for organizing and annotating text files in MacOS. By familiarizing yourself with its options and functionality, you can streamline your text processing tasks and improve your workflow efficiency.

## nl Syntax:
```bash
nl [option] [file]
```
## Options:
| Option  | Description                               |
|---------|-------------------------------------------|
| -b      | Specify the line numbering style           |
| -f      | Set the number increment for line numbers  |
| -h      | Display help information                   |
| -i      | Set the line number increment              |
| -l      | Specify the line numbering style           |
| -n      | Specify the line numbering style           |
| -p      | Don't reset line numbers at logical pages  |
| -s      | Set the number separator for line numbers |
| -v      | Increase the line number size              |
| -w      | Set the line number width                  |
| -z      | Display leading zeros in the line numbers  |

## Parameters:
| Parameter | Description                                                    |
|-----------|----------------------------------------------------------------|
| file      | The file whose lines will be numbered                           |

:::caution
Exercise caution when using the nl command as it can modify the content of the file by adding line numbers. Make sure you have a backup of the original file before running nl.
:::
## nl bash Examples:

### Number Lines in a File
```bash
nl file.txt
```
Adds line numbers to the content of the file "file.txt".

### Display Line Numbers at the End of Lines
```bash
nl -ba file.txt
```
Displays line numbers at the end of each line in the file "file.txt".

### Customize the Line Numbering Style
```bash
nl -n rz -w 5 file.txt
```
Customizes the line numbering style in the file "file.txt" to use a leading zero with a width of 5 characters.

### Display Empty Line Numbers
```bash
nl -ba -s'' file.txt
```
Displays line numbers for empty lines using an empty string separator in the file "file.txt".

### Omit Line Numbering on Specific Lines
```bash
nl -v 100 file.txt
```
Omits line numbering for lines starting at 100 in the file "file.txt".

### Number Only Non-empty Lines
```bash
nl -b a file.txt
```
Numbers only non-empty lines in the file "file.txt".
:::tip
When using the nl command in MacOS, make sure to check the available options and their usage in the nl manual by running `man nl` in the terminal.
:::

### How do I use nl in MacOS?
To use the nl command in MacOS, execute the following command:
```bash
nl <file_name>
```

### What is the purpose of the nl command in MacOS?
The nl command in MacOS is used to number lines in a file before displaying them on the standard output.

### How can I display line numbers in nl output?
To display line numbers in the nl output, use the `-n` option followed by the numbering style. For example:
```bash
nl -n ln <file_name>
```

### How can I add a delimiter between line numbers and the content?
To add a delimiter between line numbers and the content, use the `-s` option followed by the delimiter. For example:
```bash
nl -s '. ' <file_name>
```

### How can I customize the line numbering format in nl?
To customize the line numbering format in nl, use the `-b` option followed by the type of numbering. For example:
```bash
nl -b a <file_name>
```

### How can I specify the increment for line number in nl output?
To specify the increment for line number in nl output, use the `-i` option followed by the desired increment value. For example:
```bash
nl -i 5 <file_name>
```

### How can I number non-empty lines only in nl?
To number non-empty lines only in nl, use the `-ba` option. For example:
```bash
nl -ba <file_name>
```

### How can I suppress line numbers for certain lines in nl output?
To suppress line numbers for certain lines in nl output, use the `-v` option followed by the lines to ignore. For example:
```bash
nl -v 2,5,10 <file_name>
```
## Applications of the nl command

- Numbering lines in a file
- Adding line numbers to the output
- Formatting text for readability
- Creating ordered lists from text data
- Identifying and referencing specific lines in a file