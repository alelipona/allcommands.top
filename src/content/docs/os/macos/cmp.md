---
title: cmp MacOS Command Guide
description: Learn how to use the cmp command in MacOS to compare two files byte by byte. Find out about the syntax, options, and practical examples.
---

The MacOS cmp command is used to compare two files byte by byte. It provides a way to determine whether two files are identical or different, and it displays the offset and line number of the first differing byte. This command is useful for checking the integrity of files and ensuring data consistency. The syntax of the cmp command is straightforward, and there are several options available to customize its behavior. By understanding how to use the cmp command in MacOS, you can efficiently compare files and identify any discrepancies between them.

## cmp Syntax:
```bash
cmp [option] file1 file2
```

## Options:
| Option         | Description                            |
|----------------|----------------------------------------|
| -b, --print-bytes | Print differing bytes as ASCII characters |
| -i, --ignore-initial | Skip the first N bytes of each file    |
| -l, --verbose  | Output byte numbers and differing byte values  |
| -s, --silent   | No output is produced                  |
| -z, --help     | Display help message                   |

## Parameters:
| Parameter      | Description                     |
|----------------|---------------------------------|
| file1          | The first file to compare        |
| file2          | The second file to compare       |

:::caution
Take caution when using the cmp command as it directly compares binary data of the two files and can produce unexpected results if not used properly.
:::
## cmp Command Samples:
### Compare Two Files
```bash
cmp file1.txt file2.txt
```
Compares the contents of `file1.txt` and `file2.txt` to check if they are identical.

### Ignore Initial ‘n’ Bytes
```bash
cmp -n 100 file1.txt file2.txt
```
Compares the first 100 bytes of `file1.txt` and `file2.txt` to check for any differences.

### Output Bytes Differing
```bash
cmp -l file1.txt file2.txt
```
Displays the byte number and the differing byte values when comparing `file1.txt` and `file2.txt`.

### Quiet Mode
```bash
cmp -s file1.txt file2.txt
```
Performs a silent comparison between `file1.txt` and `file2.txt`, with no output if the files are identical.

### Check for Inequality
```bash
cmp -i 10:30 file1.txt file2.txt
```
Compares the bytes starting from offset 10 up to 30 in `file1.txt` and `file2.txt` to check if they are equal.

### Report Only Differences
```bash
cmp -l file1.txt file2.txt | awk '{print $3}'
```
Lists only the decimal values of the differing bytes when comparing `file1.txt` and `file2.txt`.

### Compare Binary Files
```bash
cmp -b binaryfile1 binaryfile2
```
Compares two binary files `binaryfile1` and `binaryfile2` to check if they are identical.
:::tip
When using the cmp command in MacOS, make sure to carefully review the output, especially if there is no response. This command is useful for comparing two files byte by byte, so understanding the differences reported by cmp is crucial.
:::

## cmp FAQ:
### How do I use cmp in MacOS?
To use the cmp command in MacOS, execute the following command:
```bash
cmp file1.txt file2.txt
```

### How can I display only the differing bytes with cmp in MacOS?
To display only the differing bytes when using cmp in MacOS, add the `-l` flag to the command:
```bash
cmp -l file1.txt file2.txt
```

### How do I suppress the output when using cmp in MacOS?
To suppress the output of cmp in MacOS, you can use the `-s` flag:
```bash
cmp -s file1.txt file2.txt
```

### Is there a way to display the total number of differing bytes with cmp in MacOS?
Yes, you can display the total number of differing bytes by using the `-n` flag followed by the count of differing bytes to display:
```bash
cmp -n 10 file1.txt file2.txt
```

### How can I show the line number and byte where the files differ with cmp in MacOS?
To show the line number and byte where the files differ, use the `-i` flag with the line number where the difference is found:
```bash
cmp -i 5 file1.txt file2.txt
```

### Can cmp in MacOS be used to compare binary files?
Yes, cmp in MacOS can be used to compare binary files by specifying the binary files as arguments in the command:
```bash
cmp binary1.bin binary2.bin
```
## Applications of the cmp command

- Comparing two files byte by byte
- Checking for differences between two files
- Verifying if two files are identical
- Finding changes in data between two files