---
title: hexdump Linux command
description: Learn all about the Linux hexdump command, including how to use it to analyze and display data in hexadecimal format.
---

The Linux hexdump command is used to display files in hexadecimal format. It allows users to analyze the binary data of files, giving them insights into the structure and content of the files. This command is essential for developers and system administrators who need to work with binary data. By using the various options available with hexdump, users can customize the output format to suit their needs. Overall, hexdump is a powerful tool for examining and understanding the binary data of files on a Linux system.
## hexdump Syntax:
```bash
hexdump [options] [file]
```
## Options:
| Option | Description               |
|--------|---------------------------|
| -C     | Display output in ASCII, hexadecimal, and decimal format                     |
| -c     | Display output in ASCII characters                                           |
| -n     | Limit number of bytes to dump                                                  |
| -s     | Skip a specific number of bytes before starting to dump                       |
| -v     | Display all input data                                                       |
| -x     | Display output in hexadecimal format                                          |
| -b     | Display output in octal format                                               |
| -d     | Display output in decimal format                                             |
| -e     | Format with specified C printf-style format control string, e.g., "%08x "     |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| file      | Specified file to dump      |

:::caution
Exercise caution when using the hexdump command as it can provide a detailed and potentially overwhelming view of the internal structure of files. Ensure that you have a clear understanding of the data you are analyzing and use appropriate options to display the data in a readable format.
:::
## hexdump bash Examples:
### Display hex and ASCII representation of a file
```bash
hexdump -C file.txt
```
Displays the hexadecimal and ASCII representation of the contents of the file.txt.

### Display only the hexadecimal data without the ASCII representation
```bash
hexdump -e '"%08_ax " 4/4 "%08x " "\n"' file.bin
```
Displays only the hexadecimal data without the corresponding ASCII representation for the contents of file.bin.

### Display file contents as 2-byte (16-bit) units
```bash
hexdump -e '2/1 "%04x " "\n"' file.data
```
Displays the contents of file.data as 2-byte (16-bit) units in hexadecimal format.

### Display the content of a file in octal format
```bash
hexdump -v -e '16/1 "%03o " "\n"' file.txt
```
Displays the content of file.txt in octal format with each byte represented by 3 octal digits.

### Display a specific number of bytes from a file in hexadecimal format
```bash
hexdump -n 16 -e '8/4 "%08x " "\n"' file.dat
```
Displays the first 16 bytes from file.dat in hexadecimal format with each line containing 8 bytes.

### Display the content of a file in little-endian format
```bash
hexdump -e '4/4 "%08x " "\n"' -e '4/4 "%08x " "\n"' -e '4/4 "%08x " "\n"' -e '4/1 " \n"' -e '4/4 "%08x " "\n"' -e '4/4 "%08x " "\n"' -e '4/4 "%08x " "\n"' -e '4/1 " \n"' file.bin
```
Displays the content of file.bin in little-endian format by visually reversing the byte order within each 4-byte unit.
:::tip
When using the hexdump command in Linux, make sure to familiarize yourself with the various options available to customize the output according to your needs. Experiment with different flags and formats to get the desired hexadecimal representation of data.
:::

### How can I display the contents of a file in hexadecimal format using hexdump?
To display the contents of a file in hexadecimal format with hexdump, you can use the following command:
```bash
hexdump -C file.txt
```

### Can I display the output of hexdump in a specified format in Linux?
To display the output of hexdump in a specified format, you can use the following command with the desired format option:
```bash
hexdump -e '1/1 "%02x " "\n"' file.txt
```

### How do I display ASCII representation alongside hexadecimal output using hexdump?
To display the ASCII representation alongside the hexadecimal output using hexdump, you can use the following command:
```bash
hexdump -C file.txt
```

### Is it possible to skip a certain number of bytes while using hexdump in Linux?
Yes, you can skip a certain number of bytes while using hexdump in Linux by specifying the starting position with the skip option. Here is an example command:
```bash
hexdump -s 10 file.txt
```

### How can I reverse the bytes order for output using hexdump in Linux?
To reverse the bytes order for the output using hexdump in Linux, you can use the following command:
```bash
hexdump -s 10 -e '1/1 "%x"' file.txt
```

### Can I display the offsets in a different format with hexdump in Linux?
Yes, you can display the offsets in a different format by specifying the desired format option. Here is an example command:
```bash
hexdump -e '1/1 "%06_ax "' file.txt
```

### How do I display the contents of a file in octal format using hexdump?
To display the contents of a file in octal format with hexdump, you can use the following command:
```bash
hexdump -e '/1 "%03o "' file.txt
```

### Is it possible to display the character counts alongside the hexadecimal output in hexdump?
Yes, you can display the character counts alongside the hexadecimal output by using the following command:
```bash
hexdump -C file.txt
## Applications of the hexdump command

- Viewing the hexadecimal representation of a file
- Converting binary data to a human-readable format
- Analyzing file contents at the byte level
- Verifying data integrity
- Debugging and examining file structures