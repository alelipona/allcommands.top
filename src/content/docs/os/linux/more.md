---
title: more command in Linux
description: Discover how to efficiently view and navigate through large files in Linux using the `more` command.
---

The `more` command in Linux allows users to view the contents of large files page by page, facilitating easy navigation and search within the file. By displaying one screen of text at a time, `more` enables users to read through lengthy documents without overwhelming the terminal. With simple keyboard commands, users can move forward, backward, search for specific text, and quit the viewing process. This command provides a straightforward and efficient way to handle extensive text files in the Linux environment.
## more Syntax:
```bash
more [option] [file]
```

## Linux more Options:
| Option | Description                   |
|--------|-------------------------------|
| -d     | Display more prompt           |
| -f     | Count logical pages           |
| -l     | Ignore form feeds             |
| -p     | Do not scroll screen          |
| -s     | Squeeze multiple blank lines  |
| -u     | Suppress underlining          |

## more Parameters:
| Parameter | Description            |
|-----------|------------------------|
| file      | The file to be viewed  |

:::caution
Be cautious while using the `more` command as it can display a large amount of text at once, which may go beyond the screen buffer and give unexpected results. Ensure to use it with appropriate options to navigate through the text effectively.
:::
## How to use more command:
### Display contents of a file using more
```bash
more filename.txt
```
This command displays the contents of the "filename.txt" file page by page.

### Show line numbers when viewing a file
```bash
more -N filename.txt
```
The "-N" option displays line numbers when viewing the "filename.txt" file.

### View content of multiple files in sequence
```bash
more file1.txt file2.txt
```
Displays the content of "file1.txt" followed by the content of "file2.txt" sequentially.

### Search within a file while using more
```bash
more filename.txt
/pattern
```
The "slash" followed by a search pattern allows you to search within the "filename.txt" while using more.

### Scroll up one line at a time
```bash
more -d filename.txt
```
Use the "-d" option to scroll up one line at a time when viewing the content of "filename.txt".

### Jump to a specific line number
```bash
more +10 filename.txt
```
Jumps directly to line 10 when viewing the content of "filename.txt".

### Skip over the first n lines
```bash
more +5 filename.txt
```
Skips the first 5 lines and starts displaying the content of "filename.txt" from the 6th line onwards.

### Display help information for more command
```bash
more --help
```
Shows the help information for the more command, including available options and usage details.
:::tip
When using the more command in Linux, you can press the spacebar to advance a page, press Enter to advance one line at a time, and press q to quit and return to the command prompt.
:::

### How do I use more in Linux?
To use the more command in Linux, execute the following command:
```bash
more --option <value>
```

### What are some common options for the more command?
Some common options for the more command in Linux include:
```bash
more -d file.txt
```

### How can I scroll back while using more?
To scroll back while using the more command in Linux, press the b key.

### How do I search for text within the more command?
You can search for text within the more command by typing a forward slash (/) followed by the text you want to search for. Press Enter to start the search and n to find the next occurrence.

### How do I display line numbers in more?
To display line numbers while using the more command in Linux, you can use the following command:
```bash
more -n file.txt
```

### How can I navigate to the beginning or end of a file with more?
To navigate to the beginning of a file with more, use the g command. To navigate to the end of a file, use the Shift+g command.

### How do I use the more command to view multiple files?
You can use the more command to view multiple files by providing the file names as arguments. For example:
```bash
more file1.txt file2.txt
```

### Can I use the more command with pipes in Linux?
Yes, you can use the more command with pipes in Linux to view the output of a command. For example:
```bash
ls -l | more
```

### How do I exit the more command with a specific status?
To exit the more command with a specific status, you can use the following key combination:
```bash
Ctrl + C
```
## Applications of the more command

- Viewing text files one screen at a time
- Navigating through large files
- Searching for specific strings within a file
- Skipping through large sections of text
- Pausing and resuming output in the terminal