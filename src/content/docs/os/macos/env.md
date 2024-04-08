---
title: env MacOS command
description: Learn how to use the MacOS env command to display or modify the environment variables in your system.
---

The MacOS env command is used to display or modify the environment variables in your system. It is a useful tool for managing the environment in which programs run. You can use it to view the current environment variables, set new ones, or remove existing ones. By using the env command, you can customize the environment settings for specific commands or scripts, allowing you to control how they interact with the system. This command is particularly handy for scripting and automation tasks, where you may need to manipulate the environment variables for different purposes.

## env Syntax:
```bash
env [option] [name=value] [command [args...]]
```
## env Options:
| Option | Description |
|--------|-------------|
| -i     | Clear all environment variables except for TERM |
| -u     | Unset the specified environment variable |

:::caution
It is recommended to use the -i option cautiously as it clears all environment variables except for TERM. Use the -u option carefully to avoid unsetting critical environment variables.
:::

## Parameters:
| Parameter  | Description                              |
|------------|------------------------------------------|
| name=value | Set the specified environment variable   |
| command    | Execute a command with specified values |
| args       | Additional arguments for the command     |
## env Command Usage Examples:
### Display All Environment Variables
```bash
env
```
Displays all environment variables set in the current terminal session.

### Run a Command with Modified Environment Variables
```bash
env VARIABLE_NAME=variable_value command_to_run
```
Executes a command with a specific environment variable set to a defined value.

### Set Multiple Environment Variables
```bash
env VAR1=value1 VAR2=value2 command_to_run
```
Sets and exports multiple environment variables before running a command.

### Clear Environment Variables for a Command
```bash
env -i command_to_run
```
Clears all environment variables before running a specific command.

### Show Paths in the Environment
```bash
env | grep PATH
```
Filters and displays environment variables related to paths using the grep command.
:::tip
When using the env command in MacOS, remember that it is a utility to run a command in a modified environment. You can use it to set or print environment variables for a command or script. Make sure to check the options and read the man page for further details on how to utilize it effectively.
:::

{Questions} 

### How do I use env in MacOS?
To use the env command in bash, execute the following command:
```bash
env
```

### What is the purpose of the env command in MacOS?
The env command is used to print the current environment or run a program in a modified environment without modifying the actual environment of the current shell.
```bash
env <variable=value> <command>
```

### How can I print the environment variables using env in MacOS?
You can print the environment variables using the env command with the '-a' option as follows:
```bash
env -a
```

### How do I clear environment variables using the env command in MacOS?
To clear environment variables using the env command, you can provide an empty environment. 
```bash
env -i <command>
```

### How can I set a specific environment variable with the env command in MacOS?
To set a specific environment variable with the env command, you can specify the variable and its value before the command you want to run.
```bash
env VAR=VALUE <command>
```

### How do I ignore the current environment and pass only specified environment variables with the env command in MacOS?
To ignore the current environment and pass only specified environment variables, you can use the '-u' option in the env command.
```bash
env -u VAR1,VAR2 <command>
```

### Can I use the env command to run a command with an altered path in MacOS?
Yes, you can run a command with an altered path by specifying the PATH variable before the command using the env command in MacOS.
```bash
env PATH=/new/path <command>
```

### How can I search for a command in a custom directory using the env command in MacOS?
To search for a command in a custom directory, you can modify the PATH variable to include the desired directory before running the command with the env command.
```bash
env PATH=$PATH:/custom/directory <command>
```
## Applications of the env command

1. Running a command with modified environment variables
2. Setting environment variables for a specific command
3. Testing and debugging scripts with different environments
4. Providing default values for missing environment variables