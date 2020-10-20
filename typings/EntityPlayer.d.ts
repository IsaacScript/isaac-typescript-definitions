type PlayerAnimationName = "Pickup" | "LiftItem" | "HideItem" | "UseItem";
type CollectibleAnimationName =
  | "Idle"
  | "Empty"
  | "ShopIdle"
  | "PlayerPickup"
  | "PlayerPickupSparkle";

declare class EntityPlayer extends Entity {
  RenderGlow(position: Vector): void;
  RenderBody(position: Vector): void;
  RenderHead(position: Vector): void;
  RenderTop(position: Vector): void;
  GetName(): string;
  AddMaxHearts(maxHearts: int, ignoreKeeper: boolean): void;
  HasFullHearts(): boolean;
  HasFullHeartsAndSoulHearts(): boolean;
  AddHearts(hearts: int): void;
  AddEternalHearts(eternalHearts: int): void;
  AddSoulHearts(soulHearts: int): void;
  AddBlackHearts(blackHearts: int): void;
  RemoveBlackHeart(blackHeart: int): void;
  IsBlackHeart(heart: int): boolean;
  AddJarHearts(hearts: int): void;
  GetJarHearts(): int;
  AddJarFlies(flies: int): void;
  GetJarFlies(): int;
  AddCoins(amount: int): void;
  AddBombs(amount: int): void;
  AddKeys(amount: int): void;
  AddGoldenKey(): void;
  RemoveGoldenKey(): void;
  AddGoldenBomb(): void;
  RemoveGoldenBomb(): void;
  AddGoldenHearts(hearts: int): void;
  AddBlueSpider(position: Vector): Entity;
  ThrowBlueSpider(position: Vector, target: Vector): Entity;
  RemoveBlueSpider(): void;
  AddBlueFlies(amount: int, position: Vector, target: Entity | null): Entity;
  RemoveBlueFly(): void;
  AddPrettyFly(): void;
  TryUseKey(): boolean;
  AddCostume(itemConfigItem: ItemConfigItem, itemStateOnly: boolean): void;
  AddNullCostume(nullItemID: NullItemID): void;
  RemoveCostume(itemConfigItem: ItemConfigItem): void;
  RemoveSkinCostume(): void;
  ClearCostumes(): void;
  QueueItem(
    itemConfigItem: ItemConfigItem,
    charge: int,
    touched: boolean,
  ): void;
  FlushQueueItem(): boolean;
  IsItemQueueEmpty(): boolean;
  AddCollectible(
    collectibleType: int,
    charge: int,
    addConsumables: boolean,
  ): void;
  GetCollectibleCount(): int;
  AddTrinket(trinketType: int): void;
  TryRemoveTrinket(trinketType: int): boolean;
  DropTrinket(dropPos: Vector, replaceTick: boolean): void;
  GetMaxTrinkets(): int;
  GetMaxPoketItems(): int;
  DropPoketItem(pocketNum: int, position: Vector): void;
  RemoveCollectible(collectibleType: int): void;
  ClearTemporaryEffects(): void;
  DonateLuck(luck: int): void;
  CanPickBlackHearts(): boolean;
  CanPickGoldenHearts(): boolean;
  GetActiveItem(): int;
  GetActiveCharge(): int;
  GetBatteryCharge(): int;
  GetActiveSubCharge(): int;
  SetActiveCharge(charge: int): void;
  DischargeActiveItem(): void;
  NeedsCharge(): boolean;
  FullCharge(): boolean;
  // GetPocketItem(slotID: int): Readonly<PlayerPocketItem>; // PlayerPocketItem is not implemented
  AddCard(card: int): void;
  AddPill(pillColor: int): void;
  GetCard(slotID: int): int;
  GetPill(slotID: int): int;
  SetCard(slotID: int, card: int): void;
  SetPill(slotID: int, pillColor: int): void;
  HasCollectible(collectibleType: int): boolean;
  GetCollectibleNum(collectibleType: int): int;
  HasTrinket(trinketType: int): boolean;
  HasPlayerForm(playerForm: PlayerForm): boolean;
  CanAddCollectible(): boolean;
  TryHoldTrinket(trinketType: int): boolean;
  SetFullHearts(): void;
  AddCacheFlags(cacheFlags: int): void;
  EvaluateItems(): void;
  RespawnFamiliars(): void;
  GetNPCTarget(): Entity;
  GetMovementDirection(): Direction;
  GetFireDirection(): Direction;
  GetHeadDirection(): Direction;
  GetAimDirection(): Readonly<Vector>;
  GetMovementVector(): Readonly<Vector>;
  GetRecentMovementVector(): Readonly<Vector>;
  GetMovementJoystick(): Vector;
  GetShootingJoystick(): Vector;
  AreOpposingShootDirectionsPressed(): boolean;
  GetLastDirection(): Readonly<Vector>;
  GetVelocityBeforeUpdate(): Readonly<Vector>;
  GetSmoothBodyRotation(): float;
  GetTearPoisonDamage(): float;
  GetBombFlags(): int;
  GetBombVariant(tearFlags: int, forceSmallBomb: boolean): int;
  GetTearHitParams(
    weaponType: WeaponType,
    damageScale: float,
    tearDisplacement: int,
  ): TearParams;
  GetHearts(): int;
  GetMaxHearts(): int;
  GetSoulHearts(): int;
  GetBlackHearts(): int;
  GetEternalHearts(): int;
  GetExtraLives(): int;
  GetNumBombs(): int;
  GetNumKeys(): int;
  HasGoldenKey(): boolean;
  HasGoldenBomb(): boolean;
  GetGoldenHearts(): int;
  GetNumCoins(): int;
  GetPlayerType(): PlayerType;
  GetTrinket(trinketIndex: 0 | 1): int;
  GetNumBlueFlies(): int;
  GetNumBlueSpiders(): int;
  GetItemState(): int;
  UseActiveItem(
    collectibleType: int,
    showAnim: boolean,
    keepActiveItem: boolean,
    allowNonMainPlayer: boolean,
    toAddCostume: boolean,
  ): void;
  GetTearRangeModifier(): int;
  GetTrinketMultiplier(): int;
  GetEffects(): TemporaryEffects;
  HasWeaponType(weaponType: WeaponType): boolean;
  GetActiveWeaponEntity(): Entity;
  GetTractorBeam(): Entity;
  CanPickupItem(): boolean;
  IsHoldingItem(): boolean;
  IsHeldItemVisible(): boolean;
  Revive(): void;
  TryRemoveCollectibleCostume(
    collectibleType: int,
    keepPersistent: boolean,
  ): void;
  TryRemoveTrinketCostume(trinketType: int): void;
  TryRemoveNullCostume(nullItemID: NullItemID): void;
  AnimateCollectible(
    collectibleType: int,
    playerAnimationName: PlayerAnimationName,
    collectibleAnimationName: CollectibleAnimationName,
  ): void;
  AnimateTrinket(
    trinketType: int,
    animName: string,
    spriteAnimName: string,
  ): void;
  AnimateCard(card: int, animName: string): void;
  AnimatePill(pillColor: int, animName: string): void;
  AnimateTrapdoor(): void;
  AnimateLightTravel(): void;
  AnimateAppear(): void;
  AnimateTeleport(up: boolean): void;
  AnimateHappy(): void;
  AnimateSad(): void;
  AnimatePitfallIn(): void;
  AnimatePitfallOut(): void;
  IsExtraAnimationFinished(): boolean;
  StopExtraAnimation(): void;
  AddControlsCooldown(cooldown: int): void;
  PlayExtraAnimation(animation: string): void;
  QueueExtraAnimation(animation: string): void;
  GetDamageCooldown(): int;
  ResetDamageCooldown(): void;
  SetMinDamageCooldown(damageCooldown: int): void;
  AreControlsEnabled(): boolean;
  UseCard(card: int): void;
  UsePill(pillEffect: int, pillColor: int): void;
  HasInvincibility(): boolean;
  SetShootingCooldown(cooldown: int): void;
  SetTargetTrapDoor(trapDoor: GridEntity): void;
  FireDelayedBrimstone(angle: float, parent: Entity): EntityLaser;
  GetLastDamageSource(): Readonly<EntityRef>;
  GetLastDamageFlags(): int;
  GetTotalDamageTaken(): int;
  FireTear(
    position: Vector,
    velocity: Vector,
    canBeEye: boolean,
    noTractorBeam: boolean,
    canTriggerStreakEnd: boolean,
  ): EntityTear;
  FireBomb(position: Vector, velocity: Vector): EntityBomb;
  FireBrimstone(direction: Vector): EntityLaser;
  FireTechLaser(
    position: Vector,
    laserOffset: LaserOffset,
    direction: Vector,
    leftEye: boolean,
    oneHit: boolean,
  ): EntityLaser;
  FireTechXLaser(
    position: Vector,
    direction: Vector,
    radius: float,
  ): EntityLaser;
  FireKnife(
    parent: Entity,
    rotationOffset: float,
    cantOverwrite: boolean,
    subType: int,
  ): EntityKnife;
  GetBabySkin(): BabySubType;
  CanShoot(): boolean;
  IsP2Appearing(): boolean;
  IsFullSpriteRendering(): boolean;
  GetCollectibleRNG(collectibleType: int): RNG;
  GetTrinketRNG(trinketType: int): RNG;
  GetPillRNG(pillEffect: int): RNG;
  GetCardRNG(card: int): RNG;
  AddDeadEyeCharge(): void;
  ClearDeadEyeCharge(): void;
  GetZodiacEffect(): int;
  IsPosInSpotLight(position: Vector): boolean;
  // GetMultiShotParams(): MultiShotParams // MultiShotParams is not implemented
  /*
  GetMultiShotPositionVelocity (
    loopIndex: int,
    weaponType: WeaponType ,
    shotDirection: Vector,
    shotSpeed: float,
    multiShotParams: MultiShotParams, // MultiShotParams is not implemented
  ): PosVel
  */
  GetFlyingOffset(): Vector;
  WillPlayerRevive(): boolean;
  GetLastActionTriggers(): int;
  GetGreedDonationBreakChance(): float;
  GetMovementInput(): Vector;
  GetShootingInput(): Vector;
  HasTimedItem(): boolean;
  InitBabySkin(): void;
  CanTurnHead(): boolean;
  CheckFamiliar(
    familiarVariant: FamiliarVariant,
    targetCount: int,
    rng: RNG,
  ): void;
  UpdateCanShoot(): void;
  GetLaserOffset(laserOffset: LaserOffset, direction: Vector): Vector;
  GetTearMovementInheritance(shotDirection: Vector): Vector;
  GetCostumeNullPos(
    nullFrameName: string,
    headScale: boolean,
    direction: Vector,
  ): Vector;
  ReplaceCostumeSprite(
    itemConfigItem: ItemConfigItem,
    spritePath: string,
    spriteID: int,
  ): void;
  AddPlayerFormCostume(playerForm: PlayerForm): void;
  ResetItemState(): void;
  SpawnMawOfVoid(timeout: int): EntityLaser;
  AddDollarBillEffect(): void;
  ShootRedCandle(direction: Vector): void;
  DoZitEffect(direction: Vector): void;
  SwapActiveItems(): void;
  AddBoneHearts(hearts: int): void;
  GetBoneHearts(): int;
  IsBoneHeart(heartSlot: int): boolean;
  GetEffectiveMaxHearts(): int;
  GetHeartLimit(): int;
  CanPickRedHearts(): boolean;
  CanPickSoulHearts(): boolean;
  CanPickBoneHearts(): boolean;
  IsSubPlayer(): boolean;
  GetSubPlayer(): EntityPlayer;

  readonly TearsOffset: Readonly<Vector>;
  ControlsEnabled: boolean;
  ControlsCooldown: int;
  // readonly FriendBallEnemy: Readonly<EntityDesc>; // EntityDesc is not implemented
  SpriteScale: Vector;
  readonly ControllerIndex: int;
  FireDelay: int;
  MaxFireDelay: int;
  ShotSpeed: float;
  Damage: float;
  TearHeight: float;
  TearFallingSpeed: float;
  TearFallingAcceleration: float;
  MoveSpeed: float;
  TearFlags: int;
  TearColor: Color;
  LaserColor: Color;
  CanFly: boolean;
  Luck: float;
  BabySkin: BabySubType;
  QueuedItem: QueueItemData;
  ItemHoldCooldown: int;
  SecondaryActiveItem: ItemConfigItem;
  HeadFrameDelay: int;
}
