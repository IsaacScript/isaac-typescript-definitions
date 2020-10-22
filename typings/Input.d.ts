declare namespace Input {
  function IsButtonTriggered(button: Keyboard | int, controllerID: int): boolean;
  function IsButtonPressed(button: Keyboard | int, controllerID: int): boolean;
  function GetButtonValue(button: Keyboard | int, controllerID: int): float;
  function IsActionTriggered(action: ButtonAction | int, controllerID: int): boolean;
  function IsActionPressed(action: ButtonAction | int, controllerID: int): boolean;
  function GetActionValue(action: ButtonAction | int, controllerID: int): float;
  function IsMouseBtnPressed(button: Mouse | int): boolean;
  function GetMousePosition(gameCoords: boolean): Vector;
}
