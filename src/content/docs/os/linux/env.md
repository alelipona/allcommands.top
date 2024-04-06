---
title: Linux env command
description: Learn how to use the powerful Linux env command to modify the environment of a command or shell session.
---

The Linux env command allows users to modify the environment of a command or shell session. It can set or unset environment variables, as well as run a command in a modified environment. By using env, users can customize their environment to meet specific requirements, such as setting the PATH variable to locate executable files, defining custom variables, or altering default settings. The command is versatile and essential for managing the environment in Linux systems efficiently.

## env Syntax:
```bash
env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
```
## Options:
| Option  | Description                       |
|---------|-----------------------------------|
| -i      | Start with an empty environment    |
| -u      | Remove variable from the environment |

## Parameters:
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| NAME=VALUE| Set the environment variable NAME to VALUE  |
| COMMAND   | Specify the command to run with the new environment |
| ARG       | Arguments to pass to the specified COMMAND  |

:::caution
Exercise caution while setting environment variables using the `env` command as it may affect the behavior of commands and programs within that environment.
:::

### Set a Custom Environment Variable
```bash
env MY_VAR="Hello, World!" echo $MY_VAR
```

Display the value of a custom environment variable that was set using the `env` command.

### Display All Environment Variables
```bash
env
```

Display all environment variables set in the current shell using the `env` command without any arguments.

### Clear All Environment Variables
```bash
env -i env
```

Clear all environment variables by running `env` with the `-i` option.

### Override PATH Environment Variable
```bash
env -i PATH=/bin ls
```

Override the `PATH` environment variable temporarily using the `env` command when executing a command.
:::tip
When using the env command in Linux, it's important to remember that it is typically used to run a program or command in a modified environment. This can be useful for setting specific environmental variables or changing the behavior of a command by modifying the shell's environment before executing it.
:::

### How do I use env in Linux?
To use the env command in Linux, execute the following command:
```bash
env --var_name=value command
```

### How can I list all environmental variables with env in Linux?
To list all environmental variables with env in Linux, you can execute the following command:
```bash
env
```

### How can I clear all environmental variables using env in Linux?
To clear all environmental variables using env in Linux, you can execute the following command:
```bash
env -i command
```

### How can I set a specific environmental variable temporarily with env in Linux?
To set a specific environmental variable temporarily with env in Linux, you can execute the following command:
```bash
env VAR_NAME=value command
```

### How can I specify a search path for the command to execute with env in Linux?
To specify a search path for the command to execute with env in Linux, you can use the following command:
```bash
env PATH=/new/path command
```

### How do I display the version information of the env command in Linux?
To display the version information of the env command in Linux, you can execute the following command:
```bash
env --version
```

### How can I run a command with a different shell using env in Linux?
To run a command with a different shell using env in Linux, you can execute the following command:
```bash
env SHELL=/path/to/shell command
```

## Applications of the env command

- Providing a clean environment for executing a specific command
- Setting or overriding environment variables
- Running a command with specific environment configurations
- Checking the current environment variables
- Troubleshooting environment-related issues