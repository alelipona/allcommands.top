---
title: dscl MacOS Command Guide
description: Learn how to manage Directory Service entries on MacOS using the dscl command. Easily manipulate user accounts, groups, and more with this powerful tool.
---

The MacOS dscl command allows users to interact with Directory Services from the command line. It can be used to manage Directory Service entries, including user accounts, groups, and other system configurations. With dscl, users can create, modify, and delete records in the Directory Service, as well as perform searches and queries to retrieve information. This command provides a powerful way to manage and manipulate Directory Services on MacOS, offering a wide range of capabilities for system administrators and advanced users.

## dscl Syntax:
```bash
dscl [directory] [command]
```
## Options:
| Option  | Description                 |
|---------|-----------------------------|
| -create | Create a record             |
| -delete | Delete a record             |
| -search | Search for records          |
| -read   | Read property values        |
| -change | Change property values      |
| -merge  | Merge with existing values  |

## Parameters:
| Parameter  | Description                                 |
|------------|---------------------------------------------|
| directory  | The directory where the operation will occur |
| command    | The specific action within the directory    |

:::caution
Exercise caution when using the `dscl` command as it can modify critical system directories and settings. Make sure to have a good understanding of the command before executing it, as incorrect usage can lead to system instability or data loss.
:::
## dscl Command Samples:
### List all user accounts
```bash
dscl . -list /Users
```
This command lists all user accounts on the system.

### Check a user's home directory
```bash
dscl . -read /Users/username NFSHomeDirectory
```
Reads and displays the home directory of a specific user.

### Create a new user account
```bash
sudo dscl . -create /Users/newusername
```
Creates a new user account with the specified username.

### Change a user's password
```bash
sudo dscl . -passwd /Users/username
```
Allows you to change the password for a specific user.

### Enable or disable a user account
```bash
sudo dscl . -create /Users/username AuthenticationAuthority ";DisabledUser;"
```
Disables a user account by adding the DisabledUser attribute.

### Add a user to a specific group
```bash
sudo dscl . -append /Groups/groupname GroupMembership username
```
Adds a user to a specified group.

### Find the primary group for a user
```bash
dscl . -read /Users/username | grep PrimaryGroupID
```
Displays the primary group ID for a specific user.
:::tip
When using the dscl command in MacOS, make sure to carefully read the documentation and understand the available options to avoid unintended changes to system configurations.
:::

### How do I list all users in MacOS using dscl?
To list all users in MacOS using dscl, execute the following command:
```bash
dscl . -list /Users
```

### How can I find the UID of a specific user with dscl in MacOS?
To find the UID of a specific user with dscl in MacOS, use the following command:
```bash
dscl . -read /Users/username UniqueID
```

### How do I add a new user with dscl in MacOS?
To add a new user with dscl in MacOS, run the following command:
```bash
sudo dscl . -create /Users/newusername
```

### How do I change the password of a user with dscl in MacOS?
To change the password of a user with dscl in MacOS, enter the following command:
```bash
sudo dscl . -passwd /Users/username newpassword
```

### Can I delete a user account using dscl in MacOS?
Yes, you can delete a user account using dscl in MacOS with the following command:
```bash
sudo dscl . -delete /Users/username
```

### How do I unlock a user account with dscl in MacOS?
To unlock a user account with dscl in MacOS, use the following command:
```bash
sudo dscl . -delete /Users/username AuthenticationAuthority
```
## Applications of the dscl command

- Querying user information
- Managing user accounts
- Managing groups
- Managing directory service nodes
- Setting and changing directory service configurations
- Managing Directory Service Access Lists (ACLs)
- Managing authentication policies
- Managing node and record types