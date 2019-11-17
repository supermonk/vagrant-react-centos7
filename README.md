# vagrant-react-centos7
Vagrant setup which will create a Centos 7 vm with npm and hello-world app with dynamic reloading

Comes with setup of Node, React on Centos 7 
Run command 'sudo echo "192.168.70.102 c7002.dev.com c7002" >> /etc/hosts' on your local Machine
Run start.sh to begin and go for coffee - will take 10 min first time
to suspend 'Vagrant suspend'
to resume 'Vagrant resume --no-provision'
to destory 'Vagrant destroy'

Steps to start the app.

Vagrant ssh c7002 (in the folder where Vagrantfile is created)
cd /vagrant_data/hello-world
npm start

in your browser localhost:3000 or c7002:3000

