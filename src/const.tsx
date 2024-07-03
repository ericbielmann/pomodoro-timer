// Defining an enum for state identifiers
export const enum STATE_IDS {
  Focus = 0,
  ShortBreak = 1,
  LongBreak = 2,
}

// Defining a type for state information
type StateInfo = {
  [key in STATE_IDS]: string;
};

// Defining a type for state durations in seconds
type StateSeconds = {
  [key in STATE_IDS]: number;
};

// State information mapping
export const STATE_INFO: StateInfo = {
  [STATE_IDS.Focus]: 'Focus',
  [STATE_IDS.ShortBreak]: 'Short Break',
  [STATE_IDS.LongBreak]: 'Long Break',
};

// State durations mapping
export const STATE_SECONDS: StateSeconds = {
  [STATE_IDS.Focus]: 25,
  [STATE_IDS.ShortBreak]: 20,
  [STATE_IDS.LongBreak]: 15,
};

// State flow array
export const STATE_FLOW: STATE_IDS[] = [
  STATE_IDS.Focus,
  STATE_IDS.ShortBreak,
  STATE_IDS.Focus,
  STATE_IDS.LongBreak,
  // Add more states as needed
];

// Focus > Short break > Focus > Long break > Focus
