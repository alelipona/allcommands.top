---
title: nvram MacOS Command Guide
description: Learn how to use the MacOS nvram command to view, set, and delete NVRAM variables on your Apple computer.
---

The MacOS nvram command allows users to interact with the system's Non-Volatile Random-Access Memory (NVRAM) variables. NVRAM is a small amount of memory that stores system settings even when the computer is turned off. With the nvram command, you can view, set, and delete these variables, which can be useful for troubleshooting system issues, changing startup disk preferences, or modifying system configurations. By using the nvram command in the Terminal, you can access and manipulate these NVRAM variables to customize your MacOS operating system.
## nvram Syntax:
```bash
nvram [options] [parameters]
```

## Options:
| Option | Description                                |
|--------|--------------------------------------------|
| -c     | Clear all settings in NVRAM                |
| -d     | Delete a variable from NVRAM               |
| -p     | Print all variables in NVRAM               |
| -x     | Print all variables in XML format          |
  
## Parameters:
| Parameter   | Description                                     |
|-------------|-------------------------------------------------|
| variable    | Name of the variable to delete or view          |
| name=value  | Set the value of the specified variable          |

:::caution
Exercise caution when using the `nvram` command, as modifying NVRAM settings can potentially cause system instability or data loss.
:::
## nvram Command Samples:
### Display all NVRAM variables
```bash
nvram -p
```
This command displays all NVRAM variables currently set on the system.

### Set a specific NVRAM variable
```bash
nvram my_variable="example value"
```
This command sets a specific NVRAM variable with the value "example value".

### Delete a specific NVRAM variable
```bash
nvram -d my_variable
```
This command deletes a specific NVRAM variable named "my_variable".

### Reset NVRAM to default settings
```bash
nvram -c
```
This command resets the NVRAM to its default settings.

### View a specific NVRAM variable value
```bash
nvram my_variable
```
This command displays the value of a specific NVRAM variable named "my_variable".

### Clear all NVRAM variables
```bash
nvram -c
```
This command clears all NVRAM variables currently set on the system.

### Enable verbose mode for NVRAM operation
```bash
nvram -x
```
This command enables verbose mode for NVRAM operation, providing more detailed information.
:::tip
When using the nvram command in MacOS, be cautious as it deals with system settings and variables that can impact the behavior of your system. Make sure to double-check your commands before running them to avoid any unintended consequences.
:::

### How can I display all the NVRAM variables set in MacOS?
To display all the NVRAM variables set in MacOS, you can use the following command:
```bash
nvram -p
```

### How do I set a new variable with a value using nvram in MacOS?
To set a new variable with a value using nvram in MacOS, you can execute the following command:
```bash
sudo nvram my_variable="my_value"
```

### How can I delete a specific NVRAM variable in MacOS using nvram?
To delete a specific NVRAM variable in MacOS using nvram, you can run the following command:
```bash
sudo nvram -d my_variable
```

### How can I reset the entire NVRAM to default values in MacOS?
To reset the entire NVRAM to default values in MacOS, you can use the following command:
```bash
sudo nvram -c
```

### How do I set the boot-args variable in MacOS using nvram?
To set the boot-args variable in MacOS using nvram, you can run the following command:
```bash
sudo nvram boot-args="-v"
```

### How can I enable verbose mode during boot using nvram in MacOS?
To enable verbose mode during boot using nvram in MacOS, enter the following command:
```bash
sudo nvram boot-args="-v"
```
## Applications of the nvram command

- Storing non-volatile random-access memory variables.
- Reading firmware variables.
- Setting firmware variables.
- Inspecting firmware variables.
- Modifying firmware variables.
- Resetting firmware variables to default values.