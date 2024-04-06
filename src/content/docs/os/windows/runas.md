---
title: Windows RUNAS command
description: Learn about the Windows runas command, its syntax, usage, and options to run programs as a different user in the command line.
---

The Windows runas command allows users to run programs as a different user in the command line. It provides a way to execute applications with elevated permissions or under a different user account without having to log out and log back in. By using the runas command, users can perform tasks that require administrative privileges or access resources that are only available to specific users. The syntax of the runas command includes the program or command to be run, along with the username and password of the target user account. This command can be particularly useful in situations where a user needs to run programs with different levels of access or switch between user accounts seamlessly in a Windows environment.
## RUNAS Syntax:
```cmd
runas [/profile | /env] [/netonly] [/savecred | /netonly] [/smartcard] [/showtrustlevels] [/trustlevel] /user:UserName Program

runas /trustlevel:TrustLevel /profile /env /netonly /savecred /smartcard /showtrustlevels /user:UserEmail Program


```
## Options:
| Option          | Description                                     |
|-----------------|-------------------------------------------------|
| /profile        | Loads the user's profile                        |
| /env            | Uses current environment instead of user's      |
| /netonly        | Indicates credentials are for remote access     |
| /savecred       | Saves credentials for future use                |
| /smartcard      | Indicates the password is a smartcard           |
| /showtrustlevels| Displays a list of available trust levels       |
| /trustlevel     | Specifies the trust level                       |

## Parameters:
| Parameter   | Description                                     |
|-------------|-------------------------------------------------|
| UserName    | The user name for the account to be used         |
| Program     | The program to be executed with elevated privileges |
| UserEmail   | The email address for the account to be used     |
| TrustLevel  | The trust level to be used for elevation         |

:::caution
Caution: Incorrect usage of the runas command can lead to unintended security vulnerabilities. Use with caution and ensure proper authorization before running commands with elevated privileges.
:::
## RUNAS Usage:
### Run Command Prompt as a Different User
```cmd
runas /user:DOMAIN\username cmd
```
Opens a new Command Prompt window running as a different user specified by the "DOMAIN\username".

### Run PowerShell Script as Another User
```cmd
runas /user:username powershell.exe -file C:\Scripts\script.ps1
```
Executes a PowerShell script ("script.ps1") as another user specified by "username".

### Run a Program as an Administrator
```cmd
runas /user:username "C:\Program Files\Application\app.exe"
```
Launches a program ("app.exe") as an administrator with a specific user account "username".

### Run Task Manager with Different Credentials
```cmd
runas /user:Administrator "taskmgr.exe"
```
Starts the Task Manager as an administrator using the built-in Administrator account.
:::tip
When using the runas command in Windows, make sure to carefully review the available options and provide the necessary parameters to execute commands with the desired privileges. Incorrect usage of the runas command may result in unexpected behavior or errors.
:::

## Common Questions on RUNAS Usage:
### How do I use runas in Windows?
To use the runas command in Windows, execute the following command:
```cmd
runas --option <value>
```

### How can I run a program as a different user using runas?
To run a program as a different user in Windows using runas, use the following command:
```cmd
runas /user:Domain\Username "C:\Path\To\Program.exe"
```

### How to run a command prompt as an administrator with runas?
To open a command prompt as an administrator using runas, you can use the following command:
```cmd
runas /user:Administrator "cmd"
```

### Can I use runas with a specific profile or account in Windows?
Yes, you can specify a specific profile or account when using runas in Windows. Use the following command:
```cmd
runas /profile /user:Domain\Username "C:\Path\To\Program.exe"
```

### How to provide a password when using runas in Windows?
When using runas in Windows and prompted for a password, enter the password corresponding to the specified user account to proceed with the command execution securely.

### Is it possible to run a batch script with elevated permissions using runas?
Yes, you can run a batch script with elevated permissions in Windows using runas. Use the following command:
```cmd
runas /user:Domain\Username "C:\Path\To\Script.bat"
```

## Applications of the RUNAS Command

- Running a program as a different user
- Running a program with elevated privileges
- Executing commands with different credentials
- Running scripts and batch files as another user