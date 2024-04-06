---
title: CONVERT Windows Command Guide
description: Easily convert file systems and characters with the Windows convert command. Learn how to use convert in Windows for seamless data transfer.
---

The Windows convert command is a powerful tool that allows users to convert file systems on their hard drives, making it easy to transfer data between different systems. With the convert command, you can seamlessly move files between FAT and NTFS file systems, ensuring compatibility and efficiency. Additionally, the convert command can also be used to convert the character sets of text files, making it easier to work with files in different languages. By following a few simple steps, you can quickly and efficiently convert your files with the Windows convert command.

## CONVERT Syntax:
```cmd
convert [drive:][path] [/fs:ntfs] [/v] [/v]
```

## Options:
| Option     | Description                           |
|------------|---------------------------------------|
| /fs:ntfs   | Specifies the NTFS file system        |
| /v         | Displays the name of the volume       |

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| [drive:][path] | Specifies the drive and directory to convert |

:::caution
Caution: Converting a drive to NTFS is irreversible and may result in data loss. Make sure to back up all important data before using the convert command.
:::
## CONVERT Command Samples:
### Convert a file from FAT32 to NTFS
```cmd
convert C: /fs:ntfs
```
Converts the file system of the C drive from FAT32 to NTFS.

### Convert a file from NTFS to exFAT
```cmd
convert D: /fs:exfat
```
Converts the file system of the D drive from NTFS to exFAT.

### Convert an external drive to NTFS
```cmd
convert E: /fs:ntfs
```
Converts the file system of the external E drive to NTFS.

### Convert a specific folder to NTFS
```cmd
convert F:\myfolder /fs:ntfs
```
Converts the file system of the "myfolder" folder on the F drive to NTFS.

### Convert a FAT32 USB drive to exFAT
```cmd
convert G: /fs:exfat
```
Converts the file system of the G USB drive from FAT32 to exFAT.
:::tip
When using the convert command in CMD, make sure to carefully review the available options and their values to ensure the desired outcome. Always double-check the source and target file formats before converting to avoid any data loss or unexpected results.
:::

## CONVERT FAQ:
{Questions}
## Applications of the CONVERT Command

- Change the file system of a volume
- Convert a volume to NTFS
- Convert a volume FAT32 file system to exFAT
- Convert a volume FAT file system to exFAT
- Specify the allocation unit size for a volume