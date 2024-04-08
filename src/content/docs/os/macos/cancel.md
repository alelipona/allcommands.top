---
title: cancel MacOS command
description: Learn how to use the MacOS cancel command to terminate or pause print jobs from the command line.
---

The MacOS cancel command allows users to manage print jobs by terminating or pausing them directly from the command line. This can be useful for troubleshooting or prioritizing print tasks. By using the cancel command, users can easily control the printing queue and avoid unnecessary delays.
## cancel Syntax:
```bash
cancel [options] [parameters]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -h     | Display help message              |
| -q     | Quiet mode, suppress output       |
| -k     | Kill the specified job ID         |
| -u     | Specify the user for the job      |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| job ID    | Specify the job ID to be canceled        |
| user      | Specify the user whose job to be canceled|

:::caution
Use the cancel command carefully as it will terminate the specified job or process without the ability to recover unsaved data. Make sure to confirm the job ID or user before executing. 
:::
## cancel bash Examples:
### Cancel a Running Command
```bash
sleep 100
# Press ctrl + c to cancel
```
Cancels a running command by pressing "ctrl + c".

### Cancel Multiple Running Commands
```bash
sleep 10 & sleep 20 & sleep 30
# Press ctrl + c to cancel all
```
Cancels multiple running commands simultaneously by pressing "ctrl + c".

### Cancel a Specific Job by Job ID
```bash
sleep 100 &
# Check job ID with "jobs" command and then cancel using "cancel %jobID"
cancel %1
```
Cancels a specific job by job ID using the `cancel` command followed by the job ID.

### Cancel a Specific Job by Process ID
```bash
sleep 100 &
# Check PID with "ps" command and then cancel using "cancel -p PID"
cancel -p 1234
```
Cancels a specific job by its process ID using the `cancel` command followed by the process ID.

### Cancel a Print Job
```bash
# Find the job ID with "lpq" command and then cancel using "cancel -a jobID"
lpq
cancel -a 1234
```
Cancels a specific print job by its job ID using the `cancel` command followed by the job ID retrieved from `lpq`.

### Cancel a Scheduled Shutdown
```bash
sudo shutdown -h +30
# Cancel the scheduled shutdown using "sudo shutdown -c"
sudo shutdown -c
```
Cancels a scheduled system shutdown using the `shutdown -c` command.
:::tip
When using the `cancel` command in MacOS, make sure to carefully read the command options and parameters to avoid unintended consequences. It is a powerful command that can cancel print jobs or other processes, so double-check before executing the command.
:::

### How do I use cancel in MacOS?
To use the cancel command in MacOS, execute the following command:
```bash
cancel -h
```

### What are the available options for the cancel command in MacOS?
The cancel command in MacOS provides various options for cancelling print jobs or other processes. To view all available options, use the following command:
```bash
cancel --help
```

### How can I cancel a specific print job using the cancel command in MacOS?
To cancel a specific print job by job ID, you can use the following command syntax:
```bash
cancel -x <job_id>
```

### Can I cancel all print jobs at once with the cancel command in MacOS?
Yes, you can cancel all print jobs at once by using the following command:
```bash
cancel -a
```

### How do I cancel a print job from a specific printer using the cancel command in MacOS?
To cancel a print job from a specific printer, you can specify the printer name in the command:
```bash
cancel -P <printer_name>
```

### Is it possible to cancel a print job by specifying the user who submitted it in MacOS?
Yes, you can cancel a print job by specifying the user who submitted it using the following command syntax:
```bash
cancel -u <username>
```

### How can I list all print jobs and their corresponding IDs before canceling in MacOS?
To list all print jobs with their job IDs before canceling, you can use the following command:
```bash
cancel -l
```

### Can the cancel command in MacOS be used to cancel non-print job processes?
Yes, the cancel command in MacOS can also be utilized to cancel non-print job processes. You can specify the process ID (PID) to cancel a specific process using the following command:
```bash
cancel -p <process_id>
```
## Applications of the cancel command

1. Cancel printing jobs
2. Cancel file operations
3. Cancel tasks in Terminal
4. Cancel installation processes
5. Cancel system shutdown or restart operations