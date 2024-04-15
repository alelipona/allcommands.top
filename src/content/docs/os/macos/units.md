---
title: units MacOS Command Guide
description: Learn how to use the units command on MacOS to convert between different units of measurement effortlessly.
---

The `units` command on MacOS allows users to quickly and easily convert between different units of measurement. Whether you need to convert inches to centimeters, miles to kilometers, or even units of currency, this command can handle it all. By simply entering the desired conversion in the terminal, the `units` command will provide you with the accurate conversion result. This can be extremely handy for anyone who frequently works with various units of measurement and needs a quick and reliable way to convert between them. Give the `units` command a try on your MacOS system and streamline your unit conversion tasks today.

## units Syntax:
```bash
units [-f unitsfile] [-q] [from-unit [to-unit]]
```
## Options:
| Option          | Description                               |
|-----------------|-------------------------------------------|
| -f unitsfile    | Specifies a file containing unit definitions.|
| -q              | Quiet mode; suppresses informational messages.|

## Parameters:
| Parameter  | Description                                  |
|------------|----------------------------------------------|
| from-unit  | Specifies the unit of measurement to convert from. |
| to-unit    | Specifies the unit of measurement to convert to.   |

:::caution
Exercise caution when using the `units` command. Ensure you provide the correct units for conversion to avoid errors or unexpected results.
:::
## units Command Samples:
### Convert 100 inches to centimeters
```bash
units '100in' 'cm'
```
This command will convert 100 inches to centimeters.

### Convert 2.5 pounds to kilograms
```bash
units '2.5lb' 'kg'
```
Converts 2.5 pounds to kilograms using the units command.

### Perform temperature conversion from Fahrenheit to Celsius
```bash
units '72F' 'C'
```
Runs a temperature conversion from Fahrenheit to Celsius with the units tool.

### Convert 5000 meters to kilometers
```bash
units '5000m' 'km'
```
Utilizes the units command for converting 5000 meters to kilometers.

### Conduct currency conversion from USD to EUR
```bash
units '$100' 'EUR'
```
Executes a currency conversion from USD to EUR using the units utility.

### Calculate 30 miles per hour in kilometers per hour
```bash
units '30mph' 'kmph'
```
Calculates 30 miles per hour in kilometers per hour using the units command.

### Convert 1 liter to fluid ounces
```bash
units '1l' 'floz'
```
Uses the units tool to convert 1 liter to fluid ounces.
:::tip
When using the units command in MacOS, make sure to carefully specify the input unit and desired output unit to avoid any conversion errors. Additionally, familiarize yourself with the available options and flags to optimize your usage of the units command.
:::

## units FAQ:
### How do I use units in MacOS?
To use the units command in MacOS, execute the following command:
```bash
units --convert 10 cm inch
```

### How can I perform currency conversions with the units command in MacOS?
To perform currency conversions using the units command in MacOS, use the following syntax:
```bash
units --currency 100 USD EUR
```

### How do I list available units for conversion in the MacOS units command?
To list the available units that can be used for conversion in the units command in MacOS, run the following command:
```bash
units -l
```

### How can I perform unit conversions interactively using the units command in MacOS?
To perform unit conversions interactively with the units command in MacOS, simply enter the command "units" and follow the prompt to specify the conversion units.

### Can I specify custom units for conversion in the MacOS units command?
Yes, you can specify custom units for conversion in the units command in MacOS. Use the following command syntax:
```bash
units 'customunit1' 'customunit2'
```

### How do I perform temperature conversions with the units command in MacOS?
To perform temperature conversions using the units command in MacOS, use the following command structure:
```bash
units --convert 32F C
```
## Applications of the units command

- Converting between different units of measurement
- Performing mathematical operations with units
- Learning the relationships and conversions between various units