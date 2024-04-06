---
title: What is CMDKEY Windows command?
description: Manage Windows credentials easily with the CMDKEY command.
---

The Windows cmdkey command allows users to manage stored credentials, including viewing, adding, and removing saved credentials for resources like servers or websites. By using cmdkey in the command prompt, users can update their credentials securely and efficiently. This command is especially useful for IT professionals and system administrators who need to access various network resources regularly. By understanding how to use the cmdkey command effectively, users can simplify the process of managing their credentials and ensure secure access to important resources.

## CMDKEY Syntax:
```cmd
cmdkey [{/add | /generic}:targetname {/smartcard | /user:username {/pass{:password} | /save{:state}}} | /delete:targetname | /list: {targetname | *} | /ras | /? | /?:{targetname | *}]
```

## CMDKEY Options:

| Option                | Description                                     |
|-----------------------|-------------------------------------------------|
| /add                  | Adds a user name and password for the target.    |
| /generic              | Adds a generic credential for the target system. |
| /smartcard            | Specifies that the credentials are on a smart card.|
| /user:username        | Specifies the user name, as in domain\user or user@domain. |
| /pass{:password}      | Specifies the password for the user.            |
| /save{:state}         | Specifies to save the password.                  |
| /delete:targetname    | Deletes a stored credential for the target.      |
| /list:{targetname | *} | Lists stored credentials.                      |
| /ras                  | Creates a credential for use with RAS.           |
| /?                    | Displays help at the command prompt.             |
| /?:{targetname | *}   | Provides more information about the command.    |

:::caution
Exercise caution when using the cmdkey command as it involves storing sensitive information such as passwords. Make sure to keep your stored credentials secure and be aware of potential security risks.
:::

## Parameters:
| Parameter      | Description                                            |
|----------------|--------------------------------------------------------|
| targetname     | Specifies the name of the target computer or service.  |
| username       | Specifies the username for the target credential.      |
| password       | Specifies the password for the target credential.      |
| state          | Specifies the state of saving the password.            |
| *              | Specifies all target credentials to be listed or deleted. |
## CMDKEY Command Usage Examples:
### Add a Generic Windows Credential for a Specific Target
```cmd
cmdkey /add:targetname /user:username /pass:password
```
Adds a generic Windows credential for a specific target using the CMDKEY command.

### List Stored Credentials
```cmd
cmdkey /list
```
Displays a list of stored credentials on the system using the CMDKEY command.

### Remove a Stored Credential for a Specific Target
```cmd
cmdkey /delete:targetname
```
Removes a stored credential for a specific target from the system using the CMDKEY command.

### Add a Domain Credential
```cmd
cmdkey /add:targetname /user:username /pass:password /domain:domainname
```
Adds a domain credential for a specific target using the CMDKEY command.

### Remove All Stored Credentials
```cmd
cmdkey /delete /ras
```
Removes all stored credentials related to Remote Access Services (RAS) using the CMDKEY command.
:::tip
Make sure to run CMD as an administrator when using the cmdkey command to avoid any permission issues.
:::

### How do I use cmdkey in CMD?
To use the cmdkey command in CMD, execute the following command:
```cmd
cmdkey /add:server01 /user:username /pass:password
```

### What is the purpose of the cmdkey command in CMD?
The cmdkey command in CMD is used to manage stored credentials in Windows, such as adding, removing, or listing stored credentials.
```cmd
cmdkey /list
```

### How can I add a credential with cmdkey in CMD?
You can add a credential using the cmdkey command in CMD by specifying the target server, username, and password.
```cmd
cmdkey /add:server01 /user:username /pass:password
```

### How do I remove a stored credential with cmdkey in CMD?
To remove a stored credential using the cmdkey command in CMD, specify the target server you want to remove the credentials for.
```cmd
cmdkey /delete:server01
```

### Can I list all the stored credentials using cmdkey in CMD?
Yes, you can list all the stored credentials in CMD by executing the following command:
```cmd
cmdkey /list
```

### How can I update a stored password with cmdkey in CMD?
To update a stored password using the cmdkey command in CMD, you can simply add the new password for the existing credential.
```cmd
cmdkey /add:server01 /user:username /pass:newpassword
```

### Is it possible to store credentials for a remote server using cmdkey in CMD?
Yes, you can store credentials for a remote server using the cmdkey command in CMD by specifying the server name, username, and password.
```cmd
cmdkey /add:server01 /user:username /pass:password
```

### How do I clear all stored credentials with cmdkey in CMD?
To clear all stored credentials using the cmdkey command in CMD, you can use the following command:
```cmd
cmdkey /clear
```
## Applications of the CMDKEY Command

- Storing credentials for network resources
- Managing saved credentials for various services and applications
- Automating credential management tasks
- Simplifying authentication processes
- Securing access to sensitive resources