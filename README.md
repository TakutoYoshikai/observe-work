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

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
