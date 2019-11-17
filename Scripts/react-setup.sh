cd /vagrant_data/
curl -sL https://rpm.nodesource.com/setup_13.x | sudo -E bash -
sudo yum install -y nodejs
sudo npm install -g --force npm@latest yarn@latest react@latest typescript@latest npx@latest
sudo npm cache clean --force  
sudo rm -rf /vagrant_data/hello-world
sudo echo "CHOKIDAR_USEPOLLING=true" > /vagrant_data/hello-world/.env
sudo chmod 777 /vagrant_data/hello-world/.env
sudo npx create-react-app hello-world
