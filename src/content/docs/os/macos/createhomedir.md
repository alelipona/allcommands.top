---
title: createhomedir command in MacOS
description: The createhomedir command in MacOS allows users to create a new user home directory with default settings.
---

The createhomedir command in MacOS enables administrators to generate a new user home directory with standard configurations efficiently. This command is especially beneficial for system admins who need to set up user accounts frequently or in bulk. By executing the createhomedir command, a new user's home directory will be created automatically along with essential folders and files, streamlining the user account creation process.
## createhomedir Syntax:
```bash
createhomedir -c -u username
```

## MacOS createhomedir Options:
| Option | Description                     |
|--------|---------------------------------|
| -c     | Create the home directory        |
| -u     | Specify the username             |

## createhomedir Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| username  | The username for whom to create the home directory |

:::caution
Using the `createhomedir` command can potentially overwrite any existing home directories for the specified username, resulting in data loss. Please ensure you have the correct permissions and backups before executing this command.
:::
## How to use createhomedir command:
### Create a home directory for a specific user
```bash
sudo createhomedir -c -u john
```
Creates a home directory for the user "john".

### Create a home directory with a custom path
```bash
sudo createhomedir -c -p /Volumes/ExternalDrive/Users/bob -u bob
```
Creates a home directory for the user "bob" at a custom path "/Volumes/ExternalDrive/Users/bob".

### Create a home directory with a specific group
```bash
sudo createhomedir -c -g staff -u mary
```
Creates a home directory for the user "mary" with the group "staff".

### Create a home directory with specified permissions
```bash
sudo createhomedir -c -m 755 -u alice
```
Creates a home directory for the user "alice" with permissions set to 755.

### Update existing home directory
```bash
sudo createhomedir -u john
```
Updates the home directory for the user "john".

### Check if a home directory needs to be created
```bash
sudo createhomedir -c -n -u max
```
Checks if a home directory needs to be created for the user "max".

### Create a home directory without prompting for confirmation
```bash
sudo createhomedir -c -f -u sam
```
Creates a home directory for the user "sam" without prompting for confirmation.

### Create a home directory and set a specific shell
```bash
sudo createhomedir -c -s /bin/bash -u jane
```
Creates a home directory for the user "jane" and sets the shell to "/bin/bash".
:::tip
It is advisable to always run the createhomedir command with caution and only with the necessary permissions to avoid any unintended consequences on your system.
:::

### How do I use createhomedir in MacOS?
To use the createhomedir command in MacOS, execute the following command:
```bash
createhomedir --option <value>
```

### How can I create a new user's home directory with createhomedir?
To create a new user's home directory using the createhomedir command, you can use the following syntax:
```bash
createhomedir --user newuser
```

### How do I specify a custom home directory path with createhomedir in MacOS?
To specify a custom home directory path when using createhomedir in MacOS, you can use the following command:
```bash
createhomedir --home /path/to/custom/home/directory
```

### How can I set permissions for a new user's home directory using createhomedir?
You can set permissions for a new user's home directory with the createhomedir command by including the desired permissions as follows:
```bash
createhomedir --user newuser --permissions 755
```

### How do I avoid creating a user's home directory with createhomedir?
If you need to perform an action with createhomedir without actually creating a user's home directory, you can use the command without the user parameter:
```bash
createhomedir
```

### How can I display help information for createhomedir in MacOS?
To view help information and usage guidelines for the createhomedir command in MacOS, simply run the command with the help flag:
```bash
createhomedir --help
```

### How do I list all existing user home directories with createhomedir?
You can list all existing user home directories using the createhomedir command by executing the following command:
```bash
createhomedir --list
```

### How can I specify the shell for a new user's home directory with createhomedir?
To specify the shell for a new user's home directory while using createhomedir, include the desired shell as shown below:
```bash
createhomedir --user newuser --shell /bin/bash
```

## Applications of the createhomedir command

- Automating the creation of user home directories.
- Setting up new user accounts with a home directory in MacOS.
- Managing user accounts on a MacOS system.