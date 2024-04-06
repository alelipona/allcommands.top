---
title: bg command in Linux
description: Learn how to run processes in the background using the Linux bg command. Find out how to manage background jobs efficiently.
---

The Linux bg command is used to run processes in the background, allowing you to continue working in the terminal while the job executes. This command is useful for managing multiple tasks simultaneously and keeping your system responsive. With bg, you can send a process to the background, stop it, resume it, or check its status effortlessly. Mastering the bg command can significantly increase your productivity and efficiency when working with the Linux command line.

## bg Syntax:
```bash
bg [job_spec]
```
## Linux bg Options:
| Option | Description            |
|--------|------------------------|
| -help  | Display help for bg    |
| -n     | Specify job number     |

## bg Parameters:
| Parameter     | Description                        |
|---------------|------------------------------------|
| job_spec      | Specifies the job to be sent to the background. |

:::caution
Use the bg command carefully as sending a process to the background may affect its behavior and output.
:::

### Start a Process in the Background
```bash
firefox &
```
Starts the Firefox web browser in the background.

### Resume a Stopped Process in the Background
```bash
bg %1
```
Resumes the process with job ID 1 in the background.

### Execute a Command and Send it to the Background
```bash
find / -name "*.log" &
```
Searches for all files with a .log extension starting from the root directory and runs the command in the background.

### View Background Jobs
```bash
bg
```
Displays a list of all currently running background jobs.

### Put a Foreground Job in the Background
```bash
^Z
bg
```
Suspends a foreground job and sends it to the background.

### Check the Status of a Background Job
```bash
bg %2
```
Checks the status of the process with job ID 2 running in the background.

### Move a Job to the Background by Job ID
```bash
bg %3
```
Moves the job with ID 3 to the background.

### Run a Command in the Background and Redirect Output
```bash
ls -la > output.txt &
```
Runs the 'ls -la' command in the background and directs the output to a file named output.txt.
:::tip
When using the bg command in Linux, remember that it is used to put a job in the background. This is helpful when you have stopped a job with CTRL+Z and want to resume it in the background. 
:::

### How do I use bg in Linux?
To use the bg command in Linux, execute the following command:
```bash
bg
```

### What is the purpose of the bg command in Linux?
The bg command in Linux is used to run a stopped job in the background.

### How can I move a job to the background using bg in Linux?
To move a job to the background using bg in Linux, you can first stop the job with CTRL+Z and then execute the bg command.

### Can I specify a specific job to run in the background with bg in Linux?
Yes, you can specify a specific job by using the job ID when running the bg command in Linux.
```bash
bg %1
```

### How can I view the jobs running in the background in Linux?
You can view the jobs running in the background in Linux by using the jobs command.

### Is it possible to run a job in the background by default in Linux?
Yes, you can run a job in the background by default by appending an ampersand (&) at the end of the command.
```bash
command &
```

### How can I bring a background job to the foreground in Linux?
To bring a background job to the foreground in Linux, use the fg command followed by the job ID.
```bash
fg %1
```

### Can I stop a background job in Linux using the bg command?
No, the bg command is used to put a job in the background; to stop a job, you would use the CTRL+Z shortcut.

## Applications of the bg Command

- Resuming a suspended job in the background.
- Running a stopped process in the background.
- Managing multiple processes simultaneously by running them in the background.