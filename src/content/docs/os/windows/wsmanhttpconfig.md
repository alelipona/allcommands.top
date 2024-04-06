---
title: Windows WSMANHTTPCONFIG command
description: Learn how to use the Windows wsmanhttpconfig command to configure WinRM settings for secure remote management.
---

The Windows WSMANHTTPCONFIG command is used to configure WinRM settings for secure remote management. This command allows users to customize settings such as the maximum envelope size and the certificate thumbprint. By adjusting these settings, users can enhance the security and efficiency of their remote management processes. This command is particularly useful for system administrators who need to manage multiple systems remotely and want to ensure the security of their data transmissions. With the WSMANHTTPCONFIG command, users can tailor WinRM settings to meet their specific needs and maximize the effectiveness of their remote management capabilities.
## WSMANHTTPCONFIG Syntax:
```cmd
wsmanhttpconfig [option] [parameter]
```
## Options:
| Option              | Description                                             |
|---------------------|---------------------------------------------------------|
| -r, --restore       | Restore the WinRM service to its default configuration.|
| -l, --list          | List the current configuration settings.               |
| -s, --set [setting] | Set a specific configuration setting.                  |

## Parameters:
| Parameter       | Description                                     |
|-----------------|-------------------------------------------------|
| setting         | The specific setting to be configured or set.  |

:::caution
Caution: Exercise caution when using the wsmanhttpconfig command as it can alter the configuration of the WinRM service. Incorrect configurations may impact system functionality.
:::
## WSMANHTTPCONFIG Usage:

### Enable WinRM HTTP listener on the default port 5985
```cmd
wsmanhttpconfig -listener
```
Enables the WinRM HTTP listener on the default port 5985.

### Disable WinRM HTTP listener
```cmd
wsmanhttpconfig -listener -disable
```
Disables the WinRM HTTP listener.

### Configure WinRM HTTP listener with a specific port
```cmd
wsmanhttpconfig -listener -port 8080
```
Configures the WinRM HTTP listener to use port 8080 instead of the default port.

### Display current WinRM HTTP listener configuration
```cmd
wsmanhttpconfig -listener -get
```
Displays the current configuration of the WinRM HTTP listener.
:::tip
Make sure to run the wsmanhttpconfig command with administrative privileges to ensure proper configuration settings.
:::

### How do I use wsmanhttpconfig in Windows?
To use the wsmanhttpconfig command in Windows, execute the following command:
```cmd
wsmanhttpconfig -ep "/wsman" -p 5985
```

### What is the purpose of the wsmanhttpconfig command?
The wsmanhttpconfig command in Windows is used to configure the WinRM HTTP listener settings.

### How can I check the current configuration of the WSMAN HTTP listener?
You can check the current configuration of the WSMAN HTTP listener by running the following command:
```cmd
wsmanhttpconfig -info
```

### How do I set the maximum number of concurrent users for the WSMAN HTTP listener?
To set the maximum number of concurrent users for the WSMAN HTTP listener, use the following command:
```cmd
wsmanhttpconfig -maxusers 100
```

### Can I enable SSL encryption for the WSMAN HTTP listener using wsmanhttpconfig?
Yes, you can enable SSL encryption for the WSMAN HTTP listener with the following command:
```cmd
wsmanhttpconfig -ssl
```

### How can I reset the WSMAN HTTP listener configuration to default settings?
To reset the WSMAN HTTP listener configuration to default settings, you can run the following command:
```cmd
wsmanhttpconfig -reset
```

## Applications of the WSMANHTTPCONFIG Command

- Configure the WinRM service to use HTTP instead of HTTPS
- Set the HTTP listener port for WinRM
- Enable or disable basic authentication for the WinRM service
- Specify whether to use SSL for WinRM communication