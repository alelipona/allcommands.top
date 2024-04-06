---
title: BITSADMIN Windows command
description: Learn how to use the Windows bitsadmin command to manage Background Intelligent Transfer Service tasks efficiently.
---

BITSADMIN is a command-line tool in Windows that allows users to create download or upload jobs and monitor their progress. It provides a versatile way to interact with the Background Intelligent Transfer Service (BITS) to efficiently transfer files in the background. With bitsadmin, users can control and prioritize BITS transfers, pause and resume jobs, as well as view job progress and properties. This tool is particularly useful for managing large file transfers on Windows systems and can be scripted for automated tasks.BITSADMIN is a powerful and versatile command-line tool for managing BITS transfers in Windows efficiently. It allows users to create, monitor, and manage download or upload jobs, control job properties, and prioritize transfer tasks. This tool is particularly useful for managing large file transfers in the background and can be a valuable asset for system administrators and power users looking to automate file transfer tasks.

## BITSADMIN Syntax:
```cmd
bitsadmin /TRANSFER <JobName> /DOWNLOAD /Priority <Priority> <URL> <File>
```

## Windows BITSADMIN Options:
| Option    | Description                          |
|-----------|--------------------------------------|
| /TRANSFER | Creates a new transfer job           |
| /DOWNLOAD | Specifies that the transfer is a download job |
| /Priority | Sets the priority for the transfer job |

## BITSADMIN Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| JobName   | Specifies the name of the transfer job    |
| Priority  | Sets the priority level for the job       |
| URL       | Specifies the URL of the file to download |
| File      | Specifies the local file to save the download to |

:::caution
Exercise caution when using the bitsadmin command as it involves managing background Intelligent Transfer Service (BITS) jobs. Improper use may impact network performance or lead to unintended results.
:::
## How to use BITSADMIN command:

### Download a file using BITS
```cmd
bitsadmin /transfer myDownloadJob /download /priority normal http://www.example.com/file.zip C:\Downloads\file.zip
```
Downloads a file from a specified URL to a local directory using BITS.

### Create a new transfer job
```cmd
bitsadmin /create myJob
```
Creates a new transfer job with the given name.

### Add a file to an existing transfer job
```cmd
bitsadmin /addfile myJob http://www.example.com/file.txt C:\Downloads\file.txt
```
Adds a new file to an existing transfer job.

### Monitor the status of a job
```cmd
bitsadmin /info myJob
```
Checks and displays the status and progress of a specific job.

### Cancel a specific job
```cmd
bitsadmin /cancel myJob
```
Cancels a specific transfer job.

### Set a specific job to a higher priority
```cmd
bitsadmin /priority myJob high
```
Changes the priority level of a transfer job to a higher setting.

### List all the jobs in the queue
```cmd
bitsadmin /list /allusers
```
Lists all transfer jobs currently in the queue for all users.

### Complete a job and make the downloaded files available
```cmd
bitsadmin /complete myJob
```
Marks a transfer job as completed and makes the downloaded files available for use.
:::tip
When using the bitsadmin command in CMD, make sure to run Command Prompt as an administrator to avoid any permission issues.
:::

### How do I use bitsadmin in CMD?
To use the bitsadmin command in CMD, execute the following command:
```cmd
bitsadmin --transfer MyDownloadJob --download --priority normal http://www.example.com/file.zip C:\Downloads\file.zip
```

### What is bitsadmin used for in Windows CMD?
Bitsadmin is a command-line tool in Windows that you can use to manage background Intelligent Transfer Service (BITS) jobs.

### How do I create a BITS transfer job with bitsadmin in CMD?
To create a BITS transfer job with bitsadmin in CMD, use the following command:
```cmd
bitsadmin /create MyDownloadJob
```

### How can I monitor the status of a BITS job with bitsadmin in CMD?
You can monitor the status of a BITS job with bitsadmin in CMD using the command:
```cmd
bitsadmin /monitor
```

### Can I cancel a BITS transfer job with bitsadmin in CMD?
Yes, you can cancel a BITS transfer job with bitsadmin in CMD by running the following command:
```cmd
bitsadmin /cancel MyDownloadJob
```

### How do I set the priority of a BITS job with bitsadmin in CMD?
To set the priority of a BITS job with bitsadmin in CMD, use the command:
```cmd
bitsadmin /setpriority MyDownloadJob FOREGROUND
```

### Is it possible to list all BITS jobs with bitsadmin in CMD?
Yes, you can list all BITS jobs with bitsadmin in CMD by running the command:
```cmd
bitsadmin /list
```

### How do I resume a suspended BITS job using bitsadmin in CMD?
To resume a suspended BITS job using bitsadmin in CMD, use the command:
```cmd
bitsadmin /resume MyDownloadJob
```

### Can I complete a BITS job manually with bitsadmin in CMD?
Yes, you can complete a BITS job manually with bitsadmin in CMD by running the command:
```cmd
bitsadmin /complete MyDownloadJob
```

## Applications of the BITSADMIN Command

- Downloading files
- Uploading files
- Monitoring and managing downloads and uploads
- Prioritizing downloads
- Setting transfer policies
- Suspending, resuming, and canceling transfers