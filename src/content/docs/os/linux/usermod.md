---
title: Linux usermod command
description: Learn how to modify user account details on Linux with the usermod command.
---

The Linux usermod command is used to modify user account details on a Linux system. It allows system administrators to change various attributes of a user account, such as username, user ID, primary group, home directory, and login shell. By using the usermod command, administrators can easily update user account information without having to delete and recreate the user account. This command provides a convenient way to manage user accounts and make necessary adjustments as needed.

## usermod Syntax:
```bash
usermod [options] username
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -c     | Add a comment for the user              |
| -d     | Change the user's home directory        |
| -e     | Set account expiry date for the user    |
| -g     | Change the user's initial login group   |
| -G     | Add the user to supplementary group(s)  |
| -l     | Change the user's login name            |
| -p     | Set the user's encrypted password       |
| -s     | Change the user's login shell           |
| -u     | Change the user's ID                     |

## Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| username  | The username of the user to modify  |

:::caution
Exercise caution when using the usermod command as incorrect usage can lead to unexpected behavior or changes to user account settings.
:::
## usermod Usage:
### Add User to Secondary Group
```bash
usermod -aG groupname username
```
This command adds the user "username" to the secondary group "groupname".

### Change User's Home Directory
```bash
usermod -d /path/to/new/home username
```
Changes the user "username" home directory to the specified path.

### Lock User Account
```bash
usermod -L username
```
Locks the user account for "username", preventing login.

### Set User Account Expiry Date
```bash
usermod -e 2023-12-31 username
```
Sets the expiry date for the user account "username" to December 31, 2023.
:::tip
When using the usermod command in Linux, ensure that you have the necessary permissions to modify user accounts. It is recommended to make a backup of important data before making any changes. Always double-check the options and values you provide to avoid unintended consequences.
:::

## Common Questions on usermod Usage:
### 1. How do I use usermod to change a user's home directory in Linux?
To change a user's home directory in Linux using usermod, execute the following command:
```bash
usermod -d /path/to/new/home -m username
```

### 2. How can I add a user to additional groups with usermod in Linux?
To add a user to additional groups using usermod in Linux, run the following command:
```bash
usermod -aG group1,group2 username
```

### 3. How do I set the expiry date for a user account with usermod in Linux?
To set the expiry date for a user account in Linux using usermod, use the following command:
```bash
usermod -e YYYY-MM-DD username
```

### 4. How can I disable a user account with usermod in Linux?
To disable a user account in Linux using usermod, execute the following command:
```bash
usermod -L username
```

### 5. How do I unlock a locked user account with usermod in Linux?
To unlock a locked user account in Linux using usermod, run the following command:
```bash
usermod -U username
```

### 6. Can I change a user's login name with usermod in Linux?
Yes, you can change a user's login name using usermod in Linux by running the following command:
```bash
usermod -l newusername oldusername
```

### 7. How can I force a user to change their password at next login with usermod in Linux?
To force a user to change their password at the next login in Linux using usermod, use the following command:
```bash
usermod -e 1970-01-01 -f 30 username
```

## Applications of the usermod command

- Modify user attributes
- Change user's home directory
- Change user's login name
- Add or remove user from a group
- Set expiration date for a user account
- Lock or unlock a user account