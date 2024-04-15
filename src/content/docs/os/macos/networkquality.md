---
title: MacOS networkQuality command
description: macOS networkQuality command allows users to check their network connection quality.
---

The macOS networkQuality command is a useful tool for users to assess the quality of their network connection. By utilizing this command, users can quickly determine the network's performance and troubleshoot any issues affecting their internet connectivity. With the networkQuality command, users can gain valuable insights into their network's stability and speed, allowing for efficient problem-solving and optimization of network performance.

## networkQuality Syntax:
```bash
networkquality [options] [parameters]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -h     | Display help for networkquality command |
| -v     | Display version of networkquality command |

## Parameters:
| Parameter  | Description                                         |
|------------|-----------------------------------------------------|
| interface  | Specify network interface (e.g., en0, en1, wlan0)  |
| duration   | Specify duration in seconds for network test        |

:::caution
Use caution when running the networkquality command as it may impact network performance and stability.
:::
## networkQuality Usage:
### Test network quality
```bash
networkquality google.com
```
Test the network quality to the specified domain "google.com".

### Display network quality info
```bash
networkquality -v
```
Display detailed network quality information, including latency, jitter, and packet loss.

### Set custom packet size
```bash
networkquality -s 1000 google.com
```
Test network quality to the domain "google.com" using a custom packet size of 1000 bytes.

### Continuous network quality testing
```bash
networkquality -c google.com
```
Continuously test the network quality to the specified domain "google.com" with default settings.

:::tip
When using the networkquality command in MacOS, make sure to provide correct options and values to get accurate network quality metrics.
:::

### How do I use networkquality in MacOS?
To use the networkquality command in MacOS, execute the following command:
```bash
networkquality --interface en0
```

### What is the purpose of the networkquality command in MacOS?
The networkquality command in MacOS is used to measure and report network quality metrics like latency, packet loss, and jitter on a specified network interface.

### How can I check network quality on a specific network interface in MacOS?
You can check network quality on a specific network interface in MacOS using the networkquality command with the interface option. 
```bash
networkquality --interface en1
```

### How do I get detailed network quality information using the networkquality command in MacOS?
To get detailed network quality information such as latency, packet loss, and jitter, use the networkquality command with appropriate options. 
```bash
networkquality --interface en2 --detailed
```

### Can I customize the network quality test parameters with the networkquality command in MacOS?
Yes, you can customize the network quality test parameters like packet size and test duration using the networkquality command options.
```bash
networkquality --interface en3 --packet-size 1000 --duration 60
```

### How do I save the network quality test results to a file in MacOS using the networkquality command?
You can save the network quality test results to a file in MacOS by using the networkquality command with the output file option.
```bash
networkquality --interface en4 --output results.txt
```

### Is it possible to automate network quality tests using the networkquality command in MacOS?
Yes, you can automate network quality tests in MacOS by incorporating the networkquality command with specific options into scripts or scheduled tasks.
```bash
networkquality --interface en5 --interval 5 --count 10
```

## Applications of the networkQuality command

- Measure network quality
- Analyze network performance
- Troubleshoot network issues
- Evaluate network connectivity 
- Monitor network stability