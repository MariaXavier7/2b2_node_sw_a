const chalk = inquirer('chalk')
const chalk = require('inquirer')
const fs = require('fs')
const path = riquire('path')

const dirpaht = path.join(_dirname,'..','account')
module.exports = accountModule = {
     createAccount() {

        console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
        console.log(chalk.green('Defina as opções da sua conta a seguir'))
    
        this.buildAccount()
    },
     buildAccount() {
        inquirer
            .prompt([
                {
                    name: 'accountName',
                    message: 'Digite um nome para a sua conta:',
                },
            ])
            .then((answer) => {
                console.info(answer['accountName'])
    
                const accountName = answer['accountName']
    
                if (!fs.existsSync(dirpath)) {
                    fs.mkdirSync(dirpath)
                }
    
                if (fs.existsSync(`${dirpath}/${accountName}.json`)) {
                    console.log(
                        chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
                    )
                    buildAccount(accountName)
                }
    
                fs.writeFileSync(
                    `${dirpath}/${accountName}.json`,
                    '{"balance":0}',
                    function (err) {
                        console.log(err)
                    },
                )
    
                console.log(chalk.green('Parabéns, sua conta foi criada!'))
                operation()
            })
    },
}