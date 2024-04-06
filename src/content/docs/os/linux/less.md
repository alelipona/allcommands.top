---
title: What is less Linux command?
description: The Linux less command is a powerful tool for viewing file contents in the terminal efficiently. Learn how to navigate, search, and analyze text documents with less.
---

The Linux less command is a powerful tool for viewing file contents in the terminal efficiently. It allows users to navigate through text files, search for specific content, and analyze lengthy documents with ease.
## less Syntax:
```bash
less [option] [file]
```
## less Options:

| Option       | Description                                          |
|--------------|------------------------------------------------------|
| -N           | Display line numbers                                  |
| -i           | Ignore case when searching                           |
| -S           | Truncate long lines                                   |
| -F           | Quit immediately if entire file can be displayed     |
| -h, --help   | Display help message                                  |

## Parameters:
| Parameter   | Description                  |
|-------------|------------------------------|
| file        | The file to be viewed        |
## less Command Usage Examples:

### Display contents of a file
```bash
less file.txt
```
The command displays the contents of the "file.txt" for ease of reading.

### Scroll down a file
```bash
less file.txt
```
To scroll down a file, press the "Space" (PgDn) key.

### Scroll up a file
```bash
less file.txt
```
To scroll up a file, press the "b" (PgUp) key.

### Search for a specific string
```bash
less file.txt
```
To search for a specific string within a file, type "/search_term" followed by Enter.

### Jump to a specific line number
```bash
less file.txt
```
To jump to a specific line number within a file, type the line number followed by "g" and Enter.
:::tip
When using the less command in Linux, remember that you can navigate through the file using arrow keys, page up, page down, spacebar for next page, and q to exit the program.
:::

### How do I use less in Linux?
To use the less command in bash, execute the following command:
```bash
less file.txt
```

### How can I search for a specific text in a file using less?
To search for a specific text in a file using less, input the following command:
```bash
less file.txt
/pattern
```

### How can I navigate to the end of a file quickly with less?
To navigate to the end of a file quickly with less, type the following command:
```bash
less file.txt
Shift + G
```

### How can I display line numbers while viewing a file with less?
To display line numbers while viewing a file with less, run the command:
```bash
less -N file.txt
```

### How can I view multiple files in less with a single command?
To view multiple files in less with a single command, use the following syntax:
```bash
less file1.txt file2.txt
```

### How do I open a file with less in read-only mode?
To open a file with less in read-only mode, use the following command:
```bash
less -R file.txt
```

### How can I navigate horizontally in less when viewing a file with long lines?
To navigate horizontally in less when viewing a file with long lines, execute the following command:
```bash
less -S file.txt
```

### How do I exit less without viewing the entire file?
To exit less without viewing the entire file, simply use the following command:
```bash
less +G file.txt
```

## Applications of the less command

- Viewing the contents of a file
- Navigating through a file
- Searching for specific text within a file
- Handling large files more efficiently than with `cat` command
- Allowing for backward navigation through a file