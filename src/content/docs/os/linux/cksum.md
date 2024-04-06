---
title: cksum command in Linux
description: Calculate CRC checksum and byte counts in Linux with the cksum command.
---

The Linux cksum command is used to calculate a cyclic redundancy check (CRC) checksum for files. This checksum can be compared between systems to check for file integrity or changes. Additionally, cksum can also display the byte count of a file. By using the options available with cksum, users can control the output format and achieve the desired checksum calculation for their specific needs.

## cksum Syntax:
```bash
cksum [option] [file(s)]
```

## Linux cksum Options:
| Option | Description                      |
|--------|----------------------------------|
| -help  | Display a help message and exit  |
| -b     | Treat input as binary            |
| -h     | Print the checksum and the number of bytes in the input file |

## cksum Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| file(s)   | The file(s) to calculate the checksum for   |

:::caution
Exercise caution when using the cksum command, as it calculates and prints checksums for files. Ensure that you are using the correct files and options to avoid unintended consequences.
:::
## How to use cksum command:
### Calculate Checksum of a File
```bash
cksum file.txt
```
Calculate the checksum of the file "file.txt".

### Calculate Checksum of Multiple Files
```bash
cksum file1.txt file2.txt file3.txt
```
Calculate the checksum of multiple files simultaneously.

### Verify File Integrity with Checksum
```bash
cksum -c checksums.txt
```
Verify the integrity of files listed in the checksums.txt file.

### Generate Checksum in Different Format
```bash
cksum -b file.txt
```
Generate the checksum of a file in binary format.

### Display Only The Checksum Value
```bash
cksum -s file.txt
```
Display only the checksum value without filename.

### Checksum for a Specific Number of Bytes
```bash
cksum -n 100 file.txt
```
Generate checksum for the first 100 bytes of the file.

### Recursive Checksum Calculation
```bash
cksum -r folder/
```
Calculate checksum recursively for all files in a folder.

### Ignore Linefeed Characters
```bash
cksum -L file.txt
```
Calculate checksum with ignoring linefeed characters.
:::tip
When using the cksum command, make sure to provide the correct file path or specify the input data correctly to generate the checksum. Additionally, always verify the integrity of files by comparing the generated checksum values.
:::

### How do I use cksum in Linux?
To use the cksum command in Linux, execute the following command:
```bash
cksum file.txt
```

### How do I calculate a checksum for multiple files in Linux?
To calculate the checksum for multiple files in Linux, you can use the following command format:
```bash
cksum file1.txt file2.txt file3.txt
```

### How can I display the checksum value only in cksum?
You can display only the checksum value in cksum by using the following command:
```bash
cksum -s file.txt
```

### How do I include the checksum byte count in the cksum output?
To include the checksum byte count in the cksum output, you can use the following command:
```bash
cksum -o file.txt
```

### How do I suppress the output of file names in cksum?
To suppress the output of file names in cksum and only display the checksum and byte count, use the following command:
```bash
cksum -q file.txt
```

### How can I verify the integrity of a file using cksum?
To verify the integrity of a file using cksum, you can compare the generated checksum with the original checksum. Here's an example:
```bash
original=$(cksum file.txt | cut -d' ' -f1)
generated=$(cksum file.txt | cut -d' ' -f1)
if [ $original == $generated ]; then
    echo "Integrity verified"
else
    echo "Integrity check failed"
fi
```

### How do I generate a checksum using a string input with cksum?
To generate a checksum using a string input with cksum, you can use echo to pass the string and pipe it to cksum. Here's an example:
```bash
echo "Hello, World!" | cksum
```

### How can I recursively calculate checksums for all files in a directory in Linux?
You can recursively calculate checksums for all files in a directory in Linux using the find command in combination with xargs and cksum. Here's an example:
```bash
find /path/to/directory -type f | xargs cksum
```

### How do I calculate the checksum without checking for ASCII control characters?
To calculate the checksum without checking for ASCII control characters using cksum, you can use the following command:
```bash
cksum -B file.txt
```

## Applications of the cksum command

- Verifying data integrity
- Checking for file corruption
- Generating checksum values for files
- Comparing checksum values for files
- Detecting changes in files
- Ensuring data consistency
- Validating file transfer accuracy