---
title: fg command in Linux
description: Learn how to bring a process to the foreground using the Linux fg command. Find syntax, options, and practical examples in this guide.
---

The Linux fg command is used to bring a background process to the foreground. It allows you to resume and manage a stopped job, making it the active one in your terminal session. By specifying a job number or the command name, you can easily bring the desired process back to the foreground. This command is handy when you have multiple processes running in the background and need to interact with a specific one without starting a new terminal session. With the fg command, you can conveniently control and monitor processes in your Linux system.
## fg Syntax:
```bash
fg [job_spec]
```

## Linux fg Options:
| Option   | Description                                                                                         |
|----------|-----------------------------------------------------------------------------------------------------|
| -          | No options are available for the fg command.                                                       |

## fg Parameters:
| Parameter  | Description                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------|
| job_spec   | Specifies the job to bring to the foreground. It can be either the PID of the job or %job_number.   |

:::caution
The fg command is used to bring a background job to the foreground in a terminal session. Be cautious while using this command, as bringing the wrong job to the foreground can disrupt or terminate processes unexpectedly.
:::
## How to use fg command:
### Resume a Stopped Job in the Foreground
```bash
fg %1
```
Brings the job with job ID 1 to the foreground.

### Bring the Most Recent Job to the Foreground
```bash
fg
```
Brings the most recent job to the foreground without specifying the job ID.

### Move a Specific Job to the Foreground
```bash
fg %2
```
Brings the job with job ID 2 to the foreground.

### Resume a Job Using its Process ID
```bash
fg %4291
```
Brings the job with process ID 4291 to the foreground.

### Display a List of Background Jobs and Select One to Bring to the Foreground
```bash
jobs
fg %3
```
Lists all background jobs and then brings the job with job ID 3 to the foreground.

### Bring a Specific Job Back to the Foreground
```bash
fg %4
```
Brings the job with job ID 4 back to the foreground.

### Switch Between Multiple Background Jobs
```bash
fg %5
fg %6
```
Switches between multiple background jobs by bringing each job to the foreground.

### Resume Jobs That are Paused or Suspended
```bash
fg %7
```
Resumes a job that has been paused or suspended and brings it to the foreground.
:::tip
When using the fg command in Linux, keep in mind that it is used to bring a background job to the foreground. Make sure to refer to the job number or job ID when using the fg command.
:::

### How do I use fg in Linux?
To use the fg command in Linux, execute the following command:
```bash
fg %1
```

### How do I resume a suspended job in bash using fg?
To resume a suspended job in bash using fg, execute the following command:
```bash
fg %2
```

### How can I bring the most recently suspended job back to the foreground in Linux?
To bring the most recently suspended job back to the foreground in Linux, use the following command:
```bash
fg %-
```

### What is the purpose of the fg command in Linux?
The fg command in Linux is used to bring a background job to the foreground in the terminal.

### How do I check the list of currently running jobs in the background in bash?
To check the list of currently running jobs in the background in bash, use the following command:
```bash
jobs
```

### How can I move a job from the background to the foreground in bash?
To move a job from the background to the foreground in bash, you can use its job ID with the fg command. For example:
```bash
fg %3
```

### How do I bring a specific job to the foreground in Linux using fg?
To bring a specific job to the foreground in Linux using fg, you can refer to it by its job number. For example:
```bash
fg 1
```

### Can I use the fg command to switch between multiple background jobs in bash?
Yes, you can use the fg command with different job IDs or job numbers to switch between multiple background jobs in bash.

### How do I bring a background process to the foreground and make it the current job in Linux?
To bring a background process to the foreground and make it the current job in Linux, execute the following command:
```bash
fg
```

## Applications of the fg command

- Bring a background job to the foreground.