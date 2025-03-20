var ___;

setBackground('#000000');
showTitleScreen('you are in a dark cave', '');
setPromptWithChoices('', '___', 'grab a light', 'walk blindly', '', function(val) {___ = val;});

whenPromptAnswered('___', function (extraArgs) {
  if (___ == 'walk blindly') {
    hideTitleScreen();
    showTitleScreen('you find a monster it kills you', 'you lose');
  }
  if (___ == 'run') {
    hideTitleScreen();
    showTitleScreen('look arnound', '');
    setPromptWithChoices('', '___', 'no', 'yes', '', function(val) {___ = val;});
  }
  if (___ == 'freeze') {
    hideTitleScreen();
    showTitleScreen('the monster kills you', 'you lose');
  }
  if (___ == 'cry') {
    hideTitleScreen();
    showTitleScreen('the monster finds you', '');
    setPromptWithChoices('', '___', 'run', ' freeze', '', function(val) {___ = val;});
  }
  if (___ == 'grab a light') {
    hideTitleScreen();
    showTitleScreen('you find a monster but the light scares it', '');
    setPromptWithChoices('', '___', 'cry', 'go deeper', '', function(val) {___ = val;});
  }
  if (___ == 'no') {
    hideTitleScreen();
    showTitleScreen('the monster catches you and kills you', 'you lose');
  }
  if (___ == 'go deeper') {
    hideTitleScreen();
    showTitleScreen('look arnound', '');
    setPromptWithChoices('', '___', 'no', 'yes', '', function(val) {___ = val;});
  }
  if (___ == 'yes') {
    hideTitleScreen();
    showTitleScreen('you find a big cave with a river', '');
    setPromptWithChoices('', '___', 'swim in it', 'don\'t swim', '', function(val) {___ = val;});
  }
  if (___ == 'don\'t swim') {
    hideTitleScreen();
    showTitleScreen('you start punching the rock to brake it', '');
    setPromptWithChoices('', '___', 'stop', 'don\'t stop', '', function(val) {___ = val;});
  }
  if (___ == 'stop') {
    hideTitleScreen();
    showTitleScreen('the monster catches you and kills you', 'you lose');
  }
  if (___ == 'freeze  ') {
    hideTitleScreen();
    showTitleScreen('the bear eats you', 'you lose');
  }
  if (___ == 'don\'t stop') {
    hideTitleScreen();
    showTitleScreen('the wall brakes to the woods a bear sees you', '');
    setPromptWithChoices('a bear sees you', '___', 'run away', 'freeze  ', '', function(val) {___ = val;});
  }
  if (___ == 'look around') {
    hideTitleScreen();
    showTitleScreen('you get out of the woods', '');
    setPromptWithChoices('', '___', 'go back in', 'don\'t go in', '', function(val) {___ = val;});
  }
  if (___ == 'run away') {
    setPromptWithChoices('', '___', 'look around', 'don\'t do that', '', function(val) {___ = val;});
  }
  if (___ == 'don\'t do that') {
    hideTitleScreen();
    showTitleScreen('the bear finds and kills you', 'you lose');
  }
  if (___ == 'go back in') {
    hideTitleScreen();
    showTitleScreen('the monster kills you', '');
  }
  if (___ == 'don\'t go in') {
    hideTitleScreen();
    showTitleScreen('you stayed out', 'you win');
  }
  if (___ == 'swim in it') {
    hideTitleScreen();
    showTitleScreen('the river go\'s out the cave', '');
    setPromptWithChoices('', '___', 'go back in', 'don\'t go in', '', function(val) {___ = val;});
  }
});
function moving_west(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "West");
}

function spinning_right(this_sprite) {
  turn(this_sprite, 6, "right");
}

function growing(this_sprite) {
  changePropBy(this_sprite, "scale", 1);
}

