cd /vagrant_data/
curl -sL https://rpm.nodesource.com/setup_13.x | sudo -E bash -
yum install -y nodejs
cd react-http
sudo npm install -g --force npm@latest yarn@latest react@latest typescript@latest npx@latest axios@latest fsevents@latest core-js@latest left-pad@latest webpack@latest
npm cache clean --force
yarn add axios   
#npx create-react-app hello-world
#echo "CHOKIDAR_USEPOLLING=true" > /vagrant_data/hello-world/.env
#chmod 777 /vagrant_data/hello-world/.env
