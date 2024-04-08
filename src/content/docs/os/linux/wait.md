---
title: What is wait Linux command?
description: Learn how to use the Linux wait command to pause the execution of a shell script until all background jobs are complete. 
---

The Linux wait command is used to pause the execution of a shell script until all background jobs are complete. This can be useful for ensuring that certain processes finish before moving on to the next task.

## wait Syntax:
```bash
wait [job_id]
```

## wait Options:
| Option | Description |
|--------|-------------|
| N/A    | N/A         |

:::caution
Be cautious when using the wait command as it is only used to wait for background jobs to finish. Using it without specifying a job ID may result in unexpected behavior.
:::

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| job_id    | The job ID of the background job to wait for.       |
## wait Command Usage Examples:

### Wait for a Background Job to Complete
```bash
sleep 5 &
wait
```
Waits for the background job (sleep for 5 seconds) to complete before continuing.

### Wait for Multiple Background Jobs to Complete
```bash
sleep 3 &
sleep 6 &
wait
```
Waits for both background jobs (sleep for 3 and 6 seconds) to complete before moving on.

### Wait with Specific Process ID
```bash
sleep 4 &
wait $!
```
Waits for the background job with the specific Process ID ($!) to finish before proceeding.

### Wait for a Specific Time Duration
```bash
sleep 10 &
wait $!; echo "Command executed after 10 seconds"
```
Waits for the background job to complete for 10 seconds before displaying the message.

### Using wait with Conditional Statement
```bash
sleep 5 &
pid=$!
wait $pid && echo "Process $pid completed successfully" || echo "Process $pid was terminated"
```
Waits for the background job to finish and displays a corresponding message based on the result.
:::tip
To effectively use the wait command in Linux, consider using it in scripts to wait for the completion of child processes before proceeding with the next steps. This can help in managing dependencies and ensuring proper synchronization in your scripts.
:::

### How do I use wait in Linux?
To use the wait command in bash, execute the following command:
```bash
wait
```

### How can I wait for a specific process ID to finish in Linux?
You can wait for a specific process ID to finish in Linux by executing the following command:
```bash
wait <PID>
```

### How do I wait for multiple process IDs to complete in Linux?
To wait for multiple process IDs to complete in Linux, you can use the wait command with the PIDs separated by spaces, like in this example:
```bash
wait <PID1> <PID2> <PID3>
```

### How do I wait for all background processes to finish in Linux?
You can wait for all background processes to finish in Linux by using the wait command without any arguments, as shown in this example:
```bash
wait
```

### How can I make the wait command exit with a custom message upon completion in Linux?
To make the wait command exit with a custom message upon completion in Linux, you can use the "&&" operator along with the echo command, like in this example:
```bash
wait && echo "All processes have completed."
```

### How do I set a timeout for the wait command in Linux?
You can set a timeout for the wait command in Linux by using the timeout utility along with the wait command, as demonstrated in this example:
```bash
timeout 60s wait
```

### How do I use options with the wait command in Linux?
To use options with the wait command in Linux, you can specify the options directly after the wait command, like in this example:
```bash
wait --timeout 60s
```

### How can I check the exit status of the last wait command in Linux?
You can check the exit status of the last wait command in Linux by inspecting the value of the special variable "$?", as shown in this example:
```bash
wait
echo $?
```

## Applications of the wait command

- To wait for a specified process ID or job to complete before continuing
- To synchronize the execution of multiple processes in a script
- To ensure that all background processes have completed before executing subsequent commands