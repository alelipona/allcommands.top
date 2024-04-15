---
title: MacOS spctl command
description: Discover how to use the MacOS spctl command to manage security assessment policies easily.
---

The MacOS spctl command allows users to control and manage the security assessment policies on their system efficiently. With spctl, users can add, remove, and evaluate security assessment rules, as well as manage the assessment subsystems. This command plays a crucial role in maintaining the security and integrity of MacOS systems by providing a way to verify and manage the applications and processes running on the system. Additionally, spctl can be used to manage kernel extensions, package manifests, and individual files. By understanding and utilizing the spctl command effectively, MacOS users can ensure that their system remains secure and protected from potentially harmful applications and processes.

## spctl Syntax:
```bash
spctl [option] [parameter]
```

## Options:
| Option            | Description                                    |
|-------------------|------------------------------------------------|
| -a, --assess      | Assess the specified file or directory         |
| -t, --test        | Test without a policy check                    |
| --add             | Add a new policy                               |
| --enable          | Enable a disabled policy                       |
| --disable         | Disable an enabled policy                      |
| --remove          | Remove a policy                                |
| --reset           | Reset all policies to the system’s defaults    |
| --status          | Display the general status                      |

## Parameters:
| Parameter         | Description                                    |
|-------------------|------------------------------------------------|
| file/directory    | The file or directory to be assessed/tested    |

:::caution
Exercise caution when using the spctl command as it directly interacts with the security assessment policy subsystem of macOS. Incorrect usage can lead to unintended consequences for system security.
:::
## spctl Usage:
### Check if an Application is Allowed to Run
```bash
spctl -a /Applications/MyApp.app
```
This command checks if the application "MyApp" located in the /Applications folder is allowed to run.

### Add an Application to the Allowed List
```bash
spctl --add /Applications/MyApp.app
```
This command adds the application "MyApp" located in the /Applications folder to the allowed list, allowing it to run without being blocked.

### Remove an Application from the Allowed List
```bash
spctl --remove /Applications/MyApp.app
```
This command removes the application "MyApp" located in the /Applications folder from the allowed list, preventing it from running without additional authorization.

### List Information About a Specific Application
```bash
spctl -t exec -vv /Applications/MyApp.app
```
This command provides detailed information about the application "MyApp" located in the /Applications folder, including its status and other relevant details.
:::tip
When using the spctl command in MacOS, make sure to carefully read the man page (`man spctl`) to understand all the available options and how to use them effectively.
:::

### How do I check the status of the spctl in MacOS?
To check the status of the spctl in MacOS, run the following command:
```bash
spctl --status
```

### How do I add a new rule to the spctl in MacOS?
To add a new rule to the spctl in MacOS, use the following command:
```bash
spctl --add /path/to/application
```

### How do I remove a rule from spctl in MacOS?
To remove a rule from spctl in MacOS, you can execute the following command:
```bash
spctl --remove /path/to/application
```

### How do I clear all rules from spctl in MacOS?
To clear all rules from spctl in MacOS, issue the following command:
```bash
spctl --reset
```

### How do I enable the spctl assessment in MacOS?
To enable the spctl assessment in MacOS, use the command below:
```bash
spctl --master-enable
```

### How do I disable the spctl assessment in MacOS?
To disable the spctl assessment in MacOS, execute the following command:
```bash
spctl --master-disable
```

## Applications of the spctl command

- Checking the status of Gatekeeper
- Enabling or disabling Gatekeeper
- Managing the security assessment policy
- Verifying software before installation
- Managing software restrictions
- Customizing security settings for specific software sources