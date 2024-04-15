---
title: lpstat MacOS command
description: Check the status of print jobs and printers with lpstat command on MacOS. Learn how to use lpstat in Terminal to view information about printers and print jobs.
---

The lpstat command on MacOS is a useful tool for checking the status of print jobs and printers. By using lpstat in Terminal, you can view information about the printers connected to your system, such as their names, statuses, and locations. Additionally, lpstat allows you to see details about print jobs in the queue, including their job IDs, owners, and statuses. This can help you troubleshoot any printing issues and manage your print jobs more effectively.

## lpstat Syntax:
```bash
lpstat [options] [printer]
```
## lpstat Options:
| Option       | Description                                                   |
|--------------|---------------------------------------------------------------|
| -a           | Shows the status of all printers.                             |
| -d           | Shows the current default destination printer.                |
| -p           | Shows the status of the specified printer.                   |
| -r           | Shows the status of the printer server.                      |
| -s           | Shows a summary of printers' statuses.                       |
| -t           | Shows the status of all printers and servers.                |
| -u           | Shows the jobs queued by the specified user.                |

## Parameters:
| Parameter    | Description                                       |
|--------------|---------------------------------------------------|
| printer      | Specifies the printer to show status for.         |
## lpstat Command Usage Examples:
### Display List of Printers
```bash
lpstat -p
```
This command displays a list of printers available on the system.

### Display Information about Specific Printer
```bash
lpstat -l -d printer_name
```
Displays detailed information about a specific printer, identified by "printer_name".

### Display Print Queue Status
```bash
lpstat -o
```
Shows the status of print jobs currently in the print queue.

### Check Printer Status
```bash
lpstat -p printer_name
```
Checks the status of a specific printer identified by "printer_name".

### Display Failed Print Jobs
```bash
lpstat -W failed
```
Lists information about print jobs that have failed to print.
:::tip
When using the lpstat command in macOS, remember to check the available options and flags in the man page for lpstat by running `man lpstat`. This will provide detailed information on how to customize and utilize the command effectively.
:::

### How do I use lpstat in MacOS?
To use the lpstat command in bash, execute the following command:
```bash
lpstat
```

### How can I display information about a specific printer with lpstat?
To display information about a specific printer using lpstat, use the following command:
```bash
lpstat -p <printer_name>
```

### How can I list all printers with lpstat in MacOS?
To list all printers using lpstat in MacOS, run the command:
```bash
lpstat -a
```

### How to check the status of all print queues with lpstat?
To check the status of all print queues using lpstat, use the following command:
```bash
lpstat -t
```

### How to see the jobs in the printer queue with lpstat?
To view the jobs in the printer queue with lpstat, run the command:
```bash
lpstat -o
```

### How to get detailed information about print jobs with lpstat?
To get detailed information about print jobs using lpstat, execute the following command:
```bash
lpstat -W all
```

### How can I see completed print jobs history with lpstat?
To view the completed print jobs history with lpstat, use the command:
```bash
lpstat -o | grep completed
```

### How do I cancel a specific print job using lpstat?
To cancel a specific print job using lpstat, you can execute the following command:
```bash
cancel <job_id>
```
## Applications of the lpstat command

- View information about print queues
- Check the status of print jobs
- Display printer settings
- Cancel print jobs
- Verify printer connections