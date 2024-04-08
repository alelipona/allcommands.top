---
title: cat MacOS command
description: Learn how to use the cat command in MacOS to concatenate and display the content of files quickly and efficiently.
---

The cat command in MacOS is a convenient utility for displaying the contents of files, concatenating them, or creating new ones. It is versatile and easy to use, making it a essential tool for working with text files in the terminal. By simply typing 'cat' followed by the file name(s), you can quickly view their contents. Additionally, you can combine multiple files into a single output, which can be redirected to a new file if needed. Its simplicity and effectiveness make it a valuable tool for any MacOS user.

## cat Syntax:
```bash
cat [option] [file]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -b     | Number non-blank output lines   |
| -e     | Display non-printing characters |
| -n     | Number all output lines         |
| -s     | Squeeze multiple blank lines    |
| -T     | Display tabs as ^I              |

## Parameters:
| Parameter | Description           |
|-----------|-----------------------|
| file      | The file to display   |

:::caution
Exercise caution when using the cat command on files, as it can display the content directly in the terminal and potentially overwhelm it with large files that have complex formatting.
:::
## cat bash Examples:

### Concatenate two files and display the output
```bash
cat file1.txt file2.txt
```

### Display the contents of a file with line numbers
```bash
cat -n file.txt
```

### Output non-printing characters in a file using cat -vet
```bash
cat -vet file.txt
```

### Display the first 10 lines of a file using cat and head
```bash
cat file.txt | head
```

### Append the contents of one file to another
```bash
cat file1.txt >> file2.txt
```

### Redirect cat output to a new file
```bash
cat file.txt > newfile.txt
```
:::tip
When using the cat command in MacOS, always make sure to specify the correct file or input source to avoid accidentally overwriting important files. Additionally, take advantage of the various options available to customize the output according to your needs.
:::

### How do I use cat in MacOS?
To use the cat command in MacOS, execute the following command:
```bash
cat filename.txt
```

### How can I display line numbers with cat in MacOS?
To display line numbers with the cat command in MacOS, use the -n option like this:
```bash
cat -n filename.txt
```

### How can I combine multiple files and display the output with cat in MacOS?
To combine multiple files and display the output with the cat command in MacOS, simply list the files you want to combine like this:
```bash
cat file1.txt file2.txt
```

### How do I create a new file using cat in MacOS?
To create a new file using the cat command in MacOS, use the following command and then type the content you want in the new file:
```bash
cat > newfile.txt
```

### How can I display non-printing characters with cat in MacOS?
To display non-printing characters with the cat command in MacOS, use the -v option like this:
```bash
cat -v filename.txt
```

### How do I append the content of a file to another file using cat in MacOS?
To append the content of a file to another file using the cat command in MacOS, use the double greater than symbol (>>) like this:
```bash
cat file1.txt >> file2.txt
```

### How can I view the beginning of a file with cat in MacOS?
To view the beginning of a file with the cat command in MacOS, use the head command in combination with cat like this:
```bash
cat filename.txt | head
```

### How do I display the contents of a file with line breaks in a single line using cat in MacOS?
To display the contents of a file with line breaks in a single line using the cat command in MacOS, use the -s option like this:
```bash
cat -s filename.txt
```
## Applications of the cat command

- Display the contents of a file on the terminal
- Concatenate and display multiple files
- Create new files
- Append content to existing files
- Redirect output to a new file
- Create file backups
- View and create text files
- Print file contents with line numbers