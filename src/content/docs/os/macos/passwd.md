---
title: passwd MacOS command
description: Change your macOS user account password with the passwd command. Learn how to update your password securely and efficiently.
---

The MacOS passwd command allows users to change their account password easily and securely. By using this command, users can update their password to enhance security and comply with password expiration policies. The passwd command provides a simple and effective way for MacOS users to manage their account passwords without hassle.
## passwd Syntax:
```bash
passwd [options] [username]
```

## passwd Options:
| Option | Description |
|--------|-------------|
| -l, --lock | Lock the password of the specified account |
| -u, --unlock | Unlock the password of the specified account |
| -d, --delete | Delete the password of the specified account |
| -e, --expire | Force the specified account to change their password upon next login |
| -h, --help | Display help message |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| username  | The username of the account for which the password should be changed or modified |
## passwd Command Usage Examples:
### Change Your Own Password
```bash
passwd
```
This command allows the current user to change their own password.

### Change Another User's Password (Requires Root Privileges)
```bash
sudo passwd username
```
Using sudo with passwd allows the root user to change another user's password.

### Set Password Expiration for a User
```bash
sudo passwd -e username
```
Setting an expiration date for a user's password can be done with the "-e" option.

### Lock a User's Account
```bash
sudo passwd -l username
```
Lock a user's account temporarily to prevent them from logging in.

### Unlock a User's Account
```bash
sudo passwd -u username
```
After locking a user's account, it can be unlocked again using the "-u" option.
:::tip
When using the passwd command in MacOS, make sure to follow the proper syntax and options to change the password for the specified user. Always double-check the user you are changing the password for to avoid any unintended changes.
:::

### How do I use passwd in MacOS?
To use the passwd command in bash, execute the following command:
```bash
passwd
```

### How to change the password for a specific user in MacOS?
To change the password for a specific user in MacOS, use the passwd command followed by the username you want to change the password for:
```bash
passwd username
```

### How to force a user to change their password at the next login in MacOS?
To force a user to change their password at the next login in MacOS, use the -e option with the passwd command along with the username:
```bash
passwd -e username
```

### How to display password status information in MacOS?
To display password status information in MacOS, use the -S option with the passwd command:
```bash
passwd -S
```

### How to change the password algorithm in MacOS?
To change the password algorithm in MacOS, use the -h option followed by the desired algorithm with the passwd command:
```bash
passwd -h algorithm
```

### How to lock a user account in MacOS using passwd?
To lock a user account in MacOS using passwd, you can use the -l option followed by the username:
```bash
passwd -l username
```

### How to unlock a locked user account in MacOS using passwd?
To unlock a locked user account in MacOS using passwd, you can use the -u option followed by the username:
```bash
passwd -u username
```

### How to set a maximum number of days before a password change is required in MacOS?
To set a maximum number of days before a password change is required in MacOS, use the -n option with the passwd command followed by the number of days:
```bash
passwd -n days
```
## Applications of the passwd command

- Change the user's password
- Update password aging information
- Set password expiration information
- Lock or unlock a user's account