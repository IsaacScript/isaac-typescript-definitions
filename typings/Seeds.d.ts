declare class Seeds {
  SetStartSeed(startSeed: string): void;
  ClearStartSeed(): void;
  IsCustomRun(): boolean;
  Restart(challenge: Challenge | int): void;
  Reset(): void;
  IsInitialized(): boolean;
  GetStartSeed(): int;
  GetStartSeedString(): string;
  GetNextSeed(): int;
  GetStageSeed(levelStage: LevelStage | int): int;
  GetPlayerInitSeed(): int;
  ForgetStageSeed(levelStage: LevelStage | int): void;
  HasSeedEffect(seedEffect: SeedEffect | int): boolean;
  AddSeedEffect(seedEffect: SeedEffect | int): void;
  RemoveSeedEffect(seedEffect: SeedEffect | int): void;
  RemoveBlockingSeedEffects(seedEffect: SeedEffect | int): void;
  ClearSeedEffects(): void;
  CanAddSeedEffect(seedEffect: SeedEffect | int): boolean;
  CountSeedEffects(): int;
  IsSeedComboBanned(seedEffect1: SeedEffect | int, seedEffect2: SeedEffect | int): boolean;

  /** @noSelf */
  static String2Seed(str: string): int;
  /** @noSelf */
  static Seed2String(seed: int): string;
  /** @noSelf */
  static IsStringValidSeed(str: string): boolean;
  /** @noSelf */
  static GetSeedEffect(str: string): SeedEffect | int;
  /** @noSelf */
  static IsSpecialSeed(str: string): boolean;
  /** @noSelf */
  static InitSeedInfo(): void;
  /** @noSelf */
  static CountUnlockedSeedEffects(): int;
}
