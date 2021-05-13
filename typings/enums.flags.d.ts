// Enums from the "resources/scripts/enums.lua" file
// (flags only)

declare enum EntityFlag {
  FLAG_NO_STATUS_EFFECTS = 1,
  FLAG_NO_INTERPOLATE = 1 << 1,
  FLAG_APPEAR = 1 << 2,
  FLAG_RENDER_FLOOR = 1 << 3,
  FLAG_NO_TARGET = 1 << 4,
  FLAG_FREEZE = 1 << 5,
  FLAG_POISON = 1 << 6,
  FLAG_SLOW = 1 << 7,
  FLAG_CHARM = 1 << 8,
  FLAG_CONFUSION = 1 << 9,
  FLAG_MIDAS_FREEZE = 1 << 10,
  FLAG_FEAR = 1 << 11,
  FLAG_BURN = 1 << 12,
  FLAG_RENDER_WALL = 1 << 13,
  FLAG_INTERPOLATION_UPDATE = 1 << 14,
  FLAG_APPLY_GRAVITY = 1 << 15,
  FLAG_NO_BLOOD_SPLASH = 1 << 16,
  FLAG_NO_REMOVE_ON_TEX_RENDER = 1 << 17,
  FLAG_NO_DEATH_TRIGGER = 1 << 18,
  FLAG_NO_SPIKE_DAMAGE = 1 << 19,
  FLAG_BOSSDEATH_TRIGGERED = 1 << 20,
  FLAG_DONT_OVERWRITE = 1 << 21,
  FLAG_SPAWN_STICKY_SPIDERS = 1 << 22,
  FLAG_SPAWN_BLACK_HP = 1 << 23,
  FLAG_SHRINK = 1 << 24,
  FLAG_NO_FLASH_ON_DAMAGE = 1 << 25,
  FLAG_NO_KNOCKBACK = 1 << 26,
  FLAG_SLIPPERY_PHYSICS = 1 << 27,
  FLAG_ADD_JAR_FLY = 1 << 28,
  FLAG_FRIENDLY = 1 << 29,
  FLAG_NO_PHYSICS_KNOCKBACK = 1 << 30,
  FLAG_DONT_COUNT_BOSS_HP = 1 << 31,
  FLAG_NO_SPRITE_UPDATE = 1 << 32,
  FLAG_CONTAGIOUS = 1 << 33,
  FLAG_BLEED_OUT = 1 << 34,
  FLAG_HIDE_HP_BAR = 1 << 35,
  FLAG_NO_DAMAGE_BLINK = 1 << 36,
  FLAG_PERSISTENT = 1 << 37,
}

/** For EntityType.ENTITY_TEAR (2) */
declare enum TearFlags {
  TEAR_NORMAL = 0,
  TEAR_SPECTRAL = 1,
  TEAR_PIERCING = 1 << 1,
  TEAR_HOMING = 1 << 2,
  TEAR_SLOW = 1 << 3,
  TEAR_POISON = 1 << 4,
  TEAR_FREEZE = 1 << 5,
  TEAR_SPLIT = 1 << 6,
  TEAR_GROW = 1 << 7,
  TEAR_BOMBERANG = 1 << 8,
  TEAR_PERSISTENT = 1 << 9,
  TEAR_WIGGLE = 1 << 10,
  TEAR_MIGAN = 1 << 11,
  TEAR_EXPLOSIVE = 1 << 12,
  TEAR_CHARM = 1 << 13,
  TEAR_CONFUSION = 1 << 14,
  TEAR_HP_DROP = 1 << 15,
  TEAR_ORBIT = 1 << 16,
  TEAR_WAIT = 1 << 17,
  TEAR_QUADSPLIT = 1 << 18,
  TEAR_BOUNCE = 1 << 19,
  TEAR_FEAR = 1 << 20,
  TEAR_SHRINK = 1 << 21,
  TEAR_BURN = 1 << 22,
  TEAR_ATTRACTOR = 1 << 23,
  TEAR_KNOCKBACK = 1 << 24,
  TEAR_PULSE = 1 << 25,
  TEAR_SPIRAL = 1 << 26,
  TEAR_FLAT = 1 << 27,
  TEAR_SAD_BOMB = 1 << 28,
  TEAR_BUTT_BOMB = 1 << 29,
  TEAR_GLITTER_BOMB = 1 << 30,
  TEAR_SQUARE = 1 << 31,
  TEAR_GLOW = 1 << 32,
  TEAR_GISH = 1 << 33,
  TEAR_SCATTER_BOMB = 1 << 34,
  TEAR_STICKY = 1 << 35,
  TEAR_CONTINUUM = 1 << 36,
  TEAR_LIGHT_FROM_HEAVEN = 1 << 37,
  TEAR_COIN_DROP = 1 << 38,
  TEAR_BLACK_HP_DROP = 1 << 39,
  TEAR_TRACTOR_BEAM = 1 << 40,
  TEAR_GODS_FLESH = 1 << 41,
  TEAR_GREED_COIN = 1 << 42,
  TEAR_MYSTERIOUS_LIQUID_CREEP = 1 << 43,
  TEAR_BIG_SPIRAL = 1 << 44,
  TEAR_PERMANENT_CONFUSION = 1 << 45,
  TEAR_BOOGER = 1 << 46,
  TEAR_EGG = 1 << 47,
  TEAR_ACID = 1 << 48,
  TEAR_BONE = 1 << 49,
  TEAR_BELIAL = 1 << 50,
  TEAR_MIDAS = 1 << 51,
  TEAR_NEEDLE = 1 << 52,
  TEAR_JACOBS = 1 << 53,
  TEAR_HORN = 1 << 54,
  TEAR_LASER = 1 << 55,
  TEAR_POP = 1 << 56,
  TEAR_ABSORB = 1 << 57,
  TEAR_LASERSHOT = 1 << 58,
  TEAR_HYDROBOUNCE = 1 << 59,
  TEAR_LUDOVICO = 1 << 60,
}

