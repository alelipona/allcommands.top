---
title: umask MacOS Command Guide
description: Learn how to use the MacOS umask command to set file permissions on your system.
---

The MacOS umask command is used to set default file permissions for newly created files and directories. It helps you control who can read, write, or execute these files. By changing the umask value, you can customize the default permission settings based on your requirements. Understanding how to use the umask command is essential for managing file permissions effectively on your MacOS system.

## umask Syntax:
```bash
umask [option] [parameter]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -S     | Show file creation mask in symbolic or octal notation   |
| -p     | Changes the umask in a way that it only affects the current shell session  |

## Parameters:
| Parameter | Description                                         |
|-----------|-----------------------------------------------------|
| mask      | Octal number representing the file creation mask    |

:::caution
Exercise caution while using the umask command as it directly affects the default permissions assigned to newly created files and directories in the system.
:::
## umask Command Samples:
### Set the default umask value to 022
```bash
umask 022
```
This command sets the default umask value to 022, which means new files will have permissions 644 and directories will have permissions 755.

### View the current umask value
```bash
umask
```
Executes the umask command without any arguments to display the current umask value.

### Change the umask value to 027
```bash
umask 027
```
Sets the umask value to 027, meaning new files will have permissions 640 and directories will have permissions 750.

### Reset the umask value to the default
```bash
umask
```
Running umask without any arguments resets the umask value to the default setting of 0022.

### Set the umask value using symbolic notation
```bash
umask u+r,g+w,o-x
```
Sets the umask value using symbolic notation where "u" stands for user, "g" for group, and "o" for others. In this example, user has read permissions, group has write permissions, and others have execute permissions removed.

### Check the umask value in octal notation
```bash
umask -S
```
Displays the current umask value in symbolic notation which specifies the file mode creation mask.

### Verify the umask value after changing it
```bash
umask
```
After changing the umask value, use this command to verify that the changes have been applied successfully.
:::tip
Remember that umask in MacOS works slightly differently compared to Linux systems. It sets the default permissions for newly created files and directories by subtracting the specified mask from the maximum permissions. 
:::

## umask FAQ:
### How do I use umask in MacOS?
To use the umask command in MacOS, execute the following command:
```bash
umask --S 027
```

### What is the purpose of umask in MacOS?
The umask command in MacOS is used to set default file permissions for newly created files and directories.

### How can I display the current umask value in MacOS?
To display the current umask value in MacOS, you can use the following command:
```bash
umask
```

### How do I change the default umask value in MacOS?
You can change the default umask value in MacOS using the following command:
```bash
umask 022
```

### Can I use symbolic notation with umask in MacOS?
Yes, you can use symbolic notation with umask in MacOS. For example, to set umask using symbolic notation, you can use the following command:
```bash
umask u=rwx,go=rx
```

### How does umask work in MacOS compared to Linux?
In MacOS, umask sets the default permissions for newly created files and directories by subtracting the specified mask from the maximum permissions, which is different from Linux systems.
## Applications of the umask command

- Set default permissions for newly created files and directories
- Limit the permissions for specific users or groups
- Enhance security by restricting access to certain files or directories
- Ensure consistency in file permissions within a system or environment