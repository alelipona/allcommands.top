---
title: printenv MacOS command
description: Discover how to effectively use the printenv command in MacOS to display the current environment variables. Learn the syntax, options, and practical examples.
---

The printenv command in MacOS is used to display the current environment variables. It can be helpful for troubleshooting or understanding the environment setup on your system. By running printenv, you can see a list of all the environment variables currently set, including things like the user's home directory, the default shell, and the search path for executables. This command can be especially useful when writing scripts or configuring your system, as it allows you to see what variables are available to your processes. To use printenv, simply open a terminal window and type "printenv" followed by any options or arguments you want to include. This command is a simple yet effective way to inspect the environment of your MacOS system.

## printenv Syntax:
```bash
printenv [name]
```

## Options:
| Option | Description               |
|--------|---------------------------|
| -0     | Delimit variables with 0  |
| -h     | Display help message      |

## Parameters:
| Parameter | Description               |
|-----------|---------------------------|
| name      | Specify variable name     |

:::caution
Exercise caution when using the printenv command, as it displays the values of environment variables. Be mindful of sensitive information that might be exposed.
:::
## printenv bash Examples:
### Display All Environment Variables
```bash
printenv
```
Prints all current environment variables.

### Display the Value of a Specific Environment Variable
```bash
printenv PATH
```
Displays the value of the PATH environment variable.

### Redirect Output to a File
```bash
printenv > env_variables.txt
```
Redirects the output of printenv to a file named "env_variables.txt".

### Display the Value of Multiple Environment Variables
```bash
printenv HOME USER
```
Displays the values of the HOME and USER environment variables.

### Pipe Output to 'grep' for Filtering
```bash
printenv | grep TERM
```
Uses the printenv command with a pipe to filter out only the environment variables containing "TERM".

### Display Only Environment Variables Starting with a Specific Prefix
```bash
printenv | grep ^SHELL
```
Filters the output to display only the environment variables that start with "SHELL".
:::tip
When using the printenv command in MacOS, make sure to include the necessary options and values to display the environment variables accurately. Additionally, you can use this command to troubleshoot and understand the current environment setup on your system.
:::

### How do I display all environment variables in MacOS?
To display all environment variables in MacOS, execute the following command:
```bash
printenv
```

### How do I display the value of a specific environment variable in MacOS?
To display the value of a specific environment variable in MacOS, execute the following command:
```bash
printenv <variable_name>
```

### How do I search for a specific environment variable in MacOS?
To search for a specific environment variable in MacOS, execute the following command:
```bash
printenv | grep <search_term>
```

### How do I clear a specific environment variable in MacOS?
To clear a specific environment variable in MacOS, execute the following command:
```bash
unset <variable_name>
```

### How do I set a new environment variable in MacOS?
To set a new environment variable in MacOS, execute the following command:
```bash
export <variable_name>=<value>
```

### How do I print a sorted list of environment variables in MacOS?
To print a sorted list of environment variables in MacOS, execute the following command:
```bash
( set -o posix ; set ) | sort
```

### How do I print a specific part of the environment in MacOS?
To print a specific part of the environment in MacOS, execute the following command:
```bash
printenv | cut -d'=' -f1
```

### How do I print the environment variables in a specific file in MacOS?
To print the environment variables in a specific file in MacOS, execute the following command:
```bash
xargs -0 printenv < <(xargs -0 printf '%s\0' <file_path)
```
## Applications of the printenv command

1. Display the values of environment variables
2. Debugging scripts by checking environment variable values
3. Checking the current environment configuration