---
title: What is passwd Linux command?
description: Change user password on Linux using the passwd command.
---

The Linux passwd command is used to change a user's password. It allows users to update their passwords securely and manage their account access.

## passwd Syntax:
```bash
passwd [options] [username]
```

## passwd Options:
| Option            | Description                                    |
|-------------------|------------------------------------------------|
| -a, --all         | Report password status on all accounts         |
| -d, --delete      | Delete the password for the specified account  |
| -e, --expire      | Force the specified account's password to expire |
| -h, --help        | Display help message                           |
| -l, --lock        | Lock the password of the specified account     |
| -u, --unlock      | Unlock the password of the specified account   |

## Parameters:
| Parameter  | Description                                           |
|------------|-------------------------------------------------------|
| username   | The username for which the password should be changed | 

:::caution
Exercise caution when using the passwd command as it involves changing passwords for user accounts, which can impact system security and user access. Make sure to have the necessary permissions and confirm the username before making any password changes.
:::
## passwd Command Usage Examples:
### Change password for the current user
```bash
passwd
```
Allows the current user to change their password.

### Change password for a specific user
```bash
sudo passwd username
```
Enables an authorized user to change the password for a specified username.

### Force password change on the next login
```bash
sudo passwd -e username
```
Forces the specified user to change their password upon the next login.

### Lock a user account
```bash
sudo passwd -l username
```
Locks the specified user account, preventing login until the password is reset.

### Unlock a user account
```bash
sudo passwd -u username
```
Unlocks the specified user account, allowing login with the current password.
:::tip
When using the passwd command in Linux, make sure to double-check the syntax and options to avoid any unintended changes to user passwords or system security.
:::

### How do I change my own password in Linux?
To change your own password using the passwd command in bash, execute the following command:
```bash
passwd
```

### How do I change another user's password in Linux?
To change another user's password using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd <username>
```

### How do I force a user to change their password on next login in Linux?
To force a user to change their password on the next login using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd --expire <username>
```

### How do I lock a user account in Linux using passwd?
To lock a user account using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd --lock <username>
```

### How do I unlock a user account in Linux using passwd?
To unlock a user account using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd --unlock <username>
```

### How do I display password status information in Linux using passwd?
To display password status information using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd --status <username>
```

### How do I set password aging or expiration policies in Linux using passwd?
To set password aging or expiration policies using the passwd command in bash, execute the following command as a superuser:
```bash
sudo passwd --maxdays <days> --mindays <days> --warndays <days> --inactivedays <days> <username>
```
## Applications of the passwd command

- Change a user's password
- Update user's password aging information
- Lock or unlock a user's password
- Verify the current user's password