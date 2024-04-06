---
title: WHOAMI CMD Windows
description: Learn about the Windows WHOAMI command, its usage, options, and outputs. Find out how to identify the current user, domain, and group information with WHOAMI.
---
The Windows WHOAMI command is a useful tool that displays user, domain, and group information on the current system. It helps users quickly identify their logged-in username, domain name, and security identifiers. WHOAMI provides an efficient way to retrieve essential user information in command-line environments without the need for extensive configurations. By executing WHOAMI, users can access valuable details about their authentication credentials and group membership, aiding in system management and troubleshooting processes.
## WHOAMI Syntax:
```cmd
whoami [/upn][/fqdn][/logonid][/user][/groups][/priv]
```
## Options:

| Option | Description                         |
|--------|-------------------------------------|
| /upn   | Displays the user principal name.   |
| /fqdn  | Displays the fully qualified domain name.  |
| /logonid   | Displays the logon ID of the current user.   |
| /user  | Displays the current username.  |
| /groups   | Displays the current user's group memberships.  |
| /priv   | Displays the current user's privileges.  |

***
## Parameters:

There are no specific parameters for the WHOAMI command.

:::caution
The WHOAMI command provides information about the current user, groups, user privileges, etc. It should be used with caution as it discloses sensitive information about the user context. Be mindful of where and how this command is used to prevent unintentional exposure of sensitive data.
:::
***
## Examples:
### Display Current User Name
```cmd
whoami
```
This command will display the current username of the logged-in user.

### Display User and Group Information
```cmd
whoami /all
```
Running this command with the /all option will display detailed information about the current user, including user name, groups, and security identifiers (SIDs).

### Check if User is Part of a Specific Group
```cmd
whoami /groups | find "Administrators"
```
This command will check if the current user is a member of the Administrators group by filtering the output for the group name.
:::tip
When using the WHOAMI command in CMD, make sure to carefully read the available options and choose the one that best fits your needs. Double-check the syntax of your command before executing it to avoid any errors.
:::

## WHOAMI FAQ:
### How do I use WHOAMI in CMD?
To use the WHOAMI command in CMD, execute the following command:
```cmd
WHOAMI /USER
```
---

### What does the /USER option do in WHOAMI?
The /USER option in the WHOAMI command displays the current username.
```cmd
WHOAMI /USER
```
---

### How can I display group membership with WHOAMI?
To display group membership with WHOAMI, use the /GROUPS option.
```cmd
WHOAMI /GROUPS
```
---

### What is the purpose of the /PRIV option in WHOAMI?
The /PRIV option in the WHOAMI command shows the current user's privileges.
```cmd
WHOAMI /PRIV
```
---