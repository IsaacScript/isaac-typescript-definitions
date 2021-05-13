declare class TemporaryEffects {
  /**
   * @param collectibleType
   * @param addCostume Default is true.
   * @param count Default is 1.
   */
  AddCollectibleEffect(
    collectibleType: CollectibleType | int,
    addCostume?: boolean,
    count?: int,
  ): void;
  /**
   * @param nullItemID
   * @param addCostume
   * @param count Default is 1.
   */
  AddNullEffect(nullItemID: NullItemID, addCostume: boolean, count?: int): void;
  /**
   * @param trinketType
   * @param addCostume
   * @param count Default is 1.
   */
  AddTrinketEffect(
    trinketType: TrinketType | int,
    addCostume: boolean,
    count?: int,
  ): void;
  ClearEffects(): void;
  GetCollectibleEffect(
    collectibleType: CollectibleType | int,
  ): Readonly<TemporaryEffect>;
  GetCollectibleEffectNum(collectibleType: CollectibleType | int): int;
  GetEffectsList(): Readonly<EffectList>;
  GetNullEffect(nullItemID: NullItemID): Readonly<TemporaryEffect>;
  GetNullEffectNum(nullItemID: NullItemID): int;
  GetTrinketEffect(trinketType: TrinketType | int): Readonly<TemporaryEffect>;
  GetTrinketEffectNum(trinketType: TrinketType | int): int;
  HasCollectibleEffect(collectibleType: CollectibleType | int): boolean;
  HasNullEffect(nullItemID: NullItemID): boolean;
  HasTrinketEffect(trinketType: TrinketType | int): boolean;
  /**
   * @param collectibleType
   * @param count Use -1 to remove all instances. Default is 1.
   */
  RemoveCollectibleEffect(
    collectibleType: CollectibleType | int,
    count?: int,
  ): void;
  /**
   * @param nullItemID
   * @param count Use -1 to remove all instances. Default is 1.
   */
  RemoveNullEffect(nullItemID: NullItemID, count?: int): void;
  /**
   * @param trinketType
   * @param count Use -1 to remove all instances. Default is 1.
   */
  RemoveTrinketEffect(trinketType: TrinketType | int, count?: int): void;
}
