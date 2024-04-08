---
title: brew MacOS command
description: Homebrew is a package manager for MacOS that allows users to easily install, update, and manage software packages from the command line.
---

Homebrew is a popular package manager for MacOS that simplifies the process of installing, updating, and managing software packages directly from the command line. With Homebrew, users can conveniently add new tools, libraries, and applications to their system without the need for manual installation steps. Whether you are a developer looking to streamline your workflow or a casual user seeking to enhance your MacOS experience, Homebrew offers a user-friendly and efficient solution for managing software dependencies. Its extensive library of available packages, straightforward syntax, and active community support make Homebrew a valuable tool for MacOS users of all levels.
## brew Syntax:
```bash
brew [command] [formula]
```
## Options:
| Option | Description                              |
|--------|------------------------------------------|
| install| Install the specified formula             |
| uninstall| Uninstall the specified formula         |
| search| Search for formulas                      |
| list   | List installed formulae                  |
| upgrade| Upgrade outdated, unpinned formulae      |
| pin    | Pin the specified formula                |
| unpin  | Unpin the specified formula              |
| info   | Display information about a formula      |
| doctor | Check for potential issues               |
| update | Fetch the newest version of Homebrew     |
| cleanup| Remove old versions of installed formulae|

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| command   | The specific action to be taken (e.g., install, uninstall)   |
| formula   | The package to be acted upon           |

:::caution
Exercise caution when using the brew command to avoid unintentional changes to your system. Make sure to understand the implications of the command you are issuing before proceeding.
:::
## brew bash Examples:
### Install a Package
```bash
brew install wget
```
Installs the "wget" package using Homebrew.

### Search for a Package
```bash
brew search python
```
Searches for packages related to Python using Homebrew.

### List Installed Packages
```bash
brew list
```
Displays a list of all installed packages using Homebrew.

### Update Homebrew
```bash
brew update
```
Updates the list of available packages and their versions using Homebrew.

### Uninstall a Package
```bash
brew uninstall wget
```
Removes the "wget" package installed via Homebrew.

### Check for Vulnerabilities
```bash
brew audit --new
```
Checks for any known security vulnerabilities in installed packages using Homebrew.
:::tip
When using the brew command in MacOS, make sure to always follow the correct syntax and options to avoid errors and ensure successful package management.
:::

### How do I install a package using brew in MacOS?
To install a package using brew in MacOS, execute the following command:
```bash
brew install <package_name>
```

### How do I search for a package using brew in MacOS?
To search for a package using brew in MacOS, execute the following command:
```bash
brew search <search_keyword>
```

### How do I update brew and all the installed packages in MacOS?
To update brew and all the installed packages in MacOS, execute the following command:
```bash
brew update
brew upgrade
```

### How do I uninstall a package using brew in MacOS?
To uninstall a package using brew in MacOS, execute the following command:
```bash
brew uninstall <package_name>
```

### How do I list all installed packages with brew in MacOS?
To list all installed packages with brew in MacOS, execute the following command:
```bash
brew list
```

### How do I show information about a specific package using brew in MacOS?
To show information about a specific package using brew in MacOS, execute the following command:
```bash
brew info <package_name>
```

### How do I list the outdated packages with brew in MacOS?
To list the outdated packages with brew in MacOS, execute the following command:
```bash
brew outdated
```
## Applications of the brew MacOS command

- Installing and managing packages and software on MacOS
- Updating installed packages
- Searching for available packages
- Managing package versions
- Managing dependencies
- Tapping into additional repositories
- Managing services
- Checking for common issues
- Uninstalling packages