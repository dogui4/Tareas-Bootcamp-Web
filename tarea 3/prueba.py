import subprocess

i = 0
while i < 6:
    try:
        output = subprocess.check_output("./cmd.sh", shell=True, stderr=subprocess.STDOUT, universal_newlines=True)
        print(output)
    except subprocess.CalledProcessError as e:
        print(e.output)
        exit()
    print(i)
    i += 1
