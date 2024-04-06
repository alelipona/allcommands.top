---
title: Linux expect command
description: Automate interactive applications using the Linux expect command for efficient scripting.
---

The Linux expect command is a powerful tool used for automating interactions with interactive applications. By scripting sequences of keystrokes or responses to prompts, the expect command enables automated execution of tasks that require human input. This can be especially useful for tasks such as automated software installations, system configurations, and testing procedures. With expect scripts, users can streamline processes, reduce manual intervention, and improve overall efficiency in system administration and script automation.
## expect Syntax:
```bash
expect [options] script_filename
```
## Options:
| Option          | Description                                     |
|-----------------|-------------------------------------------------|
| -c command      | Execute the given command instead of a script   |
| -d              | Enable debugging mode                            |
| -f              | Run the script in front of the interpreter       |
| -k              | Use keys to interact with the process            |
| -l var_name     | Return value into the variable var_name         |
| -v              | Display version information                      |
| -D flag         | Debugging flags                                  |
| -h              | Display help information                         |

## Parameters:
| Parameter       | Description                              |
|-----------------|------------------------------------------|
| script_filename | Name of the script to execute            |

## expect Usage:
### SSH into a Remote Server and Execute a Command
```bash
#!/usr/bin/expect

set timeout 10
spawn ssh username@remote-server
expect "password:"
send "yourpassword\r"
expect "$ "
send "ls -l /path/to/directory\r"
expect "$ "
send "exit\r"
expect eof
```
This script uses expect to automate the SSH login process and execute a command on a remote server.

### Copy File from Local to Remote Server with SCP
```bash
#!/usr/bin/expect

set timeout 10
spawn scp /path/to/local/file.txt username@remote-server:/path/to/remote/directory
expect "password:"
send "yourpassword\r"
expect eof
```
This script demonstrates how to use expect to automate the secure copy (SCP) file transfer process from a local machine to a remote server.

### Automated FTP Login
```bash
#!/usr/bin/expect

set timeout 10
spawn ftp ftp.example.com
expect "Name (*):"
send "yourusername\r"
expect "Password:"
send "yourpassword\r"
expect "ftp>"
send "ls\r"
expect "ftp>"
send "exit\r"
expect eof
```
This script showcases how expect can be used to automate the FTP login process and execute commands on an FTP server.

### Automate Interactive Program Inputs
```bash
#!/usr/bin/expect

spawn interactive-program
expect "Enter your name:"
send "John\r"
expect "Enter your age:"
send "30\r"
expect eof
```
This script demonstrates using expect to automate providing inputs to an interactive program.
:::tip
When using the expect command in Linux, make sure to properly handle sensitive information such as passwords or credentials to maintain security. Avoid hardcoding passwords directly in your scripts and consider using secure methods for storing and retrieving such sensitive data.
:::

## Common Questions on expect Usage:

### How do I use expect in Linux?
To use the expect command in Linux, execute the following command:
```bash
expect script.exp
```

### How can I automate interactive commands with expect?
You can automate interactive commands in Linux using expect by creating a script that includes the necessary interactions. Here's an example:
```bash
#!/usr/bin/expect
spawn ssh user@hostname
expect "password:"
send "your_password\r"
interact
```

### How do I handle timeouts in expect scripts?
To handle timeouts in expect scripts, you can use the "timeout" option. Here's an example:
```bash
expect {
    "expected_pattern" {
        # actions to take when pattern is matched
    }
    timeout {
        # actions to take when timeout occurs
    }
}
```

### Can I use expect to interact with GUI applications in Linux?
Yes, you can use the expect command in Linux to interact with GUI applications by using tools like "xdotool" along with expect. Here's an example:
```bash
#!/usr/bin/expect
spawn xdotool search --name "Calculator" windowactivate --sync key --clearmodifiers --delay 100 ctrl+c
expect eof
```

### How do I install expect on a Linux system?
To install expect on a Linux system, you can use the package manager specific to your distribution. For example, on Ubuntu, you can run:
```bash
sudo apt-get install expect
```

### How can I pass arguments to an expect script?
You can pass arguments to an expect script by accessing them using "$" followed by the argument position. Here's an example:
```bash
#!/usr/bin/expect
set username [lindex $argv 0]
set password [lindex $argv 1]
```

### How do I exit from an expect script?
To exit from an expect script, you can use the "exit" command. Here's an example:
```bash
#!/usr/bin/expect
# Expect script commands
exit
```

## Applications of the expect command

- Automating interactive command-line tasks
- Scripting repetitive CLI operations
- Interacting with interactive applications/scripts
- Password/passphrase automation
- Handling dialog prompts in terminal-based applications