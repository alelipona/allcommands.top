---
title: groups MacOS command
description: Learn how to use the MacOS groups command to manage user group information. See examples and syntax for adding, deleting, and listing groups.
---

The MacOS groups command allows users to view and modify information about user groups on a MacOS system. By using this command, users can add or delete groups, as well as list the existing groups on the system. The groups command is a useful tool for managing user permissions and access control on a MacOS system. By understanding how to use the groups command, users can efficiently organize and manage user groups to ensure proper access levels and security within the system.

## groups Syntax:
```bash
groups [username]
```

## groups Options:
| Option | Description                             |
|--------|-----------------------------------------|
|        | Display all groups the user belongs to. |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| username  | Specify the username to see their groups.|

:::caution
It is important to replace [username] with the actual username of the user you want to check the group membership for. Incorrect usage may lead to displaying incorrect group information.
:::
## groups Command Usage Examples:
### Create a New Group
```bash
sudo dseditgroup -o create -r "Description of the Group" groupName
```
Creates a new group with the specified name and description.

### Add a User to a Group
```bash
sudo dseditgroup -o edit -a username -t user groupName
```
Adds a user to an existing group.

### Remove a User from a Group
```bash
sudo dseditgroup -o edit -d username -t user groupName
```
Removes a user from a group.

### List Group Membership
```bash
dscl . -read /Groups/groupName
```
Displays detailed information about a specific group, including its members.

### List All Groups a User Belongs To
```bash
id username
```
Lists all the groups that a specific user is a member of.
:::tip
When using the groups command in MacOS, make sure to include the necessary options or arguments to get the desired output. You can also refer to the man pages or documentation for detailed information on different options available for the groups command.
:::

### How do I use groups in MacOS?
To use the groups command in bash, execute the following command:
```bash
groups
```

### How can I display group memberships for a specific user in MacOS?
To display group memberships for a specific user, use the following command:
```bash
groups username
```

### How do I display all the groups in MacOS?
To display all the groups in the system, run the following command:
```bash
groups -A
```

### How can I list all groups that a user is a member of in MacOS?
To list all groups that a user is a member of, use the following command:
```bash
groups username
```

### How do I show numerical group IDs along with group names in MacOS?
To display numerical group IDs along with group names, execute the following command:
```bash
groups -n
```

### How can I display the groups a user is a member of without group names in MacOS?
To show the groups a user is a member of without group names, use the following command:
```bash
groups -g username
```

### How do I get detailed information about a specific group in MacOS?
To get detailed information about a specific group, run the following command:
```bash
groups -v groupname
```

### How can I display the effective group ID and all memberships in MacOS?
To display the effective group ID and all memberships, use the following command:
```bash
groups -v
```

## Applications of the groups command

- List all groups a user is a member of
- Check the specific groups a user belongs to
- Help in troubleshooting user permissions issues