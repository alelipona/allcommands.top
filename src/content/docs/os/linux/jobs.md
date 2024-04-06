---
title: jobs Linux command
description: Discover how to manage background jobs in Linux using the powerful jobs command. Learn how to list, control, and manipulate processes with ease.
---

The Linux jobs command is a useful tool for managing background jobs within a terminal session. This command allows users to monitor, control, and manipulate processes that are running in the background. By using the jobs command, users can view a list of all active background jobs, along with their respective job IDs. This makes it easier to keep track of multiple processes running simultaneously and allows users to bring jobs to the foreground or background, as needed. Additionally, the jobs command provides options for manipulating the status of jobs, such as suspending or resuming them. This can help users efficiently manage their workflow and ensure that all processes are running smoothly.
## jobs Syntax:
```bash
jobs [options] [parameters]
```

## Options:
| Option      | Description                            |
|-------------|----------------------------------------|
| -l          | List process IDs in addition to job IDs|
| -p          | Display process group IDs              |
| -r          | Display only running jobs              |
| -s          | Display only stopped jobs              |
| -n          | Display only jobs that have changed status since the last notification |
| -x          | Display only jobs that have not been started |

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| job_spec  | Specify the job or process to act upon           |
| command   | Specify the command to execute and put in the background | 

:::caution
Ensure you understand the difference between options like -r (running jobs) and -s (stopped jobs) to avoid unexpected behavior.
:::
## jobs bash Examples:
### List all current jobs
```bash
jobs
```
Displays all current jobs running in the background.

### Run a command in the background
```bash
sleep 10 &
```
Executes the command "sleep 10" in the background, allowing you to continue using the terminal.

### Bring a background job to the foreground
```bash
fg %1
```
Brings the first background job to the foreground.

### Suspend a foreground job
```bash
Ctrl + Z
```
Suspends the currently running foreground job.

### Resume a suspended job in the foreground
```bash
bg %1
```
Resumes the first suspended job in the background.

### Kill a specific job
```bash
kill %1
```
Immediately terminates the first running job in the background.
:::tip
Remember that the jobs command in Linux is used to manage background jobs in the shell. It allows you to view, manipulate, and control the status of jobs running in the background.
:::

### How do I use jobs in Linux?
To use the jobs command in Linux, execute the following command:
```bash
jobs
```

### How can I list all jobs in the current shell session?
To list all jobs in the current shell session, you can use the jobs command with the -l option:
```bash
jobs -l
```

### How can I bring a job to the foreground in Linux?
To bring a job to the foreground in Linux, you can use the fg command followed by the job number. For example:
```bash
fg %1
```

### How can I send a job to the background in Linux?
To send a job to the background in Linux, you can use the bg command followed by the job number. For example:
```bash
bg %1
```

### How do I display the process IDs of background jobs in Linux?
To display the process IDs of background jobs in Linux, you can use the jobs command with the -p option. For example:
```bash
jobs -p
```

### How can I kill a background job in Linux?
To kill a background job in Linux, you can use the kill command with the process ID of the job. For example:
```bash
kill %1
```

### How do I resume a suspended job in Linux?
To resume a suspended job in Linux, you can use the fg command followed by the job number. For example:
```bash
fg %1
```
## Applications of the jobs command

- View a list of current jobs running in the background
- Manage background processes by bringing them to the foreground or sending them to the background
- Check the status of background jobs and their job numbers
- Resume suspended jobs in the terminal