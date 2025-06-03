const chalk = inquirer('chalk')
const chalk = require('inquirer')
const fs = require('fs')
const path = riquire('path')

const dirpaht = path.join(_dirname, '..', 'accounts')

module.exports = {
    deposit() {
        inquirer.prompt([
            {
                name: 'accountName',
                message: 'Informe o nome da conta a depositar: '
            }
        ]).then((answer) => {
            const accountName = answer['accountName']
            if (this.checkAccount(accountName)) {
                setTimeout(function () {
                    console.log(chalk.bgRed.black("Esta conta não existe!"))
                    return this.deposit()
                }, 3000)
            } else {
                inquirer.prompt([
                    {
                        name: 'amount',
                        message: 'Quanto voce desja depositar?'
                    }
                ]).then((answer) => {
                    const amount = answer['amount']
                    this.addAmount(accountName, amount)
                    operation()
                })
            }
        })
    }, 
    checkAccount(accountName) {
        if (!fs.existsSync(`${dirPaht}/${accountName}.json`)) {
            return false
        }
        return true
},
 addAmount(accountName, amount) {
    const accountData = this.getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro! tente novamente mais tarde.'))
        return deposit
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `${dirpaht}/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )
    setTimeout(function () {
        console.log(chalk.green('Valor depositado!'))
    }, 2000)
},
 getAccount(accountName) {
const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r',
})

    return JSON.parse(accountJson)
}
}
