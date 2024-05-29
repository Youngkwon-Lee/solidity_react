const Migrations = artifact.require('Migrations')

module.exports = function deployer() {
    deployer.deploy(Migrations)
};