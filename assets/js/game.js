var playerName = window.prompt('What is your robot\'s name?')
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']
var enemyHealth = 50
var enemyAttack = 12

console.log('test console log')
// enemyName is a parameter or a placeholder for the argument that will get passed when the function is called. Argument content becomes enemyName so enemyName is used in function if-else.
var fight = function(enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

    if (promptFight === 'SKIP' || promptFight === 'skip') {
      var confirmSkip = window.confirm('Are you sure you want to quit?')

      if (confirmSkip) {
        window.alert(playerName + ' has chosen to skip this fight. Goodbye!')
        playerMoney = playerMoney - 2
        console.log('playerMoney', playerMoney)
        break
      }
    }

    enemyHealth = enemyHealth - playerAttack
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    )

    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died.')
      break
    }
    else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.')
    }

    playerHealth = playerHealth - enemyAttack

    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    )

    if (playerHealth <= 0) {
      window.alert(playerName + ' has died.')
      break
    }
    else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.')
    }
  }
}

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
    var pickedEnemyName = enemyNames[i]
    enemyHealth = 50
    // enemyNames[i] is whatever value is at i's current value of the enemyNames array and is passed to enemyName parameter in function expression or declaration
    fight(pickedEnemyName)
  }
  else {
    window.alert('Your robot has perished in battle! Game Over!')
    break
  }
}
