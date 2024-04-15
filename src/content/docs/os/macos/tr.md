---
title: tr command in MacOS
description: Learn how to use the tr command in MacOS to translate or delete characters.
---

The tr command in MacOS is a powerful utility for translating, squeezing, and deleting characters. It can be used to transform text input by replacing specific characters with other characters or deleting them altogether. This command is commonly used in scripts to manipulate text data efficiently. With tr, users can perform a wide range of text transformations, such as converting uppercase letters to lowercase, removing specified characters, or even replacing whitespace with a specific character. Mastering the tr command can streamline text processing tasks and enhance automation workflows in MacOS.

## tr Syntax:
```bash
tr [option] [set1] [set2]
```
## MacOS tr Options:
| Option | Description                     |
|--------|---------------------------------|
| -d     | Delete characters in set1       |
| -s     | Squeeze consecutive characters  |
| -c     | Complement set1                 |
| -t     | Replace set1 with set2          |

## tr Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| set1      | Characters to translate or delete   |
| set2      | Characters for replacement          |

:::caution
Exercise caution while using the tr command, as it can quickly modify the content of files or streams, potentially leading to unintended changes or data loss.
:::
## How to use tr command:

### Convert lowercase to uppercase
```bash
echo "hello world" | tr '[:lower:]' '[:upper:]'
```
Converts all lowercase letters to uppercase in the input string.

### Remove specific characters
```bash
echo "Hello123" | tr -d '0-9'
```
Removes all digits from the input string.

### Replace characters
```bash
echo "hello world" | tr 'l' 'L'
```
Replaces all occurrences of the letter 'l' with 'L'.

### Squeeze repeated characters
```bash
echo "hello     world" | tr -s ' '
```
Squeezes repeated spaces in the input string to a single space.

### Translate a range of characters
```bash
echo "abc123" | tr 'a-c' 'x-z'
```
Translates characters within the range 'a' to 'c' to the range 'x' to 'z'.

### Delete specific characters
```bash
echo "Hello123" | tr -d '[:digit:]'
```
Deletes all digits from the input string using the character class '[:digit:]'.

### Complement characters
```bash
echo "hello world" | tr -C '[:lower:]' '[:space:]'
```
Complements characters outside of the set of lowercase letters and spaces.

### Translate tab to space
```bash
echo -e "hello\tworld" | tr '\t' ' '
```
Translates tabs to spaces in the input string.
:::tip
When using the `tr` command in MacOS, make sure to carefully specify the character set and transformations you want to apply to avoid unexpected results.
:::

### How do I use tr in MacOS?
To use the tr command in MacOS, execute the following command:
```bash
tr --option <value>
```

### How can I delete characters using tr in MacOS?
To delete specific characters using the tr command in MacOS, use the following syntax:
```bash
echo "Hello, World!" | tr -d 'l'
```

### How can I translate characters with tr in MacOS?
To translate characters using the tr command in MacOS, use a command similar to this:
```bash
echo "12345" | tr '123' 'abc'
```

### How do I use the set1 and set2 options in tr on MacOS?
To specify the transformation sets in tr on MacOS, use the following syntax:
```bash
echo "hello" | tr 'el' 'nx'
```

### How can I squeeze multiple characters into one using tr in MacOS?
To squeeze multiple characters into one using the tr command in MacOS, you can do the following:
```bash
echo "Hello     World" | tr -s ' '
```

### How do I use the complement option in tr on MacOS?
To complement a set of characters using the tr command in MacOS, use the following syntax:
```bash
echo "hello" | tr -c 'el' 'x'
```

### How can I replace a specific range of characters using tr in MacOS?
To replace a range of characters using the tr command in MacOS, you can use a command like this:
```bash
echo "abcdef" | tr 'a-c' 'x'
```

### How do I translate lowercase to uppercase characters using tr in MacOS?
To convert lowercase to uppercase characters using the tr command in MacOS, use this command:
```bash
echo "hello" | tr '[:lower:]' '[:upper:]'
```

### How can I remove non-alphanumeric characters using tr in MacOS?
To remove non-alphanumeric characters using the tr command in MacOS, you can use the following syntax:
```bash
echo "Hello123!@#" | tr -cd '[:alnum:]'
```

## Applications of the tr command

- Character transformation
- Text translation
- Deleting characters
- Squeezing repeated characters
- Complementing character set