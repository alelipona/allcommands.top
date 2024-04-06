---
title: What is printenv Linux command?
description: Learn how to use the printenv command in Linux to display the current environment variables. 
---

The printenv command in Linux is used to display the current environment variables. It prints the values of the specified environment variables or lists all environment variables if no argument is provided. It is commonly used to check the environment variables set for a particular session or script.
## printenv Syntax:
```bash
printenv [option] [parameter]
```

## printenv Options:
| Option  | Description                 |
|---------|-----------------------------|
| -0      | Delimit output with null    |
| -h      | Display help information    |
| -v      | Display version information |

:::caution
Exercise caution when using the printenv command, as it can display sensitive environment variables that may contain confidential information.
:::

## Parameters:
| Parameter  | Description                      |
|------------|----------------------------------|
| name       | Name of the environment variable  |
## printenv Command Usage Examples:
### Display All Environment Variables
```bash
printenv
```
Displays all current environment variables.

### Display the PATH Environment Variable
```bash
printenv PATH
```
Displays the value of the PATH environment variable.

### Display a Specific Environment Variable
```bash
printenv USER
```
Displays the value of the USER environment variable.

### Display the SHELL Environment Variable
```bash
printenv SHELL
```
Displays the value of the SHELL environment variable.

### Use printenv with Grep to Filter Output
```bash
printenv | grep HOME
```
Uses printenv with grep to filter the output for environment variables containing "HOME".
:::tip
When using the printenv command in Linux, you can display all or specific environment variables set in the current shell session. This can be helpful for troubleshooting, scripting, or understanding the environment in which a command is running.
:::

### How do I use printenv in Linux?
To use the printenv command in bash, execute the following command:
```bash
printenv
```

### How can I view only specific environment variables with printenv?
To view specific environment variables using printenv, specify the variable names as arguments. For example:
```bash
printenv PATH USER HOME
```

### How can I search for a specific variable with printenv?
To search for a specific environment variable using printenv, you can pipe the output to the `grep` command. For instance:
```bash
printenv | grep USER
```

### How can I redirect the output of printenv to a file?
To save the output of printenv to a file, you can use output redirection. Here is an example:
```bash
printenv > environment_variables.txt
```

### How can I sort the output of printenv alphabetically?
To sort the output of printenv alphabetically, you can pipe the output to the `sort` command. Here is how you can do it:
```bash
printenv | sort
```

### How can I display the values of variables that are currently set in the environment with printenv?
To display the values of variables currently set in the environment using printenv, you can pipe the output to the `cut` command. Here's an example:
```bash
printenv | cut -d= -f2
```

### How can I unset or remove a specific environment variable with printenv?
To unset or remove a specific environment variable using printenv, you need to use the `unset` command in conjunction with the variable name. For example:
```bash
unset VARIABLE_NAME
```

### How can I display environment variables in a specific format with printenv?
To format the output of printenv in a specific way, you can use tools like `awk` or `sed` to manipulate the output. Here is an example:
```bash
printenv | awk -F= '{print "Variable: " $1, "Value: " $2}'
```  

## Applications of the printenv command

- Displaying all environment variables
- Checking the value of a specific environment variable
- Use in shell scripts to access and use environment variables