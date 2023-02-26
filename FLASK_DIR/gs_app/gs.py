import subprocess

# Run the system command
gs = "images"
cmd='docker {} | awk \'{{print $1}}\'' .format(gs)
result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
#
# Get the output of the command
output = result.stdout

# Print the output
print(output)
print(result.returncode)
