---
title: VERIFY command in Windows
description: Verify the integrity of copied or transferred files in Windows using the VERIFY command.
---

The VERIFY command in Windows is used to verify the integrity of copied or transferred files. This command compares the original file with the copied file to ensure that the data was accurately copied without any errors. By using the VERIFY command, you can ensure the reliability and accuracy of your file transfers in Windows.

## VERIFY Syntax:
```cmd
VERIFY [ON | OFF]
```

## Windows VERIFY Options:
| Option | Description                              |
|--------|------------------------------------------|
| ON     | Enables verification of MS-DOS system files. |
| OFF    | Disables verification of MS-DOS system files.|

## VERIFY Parameters:
There are no parameters for the VERIFY command.

:::caution
Caution: Changing the VERIFY setting can affect the system's security and stability. Use this command with caution.
:::
## How to use VERIFY command:
### Verify a Single File
```cmd
verify C:\example\file.txt
```
Verifies the integrity of the specified file.

### Verify Multiple Files
```cmd
verify C:\example\file1.txt C:\example\file2.txt
```
Verifies the integrity of multiple specified files.

### Verify All Files in a Directory
```cmd
verify C:\example\*
```
Verifies the integrity of all files in the specified directory.

### Verify Files in Subdirectories
```cmd
verify /s C:\example\*.*
```
Recursively verifies the integrity of files in the specified directory and all its subdirectories.

### Verify in Quiet Mode
```cmd
verify /q C:\example\file.txt
```
Verifies the integrity of the specified file quietly without displaying any output.

### Verify with Logging
```cmd
verify /l C:\example\file.txt
```
Verifies the specified file and logs the results to a file.

### Verify Multiple Files with Logging
```cmd
verify /b C:\example\file1.txt C:\example\file2.txt
```
Verifies multiple specified files and logs the results to a file.

### Verify using Wildcard
```cmd
verify C:\example\*.txt
```
Verifies the integrity of all files with the .txt extension in the specified directory.


:::tip
When using the verify command in Windows CMD, make sure to include the necessary options and values to properly verify whether files are written correctly to a disk.
:::

### How do I use verify in Windows?
To use the verify command in Windows, execute the following command:
```cmd
verify
```

### What is the purpose of the verify command in Windows CMD?
The verify command in Windows CMD is used to determine whether files are written correctly to a disk.

### How can I enable file verification in Windows CMD?
To enable file verification in Windows CMD, use the following command:
```cmd
verify on
```

### How do I disable file verification in Windows?
To disable file verification in Windows CMD, use the following command:
```cmd
verify off
```

### Can I display the current status of file verification in Windows CMD?
Yes, you can display the current status of file verification in Windows CMD using the following command:
```cmd
verify
```

### How do I set the file verification process to verify all writes in Windows CMD?
To set the file verification process to verify all writes in Windows CMD, use the following command:
```cmd
verify all
```

### What does the "verify all" option do in Windows CMD?
The "verify all" option in Windows CMD sets the file verification process to verify every write to a disk.

### How do I verify only unverified files in Windows CMD?
To verify only unverified files in Windows CMD, use the following command:
```cmd
verify new
```

### Can I view detailed information about the verify command options in Windows CMD?
Yes, you can view detailed information about the verify command options in Windows CMD using the following command:
```cmd
verify /?
```

## Applications of the VERIFY Command

- Verifies the integrity of the files on a disk.