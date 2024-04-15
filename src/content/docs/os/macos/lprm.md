---
title: lprm MacOS command
description: Learn how to efficiently remove print jobs on MacOS using the lprm command.
---

The MacOS lprm command allows users to remove print jobs from the print queue quickly and efficiently. By using this command, users can easily cancel print jobs that are no longer needed or stuck in the queue. This can help streamline the printing process and prevent any unnecessary waste of resources. The lprm command is a powerful tool for managing print jobs on MacOS systems and can be especially useful in busy office environments where multiple print jobs are being processed simultaneously.
## lprm Syntax:
```bash
lprm [options] [job ID]
```
## lprm Options:
| Option | Description                      |
|--------|----------------------------------|
| -E     | Force encryption when connecting to the server.|
| -U     | Specifies a username for canceling print jobs.|
| -P     | Specifies the destination printer.|
| -h     | Specifies the hostname of the print server.|

## lprm Usage Warning:
:::caution
Exercise caution when using the lprm command as it permanently removes print jobs. Make sure to double-check the job ID before executing the command.
:::

## Parameters:
| Parameter | Description               |
|-----------|---------------------------|
| job ID    | The ID of the print job to be canceled. |
## lprm Command Usage Examples:
### Remove a Specific Print Job
```bash
lprm 123
```
Remove the print job with job ID 123 from the print queue.

### Remove All Print Jobs
```bash
lprm -
```
Remove all print jobs from the print queue.

### Remove Print Jobs by User
```bash
lprm -u john
```
Remove all print jobs from the print queue submitted by the user "john".

### Remove Print Jobs by Destination Printer
```bash
lprm -P printer1
```
Remove all print jobs from the print queue directed to the printer "printer1".

### Remove Print Jobs by Multiple Options
```bash
lprm -u john -P printer1
```
Remove all print jobs from the print queue submitted by the user "john" and directed to the printer "printer1".
:::tip
When using the lprm command in MacOS, make sure you have the necessary permissions to remove print jobs. Additionally, double-check the printer queue before executing any removal commands to avoid accidentally deleting important print jobs.
:::

### How do I cancel a specific print job using lprm in MacOS?
To cancel a specific print job using lprm in MacOS, you can specify the job ID associated with the print job. Use the following command:
```bash
lprm -P <printer_name> <job_id>
```

### How do I remove all print jobs in the queue with lprm in MacOS?
To remove all print jobs in the queue using lprm in MacOS, you can use the command below:
```bash
lprm -a
```

### How can I remove print jobs for a specific printer with lprm in MacOS?
To remove print jobs for a specific printer using lprm in MacOS, specify the printer name in the command. Use the following syntax:
```bash
lprm -P <printer_name>
```

### Can I view the print jobs in the queue before removing them with lprm in MacOS?
Yes, you can view the print jobs in the queue before removing them using the lpq command. To list the print jobs in the queue, execute:
```bash
lpq
```

### How do I remove a specific user's print jobs using lprm in MacOS?
To remove print jobs of a specific user using lprm in MacOS, specify the username in the command. Use the following syntax:
```bash
lprm -U <username>
```

### Is there a way to force remove print jobs without confirmation with lprm in MacOS?
Yes, you can force remove print jobs without confirmation using the - option with lprm in MacOS. Execute the following command:
```bash
lprm -P <printer_name> -
```

### How do I remove a range of print job IDs with lprm in MacOS?
To remove a range of print job IDs using lprm in MacOS, specify the range in the command. Use the following syntax:
```bash
lprm -P <printer_name> <start_job_id>-<end_job_id>
```
## Applications of the lprm command

- Allows users to remove print jobs from the print queue on MacOS.