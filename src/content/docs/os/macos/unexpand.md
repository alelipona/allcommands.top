---
title: unexpand MacOS command
description: Learn how to efficiently adjust spacing in files with the unexpand command on MacOS.
---

The MacOS unexpand command is used to convert spaces to tabs or vice versa in files. It provides options to adjust the tab size and convert only leading spaces. This command is helpful for formatting text files and can be used in scripting to automate tasks efficiently.

## unexpand Syntax:
```bash
unexpand [OPTION]... [FILE]...
```
## unexpand Options:
| Option | Description                  |
|--------|------------------------------|
| -a     | convert all whitespace       |
| -t N   | expand tabs to N spaces      |
| -t 0   | convert tabs to spaces       |
| -t N,N | expand tabs to N spaces, use comma separated list for different tab stops|

:::caution
Exercise caution when using the unexpand command as it modifies the whitespace characters in a file which may affect its formatting and readability.
:::

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| [OPTION]  | Optional flags for operation    |
| [FILE]    | The file(s) to process          |

## unexpand Command Usage Examples:
### Convert Tabs to Spaces in a File
```bash
unexpand -t 4 input.txt > output.txt
```
This command converts tab characters to spaces in the input.txt file with a tab stop of 4 spaces and saves the output to output.txt.

### Display Tab Stops in a File
```bash
unexpand -a input.txt
```
Displays the tab stops in the input.txt file, showing the positions where tabs begin and end.

### Convert Tabs to Spaces Except at the Beginning of Lines
```bash
unexpand -t 4 --first-only input.txt > output.txt
```
Converts tabs to spaces in the input.txt file with a tab stop of 4 spaces, maintaining tabs only at the beginning of lines, and saves the output to output.txt.

### Convert Tabs to Spaces Except for Leading Blanks
```bash
unexpand -t 4 --all-input input.txt > output.txt
```
Converts all tabs to spaces in the input.txt file with a tab stop of 4 spaces, except for tabs that follow spaces, and saves the output to output.txt.

### Count the Number of Characters That Would Be Saved by Expanding Tabs
```bash
unexpand -t 4 -t 8 --first-only --dry-run input.txt
```
Calculates the number of characters that would be saved by expanding tabs to 4 and 8 spaces, considering only the first tab on each line, in the input.txt file without modifying it.
:::tip
When using the unexpand command in MacOS, make sure to carefully specify the desired options and values to achieve the intended formatting of the input text.
:::

### How do I use unexpand in MacOS?
To use the unexpand command in bash, execute the following command:
```bash
unexpand --first-only file.txt
```

### What does the unexpand command in MacOS do?
The unexpand command in MacOS converts spaces in the input text to tabs, which can be useful for adjusting the indentation of text files.
```bash
unexpand -t 4 file.txt
```

### How can I convert tabs to spaces using unexpand in MacOS?
To convert tabs to spaces in MacOS using unexpand, use the command below:
```bash
unexpand --tabs=4 file.txt
```

### How to display help information for the unexpand command in MacOS?
To display help information for the unexpand command in MacOS, you can use the following command:
```bash
unexpand --help
```

### Can I specify the number of spaces produced by tabs in unexpand on MacOS?
Yes, you can specify the number of spaces produced by tabs in unexpand on MacOS using the "-t" or "--tabs" option followed by the desired number of spaces.
```bash
unexpand --tabs=2 file.txt
```

### How to remove all leading spaces from a file using the unexpand command in MacOS?
To remove all leading spaces from a file in MacOS using unexpand, you can use the below command:
```bash
unexpand --all file.txt
```

### Is it possible to preserve the structure of tabs when unexpanding text in MacOS?
Yes, you can preserve the structure of tabs while unexpanding text in MacOS by using the "--keep-newline" option in the unexpand command.
```bash
unexpand --keep-newline file.txt
```
## Applications of the unexpand command

- Converting spaces to tabs in a text file
- Adjusting tab spacing in text files
- Formatting code for consistency and readability