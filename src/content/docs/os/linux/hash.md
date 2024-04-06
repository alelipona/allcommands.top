---
title: What is hash Linux command?
description: Perform fast password hashing with the Linux hash command. 
---

The Linux hash command allows users to perform fast password hashing using various algorithms such as MD5, SHA-256, and SHA-512.

## hash Syntax:
```bash
hash [option] [name]
```
## hash Options:

| Option | Description                   |
|--------|-------------------------------|
| -r     | Forget all remembered locations |
| -t     | Display the full pathname of the command, if found |
| -p     | Display the full pathname of the command specified by name, if found |

:::caution
Avoid using the `hash` command for sensitive or system critical commands, as it can potentially lead to unexpected behavior.
:::

## Parameters:

| Parameter | Description                          |
|-----------|--------------------------------------|
| name      | The name of the command to locate in the hash table |
## hash Command Usage Examples:
### Generate the hash value for a file
```bash
hash filename.txt
```
Calculates the hash value for the specified file "filename.txt".

### Verify file integrity using hash
```bash
hash -c data.txt.hash
```
Checks the integrity of the file "data.txt" by comparing its hash value stored in "data.txt.hash".

### Generate SHA256 hash value of a string
```bash
echo "Hello World" | hash -a sha256
```
Calculates the SHA256 hash value for the string "Hello World".

### Recursively calculate hashes for files in a directory
```bash
hash -r ./directory
```
Recursively computes hash values for all files in the specified directory.

### Display available hash algorithms
```bash
hash -l
```
Lists all available hash algorithms that can be used with the hash command.
:::tip
Remember that the hash command in Linux is used to view and manipulate the hash table of remembered commands in the current shell session. This can help improve the efficiency of command execution by bypassing the need to search the PATH for the binary every time it runs.
:::

### How do I use hash in Linux?
To use the hash command in bash, execute the following command:
```bash
hash
```

### How to clear the hash table in Linux?
To clear the hash table in bash, use the following command:
```bash
hash -r
```

### How to display the full path of a command using hash?
To display the full path of a command using hash in bash, use the following command:
```bash
hash <command>
```

### How do I force the rehashing of the full path to a command?
To force the rehashing of the full path to a command in Linux bash, use the following command:
```bash
hash -p /new/path/to/command <command>
```

### How to show the number of hits for each command in the hash table?
To show the number of hits for each command in the hash table in bash, use the following command:
```bash
hash -l
```

### How to enable hashing for a specified command name?
To enable hashing for a specified command name in Linux bash, use the following command:
```bash
hash -p /path/to/command <command>
```

### How can I disable hashing for a specified command?
To disable hashing for a specified command in Linux bash, use the following command:
```bash
hash -d <command>
```

### How to check the hash table size in Linux?
To check the hash table size in bash, use the following command:
```bash
hash -t
```
## Applications of the hash command

- Used to display or update the current hash table for locating the full pathname of a command.
- Helps in managing the efficiency and performance of the shell by reducing the time taken to locate and execute commands.