declare class EntityBomb extends Entity {
  SetExplosionCountdown(countdown: int): void;

  Flags: TearFlags | int;
  IsFetus: boolean;
  ExplosionDamage: float;
  RadiusMultiplier: float;
}
