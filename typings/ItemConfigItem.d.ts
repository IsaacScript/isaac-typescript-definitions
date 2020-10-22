declare class ItemConfigItem {
  IsCollectible(): boolean;
  IsTrinket(): boolean;
  IsNull(): boolean;

  Type: ItemType | int;
  ID: int;
  Name: string;
  Description: string;
  GfxFileName: string;
  AchievementID: int;
  CacheFlags: CacheFlag | int;
  AddMaxHearts: int;
  AddHearts: int;
  AddSoulHearts: int;
  AddBlackHearts: int;
  AddBombs: int;
  AddKeys: int;
  AddCoins: int;
  MaxCharges: int;
  MaxCooldown: int;
  Special: boolean;
  DevilPrice: int;
  readonly Costume: Readonly<ItemConfigCostume>;
  Discharged: boolean;
}
