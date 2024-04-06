---
title: export command in Linux
description: Learn how to use the export command in Linux to set environment variables. Improve your command line skills with this essential tool.
---

The Linux export command is used to set environment variables within the shell session or to make variables available to subprocesses. This command is essential for customization and configuration tasks, allowing users to define variables that influence the behavior of programs and scripts. By using the export command, you can specify the value of a variable and mark it for export to any subsequently executed commands or scripts. This flexibility enables you to control the environment in which your commands run, making it a powerful tool for shell scripting and system administration tasks.

## export Syntax:
```bash
export [option] [parameter]
```

## Linux export Options:
| **Option** | **Description**                                     |
|------------|-----------------------------------------------------|
| -n         | Remove the given variables from the environment.   |
| -p         | Print all environment variables in a format that can be sourced. |

## export Parameters:
| **Parameter** | **Description**                                   |
|---------------|---------------------------------------------------|
| Variable      | Variable name to be exported into the environment.|

:::caution
Avoid using the export command indiscriminately, as it can potentially overwrite existing variables and cause unexpected behavior in scripts or applications.
:::
## How to use export command:

### Exporting a Variable
```bash
export MY_VAR="Hello"
```
Exports a variable called MY_VAR with the value "Hello".

### Exporting a Variable to be Available in Subshells
```bash
export MY_VAR="World"
```
Exports a variable MY_VAR with the value "World" to make it available in subshells.

### Setting the Path Variable
```bash
export PATH=$PATH:/new/path
```
Adds a new directory "/new/path" to the existing PATH variable.

### Exporting a Variable with Quotes
```bash
export MY_VAR="Hello, world!"
```
Exports a variable MY_VAR with a value containing special characters within quotes.

### Exporting a Variable in a One-liner
```bash
export MY_VAR="Linux"; echo $MY_VAR
```
Exports a variable MY_VAR with the value "Linux" and then prints its value.

### Defining Multiple Variables
```bash
export VAR1=10; export VAR2="Linux"
```
Exports multiple variables VAR1 and VAR2 with numerical and string values, respectively.

### Checking Environment Variables
```bash
export | grep MY_VAR
```
Lists all currently exported variables and greps for any containing "MY_VAR".

### Exporting a Variable from a Script
```bash
export $(grep -v '^#' config-file.env | xargs)
```
Exports variables defined in a configuration file "config-file.env" excluding lines starting with '#' for comments.
:::tip
When using the export command in Linux, remember that the variables you export are only available to child processes of the shell in which they were set. If you want a variable to be available in the current shell and in all subsequent child processes, you need to set it in the shell configuration files like `.bashrc` or `.bash_profile`.
:::

## export Command Troubleshooting Q&A:
### How do I use export in Linux?
To use the export command in Linux, execute the following command:
```bash
export --option <value>
```

### What is the purpose of the export command in bash?
The export command is used to set an environment variable in Linux so that it is available to any child processes spawned from the shell where the export command was used.
```bash
export MY_VAR="Hello, World!"
```

### How can I list all the exported variables in Linux?
To list all the variables that have been exported in Linux, you can use the `env` command with the `grep` utility to filter out only the variables that have been exported.
```bash
env | grep '^[a-zA-Z_][a-zA-Z0-9_]*='
```

### Can I export a variable with a null value in bash?
Yes, you can export a variable with a null value in bash by setting it to an empty string.
```bash
export NULL_VAR=""
```

### How do I export a variable in bash and make it available in all subsequent shells?
To export a variable in bash and make it available in all subsequent child processes, you can set it in the `.bashrc` or `.bash_profile` file in your home directory.
```bash
export PATH="$PATH:/new/directory"
```

### What happens if I export a variable with the same name as an existing variable?
Exporting a variable with the same name as an existing one in bash will overwrite the value of the existing variable with the new value.
```bash
export MY_VAR="New Value"
```

### How do I unset an exported variable in bash?
To unset an exported variable in bash, you can use the `unset` command followed by the variable name.
```bash
unset MY_VAR
```

### Can I export a variable in bash without making it available to child processes?
Yes, you can export a variable in bash without making it available to child processes by setting it locally within a script rather than in the environment.
```bash
MY_LOCAL_VAR="Local Value"
```

### Is there a limit to the number of variables I can export in bash?
There is no specific limit to the number of variables you can export in bash. However, keep in mind that exporting a large number of variables may affect the shell's performance and memory usage.
```bash
export VAR1="Value1"
export VAR2="Value2"
```

## Applications of the export command

- Setting environment variables for a specific session
- Making a variable available to child processes
- Managing paths for executables and libraries
- Customizing shell behavior
- Configuring specific settings for different programs