---
title: WECUTIL command in Windows
description: Learn how to use the WECUTIL command in Windows for managing event subscriptions efficiently. 
---

The WECUTIL command in Windows is a powerful tool for managing event subscriptions. It allows users to configure event forwarding and subscription settings with ease. By using WECUTIL, administrators can collect and view events from remote computers, enabling efficient monitoring and troubleshooting across a network. WECUTIL provides various options for managing event subscriptions, including creating, deleting, and modifying subscriptions. This command is particularly useful in enterprise environments where centralized event management is essential for maintaining system health and security.
## WECUTIL Syntax:
```cmd
wecutil [option] [parameter]
```

## Windows WECUTIL Options:
| Option | Description                      |
|--------|----------------------------------|
| qc     | Queries the configured subscriptions. |
| gr     | Show the subscriptions configured in the specified log.|
| gr {Subscriber} | Shows the specified subscriber configuration. |
| cs     | Creates a new subscription.       |
| ds     | Deletes a subscription.           |
| ru     | Restores a subscription.          |
| ep     | Enumerates publishers.            |
| csf    | Creates a subscription using the forwarder encapsulation provider. |
  
## WECUTIL Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| [channel] | Specifies the event log channel to use. |
| [Subscriber] | Specifies the name of the subscriber to manage. |
| [Publisher]  | Specifies the name of the publisher component. |

:::caution
Exercise caution when using the WECUTIL command as it deals with Windows Event Collector subscriptions, and incorrect usage can lead to potential data loss or misconfigurations.
:::

### Query the Subscription Configuration
```cmd
wecutil qc
```
Displays the configuration for the subscription in Windows Event Collector.

### Export a Subscription Configuration
```cmd
wecutil es <SubscriptionName> <OutputFile>
```
Exports the specified subscription configuration to the specified output file.

### Add a Subscription
```cmd
wecutil cs <SubscriptionName>
```
Adds a new subscription with the specified name in Windows Event Collector.

### Delete a Subscription
```cmd
wecutil ds <SubscriptionName>
```
Deletes the specified subscription from Windows Event Collector.

### Disable a Subscription
```cmd
wecutil ds <SubscriptionName> /disable
```
Disables the specified subscription in Windows Event Collector.

### Enable a Subscription
```cmd
wecutil ds <SubscriptionName> /enable
```
Enables the specified subscription in Windows Event Collector.

### Start the Windows Event Collector Service
```cmd
wecutil ss
```
Starts the Windows Event Collector service.

### Stop the Windows Event Collector Service
```cmd
wecutil sp
```
Stops the Windows Event Collector service.
:::tip
When using the wecutil command in Windows, always make sure to run the Command Prompt as an administrator to avoid any permission-related issues.
:::

### How do I use wecutil in Windows?
To use the wecutil command in Windows, execute the following command:
```cmd
wecutil qc
```

### What is the purpose of wecutil qc?
The "wecutil qc" command in Windows is used to query the status of the Event Collector service.
```cmd
wecutil qc
```

### How can I list all the subscriptions with wecutil?
To list all the subscriptions using wecutil, you can use the following command:
```cmd
wecutil {command to list subscriptions}
```

### How do I start the Event Log Collector service with wecutil?
To start the Event Log Collector service using wecutil, you can run the following command:
```cmd
wecutil ss <servername> -r:false
```

### Can wecutil be used to configure Event Forwarding subscriptions?
Yes, you can use wecutil to configure Event Forwarding subscriptions on Windows machines.
```cmd
wecutil cs SubscriptionName /cf:FileName /ca:ChannelName
```

### How do I enable real-time logging with wecutil?
To enable real-time logging using wecutil, you can run the following command:
```cmd
wecutil gr
```

### How do I clear all subscriptions with wecutil?
To clear all subscriptions using wecutil, you can execute the following command:
```cmd
wecutil cl
```

### What permissions are required to use wecutil?
To use wecutil, you need to have administrative privileges on the Windows system.
```cmd
wecutil --help
```
## Applications of the WECUTIL Command

- Displaying information about registered event log providers
- Registering event log providers
- Unregistering event log providers
- Querying event log provider registration
- Setting event log provider properties
- Getting event log provider properties