# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure("2") do |config|

  config.vm.box_download_insecure = true
  config.vm.box = "mwrock/Windows2012R2"
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end

  config.vm.network "forwarded_port", guest: 3389, host: 3389

  config.vm.communicator = "winrm"
  config.winrm.username = "vagrant"
  config.winrm.password = "vagrant"
  config.winrm.port = 55985

end
