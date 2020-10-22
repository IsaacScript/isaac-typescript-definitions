declare class EntityFamiliar extends Entity {
  AddCoins(value: int): void;
  AddHearts(hearts: int): void;
  AddKeys(keys: int): void;
  PickEnemyTarget(maxDistance: float, frameInterval: int): void;
  FollowParent(): void;
  FollowPosition(position: Vector): void;
  GetOrbitPosition(position: Vector): Vector;
  Shoot(): void;
  FireProjectile(direction: Vector): EntityTear;
  PlayChargeAnim(direction: Direction | int): void;
  PlayShootAnim(direction: Direction | int): void;
  PlayFloatAnim(direction: Direction | int): void;
  MoveDelayed(numFrames: int): void;
  MoveDiagonally(speed: float): void;
  RecalculateOrbitOffset(layer: int, add: boolean): int;
  AddToFollowers(): void;
  AddToDelayed(): void;
  AddToOrbit(layer: int): void;
  RemoveFromFollowers(): void;
  RemoveFromDelayed(): void;
  RemoveFromOrbit(): void;

  Player: EntityPlayer;
  Coins: int;
  Hearts: int;
  Keys: int;
  FireCooldown: int;
  HeadFrameDelay: int;
  MoveDirection: Direction | int;
  ShootDirection: Direction | int;
  LastDirection: Direction | int;
  OrbitAngleOffset: float;
  OrbitDistance: Vector;
  State: int;
  RoomClearCount: int;
}
