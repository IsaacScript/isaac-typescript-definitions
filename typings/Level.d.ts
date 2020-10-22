declare class Level {
  Update(): void;
  SetStage(levelStage: LevelStage | int, stageType: StageType | int): void;
  SetNextStage(): void;
  GetName(
    levelStage: LevelStage | int,
    stageType: StageType | int,
    curses: int,
    infiniteLevel: int,
    dyslexia: boolean,
  ): string;
  CanStageHaveCurseOfLabyrinth(levelStage: LevelStage | int): boolean;
  GetCurseName(): string;
  ShowName(sticky: boolean): void;
  GetStateFlag(levelStateFlag: LevelStateFlag): boolean;
  SetStateFlag(levelStateFlag: LevelStateFlag, val: boolean): void;
  GetCurrentRoom(): Room;
  GetPreviousRoomIndex(): int;
  GetCurrentRoomIndex(): int;
  GetRoomCount(): int;
  GetRandomRoomIndex(IAmErrorRoom: boolean, seed: int): int;
  GetNonCompleteRoomIndex(): int;
  GetRoomByIdx(roomIdx: int): RoomDescriptor;
  GetCurrentRoomDesc(): Readonly<RoomDescriptor>;
  GetLastRoomDesc(): Readonly<RoomDescriptor>;
  GetRooms(): RoomList;
  GetStartingRoomIndex(): int;
  QueryRoomTypeIndex(roomType: RoomType | int, visited: boolean, rng: RNG): int;
  GetLastBossRoomListIndex(): int;
  CanOpenChallengeRoom(roomIndex: int): boolean;
  GetEnterPosition(): Vector;
  ChangeRoom(roomIndex: int): void;
  ForceHorsemanBoss(seed: int): boolean;
  GetStage(): LevelStage | int;
  GetCurses(): LevelCurse | int;
  IsAltStage(): boolean;
  GetStageType(): StageType | int;
  HasBossChallenge(): boolean;
  IsDevilRoomDisabled(): boolean;
  DisableDevilRoom(): void;
  UpdateVisibility(): void;
  ApplyMapEffect(): void;
  ApplyBlueMapEffect(): void;
  ApplyCompassEffect(persistent: boolean): void;
  RemoveCompassEffect(): void;
  ShowMap(): void;
  SetHeartPicked(): void;
  GetHeartPicked(): boolean;
  GetCanSeeEverything(): boolean;
  SetCanSeeEverything(value: boolean): void;
  AddCurse(levelCurse: LevelCurse | int, showName: boolean): void;
  RemoveCurses(): void;
  RemoveCurse(levelCurse: LevelCurse | int): void;
  GetDungeonPlacementSeed(): int;
  GetDevilAngelRoomRNG(): RNG;
  CanSpawnDevilRoom(): boolean;
  InitializeDevilAngelRoom(forceAngel: boolean, forceDevil: boolean): void;
  UncoverHiddenDoor(currentRoomIdx: int, doorSlot: DoorSlot | int): void;
  SetRedHeartDamage(): void;
  IsNextStageAvailable(): boolean;
  GetAbsoluteStage(): LevelStage | int;
  AddAngelRoomChance(chance: float): void;
  GetAngelRoomChance(): float;

  EnterDoor: int;
  LeaveDoor: int;
  DungeonReturnPosition: Vector;
  DungeonReturnRoomIndex: int;
  GreedModeWave: int;
}
