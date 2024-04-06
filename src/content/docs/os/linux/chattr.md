---
title: chattr Linux Command Guide
description: Learn how to use the Linux chattr command to change file attributes and enhance security on your system.
---

The chattr command in Linux allows users to change file attributes such as immutable, append-only, no-dump, and more to enhance security and control access. It can be used to protect important system files and directories from accidental deletion or modification. By setting specific attributes, users can control how files are accessed and modified, providing an extra layer of security for critical data.

## chattr Syntax:
```bash
chattr [options] [parameters] file/path
```

## Options:
| Option | Description                     |
|--------|---------------------------------|
| +a     | Append only                     |
| +c     | Compress file in the file system|
| +d     | Do not back up in dump          |
| +i     | Immutable                       |
| +e     | Encryption                      |
| -e     | Disable encryption              |
| +j     | Data journaling                 |
| -j     | Disable data journaling          |
| +S     | Secure deletion                 |
| +s     | Secure deletion and copying on rolls |
| +T     | No tail-merging                 |
| +u     | Add a file to the dump          |
| -u     | Remove a file from the dump     |

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| file/path | Specify the file or path |
  
:::caution
Using the chattr command should be done carefully, as setting incorrect attributes can lead to unexpected behavior and file system issues.
:::
## chattr Command Samples:
### Prevent a File from Being Modified
```bash
sudo chattr +i file.txt
```
This command sets the immutable attribute on the file.txt file, preventing any modifications to its contents.

### Allow a File to Be Moved or Renamed Only
```bash
sudo chattr +u file.txt
```
This command sets the undeletable attribute on the file.txt file, allowing it to be moved or renamed but not deleted.

### Display Attributes of a File
```bash
lsattr file.txt
```
This command displays the attributes of the file.txt file, showing which special attributes are set.

### Set the Append-Only Attribute on a File
```bash
sudo chattr +a file.txt
```
This command sets the append-only attribute on the file.txt file, allowing new data to be appended but not overwritten.

### Remove the Immutable Attribute from a File
```bash
sudo chattr -i file.txt
```
This command removes the immutable attribute from the file.txt file, allowing modifications to its contents.

### Prevent a File from Being Deleted
```bash
sudo chattr +a file.txt
```
This command sets the immutable attribute on the file.txt file, preventing it from being deleted.

### Set Multiple Attributes on a File
```bash
sudo chattr +aiu file.txt
```
This command sets multiple attributes (immutable, append-only, undeletable) on the file.txt file, providing comprehensive protection.
:::tip
When using the chattr command in Linux, make sure to familiarize yourself with the different options available and their implications on file attributes. Use caution when changing file attributes with chattr as it can have significant effects on how files are accessed and managed.
:::

## chattr FAQ:

### How do I use chattr in Linux?
To use the chattr command in Linux, execute the following command:
```bash
chattr +i filename.txt
```

### What is the purpose of the chattr command in Linux?
The chattr command is used to change the file attributes of a file in Linux, such as making a file immutable or appending data to it.

### How can I make a file immutable using chattr?
You can make a file immutable using chattr by executing the following command:
```bash
chattr +i filename.txt
```

### How do I check the attributes of a file using chattr?
To check the attributes of a file using chattr, run the following command:
```bash
lsattr filename.txt
```

### Can I recursively change file attributes with chattr in Linux?
Yes, you can recursively change file attributes with chattr by using the `-R` option. For example:
```bash
chattr -R +i directory/
```

### How can I remove a specific attribute from a file using chattr?
To remove a specific attribute from a file using chattr, run the following command:
```bash
chattr -<attribute> filename.txt
```

## Applications of the chattr command
- Making files immutable
- Preventing accidental deletion of files
- Preventing files from being renamed
- Preventing files from being modified
- Allowing only appending to files
- Making files undeletable even by root user
- Protecting critical system files