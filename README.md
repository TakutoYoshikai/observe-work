# observe-work
This is a tool for ovservation employee's work. It reports key typing count to the server.

### Requirements
* Ubuntu 20.04
* Python 3
* Node.js

### Usage

**setup on your server**
```bash
git clone https://github.com/TakutoYoshikai/observe-work.git
cd observe-work
npm install
```

**setup on employee's PC**
```bash
git clone https://github.com/TakutoYoshikai/observe-work.git
cd observe-work
pip install -r requirements.txt
```

**run server side program**
```bash
node server.js
```

**run client program**
```bash
python client.py <SERVER HOST> <EMPLOYEE ID>
```

### License
MIT License
