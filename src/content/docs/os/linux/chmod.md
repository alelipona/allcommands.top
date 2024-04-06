---
title: chmod Linux command
description: Learn how to use the Linux chmod command to change file permissions, allowing or denying access to users, groups, and others.
---

The Linux chmod command is used to change the permissions of a file or directory. With chmod, you can modify the read, write, and execute permissions for the owner of the file, the group that the file is associated with, and everyone else. This command allows you to control who can access and modify your files, enhancing the security of your system. By using symbolic or octal notation, you can assign specific permissions to different user categories, granting or restricting access as needed. Mastering chmod is essential for managing file permissions effectively in a Linux environment.

## chmod Syntax:
```bash
chmod [options] mode file
```
## Options:
| Option    | Description                                      |
|-----------|--------------------------------------------------|
| -c        | Print changes made                               |
| -f        | Suppress error messages                          |
| -v        | Verbose mode, display output                     |
| -R        | Recursive mode, change files and directories     |
| -h        | Changing symbolic links instead of the files     |
| -help     | Display help for chmod command                   |

## Parameters:
| Parameter | Description                                   |
|-----------|-----------------------------------------------|
| mode      | Specifies the new permissions for the file(s) |
| file      | Specifies the file(s) to be modified          |

:::caution
Be cautious when using the chmod command as incorrect usage may unintentionally change permissions for files and directories, potentially leading to security vulnerabilities or system malfunctions.
:::
## chmod bash Examples:
### Change File Permissions for Owner, Group, and Others
```bash
chmod 755 examplefile.txt
```
This command changes the permissions of the file "examplefile.txt" to allow the owner to read, write, and execute (7), and the group and others to only read and execute (5).

### Change File Permissions Recursively
```bash
chmod -R 644 documents/
```
The -R option is used for changing permissions recursively. This command changes the permissions of all files in the "documents" directory to allow the owner to read and write, and the group and others to only read.

### Assign Specific Permissions Using Symbolic Mode
```bash
chmod u=rw,g=r,o=r example.txt
```
This command uses symbolic mode to set the permissions for "example.txt" to allow the owner to read and write, the group to read, and others to read only.

### Restricting All Permissions for a File
```bash
chmod a= example.txt
```
This command removes all permissions for "example.txt", making it inaccessible to anyone.

### Grant Execute Permissions to Owner, Group, and Others
```bash
chmod +x script.sh
```
This command grants execute permission to the owner, group, and others for the file "script.sh".

### Adding Execute Permission for the Owner
```bash
chmod u+x program.py
```
This command adds execute permission for the owner only to the file "program.py".
:::tip
When using the chmod command in Linux, make sure to understand the file permissions and the desired changes you want to apply. It is important to use the command with caution, as incorrect permissions can potentially compromise the security or functionality of your files.
:::

### How do I change file permissions using symbolic notation in Linux?
To change file permissions using symbolic notation in Linux, you can use commands like the following:
```bash
chmod u+x file.txt
```

### How can I give read, write, and execute permissions to a file for the owner, group, and others in Linux?
To give read, write, and execute permissions to a file for the owner, group, and others in Linux, you can use the following chmod command:
```bash
chmod u=rwx,g=rwx,o=rwx file.txt
```

### How do I remove execute permissions from a file in Linux?
To remove execute permissions from a file in Linux, you can use the following command:
```bash
chmod -x file.txt
```

### How can I recursively change file permissions in a directory and all its subdirectories in Linux?
To recursively change file permissions in a directory and all its subdirectories in Linux, you can use the -R option with the chmod command, like this:
```bash
chmod -R 755 directory/
```

### How do I change the group ownership of a file using chmod in Linux?
To change the group ownership of a file in Linux, you can use the following command syntax:
```bash
chmod g+rw file.txt
```

### How can I set the sticky bit permission using chmod in Linux?
To set the sticky bit permission using chmod in Linux, you can use the following command:
```bash
chmod +t directory/
```

### How do I change only the group permissions of a file in Linux?
To change only the group permissions of a file in Linux, you can use the following command:
```bash
chmod g-w file.txt
```

### How can I assign permissions numerically using chmod in Linux?
To assign permissions numerically using chmod in Linux, you can use the following format:
```bash
chmod 644 file.txt
```

## Applications of the chmod command

- Changing the permissions of a file or directory
- Setting read, write, and execute permissions for owner, group, and others
- Making a file executable
- Restricting access to a file or directory
- Granting specific permissions to specific users or groups
- Modifying file permissions recursively with the `-R` option