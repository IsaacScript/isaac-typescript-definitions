declare class GridEntityDoor extends GridEntity {
  SetRoomTypes(currentRoomType: RoomType | int, targetRoomType: RoomType | int): void;
  Open(): void;
  Close(force: boolean): void;
  Bar(): void;
  SpawnDust(): void;
  CanBlowOpen(): boolean;
  TryBlowOpen(fromExplosion: boolean): boolean;
  TryUnlock(force: boolean): boolean;
  IsOpen(): boolean;
  IsKeyFamiliarTarget(): boolean;
  SetLocked(locked: boolean): void;
  IsLocked(): boolean;
  IsBusted(): boolean;
  IsRoomType(roomType: RoomType | int): boolean;
  IsTargetRoomArcade(): boolean;
  GetSpriteOffset(): Readonly<Vector>;

  Direction: Direction | int;
  TargetRoomIndex: int;
  Slot: DoorSlot | int;
  CurrentRoomType: RoomType | int;
  TargetRoomType: RoomType | int;
  ExtraSprite: Sprite;
  ExtraVisible: boolean;
  Busted: boolean;
  PreviousState: int;
  PreviousVariant: DoorVariant | int;
  OpenAnimation: string;
  CloseAnimation: string;
  LockedAnimation: string;
  OpenLockedAnimation: string;
}
