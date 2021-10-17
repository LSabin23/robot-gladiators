// Using window.prompt and window.confirm can cause some issues with Chrome's DevTools not properly accessing the JavaScript file for console logs
// If this happens, comment out script.js line in the HTML file, open in browser, open DevTools > Console
// Uncomment script.js line from HTML and reload browser
// Test line is being left below for easy testing. Should appear immediately on page reload.
// console.log('test console log')

var fight = function (enemy) {
  while (enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

    if (promptFight === 'SKIP' || promptFight === 'skip') {
      var confirmSkip = window.confirm('Are you sure you want to quit?')

      if (confirmSkip) {
        window.alert(playerInfo.name + ' has chosen to skip this fight. Goodbye!')
        playerInfo.money = Math.max(0, playerInfo.money - 10)
        console.log('playerInfo.money', playerInfo.money)
        break
      }
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health = Math.max(0, enemy.health - damage)
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    )

    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died.')
      break
    }
    else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.')
    }

    // reusing damage here because we need to reset its value based off of either player or enemy attack before the attack occurs.
    // won't use it again until the next round of fighting where we'll need to reevaluate it again in case the player visits the shop
    var damage = randomNumber(enemy.attack - 3, enemy.attack)
    playerInfo.health = Math.max(0, playerInfo.health - damage)

    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    )

    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died.')
      break
    }
    else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.')
    }
  }
}

var startGame = function () {
  playerInfo.reset()

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1))
      var pickedEnemyObj = enemyInfo[i]
      pickedEnemyObj.health = randomNumber(40, 60)
      fight(pickedEnemyObj)
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert('VICTORY! You now have a score of ' + playerInfo.money + '.')
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
      playerInfo.refillHealth()
      // stop the shop function and resume the fight function where it left off when shop was called
      break
    case 'upgrade':
    case 'UPGRADE':
      playerInfo.upgradeAttack()
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

var playerInfo = {
  name: window.prompt('What is your robot\'s name?'),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100
    this.attack = 10
    this.money = 10
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert('Refilling player\'s health by 20 for 7 dollars.')
      this.health += 20
      this.money -= 7
    }
    else {
      window.alert('You don\'t have enough money!')
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert('Upgrading player\'s attack by 6 for 7 dollars.')
      this.attack += 6
      this.money -= 7
    }
    else {
      window.alert('You don\'t have enough money!')
    }
  }
}

var enemyInfo = [
  {
    name: 'Roborto',
    attack: 12
  },
  {
    name: 'Amy Android',
    attack: 13
  },
  {
    name: 'Robo Trumble',
    attack: 14
  }
]

startGame()
