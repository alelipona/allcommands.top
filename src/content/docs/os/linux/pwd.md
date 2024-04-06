---
title: pwd Linux command
description: The `pwd` command in Linux is used to print the current working directory. It helps users to know their exact location within the file system. Learn how to use `pwd` effectively with examples and tips.
---

The `pwd` command in Linux stands for "print working directory". It is used to display the full pathname of the current working directory. This command is helpful for users who need to know their exact location within the file system. By running `pwd`, you can easily identify where you are in the directory structure. This can be especially useful when navigating through different directories or when writing scripts that require specific file paths. The output of `pwd` will show the complete path starting from the root directory ("/") to the current working directory. This command is simple to use and provides a quick way to orient yourself within the file system.

## pwd Syntax:
```bash
pwd [option]
```
## Options:
| Option | Description             |
|--------|-------------------------|
| -L     | Display logical path    |
| -P     | Display physical path   |
| --help | Display help message    |
| --version | Display version information |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| None      | There are no parameters      |

:::caution
Caution: Be cautious when using the `pwd` command, as it will display the current working directory without any additional options. Depending on where you are in the file system, the output may contain sensitive or confidential information. Always double-check who has access to the output and consider the visibility of the directory content.
:::
## pwd bash Examples:
### Print the Current Working Directory
```bash
pwd
```
This command will print the full path of the current working directory.

### Store the Current Working Directory in a Variable
```bash
current_dir=$(pwd)
echo "The current working directory is: $current_dir"
```
In this example, the pwd command is used to store the current working directory in a variable and then display it.

### Change Directory and Display the New Working Directory
```bash
cd /usr/share
pwd
```
By using pwd after changing the directory, you can display the new working directory.

### Pipe Output of pwd to a File
```bash
pwd > current_directory.txt
```
This command redirects the output of pwd to a file named "current_directory.txt".

### List Files in the Current Working Directory Using pwd
```bash
ls $(pwd)
```
Using pwd with ls to list the files in the current working directory.

### Check Existence of a Specific Directory
```bash
if [ $(pwd) = "/home/user" ]; then
    echo "You are in the correct directory."
else
    echo "Wrong directory."
fi
```
This example checks if the current working directory is "/home/user" using the pwd command in a conditional statement.
:::tip
When using the `pwd` command in Linux, remember that it stands for "print working directory" and is used to display the current directory in the command line interface. This command is handy for navigating and understanding the current location within the file system.
:::

## pwd Command Help Center:

### How do I use pwd in Linux?
To use the pwd command in Linux, execute the following command:
```bash
pwd
```

### How can I display the physical path with symbolic links in pwd?
To display the physical path with symbolic links resolved by the pwd command, use the `-P` option:
```bash
pwd -P
```

### How do I get the logical path in pwd?
To get the logical path with symbolic links intact, you can use the `-L` option with the pwd command:
```bash
pwd -L
```

### How can I get the path in pwd as a shell script?
You can assign the output of the pwd command to a variable in a shell script as shown below:
```bash
current_directory=$(pwd)
echo "Current directory: $current_directory"
```

### How do I print the path with Bash prompt in pwd?
To print the path along with the Bash prompt using the pwd command, you can use the following Bash prompt customization:
```bash
PS1='\w\$ '
```

### How do I save the path into a file using pwd?
To save the output of the pwd command to a file, you can redirect the output using the following command:
```bash
pwd > path.txt
```

### How do I only display the directory name using pwd?
To only display the directory name without the full path, you can use the `basename` command in conjunction with pwd as follows:
```bash
basename $(pwd)
```

### How to ignore the symbolic links in pwd output?
If you want to ignore symbolic links in the pwd output and only show the physical directory, you can use the `-P` option:
```bash
pwd -P
```
## Applications of the pwd command

1. Display the current working directory
2. Provide the full path of the current working directory
3. Referencing the current directory in shell scripts
4. Verifying the location before executing commands