---
title: Linux umask command
description: The Linux umask command is used to set default file permissions on newly created files. Learn how to use umask to control file permissions.
---

The Linux umask command is a built-in shell command used to set default file permissions for newly created files. It allows users to control the permissions of files and directories created by specifying the permissions that should be removed from the default permission settings. By adjusting the umask value, users can ensure that new files are created with the desired level of security and privacy. This command is crucial for managing file permissions in a Unix-based operating system, providing an extra layer of security to prevent unauthorized access to sensitive information.

## umask Syntax:
```bash
umask [option] [parameter]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -S     | Print the umask in symbolic form |
| -p     | Print the umask in octal form    |

## Parameters:
| Parameter | Description                          |
|-----------|--------------------------------------|
| [value]   | Specifies the new umask value in octal format |

:::caution
It's important to set umask values carefully as they directly affect the file and directory permissions for new files created.
:::

## umask Usage:
### Set umask to 022
```bash
umask 022
```
This command sets the default permission mask to 022, which means newly created files will have permissions 644 and directories will have permissions 755.

### Display Current umask Value
```bash
umask
```
Running umask without any arguments displays the current umask value in the terminal.

### Set umask in octal format
```bash
umask 027
```
Setting the umask using octal format allows for specifying different permission settings for owner, group, and others.

### Set umask in symbolic format
```bash
umask u=rwx,g=rx,o=
```
Using symbolic format, this command sets the umask to give the owner full permissions, the group read and execute permissions, and no permissions for others on newly created files.
```
:::tip
Remember that the umask command in Linux is used to set the default file permissions for newly created files or directories. The umask value is subtracted from the maximum permissions (777 for directories and 666 for files) to determine the actual permissions given.
:::

### How do I use umask in Linux?
To use the umask command in Linux, execute the following command:
```bash
umask <value>
```

### What is the default umask value in Linux?
The default umask value in Linux is usually set to 022, which means that newly created files will have permissions of 644 and directories will have permissions of 755. 

### How can I display the current umask value in Linux?
To display the current umask value in Linux, you can simply use the following command:
```bash
umask
```

### How can I change the umask value temporarily in Linux?
To change the umask value temporarily in Linux, you can use the following command:
```bash
umask <new_value>
```

### How can I make a permanent change to the umask value in Linux?
To make a permanent change to the umask value in Linux, you can add the desired umask value to your shell configuration file (e.g., .bashrc, .bash_profile) like this:
```bash
echo "umask <new_value>" >> ~/.bashrc
```

### How does the umask command affect file permissions?
The umask command affects file permissions by subtracting its value from the maximum permissions to determine the actual permissions given to newly created files or directories.

### Can I use symbolic notation with the umask command in Linux?
Yes, you can use symbolic notation with the umask command in Linux. For example, to set a umask of 002, you can use:
```bash
umask u=w,g=w,o=
```

## Applications of the umask command

- Setting default permissions for newly created files
- Ensuring that created files are not given overly permissive permissions
- Enhancing security by restricting default file permissions
- Customizing file permissions to meet specific requirements