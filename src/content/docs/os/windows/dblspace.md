---
title: DBLSPACE Windows command
description: Learn how to use the DBLSPACE command on Windows to compress and manage disk space efficiently.
---

The DBLSPACE command on Windows is used to compress and manage disk space efficiently. It allows users to create and manage compressed drive volumes, making it easier to store large amounts of data on their hard drive. By using DBLSPACE, users can save disk space by compressing files and directories, reducing the amount of space they take up on the disk. This can be particularly useful for users who have limited disk space or need to free up space for other applications. Overall, the DBLSPACE command can help users better manage their disk space and improve the overall performance of their system.
## DBLSPACE Syntax:
```cmd
dblspace [drive:][path] [/create] [/delete] [/list]
```

## Windows DBLSPACE Options:
| Option    | Description                      |
|-----------|----------------------------------|
| /create   | Create a new compressed drive.   |
| /delete   | Delete a compressed drive.       |
| /list     | List all compressed drives.      |

## DBLSPACE Parameters:
| Parameter  | Description                            |
|------------|----------------------------------------|
| [drive:]   | Specifies the drive letter for DBLSPACE.|
| [path]     | Specifies the directory path for DBLSPACE.|

:::caution
Exercise caution when using the DBLSPACE command as it directly affects the storage and compression of drives on your system.
:::
## How to use DBLSPACE command:
### Create a new compressed drive with a specified size
```cmd
dblspace /create /size:100 /drive:Z
```
Creates a new compressed drive with a size of 100 MB and assigns it the drive letter Z.

### Mount an existing compressed drive to a specified drive letter
```cmd
dblspace /mount /drive:C /newdrive:Z
```
Mounts an existing compressed drive with the drive letter C to a new drive letter Z.

### Display information about the compressed drives
```cmd
dblspace /list
```
Displays information about all the compressed drives on the system.

### Expand the capacity of an existing compressed drive
```cmd
dblspace /expand /drive:Z /size:50
```
Expands the capacity of the compressed drive Z by an additional 50 MB.

### Delete a compressed drive
```cmd
dblspace /delete /drive:Z
```
Deletes the compressed drive with the drive letter Z.

### Check the integrity of the compressed drives
```cmd
dblspace /verify
```
Checks the integrity of all the compressed drives on the system.

### Defragment a compressed drive
```cmd
dblspace /defrag /drive:Z
```
Defragments the compressed drive with the drive letter Z to optimize its performance.

### Enable drive compression for a specific drive
```cmd
dblspace /compress /drive:Z
```
Enables drive compression for the drive with the letter Z.
:::tip
When using the dblspace command in CMD, make sure to carefully follow the syntax and provide the necessary options and values to achieve the desired results.
:::

### How do I use dblspace in CMD?
To use the dblspace command in CMD, execute the following command:
```cmd
dblspace --format C:
```

### How do I compress a drive using dblspace in CMD?
To compress a drive using dblspace in CMD, use the following command:
```cmd
dblspace --compress D:
```

### How do I mount a compressed drive using dblspace in CMD?
To mount a compressed drive using dblspace in CMD, use the following command:
```cmd
dblspace --mount D:
```

### How do I view information about a compressed drive in CMD using dblspace?
To view information about a compressed drive in CMD using dblspace, enter the following command:
```cmd
dblspace --info D:
```

### How do I uncompress a drive in CMD using dblspace?
To uncompress a drive in CMD using dblspace, use the following command:
```cmd
dblspace --uncompress D:
```

### How do I increase the size of a compressed drive in CMD using dblspace?
To increase the size of a compressed drive in CMD using dblspace, execute the following command:
```cmd
dblspace --resize D: +1GB
```

### How do I defragment a compressed drive in CMD using dblspace?
To defragment a compressed drive in CMD using dblspace, enter the following command:
```cmd
dblspace --defragment D:
```

### How do I delete a compressed drive in CMD using dblspace?
To delete a compressed drive in CMD using dblspace, use the following command:
```cmd
dblspace --delete D:
```

### How do I list all compressed drives in CMD using dblspace?
To list all compressed drives in CMD using dblspace, enter the following command:
```cmd
dblspace --list
```

##Applications of the DBLSPACE Command

1. Compressing and decompressing DriveSpace compressed drives
2. Managing compressed drives created by Windows DriveSpace
3. Checking the status of compressed drives
4. Activating or deactivating compressed drives