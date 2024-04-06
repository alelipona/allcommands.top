---
title: CIPHER Windows Command Guide
description: Learn how to use the Windows cipher command to encrypt and decrypt files securely. Find out about the different options and parameters available for data protection.
---

The Windows cipher command is a built-in tool that allows users to encrypt and decrypt files or folders on a NTFS-formatted drive. This command provides a secure way to protect sensitive data by using different encryption algorithms such as AES. Users can choose to encrypt individual files or entire directories, as well as remove encryption from previously encrypted files. The cipher command also offers options to generate new encryption keys, display information about encrypted files, and securely delete data beyond recovery. By understanding how to use the cipher command effectively, users can enhance the privacy and security of their data on Windows systems.

## CIPHER Syntax:
```cmd
cipher [option] [parameter]
```
## Options:
| Option     | Description                                |
|------------|--------------------------------------------|
| /e         | Encrypt the specified directory             |
| /d         | Decrypt the specified directory             |
| /c         | Display the encryption status of the current directory |
| /s         | Process the matching files in the current directory and all subdirectories |
| /h         | Display a list of commands                 |
| /k         | Create a new file encryption key            |
| /u         | Update the user's file encryption key       |

## Parameters:
| Parameter     | Description                                |
|---------------|--------------------------------------------|
| Directory     | Specifies the directory to be encrypted or decrypted |
| /n            | Unprotect the existing encrypted file      |
| /w:Path       | Specifies the directory path to work within when performing the encryption operation |
| /r            | Generate an EFS recovery agent                  |

:::caution
Exercise caution when using the cipher command, as it deals with encryption and decryption operations on files and directories. Carelessness may lead to irreversible loss of data or security breaches.
:::
## CIPHER Command Samples:
### Encrypt a Folder
```cmd
cipher /E /S:C:\MyFolder
```
Encrypts the contents of the folder "MyFolder" located on the C drive.

### Decrypt a Folder
```cmd
cipher /D /S:C:\MyFolder
```
Decrypts the contents of the folder "MyFolder" located on the C drive.

### Display Encryption Status of Files on Drive C:
```cmd
cipher /S:C: /U
```
Displays the encryption status of files on the C drive.

### Wipe Empty Space on Drive D:
```cmd
cipher /W:D
```
Overwrites unused space on the D drive to prevent data recovery.

### Display Help Information for Cipher
```cmd
cipher /?
```
Shows detailed help information regarding the usage of the cipher command.
:::tip
Remember that the cipher command in Windows CMD is a powerful tool for managing encryption and decryption of files and folders. Make sure to use it cautiously and always double-check your actions to avoid irreversible data loss.
:::

## CIPHER FAQ:
### How do I use cipher in CMD?
To use the cipher command in CMD, execute the following command:
```cmd
cipher /e /s:C:\Folder
```

### What is the purpose of the cipher /e parameter?
The cipher /e parameter is used to encrypt the specified directory. To encrypt a folder named "Confidential" located in C:\Users\JohnDoe, use the following command:
```cmd
cipher /e C:\Users\JohnDoe\Confidential
```

### How can I decrypt a folder using cipher in CMD?
To decrypt a folder named "Sensitive" located in D:\Data, use the following command:
```cmd
cipher /d D:\Data\Sensitive
```

### How do I list encrypted files and folders with cipher in CMD?
To display a list of encrypted files and folders in the current directory, use the following command:
```cmd
cipher /s:C:\Folder /u
```

### How can I remove encryption from a file using cipher in CMD?
To remove encryption from a file named "Report.docx" located in E:\Documents, use the following command:
```cmd
cipher /d E:\Documents\Report.docx
```

### What is the syntax for updating the encryption key using cipher in CMD?
To update the encryption key for a folder named "Confidential" located in F:\Data, use the following command:
```cmd
cipher /R:1 F:\Data\Confidential
```
## Applications of the CIPHER Command

- Encrypt files and folders
- Decrypt encrypted files and folders
- Display encryption status of files and folders
- Wipe free space on a drive
- Wipe all data on a drive
- Backup and restore EFS certificates and keys