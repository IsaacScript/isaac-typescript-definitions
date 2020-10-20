import Mod from "./Mod";

declare global {
  /** @noSelf */
  namespace Isaac {
    function DebugString(msg: string): Mod;
    function GetPlayer(playerID: int): EntityPlayer;
    function GetFrameCount(): int;
    function Spawn(
      entityType: int,
      entityVariant: int,
      entitySubType: int,
      position: Vector,
      velocity: Vector,
      spawner: Entity | null,
    ): Entity;
    function GridSpawn(
      gridEntityType: int,
      variant: int,
      position: Vector,
      forced: boolean,
    ): GridEntity;
    function RenderText(
      str: string,
      x: float,
      y: float,
      r: float,
      g: float,
      b: float,
      a: float,
    ): void;
    function RenderScaledText(
      str: string,
      x: float,
      y: float,
      scaleX: float,
      scaleY: float,
      r: float,
      g: float,
      b: float,
      a: float,
    ): void;
    function GetTextWidth(str: string): int;
    function GetRandomPosition(): Vector;
    function GetFreeNearPosition(position: Vector, step: float): Vector;
    function Explode(position: Vector, source: Entity, damage: float): void;
    function AddPillEffectToPool(pillEffect: int): int;
    function GetRoomEntities(): Entity[];
    function GetChallenge(): int;
    function GetEntityVariantByName(entityName: string): int;
    function GetItemIdByName(entityName: string): int;
    function GetPlayerTypeByName(playerName: string): int;
    function GetCardIdByName(cardName: string): int;
    function GetPillEffectByName(pillName: string): int;
    function GetTrinketIdByName(trinketName: string): int;
    function GetChallengeIdByName(challengeName: string): int;
    function GetCostumeIdByPath(path: string): int;
    function GetCurseIdByName(curseName: string): int;
    function GetSoundIdByName(soundName: string): int;
    function GetMusicIdByName(musicName: string): int;
    function GetTime(): int;
    function ExecuteCommand(command: string): string;
    function ConsoleOutput(text: string): void;
    function GetItemConfig(): ItemConfig;
    function FindInRadius(
      position: Vector,
      radius: float,
      partitions: int,
    ): Entity[];
    function FindByType(
      entityType: int,
      variant: int,
      subType: int,
      cache: boolean,
      ignoreFriendly: boolean,
    ): Entity[];
    function CountEntities(
      spawner: Entity | null,
      entityType: int,
      variant: int,
      subType: int,
    ): int;
    function CountBosses(): int;
    function CountEnemies(): int;
    function RegisterMod(mod: Mod, modName: string, APIVersion: int): void;
    function AddCallback(
      mod: Mod,
      callbackID: ModCallbacks,
      callbackFn: () => void,
      entityID?: int,
    ): void;
    function RemoveCallback(
      mod: Mod,
      callbackID: ModCallbacks,
      callbackFn: () => void,
    ): void;
    function SaveModData(mod: Mod, data: string): void;
    function LoadModData(mod: Mod): string;
    function HasModData(mod: Mod): boolean;
    function RemoveModData(mod: Mod): void;
    function ScreenToWorld(position: Vector): Vector;
    function WorldToScreen(position: Vector): Vector;
    function WorldToScreenDistance(position: Vector): Vector;
    function WorldToRenderPosition(position: Vector): Vector;
    function ScreenToWorldDistance(position: Vector): Vector;
  }
}
