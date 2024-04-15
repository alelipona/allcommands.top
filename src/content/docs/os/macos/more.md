---
title: more command in MacOS
description: Explore how to efficiently navigate and view text files in MacOS using the 'more' command. Enhance your command line skills and workflow.
---

The `more` command in MacOS is a simple yet powerful tool for viewing text files directly within the terminal. It allows you to navigate through large files, one page at a time, making it easier to read and search for specific content. By using keyboard shortcuts, you can move forward and backward, as well as jump to the beginning or end of the file. Additionally, you can search for keywords within the file and even filter the output. Mastering the `more` command can enhance your productivity and efficiency when working with text files in the MacOS terminal.
## more Syntax:
```bash
more [option] [file]
```
## MacOS more Options:
| Option | Description                   |
|--------|-------------------------------|
| -d     | Prompt the user with "[Press space to continue, 'q' to quit.]" after each screenful. |
| -f     | Count logical, rather than screen lines. |
| -l     | Ignore formfeeds.             |
| -n     | Display text with line numbers.|

## more Parameters:
| Parameter | Description             |
|-----------|-------------------------|
| file      | The file to be displayed.|

:::caution
Exercise caution when using the `more` command, as large files might cause the terminal to output a lot of information at once, potentially overwhelming the user.
:::
## How to use more command:
### Display contents of a file
```bash
more file.txt
```
Displays the contents of the file "file.txt".

### Scroll down in a file
```bash
more file.txt
```
Press the "Enter" key to scroll down one line at a time.

### Scroll up in a file
```bash
more file.txt
```
Press the "b" key to scroll up one page at a time.

### Search for a specific string
```bash
more file.txt
```
Press "/" followed by the string to search for it in the file.

### Quit more command
```bash
more file.txt
```
Press "q" to exit the more command and return to the terminal.

### Display line numbers
```bash
more -n file.txt
```
Displays the contents of the file "file.txt" with line numbers.

### Skip to a specific line
```bash
more +10 file.txt
```
Opens the file "file.txt" and skips to line 10.

### View multiple files
```bash
more file1.txt file2.txt
```
Displays the files "file1.txt" and "file2.txt" consecutively using the more command.
:::tip
When using the more command in MacOS, you can navigate through the output by pressing the spacebar to see the next page, or pressing the 'q' key to exit the program. 
:::

### How do I use more in MacOS?
To use the more command in MacOS, execute the following command:
```bash
more --option <value>
```

### How do I display line numbers with more in MacOS?
To display line numbers when using the more command in MacOS, you can use the following command:
```bash
more -n file.txt
```

### How can I search for a specific pattern with more in MacOS?
To search for a specific pattern when using the more command in MacOS, you can utilize the following command:
```bash
more file.txt | grep "pattern"
```

### How do I scroll horizontally with more in MacOS?
To scroll horizontally when using the more command in MacOS, you can use the following command:
```bash
cat file.txt | more -x
```

### How can I use more to display content one page at a time in MacOS?
To display content one page at a time when using the more command in MacOS, you can execute the following command:
```bash
more -d file.txt
```

### How do I open a file with more in MacOS?
To open a file using the more command in MacOS, you can simply type:
```bash
more file.txt
```

### How can I display the help manual for more in MacOS?
To display the help manual for the more command in MacOS, you can use the following command:
```bash
more --help
```

### How do I use more to navigate backwards in MacOS?
To navigate backwards when using the more command in MacOS, you can press the 'b' key.
```bash
more -b file.txt
```

### How can I use more to skip n lines before starting to display text in MacOS?
To skip n lines before starting to display text when using the more command in MacOS, you can execute the following command:
```bash
more +n file.txt
```

## Applications of the more command

1. Viewing files page by page
2. Scrolling through large files
3. Searching for specific content within a file
4. Navigating through command output
5. Examining log files for troubleshooting