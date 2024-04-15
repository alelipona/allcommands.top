---
title: shasum MacOS command
description: The shasum command in MacOS is used to calculate SHA checksums for files. It helps verify file integrity and ensure data security.
---

The shasum command in MacOS is a cryptographic hash function that generates hash values for files. It calculates checksums using Secure Hash Algorithm (SHA) algorithms such as SHA-1, SHA-256, SHA-384, and SHA-512. By comparing checksums, users can verify the integrity of files, ensuring they have not been tampered with or corrupted. This command is commonly used for verifying downloaded files, detecting errors in file transfers, and ensuring data security. The shasum command provides a quick and efficient way to generate checksums for a single file or multiple files simultaneously. It is a valuable tool for users who prioritize data accuracy and security in their computing tasks.
## shasum Syntax:
```bash
shasum [option] [parameter]
```

## Options:

| Option      | Description                        |
|-------------|------------------------------------|
| -a          | Algorithm (1, 224, 256, 384, 512)  |
| -b          | Include mode and the number of bits|

## Parameters:

| Parameter   | Description              |
|-------------|--------------------------|
| file        | File to calculate checksum|


:::caution
Caution: Ensure the proper file path is provided as a parameter to avoid errors or incorrect checksum calculations.
:::
## shasum bash Examples:
### Calculate SHA-1 Checksum for a File
```bash
shasum -a 1 file.txt
```
Calculates the SHA-1 checksum for the specified file "file.txt".

### Verify File Integrity Using SHA-256
```bash
shasum -a 256 -c file.sha256
```
Verifies the integrity of a file by comparing its SHA-256 checksum with the one stored in the file "file.sha256".

### Calculate SHA-512 Checksum for a Directory
```bash
shasum -a 512 -r *
```
Calculates the SHA-512 checksum for all files in the current directory.

### Display SHA-256 and File Name for File
```bash
shasum -a 256 -b file.txt
```
Displays the SHA-256 checksum and file name for the specified file "file.txt".

### Check SHA-1 Checksum Using Standard Input
```bash
echo "Hello, World!" | shasum -a 1
```
Calculates the SHA-1 checksum for the input "Hello, World!" using standard input.

### Verify Multiple SHA-256 Checksum Files
```bash
shasum -a 256 -c *.sha256
```
Verifies the integrity of multiple files by checking their SHA-256 checksums stored in respective .sha256 files.
:::tip
When using the shasum command in MacOS, make sure to carefully specify the correct options and values to generate the desired checksum for your files. Double-check the command inputs to avoid errors or unexpected results.
:::

## shasum Command Help Center:

### How do I use shasum in MacOS?
To use the shasum command in MacOS, execute the following command:
```bash
shasum --option <value>
```

### What is the purpose of shasum in MacOS?
The shasum command in MacOS is used to compute and verify SHA checksums. It is commonly used to generate checksums for files to ensure their integrity.

### How can I calculate the SHA-256 checksum of a file in MacOS using shasum?
To calculate the SHA-256 checksum of a file in MacOS using shasum, you can run the following command:
```bash
shasum -a 256 filename
```

### Is it possible to verify a file against a checksum using shasum in MacOS?
Yes, you can verify a file against a checksum using shasum in MacOS. To do this, use a command similar to the following:
```bash
shasum -c checksum_file
```

### Can I output only the checksum value without the filename using shasum in MacOS?
Yes, you can output only the checksum value without the filename using shasum in MacOS. To achieve this, you can use the following command:
```bash
shasum -a 256 -b filename | cut -d ' ' -f 1
```

### How do I check multiple files against checksums with shasum in MacOS?
To check multiple files against checksums with shasum in MacOS, you can create a checksum file containing all the checksum values, and then run the following command:
```bash
shasum -c checksum_file
```

### Can I use shasum to verify the integrity of a downloaded file in MacOS?
Yes, you can use shasum to verify the integrity of a downloaded file in MacOS by comparing the generated checksum with the provided one. This helps ensure that the file has not been altered or corrupted during the download process.

### How can I calculate the SHA-1 checksum of a string in MacOS using shasum?
To calculate the SHA-1 checksum of a string in MacOS using shasum, you can run the following command:
```bash
echo -n "your_string" | shasum -a 1
```
## Applications of the shasum command

- Verifying file integrity
- Checking for file tampering
- Generating checksums for verification purposes
- Verifying the authenticity of downloaded files