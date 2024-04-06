---
title: ISCSICLI Windows Command Guide
description: Learn how to use the Windows iscsicli command for managing iSCSI initiators and targets effectively.
---

The Windows iscsicli command is a powerful tool for managing iSCSI initiators and targets. It allows users to configure, connect, and disconnect iSCSI targets, as well as retrieve information about current sessions and connections. With iscsicli, administrators can efficiently manage iSCSI resources on Windows systems, making it easier to set up and maintain storage solutions.

## ISCSICLI Syntax:
```cmd
iscsicli [TargetName | -Target <TargetName>]
```

## Options:
| Option   | Description                            |
|----------|----------------------------------------|
| -Target  | Specifies the name of the iSCSI target.|

## Parameters:
| Parameter  | Description                                       |
|------------|---------------------------------------------------|
| TargetName | Specifies the iSCSI target's name to be managed.  |
  
:::caution
Exercise caution when using the iscsicli command as it directly interacts with iSCSI targets and can impact storage connectivity. Make sure to have a good understanding of the command before making any changes.
:::
## ISCSICLI Command Samples:
### Connect to an iSCSI Target
```cmd
iscsicli QAddTargetPortal TargetIPAddress TargetPort
iscsicli QLoginTarget TargetName
```
Establishes a connection to an iSCSI target by adding the target portal and logging in to the target.

### List iSCSI Targets
```cmd
iscsicli ListTargets
```
Displays a list of all discovered iSCSI targets available for connection.

### Display iSCSI Initiator Information
```cmd
iscsicli ReportISCLSIIkeStatus
```
Shows detailed information about the iSCSI initiator, including the iSCSI initiator adapter name and status.

### Retrieve iSCSI Initiator Session Information
```cmd
iscsicli ListTunnelAddress
```
Retrieves information about the iSCSI initiator session, such as the tunnel addresses used for communication.

### Disconnect from an iSCSI Target
```cmd
iscsicli LogoutTarget TargetName
iscsicli RemoveTargetTarget TargetName
```
Logs out from and removes the specified iSCSI target connection, terminating the session.

### Manage iSCSI Initiator Settings
```cmd
iscsicli AddISNSServer ServerIPAddress
iscsicli DiscoverTarget TargetIPAddress
```
Adds an iSNS server for the initiator to use and initiates the discovery process to find iSCSI targets available for connection.

### Modify iSCSI Session Options
```cmd
iscsicli SetSessionChapParameters TargetName
```
Configures the Challenge-Handshake Authentication Protocol (CHAP) parameters for the specified iSCSI target session.
:::tip
When using the iscsicli command in Windows, make sure to run it with administrative privileges to ensure proper functionality.
:::

## ISCSICLI FAQ:

### How do I use iscsicli in Windows?
To use the iscsicli command in Windows, execute the following command:
```cmd
iscsicli --q AddTargetPortal 192.168.1.100
```

### How can I list all the available targets using iscsicli?
To list all the available targets with iscsicli, use the following command:
```cmd
iscsicli ListTargets
```

### How do I connect to a specific target with iscsicli?
To connect to a specific target using iscsicli, run the following command:
```cmd
iscsicli QAddTargetPortal 192.168.1.100
iscsicli LoginTarget iqn.2005-10.com.example:target0
```

### How can I view the details of all the iSCSI sessions?
To view the details of all iSCSI sessions with iscsicli, use this command:
```cmd
iscsicli ReportTargetMappings
```

### How do I disconnect from an iSCSI target using iscsicli?
To disconnect from an iSCSI target with iscsicli, execute the following command:
```cmd
iscsicli LogoutTarget iqn.2005-10.com.example:target0
```

### How can I remove a target portal using iscsicli?
To remove a target portal with iscsicli, run the following command:
```cmd
iscsicli RemoveTargetPortal 192.168.1.100
```
## Applications of the ISCSICLI Command

- List iSCSI initiators
- Display iSCSI initiator information
- List iSCSI targets
- Display iSCSI target information
- Log in to an iSCSI target
- Log out of an iSCSI target
- Refresh the iSCSI target information
- Configure iSCSI persistence
- Set iSCSI CHAP secret
- Clear iSCSI persistent targets and information