---
title: shuf Linux Command Guide
description: A comprehensive guide on using the Linux shuf command, including syntax, options, and examples.
---

The shuf command in Linux is used to generate random permutations of input lines. It can shuffle the contents of a file or produce a random sample from a list. By default, shuf outputs a random permutation of the input. Users can specify the number of output lines using the -n option. Additional options allow users to set a seed for the random generator, specify a range of randomizations, and more. This command is useful for randomizing the order of lines in a file or selecting random items from a list.
## shuf Syntax:
```bash
shuf [option] [input_file]
```

## Options:
| Option  | Description                                       |
|---------|---------------------------------------------------|
| -e      | Treat each argument as an input line              |
| -i      | Generate random numbers within a specified range  |
| -n      | Output at most N lines                            |
| -r      | Allow repeated lines in the output                |
| -z      | Delimit items with a NUL ('\0') byte              |

## Parameters:
| Parameter  | Description                                           |
|------------|-------------------------------------------------------|
| input_file | Specify the input file. If not provided, uses stdin   |

:::caution
Exercise caution especially when using the `-r` option, as it can lead to duplication of lines in the output which might not be desired. Always double-check the options used to avoid unexpected behavior.
:::
## shuf Command Samples:
### Shuffle Lines in a File
```bash
shuf file.txt
```
Randomizes the order of lines in the file.txt.

### Shuffle a List of Numbers
```bash
shuf -e 1 2 3 4 5
```
Randomly shuffles the list of numbers 1, 2, 3, 4, and 5.

### Generate a Random Permutation
```bash
shuf -e a b c d e
```
Produces a random permutation of the elements a, b, c, d, and e.

### Shuffle Lines and Output Only N Lines
```bash
shuf -n 3 file.txt
```
Shuffles the lines in file.txt and prints only 3 lines.

### Shuffle and Pick Randomly From a List
```bash
shuf -n 2 -e apple orange banana mango
```
Shuffles the fruits list and selects 2 random items.

### Shuffle and Redirect to a New File
```bash
shuf names.txt > shuffled_names.txt
```
Randomly shuffles the lines in names.txt and saves the output to shuffled_names.txt.

### Shuffle and Limit Randomization by Seed
```bash
shuf -n 4 --random-source=/dev/urandom file.txt
```
Shuffles file.txt using /dev/urandom as the seed and selects 4 random lines.
:::tip
When using the shuf command in Linux, make sure to read the man page (`man shuf`) to fully understand all available options and how to use them effectively. Additionally, remember to redirect the shuf output to a file or use it within a pipeline to further process the shuffled data.
:::

## shuf FAQ:
### How do I use shuf in Linux?
To use the shuf command in Linux, execute the following command:
```bash
shuf <file>
```

### What is the purpose of shuf in Linux?
The purpose of the shuf command in Linux is to generate random permutations of input lines. 

### How can I shuffle multiple files with shuf?
You can shuffle multiple files using shuf by providing them as arguments to the command. Here is an example:
```bash
shuf file1.txt file2.txt
```

### Can I limit the number of lines shuffled with shuf in Linux?
Yes, you can limit the number of lines shuffled with shuf by using the `-n` or `--head-count` option followed by the number of lines. Here is an example:
```bash
shuf -n 10 file.txt
```

### How can I shuffle lines and then select a specific number of lines with shuf?
To shuffle lines and then select a specific number of lines with shuf, you can combine the `-n` option with the command. Here is an example:
```bash
shuf file.txt -n 5
```

### Is there a way to avoid repeating shuffled lines in shuf?
Yes, you can prevent shuf from repeating shuffled lines by using the `-r` or `--repeat` option. This will shuffle lines and print them in a random order without repeating any line until all lines have been printed at least once.
## Applications of the shuf command

- Generating randomized quiz questions
- Shuffling the order of lines in a text file
- Randomly selecting winners in a contest
- Creating shuffled playlists
- Generating random test data for software testing