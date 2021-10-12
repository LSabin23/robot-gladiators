var playerName = window.prompt('What is your robot\'s name?')
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth)

var enemyName = 'Roborto'
var enemyHealth = 50
var enemyAttack = 12

var fight = function() {
  window.alert('Welcome to Robot Gladiators!')
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

  if (promptFight === 'FIGHT' || promptFight === 'fight') {
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack
    // Log a resulting message to the console so that we know it worked, users do not see this
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    )

    // check enemy's health and display enemy status or value to the user
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died.')
    }
    else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.')
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack

    // Log a resulting message to the console so that we know it worked
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    )

    // check player health and display player status or value to the user
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died.')
    }
    else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.')
    }
  }
  else if (promptFight === 'SKIP' || 'skip') {
    var confirmSkip = window.confirm('Are you sure you want to quit?')

    // if yes (true), leave fight and deduct from playerMoney
    if (confirmSkip) {
      window.alert(playerName + ' has chosen to skip this fight. Goodbye!')
      playerMoney = playerMoney - 2
    }
    else {
      fight()
    }
  }

}

fight()
