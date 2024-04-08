---
title: userdel Linux command
description: Linux userdel command removes users from the system. Learn how to use userdel command in Linux to delete user accounts securely.
---

The Linux userdel command is used to remove user accounts from the system. When you run the userdel command, it deletes the user's entry from the system files and removes the user's home directory. It is an essential command for system administrators to manage user accounts on a Linux system. By using userdel, you can ensure that old or unused accounts are removed securely from the system, improving security and managing resources more effectively. However, it is crucial to use the userdel command with caution to avoid unintended consequences.

## userdel Syntax:
```bash
userdel [options] username
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -f     | Force deletion of the user account |
| -r     | Remove the user's home directory   |
| -Z     | Remove any SELinux user mapping    |

## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| username  | The username to be deleted  |

:::caution
Exercise caution when using the userdel command as it permanently deletes the user account and all associated files. Make sure to double-check the username before executing the command.
:::
## userdel bash Examples:
### Delete a User
```bash
userdel john
```
Removes the user account named "john" from the system.

### Delete a User and Home Directory
```bash
userdel -r jane
```
Deletes the user account "jane" along with the associated home directory and mail spool.

### Remove a User without Deleting Home Directory
```bash
userdel -r --keep-primary-group alex
```
Deletes the user "alex" but retains the primary group and home directory.

### Change User Login to Nologin
```bash
userdel -s /sbin/nologin sarah
```
Changes the login shell of user "sarah" to /sbin/nologin.

### Remove User with Specified UID
```bash
userdel -f -o -uid 1001 mike
```
Forces the removal of a non-unique UID user "mike" with UID 1001.

### Delete User Without Prompt
```bash
userdel -f tom
```
Deletes the user account "tom" without prompting for confirmation.
:::tip
When using the userdel command in Linux, make sure to carefully read the man page or help section to understand the options and their implications. Deleting a user account is a sensitive operation that can lead to data loss if not done correctly.
:::

## userdel Command Help Center:

### How do I use userdel in Linux?
To use the userdel command in Linux, execute the following command:
```bash
userdel username
```

### Can userdel remove a user's home directory?
Yes, the userdel command can delete a user's home directory along with the user account using the following command:
```bash
userdel -r username
```

### How can I force the deletion of a user's account using userdel?
To force the deletion of a user's account with userdel, use the following command:
```bash
userdel -f username
```

### How can I list the options available for the userdel command in Linux?
To list the options available for the userdel command, you can check the userdel manual by executing:
```bash
man userdel
```

### Can userdel delete multiple user accounts at once?
Yes, userdel can delete multiple user accounts at once by providing a list of usernames separated by spaces like in the following command:
```bash
userdel username1 username2
```

### Is it possible to prevent userdel from deleting the user's mail spool?
Yes, by using the -m option with userdel, you can prevent the user's mail spool from being deleted. Here is an example:
```bash
userdel -m username
```

### How do I remove a user account without deleting the home directory?
To remove a user account without deleting the home directory, you can use the -r option with userdel as shown below:
```bash
userdel -r username
```

### How can I display a message before deleting a user account with userdel?
You can display a message before deleting a user account by using the -c option with userdel. Here's how you can do it:
```bash
userdel -c "Your account will be deleted" username
```
## Applications of the userdel command

- Delete a user account from the system
- Remove the user's home directory and mail spool
- Clean up the user's entry from system files like /etc/passwd, /etc/shadow, and /etc/group