/** For EntityType.ENTITY_PROJECTILE (9) */
declare enum ProjectileFlags {
  SMART = 1,
  EXPLODE = 1 << 1,
  ACID_GREEN = 1 << 2,
  GOO = 1 << 3,
  GHOST = 1 << 4,
  WIGGLE = 1 << 5,
  BOOMERANG = 1 << 6,
  HIT_ENEMIES = 1 << 7,
  ACID_RED = 1 << 8,
  GREED = 1 << 9,
  RED_CREEP = 1 << 10,
  ORBIT_CW = 1 << 11,
  ORBIT_CCW = 1 << 12,
  NO_WALL_COLLIDE = 1 << 13,
  CREEP_BROWN = 1 << 14,
  FIRE = 1 << 15,
  BURST = 1 << 16,
  ANY_HEIGHT_ENTITY_HIT = 1 << 17,
  CURVE_LEFT = 1 << 18,
  CURVE_RIGHT = 1 << 19,
  TURN_HORIZONTAL = 1 << 20,
  SINE_VELOCITY = 1 << 21,
  MEGA_WIGGLE = 1 << 22,
  SAWTOOTH_WIGGLE = 1 << 23,
  SLOWED = 1 << 24,
  TRIANGLE = 1 << 25,
  MOVE_TO_PARENT = 1 << 26,
  ACCELERATE = 1 << 27,
  DECELERATE = 1 << 28,
  BURST3 = 1 << 29,
  CONTINUUM = 1 << 30,
  CANT_HIT_PLAYER = 1 << 31,
  CHANGE_FLAGS_AFTER_TIMEOUT = 1 << 32,
  CHANGE_VELOCITY_AFTER_TIMEOUT = 1 << 33,
}

declare enum DamageFlag {
  DAMAGE_NOKILL = 1,
  DAMAGE_FIRE = 1 << 1,
  DAMAGE_EXPLOSION = 1 << 2,
  DAMAGE_LASER = 1 << 3,
  DAMAGE_ACID = 1 << 4,
  DAMAGE_RED_HEARTS = 1 << 5,
  DAMAGE_COUNTDOWN = 1 << 6,
  DAMAGE_SPIKES = 1 << 7,
  DAMAGE_CLONES = 1 << 8,
  DAMAGE_POOP = 1 << 9,
  DAMAGE_DEVIL = 1 << 10,
  DAMAGE_ISSAC_HEART = 1 << 11,
  DAMAGE_TNT = 1 << 12,
  DAMAGE_INVINCIBLE = 1 << 13,
  DAMAGE_SPAWN_FLY = 1 << 14,
  DAMAGE_POISON_BURN = 1 << 15,
  DAMAGE_CURSED_DOOR = 1 << 16,
  DAMAGE_TIMER = 1 << 17,
  DAMAGE_IV_BAG = 1 << 18,
  DAMAGE_PITFALL = 1 << 19,
  DAMAGE_CHEST = 1 << 20,
  DAMAGE_FAKE = 1 << 21,
  DAMAGE_BOOGER = 1 << 22,
}

declare enum CacheFlag {
  CACHE_DAMAGE = 1,
  CACHE_FIREDELAY = 2,
  CACHE_SHOTSPEED = 4,
  CACHE_RANGE = 8,
  CACHE_SPEED = 16,
  CACHE_TEARFLAG = 32,
  CACHE_TEARCOLOR = 64,
  CACHE_FLYING = 128,
  CACHE_WEAPON = 256,
  CACHE_FAMILIARS = 512,
  CACHE_LUCK = 1024,
  CACHE_ALL = 0xffffffff,
}

