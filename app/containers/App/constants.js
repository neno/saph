/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const TOGGLE_NAV = 'TOGGLE_NAV';

export const ACTIVATE_NAV_ITEM = 'ACTIVATE_NAV_ITEM';
export const ACTIVATE_SUB_NAV_ITEM = 'ACTIVATE_SUB_NAV_ITEM';

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
