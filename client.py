import pyxhook
import schedule
import sys
import requests

host = sys.argv[1]
employee_id = sys.argv[2]

count = 0
def kbevent(event):
    global count
    count = count + 1
    send();

def send():
    global count
    try:
        response = requests.get(host + "/" + employee_id + "/" + str(count))
    except:
        pass
    count = 0

schedule.every(1).hours.do(send)

hookman = pyxhook.HookManager()
hookman.KeyDown = kbevent
hookman.HookKeyboard()
hookman.start()


