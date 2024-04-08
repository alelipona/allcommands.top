---
title: defaults command in MacOS
description: Learn how to effectively use the MacOS defaults command to manage system and application preferences. Explore various options and syntax for customization.
---

The MacOS defaults command is a powerful tool that allows users to manage system and application preferences through the command line interface. By using the defaults command, users can modify a wide range of settings such as appearance, behavior, and functionality. This command is especially useful for advanced users who prefer working with the terminal to customize their MacOS experience. With the defaults command, users can easily tweak settings to suit their preferences and streamline their workflow.
## defaults Syntax:
```bash
defaults [domain] write [key] [type] [value]
```

## MacOS defaults Options:
| Option        | Description                                            |
|---------------|--------------------------------------------------------|
| `write`       | Sets the value for the specified key in the domain.    |

## defaults Parameters:
| Parameter     | Description                                   |
|---------------|-----------------------------------------------|
| `[domain]`    | The domain of the setting.                    |
| `[key]`       | The key for the setting to be modified.       |
| `[type]`      | The data type of the value (e.g., string).    |
| `[value]`     | The new value to be set for the key.          |

:::caution
Exercise caution when using the `defaults` command as it modifies system settings and preferences. Be sure to use the correct domain, key, type, and value to prevent unexpected behavior on your system.
:::
## How to use defaults command:

### Set the default Finder view to list
```bash
defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"
```
Sets the default Finder view to list.

### Disable the warning when changing a file extension
```bash
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false
```
Disables the warning prompt when changing a file extension.

### Change the default screenshot format to PNG
```bash
defaults write com.apple.screencapture type -string "png"
```
Changes the default screenshot format to PNG.

### Customize the default location for saving screenshots
```bash
defaults write com.apple.screencapture location /path/to/desired/location
```
Sets a custom default location for saving screenshots.

### Enable the Quit option for Finder
```bash
defaults write com.apple.finder QuitMenuItem -bool true
```
Enables the Quit option in the Finder menu.

### Show hidden files in Finder
```bash
defaults write com.apple.finder AppleShowAllFiles -bool true
```
Displays hidden files in Finder.

### Change the default web browser
```bash
defaults write -g default-web-browser bundle-identifier
```
Changes the default web browser to the specified one.

### Enable key repeat for the keyboard
```bash
defaults write -g ApplePressAndHoldEnabled -bool false
```
Enables key repeat functionality for the keyboard.
:::tip
When using the defaults command in MacOS, make sure to double-check the syntax and options to avoid unintended changes to your system settings.
:::

### How do I use defaults in MacOS?
To use the defaults command in MacOS, execute the following command:
```bash
defaults write com.example.app key value
```

### What is the purpose of the defaults command in MacOS?
The defaults command in MacOS is used to read, write, and delete user defaults from a command-line interface.

### How can I read a default value using the defaults command?
To read a default value using the defaults command, use the following syntax:
```bash
defaults read com.example.app key
```

### How do I write a default value using the defaults command in MacOS?
To write a default value using the defaults command in MacOS, execute the following command:
```bash
defaults write com.example.app key value
```

### How can I delete a specific default using the defaults command?
To delete a specific default using the defaults command, use the following syntax:
```bash
defaults delete com.example.app key
```

### Can I list all the default values for a specific application using the defaults command?
Yes, you can list all the default values for a specific application using the defaults command by executing:
```bash
defaults read com.example.app
```

### Is it possible to find out the available domains using the defaults command?
To find out the available domains using the defaults command, you can use the following command:
```bash
defaults domains
```

### How do I synchronize changes made with defaults command to disk immediately?
To synchronize changes made with defaults command to disk immediately, use the following command:
```bash
killall cfprefsd
```

### Can I import default settings from a plist file using the defaults command?
Yes, you can import default settings from a plist file using the defaults command by executing the following command:
```bash
defaults import com.example.app file.plist
```

## Applications of the defaults command

1. Modify system preferences
2. Manage user defaults
3. Customize application settings
4. Set preferences for specific applications
5. Reset default settings for applications