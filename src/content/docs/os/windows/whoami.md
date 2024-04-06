---
title: Windows WHOAMI command
description: Discover the purpose and usage of the Windows whoami command for user information retrieval.
---

The Windows whoami command is used to display the username and group information for the current user. It can also show the privileges of the user, such as being a member of the administrators group. This command is useful for troubleshooting and verifying the user account details within a Windows environment. You can run the whoami command in the command prompt to quickly access this information.

## WHOAMI Syntax:
```cmd
whoami [/USER] [/GROUPS] [/PRIV]
```

## Options:
| Option   | Description                   |
|----------|-------------------------------|
| /USER    | Displays the current username.|
| /GROUPS  | Displays the groups a user is a member of.|
| /PRIV    | Displays the privileges of the current user.|

## Parameters:
There are no parameters for the whoami command.

:::caution
Exercise caution when using the whoami command, as it reveals potentially sensitive information about the current user, such as username, group memberships, and privileges.
:::
## WHOAMI Usage:
### Display Current User
```cmd
whoami
```
Displays the username and group information for the current user.

### Verify User Privileges
```cmd
whoami /priv
```
Displays the current user's security privileges, such as enabled and disabled privileges.

### Output User and Group Information
```cmd
whoami /all
```
Displays detailed information about the current user, including user name, group memberships, and security identifiers.

### Check User and Group Information in JSON format
```cmd
whoami /fo json
```
Displays user and group information in JSON format, suitable for parsing and scripting purposes.
:::tip
When using the whoami command in Windows, remember to check the available options by running "whoami /?" to see all the different flags and parameters you can use.
:::

### How do I use whoami in Windows?
To use the whoami command in Windows, execute the following command:
```cmd
whoami
```

### What is the purpose of the /UPN parameter in whoami?
The /UPN parameter in whoami displays the current User Principal Name (UPN) in the output. Here is an example of using it:
```cmd
whoami /UPN
```

### How can I display the current privileges with whoami?
You can display the current privileges using the /PRIV parameter in whoami. Simply execute the command shown below:
```cmd
whoami /PRIV
```

### How do I check group memberships with whoami?
To check group memberships in Windows using whoami, use the /GROUPS parameter. Here is the command example:
```cmd
whoami /GROUPS
```

### Can I get the SID (Security Identifier) using whoami?
Yes, you can retrieve the SID (Security Identifier) for the current user by using the /SID parameter with whoami. Run the following command:
```cmd
whoami /SID
```

### How do I display the logon ID with whoami?
To display the logon ID, you can use the /LOGONID parameter with the whoami command. Here is how to do it:
```cmd
whoami /LOGONID
```

### What is the /USER parameter used for in the whoami command?
The /USER parameter in whoami displays the current username. To see the username, execute the following command:
```cmd
whoami /USER
```

## Applications of the WHOAMI Command

- Verifying the current user's identity
- Checking group membership
- Scripting and automation tasks
- Troubleshooting and diagnosing user permission issues