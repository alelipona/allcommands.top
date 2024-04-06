---
title: Windows MUIUNATTEND command
description: Discover how to use the Windows MUIUNATTEND command to automate Multilanguage User Interface configurations.
---

The Windows MUIUNATTEND command allows users to automate the configuration of Multilanguage User Interface settings during an unattended installation. By utilizing this command, administrators can streamline the setup process and ensure that the correct language settings are applied consistently across multiple devices. The MUIUNATTEND command supports various parameters that can be customized to meet specific requirements, such as specifying the default system UI language, keyboard layout, and regional formats. Overall, the MUIUNATTEND command is a valuable tool for simplifying the deployment of Windows operating systems in multilingual environments.
## MUIUNATTEND Syntax:
```cmd
muiunattend options [parameters]
```

## Options:
| Option        | Description                             |
|---------------|-----------------------------------------|
| /h            | Display help message                    |
| /q            | Suppress all output messages            |
| /l            | List all available language packs       |
| /install      | Install the specified language pack     |
| /uninstall    | Uninstall the specified language pack   |

## Parameters:
| Parameter     | Description                                          |
|---------------|------------------------------------------------------|
| language      | Specifies the language pack to install or uninstall  |
| path          | Specifies the path of the language pack file         |

:::caution
Exercise caution when using the muiunattend command to install or uninstall language packs, as it can potentially impact the system's language settings and functionality.
:::

### Set the Display Language
```cmd
muiunattend setlang en-US
```
Sets the display language to English.

### List Available Language Packs
```cmd
muiunattend listlang
```
Displays a list of available language packs for the user to choose from.

### Set the Keyboard Layout
```cmd
muiunattend setkeyboardlayout de-DE
```
Sets the keyboard layout to German.

### Reset Display Language to System Default
```cmd
muiunattend resetlang
```
Resets the display language to the system default setting.
:::tip
When using the muiunattend command in Windows, make sure to carefully follow the syntax and provide the necessary options and values to achieve the desired configuration. Refer to the official Microsoft documentation for detailed information on the available options and their usage.
:::

### How do I use muiunattend in Windows?
To use the muiunattend command in Windows, execute the following command:
```cmd
muiunattend --option <value>
```

### What is the purpose of the muiunattend command in Windows?
The muiunattend command in Windows is used to configure Multilingual User Interface (MUI) settings during the Windows Setup process.

### How can I set the display language using muiunattend in Windows?
To set the display language using muiunattend in Windows, you can use the following command:
```cmd
muiunattend --set-displaylanguage en-US
```

### Can I specify additional language preferences with muiunattend in Windows?
Yes, you can specify additional language preferences using the muiunattend command. Here is an example command:
```cmd
muiunattend --add-languagepref fr-FR
```

### Is it possible to remove a specific language preference with muiunattend in Windows?
Yes, you can remove a specific language preference using the muiunattend command. Here is an example command:
```cmd
muiunattend --remove-languagepref es-ES
```

### How do I check the current MUI configuration settings with muiunattend in Windows?
To check the current MUI configuration settings using muiunattend in Windows, you can execute the following command:
```cmd
muiunattend --get-settings
```

### Can I reset all MUI settings using muiunattend in Windows?
Yes, you can reset all MUI settings using the muiunattend command. Here is an example command to achieve this:
```cmd
muiunattend --reset-settings
```

## Applications of the MUIUNATTEND Command
- Use the MUIUNATTEND command to automate the process of installing Multilingual User Interface (MUI) packs during Windows installations.