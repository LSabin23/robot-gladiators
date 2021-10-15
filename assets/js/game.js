var playerName = window.prompt('What is your robot\'s name?')
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble']
var enemyHealth = 50
var enemyAttack = 12

// Using window.prompt and window.confirm can cause some issues with Chrome's DevTools not properly accessing the JavaScript file for console logs
// If this happens, comment out script.js line in the HTML file, open in browser, open DevTools > Console
// Uncomment script.js line from HTML and reload browser
// Test line is being left below for easy testing. Should appear immediately on page reload.
// console.log('test console log')

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

var startGame = function () {
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
      var pickedEnemyName = enemyNames[i]
      enemyHealth = 50
      fight(pickedEnemyName)
    }
    else {
      window.alert('Your robot has perished in battle! Game Over!')
      break
    }
  }
  endGame()
}

var endGame = function () {
  if (playerHealth > 0) {
    window.alert('VICTORY! You now have a score of ' + playerMoney + '.')
  }
  else {
    window.alert('Your robot has perished in battle!')
  }

  var playAgainConfirm = window.confirm('Would you like to play again?')
  if (playAgainConfirm) {
    startGame()
  }
  else {
    window.alert('Thank you for playng Robot Gladiators!')
  }
}

startGame()
