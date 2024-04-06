---
title: fgrep Linux command
description: Find specific text patterns in files using the fgrep command.
---

fgrep (or fast grep) is a Linux command used to search for specific text patterns in files. It is faster than the grep command as it does not support regular expressions. With fgrep, users can quickly search for literal strings in one or multiple files, making it a useful tool for searching and filtering large datasets efficiently.

## fgrep Syntax:
```bash
fgrep [options] pattern [file...]
```
## Options:
| Option        | Description                             |
|---------------|-----------------------------------------|
| -v            | Invert the sense of matching, to select non-matching lines. |
| -i            | Ignore case distinctions in both the pattern and input files. |
| -w            | Match only whole words.                 |
| -F            | Treat the pattern as a list of fixed strings. |
| -n            | Show the line number of each matching line. |
| -h            | Suppress the display of filenames in output. |
| -c            | Count and display the number of matching lines. |
| -l            | Display only the names of files with matching lines. |
| -q            | Quiet mode, do not display any output.  |

## Parameters:
| Parameter     | Description                             |
|---------------|-----------------------------------------|
| pattern       | The string or regular expression to search for. |
| file          | The path to the file(s) to search within. Multiple file paths can be provided. |

:::caution
Use the fgrep command carefully, especially when using options like -v or -i, as it can alter the output significantly. Ensure you understand how the selected options impact the search results.
:::
## fgrep bash Examples:
### Search for a Specific Word in a File
```bash
fgrep "example" file.txt
```
Searches for the word "example" in the file.txt and displays the lines containing it.

### Display Lines with Multiple Words
```bash
fgrep -e "word1" -e "word2" file.txt
```
Displays lines containing either "word1" or "word2" in the file.txt.

### Ignore Case Sensitivity
```bash
fgrep -i "Hello" file.txt
```
Searches for the word "Hello" in a case-insensitive manner in the file.txt.

### Display Line Numbers
```bash
fgrep -n "error" logfile.txt
```
Searches for the word "error" in logfile.txt and displays the line numbers.

### Show Count of Matches
```bash
fgrep -c "warning" file.txt
```
Counts and displays the number of occurrences of the word "warning" in file.txt.

### Search for Whole Words Only
```bash
fgrep -w "exact" file.txt
```
Locates lines in file.txt with the word "exact" as a whole word.
:::tip
When using the fgrep command in Linux, remember that it performs a fast search using fixed strings, so it does not interpret regular expressions. Make sure to provide the search string as an exact match to ensure accurate results.
:::

## fgrep Command Help Center:

### How do I use fgrep in Linux?
To use the fgrep command in Linux, execute the following command:
```bash
fgrep --option <value>
```

### What is the difference between grep and fgrep in Linux?
The main difference between grep and fgrep in Linux is that fgrep interprets search patterns as fixed strings, while grep allows the use of regular expressions for pattern matching.

### How can I search for a string in multiple files using fgrep in Linux?
To search for a string in multiple files using fgrep in Linux, you can use the following command:
```bash
fgrep "search_string" file1.txt file2.txt
```

### Can I use fgrep to search for multiple strings in a file in Linux?
Yes, you can use fgrep to search for multiple strings in a file in Linux by specifying each string separated by a pipe (|) within double quotes.
```bash
fgrep "string1|string2" file.txt
```

### How can I make fgrep case-insensitive in Linux?
To make fgrep case-insensitive in Linux, you can use the -i option in the command. Here is an example:
```bash
fgrep -i "search_string" file.txt
```

### Is there a way to display line numbers with fgrep in Linux?
Yes, you can display line numbers with fgrep in Linux by using the -n option in the command. Here is an example:
```bash
fgrep -n "search_string" file.txt
```

### Can fgrep be used to search for a whole word in a file in Linux?
Yes, fgrep can be used to search for a whole word in a file in Linux by using the -w option in the command. Here is an example:
```bash
fgrep -w "word" file.txt
```

### How can I search for a string recursively in directories with fgrep in Linux?
To search for a string recursively in directories with fgrep in Linux, you can use the -r option in the command. Here is an example:
```bash
fgrep -r "search_string" /path/to/directory
```
## Applications of the fgrep command

- Efficiently searching for fixed strings in files
- Scripting to quickly find specific text patterns
- Finding specific strings in large text files
- Processing log files to extract relevant information