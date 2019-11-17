rm -rf data
mkdir data
cp Scripts/backup Vagrantfile
cp -R Scripts/* data/
sleep 2
vagrant up
