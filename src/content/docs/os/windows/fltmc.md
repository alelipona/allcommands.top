---
title: All About FLTMC Windows command
description: Learn how to manage filter drivers in Windows using the fltmc command. 
---

The Windows fltmc command allows users to manage filter drivers, such as loading, unloading, and controlling their state. Filter drivers are essential for monitoring and modifying input/output requests between a device and its driver. The fltmc command provides various functions to interact with filter drivers, including displaying information about loaded filters, attaching and detaching filters to volumes, and controlling their operation. With the fltmc command, users can efficiently manage filter drivers and troubleshoot issues related to them.
## FLTMC Syntax:
```cmd
fltmc [command] [options] [parameters]
```

## Options:
| Option     | Description                             |
|------------|-----------------------------------------|
| load       | Load a minifilter driver                |
| unload     | Unload a minifilter driver              |
| instances  | List all instances of a minifilter      |
| filters    | List all loaded minifilters             |
| volumes    | List all volumes with attached minifilters |
| contexts   | List all contexts of minifilters        |
| altitudes  | List all minifilter altitudes           |
| querylocks | Query minifilter locks                  |
| detach     | Detach a minifilter from a volume       |
| attach     | Attach a minifilter to a volume         |
| disablerule | Disable a minifilter driver rule       |
| enablerule  | Enable a minifilter driver rule        |

## Parameters:
| Parameter     | Description                             |
|---------------|-----------------------------------------|
| minifilter    | Specifies the minifilter driver name    |
| instanceID    | Specifies the instance ID of the minifilter |
| volumeName    | Specifies the volume name to attach or detach |
| altitude      | Specifies the altitude of the minifilter |
| RuleID        | Specifies the Rule ID to enable or disable |

## FLTMC CMD Examples:
### List all Filter Drivers
```cmd
fltmc instances
```
Displays a list of all loaded filter drivers on the system.

### Load a Filter Driver
```cmd
fltmc load MyFilterDriver
```
Loads a filter driver with the specified name (e.g., MyFilterDriver).

### Unload a Filter Driver
```cmd
fltmc unload MyFilterDriver
```
Unloads a filter driver with the specified name (e.g., MyFilterDriver).

### Display Filter Driver Details
```cmd
fltmc filters MyFilterDriver
```
Shows detailed information about the specified filter driver (e.g., MyFilterDriver).

### Start a Filter Driver Communication Server
```cmd
fltmc communications
```
Initiates a communication server for the filter manager, allowing filter drivers to communicate with each other.

### Restart a Filter Manager
```cmd
fltmc detach
fltmc attach
```
Restarts the filter manager. Running "fltmc detach" unloads all filter drivers and "fltmc attach" reloads them.
:::tip
When using the fltmc command in Windows, make sure to run it with administrative privileges to avoid any permission issues.
:::

### How do I start a filter driver in Windows using fltmc?
To start a filter driver in Windows using fltmc, run the following command:
```cmd
fltmc start MyFilterDriver
```

### How do I stop a filter driver in Windows using fltmc?
To stop a filter driver in Windows using fltmc, execute the command:
```cmd
fltmc unload MyFilterDriver
```

### How do I display all loaded filter drivers in Windows with fltmc?
To display all loaded filter drivers in Windows using fltmc, use the following command:
```cmd
fltmc filters
```

### How do I show detailed information about a specific filter driver in Windows using fltmc?
To show detailed information about a specific filter driver in Windows using fltmc, enter the command:
```cmd
fltmc instances MyFilterDriver
```

### How do I list all registered mini-filter driver instances in Windows with fltmc?
To list all registered mini-filter driver instances in Windows using fltmc, run the command:
```cmd
fltmc instances
```

### How do I get general help information about fltmc command in Windows?
To get general help information about the fltmc command in Windows, run:
```cmd
fltmc help
```

### How do I get detailed help for a specific fltmc command option in Windows?
To get detailed help for a specific fltmc command option in Windows, use the following command:
```cmd
fltmc help --option
```
## Applications of the FLTMC Command

1. Load a minifilter driver.
2. Unload a minifilter driver.
3. Retrieve information about the minifilter drivers loaded on the system.
4. Control minifilter driver instances.
5. Control communication ports for minifilter drivers.