---
title: fmt Linux Command Guide
description: The Linux fmt command is used to format text files by adjusting line lengths and spacing. It provides options to specify the maximum line width and indentation levels, making it a useful tool for improving the readability of text documents.
---

The Linux fmt command is a powerful tool for formatting text files. It can adjust line lengths, wrap text, and manage spacing to improve readability. By specifying options such as the maximum line width and indentation levels, users can customize the formatting to meet their specific needs. Whether working with long paragraphs or narrow columnar data, the fmt command can help ensure that text is displayed in a clear and organized manner.

## fmt Syntax:
```bash
fmt [option] [file]
```
## Options:
| Option  | Description                            |
|---------|----------------------------------------|
| -w WIDTH| Specify the maximum line width          |
| -s      | Squeeze multiple blank lines into one  |
| -u      | Reindent wrapped lines                  |
| -a      | Do not split lines shorter than width   |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| file      | Specifies the file to format            |

:::caution
Exercise caution while using the fmt command as it can modify the format or structure of the text in the specified file. It's recommended to create a backup of the file before running the command.
:::
## fmt Command Samples:
### Format a File with Default Line Width
```bash
fmt file.txt
```
Formats the text in "file.txt" with a default line width of 75 characters.

### Format a File with a Custom Line Width
```bash
fmt -w 60 file.txt
```
Formats the text in "file.txt" with a custom line width of 60 characters.

### Format Multiple Files
```bash
fmt file1.txt file2.txt
```
Formats the text in "file1.txt" and "file2.txt" with default line width.

### Read Input from Standard Input
```bash
echo "This is a sample sentence that needs formatting" | fmt
```
Reads the input sentence and formats it using the fmt command.

### Format Files Recursively in a Directory
```bash
find /path/to/directory -type f -exec fmt {} \;
```
Recursively formats all text files in a directory and its subdirectories.

### Justify Text Alignment
```bash
echo "This is a test to justify text alignment using fmt command" | fmt -w 80 -j
```
Justifies the text alignment of the input sentence with a line width of 80 characters.

### Combine Multiple Options
```bash
fmt -s -w 60 file.txt
```
Formats the text in "file.txt" with single spacing and a line width of 60 characters.
:::tip
When using the fmt command in Linux, ensure you specify the appropriate options to format your text as needed. Experiment with different options to see the best results for your specific use case.
:::

## fmt FAQ:
### How do I use fmt in Linux?
To use the fmt command in Linux, execute the following command:
```bash
fmt file.txt
```

### What is the purpose of the fmt command in Linux?
The fmt command in Linux is used to format text files to a specific width by breaking lines that exceed the specified width.
```bash
fmt -w 80 file.txt
```

### How can I adjust the width for text formatting with fmt in Linux?
You can adjust the width for text formatting in fmt using the `-w` option followed by the desired width value.
```bash
fmt -w 60 file.txt
```

### How do I handle hyphenated words when using fmt in Linux?
To preserve hyphenated words and prevent line breaks within them, you can use the `-c` option with fmt.
```bash
fmt -c file.txt
```

### Can I number non-blank output lines with fmt in Linux?
Yes, you can number non-blank output lines by using the `-n` option with fmt.
```bash
fmt -n file.txt
```

### How to remove extra spaces and concatenate lines with fmt in Linux?
To remove extra spaces and concatenate lines when formatting text with fmt, use the `-s` option.
```bash
fmt -s file.txt
```
## Applications of the fmt command

- Reformat text files to a specified line length.
- Wrap long lines of text to a specific width.
- Improve the readability of text by adjusting line lengths.
- Prepare text for printing with a desired width.
- Standardize the formatting of text files.