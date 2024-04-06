---
title: ICACLS command in Windows
description: Manage file permissions with the Windows icacls command efficiently. Set, modify, or troubleshoot access control lists directly from the command prompt.
---

The ICACLS command is a powerful tool in Windows for managing file permissions. With this command, you can set, modify, or troubleshoot access control lists directly from the command prompt. It allows for granular control over who can access or modify files and directories, making it an essential tool for system administrators and advanced users. By using ICACLS, you can view, edit, backup, or restore ACLs, granting or revoking permissions for specific users or groups.


## ICACLS Syntax:
```cmd
icacls [filename] [/grant [:r]] [user:permission]
```

## Windows ICACLS Options:
| Option | Description                           |
|--------|---------------------------------------|
| /grant | Grants specified user permissions     |
| /deny  | Denies specified user permissions      |

## ICACLS Parameters:
| Parameter   | Description                                   |
|-------------|-----------------------------------------------|
| filename    | Specifies the file or directory to modify     |
| user        | Specifies the user to modify permissions for   |
| permission  | Specifies the permissions to grant or deny    |

:::caution
Exercise caution when using the icacls command as incorrectly modifying permissions can lead to unintended consequences. Always double-check the permissions you are assigning to avoid locking yourself out of files or compromising system security.
:::
## How to use ICACLS command:
### Grant "Full Control" Permission to a User on a Folder
```cmd
icacls "C:\ExampleFolder" /grant John:(F)
```
Grants the user "John" full control permission on the folder "ExampleFolder".

### Deny Read Permission to a User on a File
```cmd
icacls "C:\ExampleFile.txt" /deny Jane:(R)
```
Denies the user "Jane" read permission on the file "ExampleFile.txt".

### Remove all Permissions for a Group on a Folder and its Subfolders
```cmd
icacls "D:\Documents" /remove Everyone /t
```
Removes all permissions for the group "Everyone" on the folder "Documents" and its subfolders.

### Backup and Restore Permissions on a Folder
```cmd
icacls C:\ExampleFolder /save C:\permissions_backup.txt
icacls D:\RestoredFolder /restore C:\permissions_backup.txt
```
Saves the permissions of "ExampleFolder" to a file and then restores them on a different folder "RestoredFolder".

### Display ACLs in a Specific Folder and Export to a File
```cmd
icacls "C:\Users\Admin" /c /t > C:\ACLoutput.txt
```
Displays all ACLs in the folder "Admin" and its subfolders, then exports the output to a file named "ACLoutput.txt".

### Grant Permission to a Group and Propagate to Subfolders Only
```cmd
icacls "E:\SharedFolder" /inheritance:r /grant Managers:(OI)(CI)F /t
```
Grants the group "Managers" full control permission on the folder "SharedFolder" and its subfolders, without inheriting permissions from the parent folder.

### Set Audit on a Directory for Success and Failure Events
```cmd
icacls "C:\SensitiveData" /setintegritylevel L
icacls "C:\SensitiveData" /grant John:(ST, S, F, FA, RA, WA)
```
Sets integrity level on the directory "SensitiveData" and grants specific audit permissions to the user "John" for success and failure events.

### Revert to Inherited Permissions on a File
```cmd
icacls "E:\RestrictedFile.txt" /inheritance:r
```
Removes explicit permissions on the file "RestrictedFile.txt" and reverts to inherited permissions.
:::tip
When using the icacls command in Windows, make sure to run the command prompt as an administrator to avoid permission errors.
:::

### How do I use icacls in CMD?
To use the icacls command in Windows, execute the following command:
```cmd
icacls --option <value>
```

### What is the purpose of icacls in Windows?
To manage file and folder permissions in Windows through the command line interface.

### How can I grant specific permissions using icacls?
You can grant permissions to a user or group using the following command:
```cmd
icacls "C:\example\folder" /grant username:(D)
```

### How can I deny permissions using icacls?
To deny specific permissions to a user, you can use the following command:
```cmd
icacls "C:\example\folder" /deny username:(D)
```

### How can I remove all existing permissions for a user using icacls?
To remove all existing permissions for a user, you can use the following command:
```cmd
icacls "C:\example\folder" /remove username
```

### How can I view the permissions of a file or folder with icacls?
You can view the permissions applied to a file or folder using the following command:
```cmd
icacls "C:\example\folder"
```

### How can I backup the permissions of a file or folder using icacls?
To backup the permissions of a file or folder, you can use the following command:
```cmd
icacls "C:\example\folder" /save "C:\example\permissions_backup.txt"
```

### How can I restore permissions from a backup file using icacls?
You can restore permissions from a backup file using the following command:
```cmd
icacls "C:\example\folder" /restore "C:\example\permissions_backup.txt"
```

## Applications of the ICACLS Command

- Setting permissions on files and directories
- Viewing current permissions on files and directories
- Changing ownership of files and directories
- Granting or revoking specific permissions to users and groups
- Inheriting or removing inheritance of permissions from parent directories
- Auditing access control lists (ACLs) for files and directories