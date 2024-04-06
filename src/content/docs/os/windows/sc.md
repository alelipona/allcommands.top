---
title: Windows SC command
description: Manage Windows services using the SC command with ease. Learn how to control, create, delete, start, stop, pause, or configure services efficiently.
---

The Windows SC command is a powerful tool for managing services. It allows users to control various aspects of Windows services, such as creating, deleting, starting, stopping, pausing, or configuring them. With SC command, users can easily interact with services from the command line, making service management more efficient and convenient. This tool provides flexibility and control over the Windows services, allowing users to customize and adjust service settings as needed. Whether it's for troubleshooting, optimization, or customization purposes, the SC command is a valuable tool for any Windows user looking to streamline service management tasks.

## SC Syntax:
```cmd
sc [command] [option] [service name]
```

## Options:
| Option | Description                                |
|--------|--------------------------------------------|
| start  | Starts a service                           |
| stop   | Stops a service                            |
| query  | Queries the status of a service            |
| config | Changes the configuration of a service     |
| qc     | Displays the configuration information for a service |
| create | Creates a service                         |
| delete | Deletes a service                         |
| control| Sends a control to a service               |
| qc     | Queries the configuration of a service     |

## Parameters:
| Parameter    | Description                                     |
|--------------|-------------------------------------------------|
| service name | The service name or the service display name     |

## SC Usage:
### Start a Windows Service
```cmd
sc start servicename
```
Starts the specified Windows service identified by "servicename".

### Stop a Windows Service
```cmd
sc stop servicename
```
Stops the specified Windows service identified by "servicename".

### Query the Status of a Windows Service
```cmd
sc query servicename
```
Retrieves the current status of the specified Windows service identified by "servicename".

### Change the Startup Type of a Windows Service
```cmd
sc config servicename start= auto
```
Sets the startup type of the specified Windows service identified by "servicename" to "auto".
:::tip
When using the sc command in Windows, make sure to run the Command Prompt or PowerShell as an administrator to avoid any permission issues.
:::

### How do I use sc in Windows?
To use the sc command in Windows, execute the following command:
```cmd
sc query
```

### What is the purpose of the sc stop command?
The sc stop command is used to stop a specified service in Windows. This can be achieved by running the following command:
```cmd
sc stop <service_name>
```

### How can I start a service using the sc command?
To start a service in Windows using the sc command, you can use the following syntax:
```cmd
sc start <service_name>
```

### How do I list all active services with sc in Windows?
To list all active services in Windows using the sc command, you can run the following command:
```cmd
sc query state= all
```

### What is the sc config command used for?
The sc config command in Windows is used to configure how a service is started. You can use it with the following syntax:
```cmd
sc config <service_name> start= <start_type>
```

### How can I delete a service with sc in Windows?
To delete a service using the sc command in Windows, you can run the following command:
```cmd
sc delete <service_name>
```

### Is it possible to pause a service using the sc command?
Yes, you can pause a service in Windows using the sc command. The syntax for pausing a service is as follows:
```cmd
sc pause <service_name>
```

## Applications of the SC Command

- Configure and query the properties of a service
- Start and stop a service
- Create a new service
- Change the service configuration
- Delete a service
- Query information about installed services