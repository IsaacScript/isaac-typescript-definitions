declare class Game {
  Update(): void;
  Render(): void;
  IsPaused(): boolean;
  Spawn(
    entityType: EntityType | int,
    variant: EntityVariantForAC,
    position: Vector,
    velocity: Vector,
    spawner: Entity | null,
    subType: int,
    seed: int,
  ): Entity;
  /*
  SpawnEntityDesc(
    entityDesc: EntityDesc, // EntityDesc is not implemented
    position: Vector,
    spawner: Entity,
  ): EntityNPC;
  */
  BombDamage(
    position: Vector,
    damage: float,
    radius: float,
    lineCheck: boolean,
    source: Entity,
    tearFlags: TearFlags | int,
    damageFlags: DamageFlag | int,
    damageSource: boolean,
  ): void;
  BombExplosionEffects(
    position: Vector,
    damage: float,
    tearFlags: TearFlags | int,
    color: Color,
    source: Entity,
    radiusMult: float,
    lineCheck: boolean,
    damageSource: boolean,
  ): void;
  BombTearflagEffects(
    position: Vector,
    radius: float,
    tearFlags: TearFlags | int,
    source: Entity,
  ): void;
  Fart(
    position: Vector,
    radius: float,
    source: Entity,
    fartScale: float,
    fartSubType: int,
  ): void;
  CharmFart(position: Vector, radius: float, source: Entity): void;
  ButterBeanFart(
    position: Vector,
    radius: float,
    source: Entity,
    showEffect: boolean,
  ): void;
  RerollEnemy(entity: Entity): boolean;
  SpawnParticles(
    position: Vector,
    effectVariant: EffectVariant | int,
    numParticles: int,
    speed: float,
    color: Color,
    height: float,
  ): void;
  GetFont(): Font;
  GetLevel(): Level;
  GetRoom(): Room;
  GetPlayer(index: int): EntityPlayer;
  GetNearestPlayer(position: Vector): EntityPlayer;
  GetRandomPlayer(position: Vector, radius: float): EntityPlayer;
  GetNumPlayers(): int;
  // GetItemHistory(): History; // History is not implemented
  GetItemPool(): ItemPool;
  // GetItemOverlay(): ItemOverlay; // ItemOverlay is not implemented
  GetSeeds(): Seeds;
  End(ending: Ending): void;
  ShowFortune(): void;
  ShowRule(): void;
  StartRoomTransition(
    roomIndex: int,
    direction: Direction | int,
    roomTransition: RoomTransition | int,
  ): void;
  ChangeRoom(roomIndex: int): void;
  StartStageTransition(
    sameStage: boolean,
    stageTransition: StageTransition | int,
  ): void;
  MoveToRandomRoom(IAmErrorRoom: boolean, seed: int): void;
  GetFrameCount(): int;
  GetStateFlag(gameStateFlag: GameStateFlag | int): boolean;
  SetStateFlag(gameStateFlag: GameStateFlag | int, val: boolean): void;
  SetLastDevilRoomStage(levelStage: LevelStage | int): void;
  GetLastDevilRoomStage(): LevelStage | int;
  AddTreasureRoomsVisited(): void;
  GetTreasureRoomVisitCount(): int;
  AddStageWithoutHeartsPicked(): void;
  ClearStagesWithoutHeartsPicked(): void;
  GetStagesWithoutHeartsPicked(): int;
  AddStageWithoutDamage(): void;
  ClearStagesWithoutDamage(): void;
  GetStagesWithoutDamage(): int;
  AddDevilRoomDeal(): void;
  DonateGreed(donate: int): void;
  DonateAngel(donate: int): void;
  GetDevilRoomDeals(): int;
  GetDonationModGreed(): int;
  GetDonationModAngel(): int;
  ClearDonationModGreed(): void;
  ClearDonationModAngel(): void;
  SetLastLevelWithDamage(levelStage: LevelStage | int): void;
  GetLastLevelWithDamage(): LevelStage | int;
  AddEncounteredBoss(entityType: EntityType | int, variant: EntityVariantForAC): void;
  GetNumEncounteredBosses(): int;
  HasEncounteredBoss(entityType: EntityType | int, variant: EntityVariantForAC): boolean;
  GetGreedWavesNum(): int;
  GetGreedBossWaveNum(): int;
  SetLastLevelWithoutHalfHp(levelStage: LevelStage | int): void;
  GetLastLevelWithoutHalfHp(): LevelStage | int;
  ShakeScreen(timeout: int): void;
  GetScreenShakeCountdown(): Readonly<int>;
  Darken(darkness: float, timeout: int): void;
  GetDarknessModifier(): float;
  GetTargetDarkness(): float;
  GetVictoryLap(): int;
  NextVictoryLap(): void;
  IsGreedMode(): boolean;
  RerollLevelCollectibles(): void;
  RerollLevelPickups(seed: int): void;
  FinishChallenge(): void;
  AddPixelation(duration: int): void;
  // Using ShowHallucination() will immediately crash the game
  /*
  ShowHallucination(
    frameCount: int,
    hallucinationBackdrop: HallucinationBackdrop,
  ): void; // HallucinationBackdrop is not implemented
  */
  HasHallucination(): int;
  UpdateStrangeAttractor(position: Vector): void;
  // GetAmbush(): Ambush; // Ambush is not implemented
  Fadein(speed: float): void;
  Fadeout(speed: float, fadeoutTarget: FadeoutTarget | int): void;

  BossRushParTime: int;
  BlueWombParTime: int;
  readonly ScreenShakeOffset: Readonly<Vector>;
  Challenge: Challenge | int;
  readonly Difficulty: Difficulty | int;
  TimeCounter: int;
}
