---
title: service Linux command
description: The Linux service command is used to manage services on a Linux system. It allows users to start, stop, restart, enable, disable, and view the status of services. 
---

The Linux service command is a powerful tool for managing services on a Linux system. It provides a simple and efficient way to start, stop, restart, enable, disable, and view the status of services. Services are background processes that run independently of the logged-in user, and the service command allows users to interact with these processes easily. By using the service command, users can ensure that critical services are running smoothly and troubleshoot any issues that may arise. This command is essential for system administrators and users who need to maintain the health and functionality of their Linux systems.
## service Syntax:
```bash
service [option] [parameter] [service_name]
```
## Options:
| Option                 | Description                                          |
|------------------------|------------------------------------------------------|
| --status-all           | Display status of all services                       |
| --status-all-short     | Display short status of all services                 |
| --status-all-jobs      | Display detailed status of all services              |
| --help                 | Display help information                              |

## Parameters:
| Parameter              | Description                                          |
|------------------------|------------------------------------------------------|
| start                  | Start the specified service                           |
| stop                   | Stop the specified service                            |
| restart                | Restart the specified service                         |
| reload                 | Reload configuration of the specified service         |
| status                 | Display status of the specified service              |

:::caution
Exercise caution when using the `service` command. Be sure to provide the correct service name as a parameter to avoid unintended actions such as starting, stopping, or restarting the wrong service.
:::
## service command Examples:
### Start a Service
```bash
service apache2 start
```
Starts the Apache web server service.

### Stop a Service
```bash
service ssh stop
```
Stops the SSH service.

### Restart a Service
```bash
service nginx restart
```
Restarts the Nginx web server service.

### Check the Status of a Service
```bash
service mysql status
```
Displays the status of the MySQL service.

### Enable a Service to Start on Boot
```bash
service tomcat enable
```
Enables the Tomcat service to start automatically during system boot.

### Disable a Service from Starting on Boot
```bash
service postfix disable
```
Disables the Postfix mail service from starting automatically on system boot.
:::tip
To effectively use the service command in Linux, make sure to check the available options and syntax in the manual pages by running `man service`.
:::

## service Command Help Center:

### How do I start a service in Linux?
To start a service in Linux, use the following command:
```bash
service serviceName start
```

### How do I stop a service in Linux?
To stop a service in Linux, use the following command:
```bash
service serviceName stop
```

### How do I restart a service in Linux?
To restart a service in Linux, use the following command:
```bash
service serviceName restart
```

### How do I check the status of a service in Linux?
To check the status of a service in Linux, use the following command:
```bash
service serviceName status
```

### How do I enable a service to start on boot in Linux?
To enable a service to start on boot in Linux, use the following command:
```bash
sudo systemctl enable serviceName
```

### How do I disable a service from starting on boot in Linux?
To disable a service from starting on boot in Linux, use the following command:
```bash
sudo systemctl disable serviceName
```

### How do I reload configuration of a service in Linux?
To reload the configuration of a service in Linux, use the following command:
```bash
service serviceName reload
```

### How do I list all services in Linux?
To list all services in Linux, use the following command:
```bash
service --status-all
```
## Applications of the service command

- Start a service
- Stop a service
- Restart a service
- Check the status of a service
- Enable a service to start on boot
- Disable a service from starting on boot