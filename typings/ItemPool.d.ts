declare class ItemPool {
  GetCollectible(itemPoolType: ItemPoolType | int, decrease: boolean, seed: int): CollectibleType | int;
  RemoveCollectible(collectibleType: CollectibleType | int): boolean;
  RemoveTrinket(trinketType: TrinketType | int): boolean;
  ResetTrinkets(): void;
  GetTrinket(): TrinketType | int;
  GetCard(seed: int, playing: boolean, rune: boolean, onlyRunes: boolean): Card | int;
  GetPill(seed: int): PillColor | int;
  GetPillEffect(pillColor: PillColor | int): PillEffect | int;
  IdentifyPill(pillColor: PillColor | int): void;
  IsPillIdentified(pillColor: PillColor | int): boolean;
  ForceAddPillEffect(pillEffect: PillEffect | int): PillColor | int;
  GetLastPool(): ItemPoolType | int;
  GetPoolForRoom(roomType: RoomType | int, seed: int): ItemPoolType | int;
  ResetRoomBlacklist(): void;
  AddRoomBlacklist(collectibleType: CollectibleType | int): void;
  AddBibleUpgrade(add: int, itemPoolType: ItemPoolType | int): void;
}
