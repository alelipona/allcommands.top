---
title: MacOS sum command
description: Calculate checksums and counts from files in MacOS with the sum command.
---

The MacOS `sum` command is used to calculate checksums and counts from files. By default, it computes and prints CRC-32 checksums and the total number of blocks in the file. Users can also specify different checksum algorithms to be used. The `sum` command is helpful for verifying file integrity and detecting any changes that may have occurred. It is a simple yet effective tool for ensuring data security and accuracy in file management tasks.
## sum Syntax:
```bash
sum [file]
```
## Options:
| Option | Description                    |
|--------|--------------------------------|
| -h     | Display help for the command   |
| -s     | Display only the sum           |

## Parameters:
| Parameter | Description        |
|-----------|--------------------|
| file      | File to calculate the sum for |

:::caution
Exercise caution when using the `sum` command, as it calculates the checksum for the specified file and the output may be sensitive. Make sure to specify the correct file to avoid unintentional data loss.
:::
### Calculate the sum of numbers in a text file
```bash
sum numbers.txt
```

Calculate the sum of all numbers in the specified text file.

### Calculate the sum of multiple numbers
```bash
sum 10 20 30
```

Calculate the sum of the specified numbers.

### Calculate the sum of numbers in a column of a CSV file
```bash
sum -c 2 data.csv
```

Calculate the sum of all numbers in the specified column of a CSV file.

### Calculate the sum of numbers in standard input
```bash
echo "10 20 30" | sum
```

Calculate the sum of numbers provided through standard input.
:::tip
When using the sum command in MacOS, make sure to specify the correct options and values to get the desired output. Take note of any differences in behavior compared to other operating systems when using this command.
:::

### How do I use sum in MacOS?
To use the sum command in MacOS, execute the following command:
```bash
sum file.txt
```

### What is the purpose of the sum command in MacOS?
The sum command in MacOS is used to calculate checksums and the total number of bytes in a file.

### How can I display the checksum and the number of bytes using sum in MacOS?
You can display the checksum and the number of bytes of a file by running the following command:
```bash
sum file.txt
```

### Can I calculate the checksum for multiple files at once with the sum command in MacOS?
Yes, you can calculate the checksum for multiple files simultaneously by providing the file names as arguments. Here is an example:
```bash
sum file1.txt file2.txt file3.txt
```

### How do I display only the checksum value without the filename using the sum command in MacOS?
To display only the checksum value without the filename, use the following command:
```bash
sum -s file.txt
```

### Is there a way to display the checksum value in a format other than the default CRC32 using sum in MacOS?
Yes, you can specify a different algorithm to calculate the checksum value. For example, you can use the SHA-256 algorithm like this:
```bash
shasum -a 256 file.txt
```

### Can I verify the checksum of a file against a provided value using the sum command in MacOS?
Yes, you can verify the checksum of a file against a specified value by running the following command:
```bash
echo "<checksum>  file.txt" | sum -c
```
## Applications of the sum command

- Calculating checksums for files
- Verifying file integrity
- Identifying duplicate files
- Verifying the integrity of downloaded files