---
title: What is useradd Linux command?
description: Add and manage user accounts on Linux using the useradd command. Create new users with specific attributes such as home directory and user ID, easily and efficiently.
---

The useradd command in Linux is used to create new user accounts. It allows you to specify various attributes for the new user, such as the home directory, login shell, and User ID. By using useradd, system administrators can easily and efficiently add and manage user accounts on a Linux system.

## useradd Syntax:
```bash
useradd [options] username
```
## useradd Options:
| Option                   | Description                                      |
|--------------------------|--------------------------------------------------|
| -c, --comment COMMENT    | Specify a comment describing the user           |
| -m, --create-home        | Create the user's home directory                |
| -g, --gid GROUP          | Specify the initial login group for the user     |
| -G, --groups GROUPS      | Specify additional groups for the user           |
| -s, --shell SHELL        | Specify the user's login shell                   |
| -u, --uid UID            | Specify the user ID for the new user             |
| -p, --password PASSWORD  | Set the encrypted password for the user          |

:::caution
It is important to use useradd command with caution as it can have security implications if not used properly. Always ensure the proper permissions and password policies are followed.
:::

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| username  | The name of the user to be created               |
## useradd Command Usage Examples:
### Create a New User
```bash
useradd john
```
Creates a new user with the username "john".

### Set Home Directory for New User
```bash
useradd -d /home/jane jane
```
Creates a new user named "jane" with the home directory set to "/home/jane".

### Assign User ID when Creating a User
```bash
useradd -u 1001 jerry
```
Creates a new user with the username "jerry" and assigns the user ID 1001.

### Specify User's Shell
```bash
useradd -s /bin/bash mike
```
Creates a new user named "mike" and sets the default shell to "/bin/bash".

### Create a System User
```bash
useradd -r serveruser
```
Creates a system user named "serveruser" with a UID lower than 1000.
:::tip
Remember to use the appropriate options with the useradd command to customize the user creation process according to your specific requirements.
:::

### How do I use useradd in Linux?
To use the useradd command in bash, execute the following command:
```bash
useradd example_user
```

### What is the syntax for useradd command?
The syntax for the useradd command in Linux is as follows:
```bash
useradd [options] username
```

### How can I create a new user with a specific home directory using useradd?
To create a new user with a specific home directory, use the -d option with the useradd command. For example:
```bash
useradd -d /home/new_user example_user
```

### How to set the expiration date for a user account with useradd?
You can set the expiration date for a user account using the -e option with the useradd command. Here's an example:
```bash
useradd -e 2023-12-31 example_user
```

### How to create a new user and assign a specific user ID (UID) using useradd?
To create a new user and assign a specific user ID (UID), use the -u option with the useradd command. For example:
```bash
useradd -u 1001 example_user
```

### How can I set the default login shell for a new user with useradd?
To set the default login shell for a new user, use the -s option with the useradd command. Here's an example:
```bash
useradd -s /bin/bash example_user
```

### How to create a new user and add the user to a specific group using useradd in Linux?
To create a new user and add the user to a specific group, use the -g option with the useradd command. For example:
```bash
useradd -g group_name example_user
```

### How do I create a new user and assign multiple supplementary groups with useradd?
To create a new user and assign multiple supplementary groups, use the -G option with the useradd command. Here's an example:
```bash
useradd -G group1,group2 example_user
```
## Applications of the useradd command

- Creating a new user account on a Linux system
- Specifying user details like username, home directory, and default shell
- Setting user account expiration dates
- Assigning a group to the new user
- Setting a password for the new user
- Creating user's home directory if it does not already exist
- Adding user to specific supplementary groups
- Setting user account attributes like UID and GID
- Providing user account with specific login environment configurations