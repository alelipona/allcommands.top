---
title: Windows CHGUSR command
description: Learn how to use the Windows chgusr command to change the user associated with a process or service.
---

The Windows chgusr command allows users to change the user associated with a process or service. This can be useful for troubleshooting or security purposes. By utilizing this command, users can specify the user account to be used to run a particular process or service. The chgusr command requires administrative privileges to execute and can be particularly handy in situations where the default user account needs to be changed for a specific operation.

To use the chgusr command, users need to open a Command Prompt window with administrative privileges. The basic syntax for the chgusr command is as follows:

```
chgusr /user:<Username> /command:<Command>
```

Replace `<Username>` with the desired user account and `<Command>` with the command that needs to be run under the specified user account. It is important to note that the specified user account must already exist on the system.

Overall, the Windows chgusr command provides users with flexibility and control over the user accounts associated with processes and services. By understanding how to use this command effectively, users can optimize their system operations and enhance security measures.
## CHGUSR Syntax:
```cmd
chgusr [options] username
```
## Options:
| Option   | Description                             |
|----------|-----------------------------------------|
| -h       | Display help for the chgusr command.    |
| -p       | Prompt for password for the new user.   |
| -r       | Remove user from the current session.   |

## Parameters:
| Parameter | Description                                  |
|-----------|----------------------------------------------|
| username  | Specify the username to change to.           |

:::caution
Exercise caution when using the chgusr command, as it can change the user context and potentially disrupt the current session.
:::
## CHGUSR Usage:
### Change Current User Context
```cmd
chgusr /execute /user:Admin
```
Change the current user's context to the user "Admin".

### Run Command as a Different User
```cmd
chgusr /execute /user:User2 /cmd:ipconfig
```
Run the "ipconfig" command as a different user "User2" to view network configuration details.

### Start a Program as Another User
```cmd
chgusr /execute /user:Guest /program:"C:\Program Files\Application.exe"
```
Start an application located at "C:\Program Files\Application.exe" as the user "Guest".

### Execute a Command with Elevated Privileges
```cmd
chgusr /execute /elevate /user:Admin /cmd:regedit
```
Execute the "regedit" command with elevated privileges as the user "Admin".
:::tip
When using the chgusr command in CMD, make sure to run the command with proper administrative privileges to avoid any issues related to user permissions.
:::

### How do I use chgusr in CMD?
To use the chgusr command in CMD, execute the following command:
```cmd
chgusr /executeas:user1 "dir"
```

### What is the purpose of the chgusr command in CMD?
The chgusr command in CMD is used to execute a command or a script under a different user context without logging off from the current session.

### How can I specify the user to execute a command with the chgusr command in CMD?
You can specify the user by using the `/executeas` option followed by the username. 
```cmd
chgusr /executeas:user1 "ipconfig"
```

### Can I run interactive commands with the chgusr command in CMD?
Yes, you can run interactive commands by adding the `/interactive` option to the chgusr command.
```cmd
chgusr /executeas:user1 /interactive "notepad"
```

### How do I switch back to the original user after executing a command with chgusr in CMD?
To switch back to the original user, you can use the `/restore` option in the chgusr command.
```cmd
chgusr /restore
```

### Is it possible to run PowerShell commands using chgusr in CMD?
Yes, you can run PowerShell commands by specifying the path to the PowerShell executable within the chgusr command.
```cmd
chgusr /executeas:user1 "powershell.exe -Command Get-Process"
```

## Applications of the CHGUSR Command

- Changing the current user in a Windows command prompt
- Running a command prompt as a different user using the CHGUSR command