declare class Level {
  AddAngelRoomChance(chance: float): void;
  AddCurse(levelCurse: LevelCurse | int, showName: boolean): void;
  ApplyBlueMapEffect(): void;
  ApplyCompassEffect(persistent: boolean): void;
  ApplyMapEffect(): void;
  CanOpenChallengeRoom(roomIndex: int): boolean;
  CanSpawnDevilRoom(): boolean;
  CanStageHaveCurseOfLabyrinth(levelStage: LevelStage): boolean;
  /**
   * @param roomIndex
   * @param dimension Default is Dimension.CURRENT.
   */
  ChangeRoom(roomIndex: int, dimension?: Dimension): void;
  DisableDevilRoom(): void;
  ForceHorsemanBoss(seed: int): boolean;
  GetAbsoluteStage(): LevelStage;
  GetAngelRoomChance(): float;
  GetCanSeeEverything(): boolean;
  GetCurrentRoom(): Room;
  GetCurrentRoomDesc(): Readonly<RoomDescriptor>;
  GetCurrentRoomIndex(): int;
  GetCurseName(): string;
  GetCurses(): LevelCurse | int;
  GetDevilAngelRoomRNG(): RNG;
  GetDungeonPlacementSeed(): int;
  GetEnterPosition(): Vector;
  GetHeartPicked(): boolean;
  GetLastBossRoomListIndex(): int;
  GetLastRoomDesc(): Readonly<RoomDescriptor>;
  GetName(
    levelStage?: LevelStage,
    stageType?: StageType,
    curses?: int,
    infiniteLevel?: int,
    dyslexia?: boolean,
  ): string;
  GetNonCompleteRoomIndex(): int;
  GetPreviousRoomIndex(): int;
  GetRandomRoomIndex(IAmErrorRoom: boolean, seed: int): int;
  /**
   * @param roomIdx
   * @param dimension Default is Dimension.CURRENT.
   */
  GetRoomByIdx(roomIdx: int, dimension?: Dimension): RoomDescriptor;
  GetRoomCount(): int;
  GetRooms(): RoomList;
  GetStage(): LevelStage;
  GetStageType(): StageType;
  GetStartingRoomIndex(): int;
  GetStateFlag(levelStateFlag: LevelStateFlag): boolean;
  HasBossChallenge(): boolean;
  InitializeDevilAngelRoom(forceAngel: boolean, forceDevil: boolean): void;
  IsAltStage(): boolean;
  IsDevilRoomDisabled(): boolean;
  IsNextStageAvailable(): boolean;
  /**
   * @param roomType
   * @param visited
   * @param rng
   * @param ignoreGroup If set to true, includes rooms that do not have the same group ID as the
   * current room. Default is false.
   */
  QueryRoomTypeIndex(
    roomType: RoomType,
    visited: boolean,
    rng: RNG,
    ignoreGroup?: boolean,
  ): int;
  RemoveCompassEffect(): void;
  /** This is currently bugged and maps internally to "RemoveCurse()". The old "RemoveCurses()" is not currently accessible. */
  RemoveCurses(levelCurse: LevelCurse | int): void;
  SetCanSeeEverything(value: boolean): void;
  SetHeartPicked(): void;
  SetNextStage(): void;
  SetRedHeartDamage(): void;
  SetStage(levelStage: LevelStage, stageType: StageType): void;
  SetStateFlag(levelStateFlag: LevelStateFlag, val: boolean): void;
  ShowMap(): void;
  ShowName(sticky: boolean): void;
  UncoverHiddenDoor(currentRoomIdx: int, doorSlot: DoorSlot): void;
  Update(): void;
  UpdateVisibility(): void;

  DungeonReturnPosition: Vector;
  DungeonReturnRoomIndex: int;
  EnterDoor: int;
  GreedModeWave: int;
  LeaveDoor: int;
}
