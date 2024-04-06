---
title: sha1sum command in Linux
description: Calculate and verify SHA1 checksums in Linux using the sha1sum command. Learn how to generate checksums for files and verify their integrity.
---

The sha1sum command in Linux is used to calculate and verify SHA1 checksums for files. By generating a unique hash value for each file, users can verify the integrity of their data and ensure that it has not been tampered with. The command is simple to use and provides a quick and reliable way to check the authenticity of files.
## sha1sum Syntax:
```bash
sha1sum [option] [file]
```
## Linux sha1sum Options:
| Option   | Description                     |
|----------|---------------------------------|
| -b       | Read in binary mode             |
| -c       | Read sha1 checksums from the specified files            |
| -t       | Read in text mode                        |
| -w       | Read in word/line mode            |

## sha1sum Parameters:
| Parameter | Description                          |
|-----------|--------------------------------------|
| file      | The file to calculate the SHA1 checksum for |

:::caution
It is important to ensure that the file path is correct and the file is not altered during the checksum calculation to ensure accurate results.
:::
## How to use sha1sum command:
### Calculate SHA1 checksum for a file
```bash
sha1sum file.txt
```
This command calculates the SHA1 checksum for the file named "file.txt".

### Verify file integrity using a provided SHA1 checksum
```bash
sha1sum -c checksum.sha1
```
Verifies the integrity of a file by comparing its SHA1 checksum with the one provided in the file "checksum.sha1".

### Display only the checksum, without the filename
```bash
sha1sum -b file.txt
```
Displays only the SHA1 checksum without the filename for the file "file.txt".

### Calculate SHA1 checksum for multiple files
```bash
sha1sum file1.txt file2.txt
```
Calculates the SHA1 checksum for multiple files "file1.txt" and "file2.txt".

### Redirect output of sha1sum command to a text file
```bash
sha1sum file.txt > checksums.txt
```
Redirects the output of the sha1sum command for the file "file.txt" to a text file named "checksums.txt".

### Compare two files by their SHA1 checksums
```bash
sha1sum -c checksums.txt
```
Compares the SHA1 checksums of two files mentioned in the "checksums.txt" file.

### Calculate SHA1 checksum for all files in a directory
```bash
sha1sum *
```
Calculates the SHA1 checksum for all files in the current directory.

### Verify the integrity of a downloaded file using its SHA1 checksum
```bash
sha1sum -c downloaded_file.sha1
```
Verifies the integrity of a downloaded file by checking its SHA1 checksum provided in the file "downloaded_file.sha1".
:::tip
When using the sha1sum command in Linux, make sure to provide the correct file path or input data to generate the SHA-1 checksum. Additionally, double-check the output to ensure the integrity and security of your files.
:::

### How do I use sha1sum in Linux?
To use the sha1sum command in Linux, execute the following command:
```bash
sha1sum <file_name>
```

### What is the purpose of sha1sum in bash?
The sha1sum command in bash is used to calculate and display the SHA-1 checksum of a file.
```bash
sha1sum file.txt
```

### How can I verify the integrity of a file using sha1sum?
You can verify the integrity of a file by comparing its SHA-1 checksum with the one provided by the original source.
```bash
sha1sum -c file.sha1
```

### Is it possible to generate the SHA-1 checksum for multiple files at once with sha1sum?
Yes, you can generate SHA-1 checksums for multiple files by providing their filenames as arguments to the sha1sum command.
```bash
sha1sum file1.txt file2.txt
```

### How can I output the checksum only without the file name using sha1sum?
To output only the checksum without the corresponding file name, you can use the `-b` or `--binary` option with the sha1sum command.
```bash
sha1sum -b file.txt
```

### Can I verify the checksum of standard input using sha1sum in Linux?
Yes, you can verify the checksum of standard input by passing `-` as the filename argument to the sha1sum command.
```bash
echo "data" | sha1sum -
```

### How can I compare two checksums using sha1sum in Linux?
To compare two checksums, you can use the `-c` or `--check` option followed by the file containing the checksums to be verified.
```bash
sha1sum -c checksums.txt
```

### Is there a way to exclude specific files or directories when generating checksums with sha1sum?
Yes, you can exclude specific files or directories by using the `--exclude` option followed by the pattern you want to exclude.
```bash
sha1sum --exclude='*.log' *
```

### How can I display checksums in a format that includes the file size using sha1sum in Linux?
You can display checksums in a format that includes the file size by using the `--tag` or `-t` option with the sha1sum command.
```bash
sha1sum --tag file.txt
```

## Applications of the sha1sum command

- Verifying the integrity of downloaded files
- Checking the consistency of files or directories
- Generating checksums for files for later verification
- Verifying data integrity during data transfers