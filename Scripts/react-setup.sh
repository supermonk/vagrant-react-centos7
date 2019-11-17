cd /vagrant_data/
curl -sL https://rpm.nodesource.com/setup_13.x | sudo -E bash -
yum install -y nodejs
npm install -g --force npm@latest yarn@latest react@latest typescript@latest npx@latest
npm cache clean --force  
rm -rf /vagrant_data/hello-world
npx create-react-app hello-world
echo "CHOKIDAR_USEPOLLING=true" > /vagrant_data/hello-world/.env
chmod 777 /vagrant_data/hello-world/.env
