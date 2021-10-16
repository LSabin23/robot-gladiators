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

var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

    if (promptFight === 'SKIP' || promptFight === 'skip') {
      var confirmSkip = window.confirm('Are you sure you want to quit?')

      if (confirmSkip) {
        window.alert(playerName + ' has chosen to skip this fight. Goodbye!')
        playerMoney = Math.max(0, playerMoney - 10)
        console.log('playerMoney', playerMoney)
        break
      }
    }

    var damage = randomNumber(playerAttack - 3, playerAttack)
    enemyHealth = Math.max(0, enemyHealth - damage)
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

    // reusing damage here because we need to reset its value based off of either player or enemy attack before the attack occurs.
    // won't use it again until the next round of fighting where we'll need to reevaluate it again in case the player visits the shop
    var damage = randomNumber(enemyAttack - 3, enemyAttack)
    playerHealth = Math.max(0, playerHealth - damage)

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

  // RESET ENEMY STATS

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
      var pickedEnemyName = enemyNames[i]
      enemyHealth = randomNumber(40, 60)
      fight(pickedEnemyName)
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // need a variable here to hold a value - in this case true/false - to supply to our if statement
        var storeConfirm = window.confirm('The round is over. Visit the shop before the next round?')
        if (storeConfirm) {
          shop()
        }
      }
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

var shop = function () {
  // need a variable here to pass to an if statement to determine what to do with the information the player supplies for the prompt
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Enter REFILL, UPGRADE, or LEAVE to choose.'
  )
  switch (shopOptionPrompt) {
    case 'refill':
    case 'REFILL':
      if (playerMoney >= 7) {
        window.alert('Refilling player\'s health by 20 points for 7 dollars.')
        playerHealth = playerHealth + 20
        playerMoney = playerMoney - 7
      }
      else {
        window.alert('You don\'t have enough money!')
      }
      // stop the shop function and resume the fight function where it left off when shop was called
      break
    case 'upgrade':
    case 'UPGRADE':
      if (playerMoney >= 7) {
        window.alert('Upgrading player\'s attack by 6 points for 7 dollars.')
        playerAttack = playerAttack + 6
        playerMoney = playerMoney - 7
      }
      else {
        window.alert('You don\'t have enough money!')
      }
      // stop the shop function and resume the fight function where it left off when shop was called
      break
    case 'leave':
    case 'LEAVE':
      window.alert('Leaving the shop.')
      // stop the shop function and resume the fight function where it left off when shop was called
      break
    default:
      window.alert('Please enter a valid option.')
      shop()
      // need to break the switch here to rerun the shop function
      break
  }
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min)
  return value
}

startGame()
