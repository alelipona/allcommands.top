---
title: xxd MacOS command
description: Discover how to use the xxd command on MacOS for viewing or manipulating binary files. Learn the syntax, options, and examples with our comprehensive guide.
---

The xxd command on MacOS is a powerful utility for creating hex dumps of files. It can be used to transform data into a hex format or reverse the process to create a binary file from its hex representation. This tool is useful for viewing or manipulating binary files, examining file contents, and debugging purposes. By default, xxd displays hex dumps with offsets, hexadecimal content, and ASCII representation on the right. Additionally, it offers various options for customizing the output format and behavior. Mastering the xxd command can enhance your efficiency in handling binary data on MacOS.

## xxd Syntax:
```bash
xxd [options] [file]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -b     | Bits output                           |
| -g     | Specify number of octets per group    |
| -c     | Specify number of octets per line     |
| -l     | Stop after specific number of octets  |
| -s     | Start at specific offset              |
| -u     | Uppercase hex                         |
| -v     | Verbose (print offset within file)    |
| -i     | Output in C include file format       |
| -r     | Reverse operation (convert hex to binary) |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| file      | File to operate on         |
:::caution
Exercise caution when using the xxd command, as it manipulates binary data and can potentially lead to unintended changes in files if used incorrectly.
:::
## xxd bash Examples:
### Display Hexadecimal Dump of a File
```bash
xxd file.txt
```
Displays the hexadecimal dump of the file "file.txt".

### Dump Hexadecimal Output to a File
```bash
xxd -i input.txt output.txt
```
Dumps the hexadecimal output of "input.txt" to "output.txt".

### Reverse Operation: Convert Hex Output Back to Binary
```bash
echo '48656c6c6f' | xxd -r -p
```
Converts the hexadecimal output back to binary, displaying "Hello".

### Display Hex Output with Line Number
```bash
xxd -g 1 file.txt
```
Displays the hexadecimal output of file "file.txt" with one byte per line.

### Execute xxd in Canonical Mode
```bash
xxd -c 16 file.txt
```
Executes xxd in canonical mode, displaying 16 bytes per line for file "file.txt".

### Skip a Defined Number of Input Bytes
```bash
xxd -s 4 file.txt
```
Skips the first 4 bytes of the input file "file.txt" before displaying the hexadecimal output.
:::tip
When using the xxd command in MacOS, make sure to carefully read the options and their respective values to ensure the desired output format and functionality.
:::

### How do I use xxd in MacOS?
To use the xxd command in MacOS, execute the following command:
```bash
xxd --option <value>
```

### What is the purpose of the xxd command in MacOS?
The xxd command in MacOS is used for creating a hex dump of a given file or for converting a file into a hex dump format.

### How can I display the hex dump in the xxd command output?
You can display the hex dump in the xxd command output by using the "-g" option followed by the number of bytes to group together. 
```bash
xxd -g <number_of_bytes> <file_name>
```

### How to convert a hex dump back to binary using xxd in MacOS?
To convert a hex dump back to binary using xxd in MacOS, use the "-r" option.
```bash
xxd -r <hex_file> > <output_file>
```

### In xxd command, how can I specify the number of bytes to skip in the input file?
To specify the number of bytes to skip in the input file using xxd, use the "-s" option followed by the number of bytes.
```bash
xxd -s <skip_bytes> <file_name>
```

### How to include the display of the ASCII characters in the xxd output in MacOS?
To include the display of ASCII characters in the xxd output, add the "-c" option followed by the number of characters per line.
```bash
xxd -c <characters_per_line> <file_name>
```

### Can I use xxd in MacOS to generate a formatted hex dump for analysis?
Yes, you can generate a formatted hex dump for analysis using xxd in MacOS by specifying options like "-l" to limit the number of bytes read.
```bash
xxd -l <limit_bytes> <file_name>
```

### How to save the output of xxd command to a file in MacOS?
You can save the output of the xxd command to a file by using output redirection with the ">" operator.
```bash
xxd <file_name> > <output_file>
```
## Applications of the xxd command

- Creating hex dumps of files
- Reversing the operation, converting hex dumps back to binary data
- Patching binary files with hex data
- Investigating and analyzing binary file structures
- Debugging and reverse engineering purposes