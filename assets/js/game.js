var playerName = window.prompt('What is your robot\'s name?')
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']
var enemyHealth = 50
var enemyAttack = 12

// enemyName is a parameter or a placeholder for the argument that will get passed when the function is called. Argument content becomes enemyName so enemyName is used in function if-else.
var fight = function(enemyName) {
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
  else if (promptFight === 'SKIP' || promptFight === 'skip') {
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

for (var i = 0; i < enemyNames.length; i++) {
  // enemyNames[i] is whatever value is at i's current value of the enemyNames array and is passed to enemyName parameter in function expression or declaration
  fight(enemyNames[i])
}
