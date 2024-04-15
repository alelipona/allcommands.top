---
title: launchctl MacOS command
description: macOS launchctl command allows users to manage daemons and agents. Learn how to start, stop, load, unload, and manage services using launchctl.
---

macOS launchctl command is a powerful tool for managing daemons and agents on Mac systems. With launchctl, users can start, stop, load, unload, and manage services. This command provides a way to interact with launchd, the service management framework on macOS. By using launchctl, users can control the launchd system and user agents, control the boot process, and troubleshoot issues related to services. It offers flexibility and control over managing processes, ensuring a smooth and efficient operation of services on macOS systems.

## launchctl Syntax:
```bash
launchctl [verb] [options] [target]
```

## launchctl Options:
| Option             | Description                                    |
|--------------------|------------------------------------------------|
| -h, --help         | Display usage information.                     |
| -V, --version      | Display version information.                   |
| -q, --quiet        | Suppress stdout and stderr output.             |
| -v, --verbose      | Enable verbose mode.                           |
| -l, --list         | List services and jobs.                        |
| -w, --load         | Load a configuration file.                     |
| -u, --unload       | Unload a configuration file.                   |
| -k, --kill         | Send a signal to the target.                   |
| -p, --print        | Print the configuration file.                  |
| -F, --full         | Display full information.                      |
| -D, --debug        | Enable debug mode.                             |
| -S, --no-session   | Disable per-user instance of Service Manager.   |
| -P, --no-gui       | Disable GUI operations.                        |
| -R, --no-recreate  | Do not recreate the job with load command.     |

:::caution
Use caution when using launchctl commands, as certain options may affect the system's services and configurations.
:::

## Parameters:
| Parameter  | Description                                    |
|------------|------------------------------------------------|
| verb       | Specifies the action to perform (load, unload, start, stop, etc.).    |
| options    | Additional flags and settings to control the command behavior.       |
| target     | The target service or job to apply the action on.                    |

## launchctl Command Usage Examples:
### Load a Launch Agent
```bash
sudo launchctl load /Library/LaunchAgents/com.example.agent.plist
```
Loads a launch agent located at the specified path.

### List Loaded Daemons
```bash
launchctl list
```
Displays a list of loaded daemons on the system.

### Unload a Launch Daemon
```bash
sudo launchctl unload /Library/LaunchDaemons/com.example.daemon.plist
```
Unloads a launch daemon located at the specified path.

### Restart a Launch Agent
```bash
sudo launchctl kickstart -kp system/com.example.agent
```
Restarts a specific launch agent by sending a kickstart signal.

### Disable a Launch Daemon
```bash
sudo launchctl disable system/com.example.daemon
```
Disables a specific launch daemon so it will not be loaded on the next system startup.
:::tip
When working with the launchctl command in MacOS, make sure to carefully read the man page (`man launchctl`) to understand all the available options and syntax for managing launchd configurations effectively.
:::

### How do I use launchctl in MacOS?
To use the launchctl command in bash, execute the following command:
```bash
launchctl --option <value>
```

### Can launchctl start a specific service in MacOS?
Yes, you can start a specific service in MacOS using launchctl. Here is an example command to start a service with launchctl:
```bash
launchctl start com.example.service
```

### How can I stop a service with launchctl on MacOS?
You can stop a service in MacOS using launchctl by running the following command:
```bash
launchctl stop com.example.service
```

### Is it possible to list all services managed by launchctl in MacOS?
Yes, you can list all the services managed by launchctl in MacOS by using the following command:
```bash
launchctl list
```

### How to load a configuration file with launchctl on MacOS?
To load a configuration file using launchctl in MacOS, you can use the following command:
```bash
launchctl load /path/to/plist/file.plist
```

### Can launchctl unload a configuration file in MacOS?
Yes, you can unload a configuration file using launchctl in MacOS with the following command:
```bash
launchctl unload /path/to/plist/file.plist
```

### How do I restart a service with launchctl on MacOS?
To restart a service in MacOS using launchctl, you can use the following command:
```bash
launchctl kickstart -k "gui/$(id -u)/com.example.service"
```

## Applications of the launchctl command

- Managing daemons and agents
- Starting, stopping, and restarting services
- Loading and unloading services
- Managing configuration files for services
- Viewing the status and information about services
- Debugging issues with services
- Scheduling tasks and running them at specified times