function swimming_left_and_right(this_sprite) {
  if (getProp(this_sprite, "direction") == 0) {
    mirrorSprite(this_sprite, "right");
  } else if (getProp(this_sprite, "direction") == 180) {
    mirrorSprite(this_sprite, "left");
  }
  moveForward(this_sprite, getProp(this_sprite, "speed"));
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function moving_east(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "East");
}

function moving_north(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "North");
}

function patrolling(this_sprite) {
  moveForward(this_sprite, getProp(this_sprite, "speed"));
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
  if (getProp(this_sprite, "direction") > 270 || getProp(this_sprite, "direction") < 90) {
    mirrorSprite(this_sprite, "right");
  } else {
    mirrorSprite(this_sprite, "left");
  }
}

function moving_south(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "South");
}

function math_random_int(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

function jittering(this_sprite) {
  changePropBy(this_sprite, "scale", math_random_int(-1, 1));
}

function wandering(this_sprite) {
  withPercentChance(20, function () {
    changePropBy(this_sprite, "direction", math_random_int(-25, 25));
  });
  moveForward(this_sprite, getProp(this_sprite, "speed"));
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", math_random_int(135, 225));
  }
  if (getProp(this_sprite, "direction") > 270 || getProp(this_sprite, "direction") < 90) {
    mirrorSprite(this_sprite, "right");
  } else {
    mirrorSprite(this_sprite, "left");
  }
}

function shrinking(this_sprite) {
  changePropBy(this_sprite, "scale", -1);
}

function spinning_left(this_sprite) {
  turn(this_sprite, 6, "left");
}

function moving_with_arrow_keys(this_sprite) {
  if (isKeyPressed("up")) {
    moveInDirection(this_sprite, getProp(this_sprite, "speed"), "North");
  }
  if (isKeyPressed("left")) {
    moveInDirection(this_sprite, getProp(this_sprite, "speed"), "West");
    mirrorSprite(this_sprite, "left");
  }
  if (isKeyPressed("right")) {
    mirrorSprite(this_sprite, "right");
    moveInDirection(this_sprite, getProp(this_sprite, "speed"), "East");
  }
  if (isKeyPressed("down")) {
    moveInDirection(this_sprite, getProp(this_sprite, "speed"), "South");
  }
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
  }
}

function driving_with_arrow_keys(this_sprite) {
  if (isKeyPressed("up")) {
    moveForward(this_sprite, getProp(this_sprite, "speed"));
  }
  if (isKeyPressed("down")) {
    moveBackward(this_sprite, getProp(this_sprite, "speed"));
  }
  if (isKeyPressed("left")) {
    changePropBy(this_sprite, "direction", -5);
    changePropBy(this_sprite, "rotation", -5);
  }
  if (isKeyPressed("right")) {
    changePropBy(this_sprite, "direction", 5);
    changePropBy(this_sprite, "rotation", 5);
  }
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
  }
}

function fluttering(this_sprite) {
  changePropBy(this_sprite, "y", math_random_int(-1, 1));
}

function wobbling(this_sprite) {
  withPercentChance(50, function () {
    setProp(this_sprite, "rotation", math_random_int(-1, 1));
  });
}

function moving_west_and_looping(this_sprite) {
  mirrorSprite(this_sprite, "left");
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "West");
  if (getProp(this_sprite, "x") < -50) {
    setProp(this_sprite, "x", 450);
  }
}

function moving_east_and_looping(this_sprite) {
  mirrorSprite(this_sprite, "right");
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "East");
  if (getProp(this_sprite, "x") > 450) {
    setProp(this_sprite, "x", -50);
  }
}

function moving_north_and_looping(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "North");
  if (getProp(this_sprite, "y") > 450) {
    setProp(this_sprite, "y", -50);
  }
}

function moving_south_and_looping(this_sprite) {
  moveInDirection(this_sprite, getProp(this_sprite, "speed"), "South");
  if (getProp(this_sprite, "y") < -50) {
    setProp(this_sprite, "y", 450);
  }
}