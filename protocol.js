/**
 * Protocol types
 */
export const types = {
	HANDSHAKE: 'HANDSHAKE',
	HANDSHAKE_REPLY: 'HANDSHAKE_REPLY',
	PLAYER_JOIN: 'PLAYER_JOIN',
	PLAYER_LEAVE: 'PLAYER_LEAVE',
	ENTITY_CREATE_REQUEST: 'ENTITY_CREATE_REQUEST',
	ENTITY_DELETE_REQUEST: 'ENTITY_DELETE_REQUEST',
	ENTITY_SELECT_REQUEST: 'ENTITY_SELECT_REQUEST',
	ENTITY_MOVE_REQUEST: 'ENTITY_MOVE_REQUEST',
	ENTITY_CREATE: 'ENTITY_CREATE',
	ENTITY_DELETE: 'ENTITY_DELETE',
	ENTITY_SELECT: 'ENTITY_SELECT',
	ENTITY_MOVE: 'ENTITY_MOVE',
};

/**
 * Protocol channels
 */
export const channels = {
	GAME: 'GAME',
};
