---
title: Windows LPQ command
description: Learn how to efficiently manage print jobs on Windows using the lpq command. Check job status, manage queues, and troubleshoot printing issues easily.
---

The Windows lpq command is a useful tool for managing print jobs from the command line. It allows users to check the status of print jobs, manage print queues, and troubleshoot printing issues efficiently. By using the lpq command, users can easily monitor and control their printing tasks without the need for a graphical user interface. This command provides a convenient way to view information about print jobs, such as their job ID, status, and owner, making it easier for users to track and manage their printing activities. Additionally, the lpq command can be used to prioritize, hold, resume, and cancel print jobs, providing users with greater control over their printing tasks.

## LPQ Syntax:
```cmd
lpq [option] [parameter]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -P     | Specify the destination printer queue |
| -l     | Display a detailed list of print jobs |

## Parameters:
| Parameter  | Description                    |
|------------|--------------------------------|
| queue_name | Name of the printer queue      |

:::caution
Exercise caution when using the lpq command, as it directly interacts with the printer queue system on the Windows operating system.
:::

## LPQ Usage:
### Check the status of a specific printer
```cmd
lpq -P printer_name
```
This command checks the status of a specific printer named "printer_name".

### View all printers in the system queue
```cmd
lpq -a
```
Command to view all printers in the system queue.

### Check the printer status with verbose output
```cmd
lpq -l
```
Using the lpq command with -l option provides the printer status with verbose output.

### Check the queue status for a printer
```cmd
lpq -P printer_name -a
```
This command checks the queue status for a specific printer named "printer_name".
:::tip
When using the lpq command in Windows, make sure to provide the correct options and values to get the desired output. Check the lpq command documentation for more information on available options and their usage.
:::

### How do I use lpq in Windows?
To use the lpq command in Windows, execute the following command:
```cmd
lpq -S <server_name>
```

### What does the lpq command do in Windows?
The lpq command in Windows is used to display the status of a print queue on a Line Printer Daemon (LPD) printer server.

### How can I check the print queue status using lpq in Windows?
You can check the print queue status by running the following command:
```cmd
lpq -S <server_name>
```

### How do I specify a particular printer when using lpq in Windows?
To specify a particular printer when using lpq in Windows, use the -P option followed by the printer name. Here's an example:
```cmd
lpq -S <server_name> -P <printer_name>
```

### Can I use lpq to check the print queue status on a remote printer server in Windows?
Yes, you can check the print queue status on a remote printer server by providing the server name with the -S option. Here's an example:
```cmd
lpq -S <server_name>
```

### How can I view detailed information about a print job with lpq in Windows?
To view detailed information about a print job, you can use the -l option with the lpq command. Here's an example:
```cmd
lpq -S <server_name> -l
```

### Is it possible to filter the output of lpq in Windows?
Yes, you can filter the output of the lpq command in Windows by using tools like grep or find. For example:
```cmd
lpq -S <server_name> | find "job"
```

## Applications of the LPQ Command

- Display information about print jobs in a queue
- Show the status of print jobs in a queue
- View details such as job ID, owner, status, and printing progress of each job in a queue