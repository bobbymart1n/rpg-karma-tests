# RPG Karma Testing App
A project built at Epicodus **04.18.18**

## By Bobby Martin and Garnett Pruett

## Description
This project represents obtained knowledge using TDD

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Program will start character as a level 1 class**| "Warrior" | "Warrior - level 1" |
|**Program will insert enemy battle scenario**| "Enter battle" | "Battle" |
|**Program will allow character to attack enemy in battle scenario**| "attack" | "You hit enemy for 5 damage" |
|**Program will have enemy attack phase following character attack**| "Enemy attack" | "Enemy hit you for 5 damage" |
|**Program will increase player experience after successful battle**| "Enemy defeated" | "Gained 20 exp" |
|**Program will track experience which will increase level of character**| "Gained 20 exp" | "Level up!" |
|**Program will add new items to player inventory**| "Received candle" | "Inventory: ["candle"]" |
|**Program will remove items from player inventory**| "Candle has been removed" | "Inventory: []" |
|**Program will allow user to choose class**| "Wizard" | "Wizard" |
|**Program will push dead enemy loot into player inventory**| "You loot: 'Goblin Ear', and a 'Broken Belt'" | "["goblin ear", "broken belt"]" |
|**Program will let player choose specific items from enemy loot**| "You loot: 'Goblin ear'" | "["Goblin ear"]" |

### Notes
* Always have a meaningful fail then commit that fail
```
it('should fail on first test', function() {
  expect(example.someMethod()).toEqual(x);
});
```
  * This test fails intentionally because 'someMethod()' hasn't been defined yet
  
This project is under the _MIT License_  
**&copy; Bobby Martin 2018**
