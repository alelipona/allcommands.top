---
title: Windows WMIC command
description: Windows Management Instrumentation Command line (WMIC) provides a range of system management options in Windows. Explore its powerful capabilities for efficient system administration.
---

Windows WMIC (Windows Management Instrumentation Command-line) is a powerful tool for system administrators to manage various aspects of the Windows operating system. With WMIC, users can query for system information, configure system settings, start processes remotely, and much more. This command-line utility leverages the Windows Management Instrumentation (WMI) infrastructure to provide a wide range of functionalities. WMIC can be used to gather system information, manage user accounts, interface with the registry, and execute various tasks on local or remote systems. This versatile tool can help streamline system administration tasks and troubleshooting processes, making it an essential component of the Windows management toolkit.
## WMIC Syntax:
```cmd
wmic [alias] [options] [parameters]
```

## Options:

| Option       | Description                            |
|--------------|----------------------------------------|
| /NAMESPACE   | Specifies the namespace for the alias. |
| /NODE        | Specifies the target node(s).          |
| /USER        | Specifies the user context.            |
| /PASSWORD    | Specifies the password.                |
| /LOCALE      | Specifies the locale.                  |
| /ROLE        | Specifies the role.                    |
| /PRIVILEGES  | Specifies the privileges.              |
| /TRACE       | Outputs detailed tracing information.  |
| /INTERACTIVE | Enables interactive mode.              |
| /FAILFAST    | Stops processing on first error.      |
| /RECORD      | Writes the output to a file.           |

## Parameters:

| Parameter  | Description                                  |
|------------|----------------------------------------------|
| ALIAS      | Specifies the alias.                         |
| GET        | Retrieves specific properties.               |
| LIST       | Retrieves all instances of the alias.        |
| WHERE      | Filters the results.                         |
| CALL       | Invokes a method.                            |
| CREATE     | Creates an instance.                         |
| DELETE     | Deletes an instance.                         |
| SET        | Updates an instance.                         |
| ASSOC      | Indirect association to a class.            |
| CLASS      | Specifies the instance (alias) to retrieve. |
| PATH       | Specifies the path of the instance.          |
| FORMAT     | Formats the output.                          |
| OUTPUT     | Redirects output to a file.                  |
| CONSOLE    | Redirects output to the screen.              |
| VALUEOF    | Retrieves the value of a property.           |
| TRANSLATE  | Translates managed object format (MOF).     |
| STATUS     | Retrieves the status of an instance.         |
| GROUP      | Specifies a group of objects.                |
| NAMESPACE  | Specifies the namespace.                     |
| ROLE       | Specifies the role.                          |
| PRIVILEGES | Specifies the privileges.                    |
| LOCALE     | Specifies the locale.                        |
| TRACE      | Outputs detailed tracing information.        |
| INTERACTIVE| Enables interactive mode.                    |
| FAILFAST   | Stops processing on first error.            |
| RECORD     | Writes the output to a file.                 |
| /          | Separator for aliases with namespaces.       |

:::caution
Exercise caution when using the wmic command as it can access and manipulate critical system settings. Make sure to double-check the command before executing to avoid unintended consequences.
:::
## WMIC Usage:
### Check System Information
```cmd
wmic csproduct get name, vendor, version
```
Retrieves information about the system, such as the product name, manufacturer, and version.

### List Running Processes
```cmd
wmic process list brief
```
Displays a list of running processes on the system, including their process ID and description.

### Retrieve Network Adapter Information
```cmd
wmic nic get name, speed, macaddress
```
Displays details of network adapters installed on the system, like the adapter name, speed, and MAC address.

### Monitor CPU Temperature
```cmd
wmic /namespace:\\root\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature
```
Monitors the current CPU temperature using Windows Management Instrumentation Command-line (WMIC).
:::tip
When using the WMIC command, ensure that you have administrative privileges to prevent any access or permission issues.
:::

## Common Questions on WMIC Usage:

### How can I list all installed software on Windows using WMIC?
To list all installed software on Windows using WMIC, run the following command:
```cmd
wmic product get name, version
```

### How can I find the computer model using WMIC in Windows?
To find the computer model using WMIC in Windows, use the following command:
```cmd
wmic csproduct get name
```

### How do I retrieve system information using WMIC in Windows?
To retrieve system information using WMIC in Windows, execute the following command:
```cmd
wmic os get caption, version
```

### How can I view the list of processes running on Windows with WMIC?
To view the list of processes running on Windows using WMIC, enter the command below:
```cmd
wmic process list brief
```

### How do I get the list of currently logged-in users using WMIC in Windows?
To get the list of currently logged-in users using WMIC in Windows, use the command:
```cmd
wmic ComputerSystem Get UserName
```

### How to check the system's total physical memory with WMIC in Windows?
To check the system's total physical memory using WMIC in Windows, run the following command:
```cmd
wmic memorychip get capacity
```

### How can I display network adapter information using WMIC on Windows?
To display network adapter information using WMIC on Windows, use the following command:
```cmd
wmic nic get name, index
```

## Applications of the WMIC Command

- Hardware inventory
- System information retrieval
- Software management
- Process management
- Service management
- User account management
- Network configuration
- Security settings
- WMI repository management
- Event log access