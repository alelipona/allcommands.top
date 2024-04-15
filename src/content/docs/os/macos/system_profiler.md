---
title: system_profiler MacOS Command Guide
description: Learn how to use the MacOS system_profiler command to get detailed information about the hardware and software configurations of your Mac system.
---

The MacOS `system_profiler` command provides detailed information about the hardware and software configurations of your Mac system. By running this command in the terminal, you can access an extensive report that includes details such as hardware components, network settings, software applications, and more. This command can be useful for troubleshooting issues, checking system compatibility, or simply gaining a better understanding of your Mac's specifications. With `system_profiler`, you can retrieve information in a structured format, making it easier to analyze and share details about your system.
## system_profiler Syntax:
```bash
system_profiler [dataType] [option]
```

## Options:
| Option           | Description                                          |
|------------------|------------------------------------------------------|
| -xml             | Output in XML format                                 |
| -listDataTypes   | List all available data types                        |
| -detailLevel     | Specify detail level (basic, mini, full)            |
| -json            | Output in JSON format                                |
| -xml             | Output in XML format                                 |
| -interval        | Set the update interval in seconds for live data     |
| -timeout         | Specify a timeout in seconds for live data           |

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| dataType   | Specify the type of data to be displayed      |
| option     | Specify additional options for data retrieval |


:::caution
Exercise caution while using the system_profiler command as it provides detailed system information which may contain sensitive data. Be careful when sharing the output with others.
:::
## system_profiler Command Samples:
### Display Hardware Information
```bash
system_profiler SPHardwareDataType
```
Displays detailed information about the hardware components of the system.

### List Software Information
```bash
system_profiler SPSoftwareDataType
```
Lists software-related information, including system software versions and installed applications.

### Show Network Information
```bash
system_profiler SPNetworkDataType
```
Displays network-related information such as IP addresses, network interfaces, and connection details.

### View Battery Information
```bash
system_profiler SPPowerDataType
```
Shows details about the system's battery, including its health status, cycle count, and power usage.

### Check Storage Information
```bash
system_profiler SPStorageDataType
```
Provides an overview of storage devices connected to the system, including internal and external drives.

### List USB Information
```bash
system_profiler SPUSBDataType
```
Displays information about USB devices connected to the system, including vendor details and device capacities.

### Show Memory Information
```bash
system_profiler SPMemoryDataType
```
Lists details about the system's memory modules, including type, speed, and capacity.
:::tip
It is recommended to explore the various options and categories available with the system_profiler command to extract specific information about your system in MacOS.
:::

### How do I use system_profiler in MacOS?
To use the system_profiler command in MacOS, execute the following command:
```bash
system_profiler
```

### What is the command to get hardware information using system_profiler in MacOS?
To retrieve hardware information using system_profiler in MacOS, use the following command:
```bash
system_profiler SPHardwareDataType
```

### How can I view software-related details with system_profiler in MacOS?
To view software-related details with system_profiler in MacOS, use the command:
```bash
system_profiler SPSoftwareDataType
```

### How can I check the network configuration using system_profiler in MacOS?
To check the network configuration using system_profiler in MacOS, you can use the command:
```bash
system_profiler SPNetworkDataType
```

### What is the command syntax to view battery information with system_profiler in MacOS?
To view battery information with system_profiler in MacOS, the syntax for the command is:
```bash
system_profiler SPPowerDataType
```

### How do I get a list of all available data types with system_profiler in MacOS?
To get a list of all available data types with system_profiler in MacOS, use the command:
```bash
system_profiler -listDataTypes
```
## Applications of the system_profiler command

- Gathering detailed information about hardware and software components
- Generating reports for troubleshooting and diagnostics
- Listing details about connected peripherals and devices
- Providing a comprehensive overview of the system configuration
- Collecting data for system monitoring and analysis