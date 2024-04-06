---
title: DRIVERQUERY Windows command
description: Retrieve information about installed drivers on Windows with the driverquery command.
---

The Windows driverquery command is a powerful tool that allows users to retrieve detailed information about the drivers installed on their system. By utilizing this command, users can gather critical data such as driver name, type, version, date, and manufacturer. It provides a comprehensive overview of the drivers present on the computer, helping users troubleshoot driver-related issues, identify outdated drivers, and manage driver configurations effectively. With its simple yet potent functionality, driverquery is a valuable asset for both novice and advanced users seeking to optimize their Windows operating system's driver environment.

## DRIVERQUERY Syntax:
```cmd
driverquery [/s Computer [/u Domain\User [/p Password]]] [/fo {TABLE | LIST | CSV}] [/nh] [/v]
```

## Windows DRIVERQUERY Options:
| Option           | Description                                          |
|------------------|------------------------------------------------------|
| /s Computer      | Specifies the remote system to connect to.          | 
| /u Domain\User   | Specifies the user context under which the command should execute. |
| /p Password      | Specifies the password for the user context.        |
| /fo              | Specifies the format of the output: TABLE, LIST, or CSV. |
| /nh              | Suppresses column header in the output.             |
| /v               | Specifies that the verbose information should be displayed. |

## DRIVERQUERY Parameters:
| Parameter        | Description                                          |
|------------------|------------------------------------------------------|
| Computer         | Specifies the remote computer for which to display driver information.      |
| Domain\User      | Specifies the domain and user name for the account to connect with.          |
| Password         | Specifies the password for the specified user account.                        |

## How to use DRIVERQUERY command:
### Display a list of all drivers
```cmd
driverquery
```
This command will display a list of all drivers installed on the system.

### Display a list of drivers from a remote computer
```cmd
driverquery /S RemoteComputer
```
Shows a list of drivers from a remote computer specified by "RemoteComputer".

### Display detailed information about a specific driver
```cmd
driverquery /v /fo list /si Loc
```
Provides detailed information about a specific driver based on a location (Loc) with a specific output format (/fo list).

### Filter drivers by a specific criteria
```cmd
driverquery /fi "Description eq USB"
```
Filters drivers based on a specific criteria, in this case, the description containing the term "USB".

### Export driver information to a CSV file
```cmd
driverquery /FO csv > driver_info.csv
```
Exports the driver information to a CSV file named "driver_info.csv".

### Display signed drivers only
```cmd
driverquery /si
```
Lists only signed drivers installed on the system.

### Show a list of drivers along with version and date
```cmd
driverquery /v
```
Displays a list of drivers along with their version and installation date.

### Display driver information in verbose mode
```cmd
driverquery /si /v
```
Shows driver information in a verbose mode, including signature information.

:::tip
When using the driverquery command in CMD, make sure to run the command with administrative privileges to ensure accurate results.
:::

### How do I use driverquery in CMD?
To use the driverquery command in CMD, execute the following command:
```cmd
driverquery
```

### How can I list all the drivers using driverquery?
You can list all the drivers by running the following command:
```cmd
driverquery /v
```

### How do I export driver information to a file with driverquery?
To export driver information to a file, use the following command syntax:
```cmd
driverquery /FO csv > C:\drivers_info.csv
```

### How can I get detailed information about a specific driver with driverquery?
To get detailed information about a specific driver, run the command with the specific driver name:
```cmd
driverquery /si acpipmi.inf
```

### How do I list third-party drivers using driverquery in CMD?
To list third-party drivers, execute the command as follows:
```cmd
driverquery /fo table /v /nh | find "False"
```

### How can I filter driver results by a specific criteria with driverquery?
To filter driver results by a specific criteria, use the following command structure:
```cmd
driverquery /filter "/IMAGENAME eq drivername.sys"
```

### How do I view a driver's digital signature with driverquery?
To view a driver's digital signature, run the command including the /si switch:
```cmd
driverquery /si drivername.sys
```

### How can I display only active drivers with driverquery?
To display only active drivers, use the following command:
```cmd
driverquery /FO table /v | find "Running"
```

## Applications of the DRIVERQUERY Command

- **View a list of installed drivers**
- **Check the status of drivers (Running, Stopped, etc.)**
- **Verify the digital signature of drivers**
- **Troubleshoot driver-related issues**
- **Generate a report of all drivers for documentation or analysis purposes**