---
title: SHARE command in Windows
description: Learn how to use the SHARE command in Windows to share files and folders with other users on the network. 
---

The Windows SHARE command allows users to easily share files and folders with other users on the network. By using this command, you can grant or revoke access to shared resources, set permissions, and manage shared resources efficiently. Share your files and folders seamlessly with others using the Windows SHARE command.
## SHARE Syntax:
```cmd
net share [sharename=drive:path] [/grant:user,[READ | CHANGE | FULL]] [/delete]
```
## Windows SHARE Options:
| Option  | Description                                    |
|---------|------------------------------------------------|
| sharename=drive:path | Specifies the name of the shared resource and the physical location of the resource to share. |
| /grant:user,[READ &#124; CHANGE &#124; FULL] | Grants specific permissions to a user for the shared resource. |
| /delete | Deletes an existing share. |

## SHARE Parameters:
| Parameter | Description                                                      |
|-----------|------------------------------------------------------------------|
| sharename | Name of the shared resource and the path to the physical location. |
| user      | The user or group to which permissions are granted.              |
| READ      | Grants read-only access to the shared resource.                 |
| CHANGE    | Grants read and write access to the shared resource.             |
| FULL      | Grants full control over the shared resource.                   |

:::caution
Exercise caution when using the `net share` command as it can share resources and grant permissions, which may impact system security and data integrity. Only share necessary resources and be mindful of the permissions granted.
:::
## How to use SHARE command:
### Share a Folder
```cmd
share folderName=C:\Folder /remark:"Shared folder"
```
Shares a folder named "folderName" located at "C:\Folder" with the remark "Shared folder".

### List All Shared Resources
```cmd
share
```
Displays a list of all shared resources on the local computer.

### Share a Printer
```cmd
share printerName="MyPrinter" /remark:"Shared printer"
```
Shares a printer named "MyPrinter" with the remark "Shared printer".

### Stop Sharing a Folder
```cmd
share folderName=C:\Folder /delete
```
Stops sharing the folder named "folderName" located at "C:\Folder".

### Share a Folder with Full Control
```cmd
share folderName=C:\Folder /GRANT:Everyone,FULL
```
Shares a folder named "folderName" located at "C:\Folder" with full control permission for everyone.

### Share a Folder with Read Permission
```cmd
share folderName=C:\Folder /GRANT:User1,Read
```
Shares a folder named "folderName" located at "C:\Folder" with read permission for User1.

### Share a Folder with Password
```cmd
share folderName=C:\Folder /GRANT:Everyone,READ /USERS:User1
```
Shares a folder named "folderName" located at "C:\Folder" with read permission for everyone, requiring a password for User1 to access.

### Share a Folder with Maximum Allowed Users
```cmd
share folderName=C:\Folder /USERS:50
```
Shares a folder named "folderName" located at "C:\Folder" with a maximum allowed user count of 50.
:::tip
When using the share command in Windows CMD, ensure that you have the necessary permissions and administrative rights to create or manage shared resources.
:::

### How do I use share in Windows?
To use the share command in Windows, execute the following command:
```cmd
share --option <value>
```

### What are the available options for the share command?
The share command in Windows CMD provides various options. Here is an example of sharing a folder with specific permissions:
```cmd
share folderName=c:\path /GRANT:everyone,FULL
```

### How can I list all shared folders and their permissions in Windows CMD?
To list all shared folders and their permissions in Windows CMD, use the following command:
```cmd
net share
```

### How do I create a new share using the share command?
To create a new share using the share command in Windows CMD, follow this example:
```cmd
share newShareName=c:\sharedFolder /REMARK:"Shared folder for project"
```

### How can I assign specific permissions to a shared folder using the share command?
To assign specific permissions to a shared folder using the share command, use the /GRANT option. Here is an example:
```cmd
share folderName=c:\path /GRANT:username,WRITE
```

### How do I remove a share using the share command in Windows CMD?
To remove a share using the share command in Windows CMD, execute the following command:
```cmd
share folderName /DELETE
```

### How can I display detailed information about a specific shared resource with the share command?
To display detailed information about a specific shared resource using the share command, use the following syntax:
```cmd
net share shareName
```

### How do I stop sharing a folder in Windows CMD?
To stop sharing a folder in Windows CMD using the share command, follow this example:
```cmd
share folderName /DELETE
```

### How do I change the maximum number of users who can connect to a shared resource using the share command?
To change the maximum number of users who can connect to a shared resource using the share command, use the /USERS option. Here is an example:
```cmd
share folderName /USERS:5
```

## Applications of the SHARE Command

1. List shared resources on a computer
2. Create a new shared folder
3. Modify existing shares
4. Remove shared resources
5. Display and manage shared resources and their permissions
6. Share a folder or printer with specific permissions
7. View detailed information about shared resources