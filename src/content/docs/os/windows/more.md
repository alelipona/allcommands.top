---
title: MORE Windows Command Guide
description: Learn how to use the MORE command in Windows to display text files one screen at a time. Improve your command line skills with this handy tool.
---

The MORE command in Windows allows users to view text files one screen at a time. By using this command, you can navigate through lengthy files easily and efficiently. Discover how to utilize the MORE command to enhance your command line experience.

## MORE Syntax:
```cmd
more [+/pattern] [filename]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| +/     | Starts displaying the file from the line that matches the specified pattern. |

## Parameters:
| Parameter | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| filename  | Specifies the location and name of the file to display using the more command. |

:::caution
Caution: Be mindful when using the more command with the pattern option, as it may not show the expected behavior with certain files.
:::
## MORE Command Samples:
### Display Contents of a Text File
```cmd
more file.txt
```
This command displays the content of the "file.txt" on the console.

### View Multiple Files
```cmd
more file1.txt file2.txt
```
Displays the content of "file1.txt" and "file2.txt" sequentially using the more command.

### Scroll Through Text Page by Page
```cmd
more /P file.txt
```
Enables paging through the content of "file.txt" one page at a time.

### Display Line Numbers
```cmd
more /N file.txt
```
Shows the content of "file.txt" with line numbers displayed for each line.

### Scroll a Specific Number of Lines
```cmd
more +10 file.txt
```
Displays the content of "file.txt" starting from the 10th line.

### Pipe Output to More
```cmd
dir | more
```
Uses the pipe operator to send the output of the "dir" command to more for page-by-page viewing.

### Paginate Long Output
```cmd
dir /s | more
```
Displays the output of the "dir /s" command in a paginated format using the more command.
:::tip
When using the more command in Windows, remember that it is typically used to display the contents of a file or the output of another command one page at a time. You can navigate through the content using the Enter key to view one line at a time or the Spacebar to view one page at a time. To exit the more command, simply press Q.
:::

## MORE FAQ:

### How do I use more in Windows?
To use the more command in Windows, execute the following command:
```cmd
more <filename>
```

### What options can I use with the more command in Windows?
To view a list of available options for the more command in Windows, use the following command:
```cmd
more /?
```

### How can I display line numbers with the more command in Windows?
To display line numbers along with the content using the more command in Windows, you can use the following command:
```cmd
more /c <filename>
```

### How do I search for a specific string while using the more command in Windows?
To search for a specific string within the content displayed by the more command in Windows, use the following command:
```cmd
more <filename> | findstr "search_string"
```

### Can I use the more command to display the output of another command in Windows?
Yes, you can pipe the output of another command to the more command in Windows. Here is an example:
```cmd
dir | more
```

### How do I concatenate multiple files and display them using the more command in Windows?
To concatenate multiple files and display their content using the more command in Windows, use the following command:
```cmd
type file1.txt file2.txt | more
```
## Applications of the MORE Command

1. Viewing the contents of a text file
2. Paging through long outputs in the command prompt
3. Displaying one screen of text at a time
4. Reading text documents without opening them in an editor