declare enum GameStateFlag {
  STATE_FAMINE_SPAWNED = 0,
  STATE_PESTILENCE_SPAWNED = 1,
  STATE_WAR_SPAWNED = 2,
  STATE_DEATH_SPAWNED = 3,
  STATE_BOSSPOOL_SWITCHED = 4,
  STATE_DEVILROOM_SPAWNED = 5,
  STATE_DEVILROOM_VISITED = 6,
  STATE_BOOK_REVELATIONS_USED = 7,
  STATE_BOOK_PICKED_UP = 8,
  STATE_WRATH_SPAWNED = 9,
  STATE_GLUTTONY_SPAWNED = 10,
  STATE_LUST_SPAWNED = 11,
  STATE_SLOTH_SPAWNED = 12,
  STATE_ENVY_SPAWNED = 13,
  STATE_PRIDE_SPAWNED = 14,
  STATE_GREED_SPAWNED = 15,
  STATE_SUPERGREED_SPAWNED = 16,
  STATE_DONATION_SLOT_BROKEN = 17,
  STATE_DONATION_SLOT_JAMMED = 18,
  STATE_HEAVEN_PATH = 19,
  STATE_REBIRTH_BOSS_SWITCHED = 20,
  STATE_HAUNT_SELECTED = 21,
  STATE_ADVERSARY_SELECTED = 22,
  STATE_MR_FRED_SELECTED = 23,
  STATE_MAMA_GURDY_SELECTED = 24,
  STATE_URIEL_SPAWNED = 25,
  STATE_GABRIEL_SPAWNED = 26,
  STATE_FALLEN_SPAWNED = 27,
  STATE_HEADLESS_HORSEMAN_SPAWNED = 28,
  STATE_KRAMPUS_SPAWNED = 29,
  STATE_DONATION_SLOT_BLOWN = 30,
  STATE_SHOPKEEPER_KILLED = 31,
  STATE_ULTRAPRIDE_SPAWNED = 32,
  STATE_BOSSRUSH_DONE = 33,
  STATE_GREED_SLOT_JAMMED = 34,
  STATE_AFTERBIRTH_BOSS_SWITCHED = 35,
  STATE_BROWNIE_SELECTED = 36,
  STATE_SUPERBUM_APPEARED = 37,
  STATE_BOSSRUSH_DOOR_SPAWNED = 38,
  STATE_BLUEWOMB_DOOR_SPAWNED = 39,
  STATE_BLUEWOMB_DONE = 40,
  STATE_HEART_BOMB_COIN_PICKED = 41,
  STATE_ABPLUS_BOSS_SWITCHED = 42,
  STATE_SISTERS_VIS_SELECTED = 43,
  NUM_STATE_FLAGS = 44,
}

declare enum LevelStateFlag {
  STATE_BUM_KILLED = 0,
  STATE_EVIL_BUM_KILLED = 1,
  STATE_REDHEART_DAMAGED = 2,
  STATE_BUM_LEFT = 3,
  STATE_EVIL_BUM_LEFT = 4,
  STATE_DAMAGED = 5,
  STATE_SHOPKEEPER_KILLED_LVL = 6,
  STATE_COMPASS_EFFECT = 7,
  STATE_MAP_EFFECT = 8,
  STATE_BLUE_MAP_EFFECT = 9,
  STATE_FULL_MAP_EFFECT = 10,
  STATE_GREED_LOST_PENALTY = 11,
  STATE_GREED_MONSTRO_SPAWNED = 12,
  STATE_ITEM_DUNGEON_FOUND = 13,
  STATE_MAMA_MEGA_USED = 14,
  NUM_STATE_FLAGS = 15,
}

declare enum UseFlag {
  /** Don't play use animations. */
  USE_NOANIM = 1,
  /** Don't add costume. */
  USE_NOCOSTUME = 1 << 1,
  /** Effect was triggered by an active item owned by the player. */
  USE_OWNED = 1 << 2,
  /** Allow the effect to trigger on non-main players (i.e. coop babies). */
  USE_ALLOWNONMAIN = 1 << 3,
  /** D4 only: Reroll the player's active item. */
  USE_REMOVEACTIVE = 1 << 4,
  /** Effect was triggered a second time by Car Battery (or Tarot Cloth for cards). */
  USE_CARBATTERY = 1 << 5,
  /** Effect was triggered by Void. */
  USE_VOID = 1 << 6,
  /** Effect was mimicked by an active item (Blank Card, Placebo). */
  USE_MIMIC = 1 << 7,
  /** Never play announcer voice. */
  USE_NOANNOUNCER = 1 << 8,
  /**
   * This allows an item to spawn wisps when called from another item usage as the wisps generator
   * checks for NOANIM, so usually you want to use this with NOANIM call.
   */
  USE_ALLOWWISPSPAWN = 1 << 9,
  /**
   * If set, forces UseActiveItem to use the CustomVarData argument instead of the active item's
   * stored VarData.
   */
  USE_CUSTOMVARDATA = 1 << 10,
}
