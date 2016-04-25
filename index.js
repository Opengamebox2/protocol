export default {
  /** Events that the server usually broadcasts to all clients. */
  events: {
    PLAYER_JOIN: 'PLAYER_JOIN',
    PLAYER_LEAVE: 'PLAYER_LEAVE',
    ENTITY_CREATE: 'ENTITY_CREATE',
    ENTITY_DELETE: 'ENTITY_DELETE',
    ENTITY_SELECT: 'ENTITY_SELECT',
    ENTITY_MOVE: 'ENTITY_MOVE',
  },

  /** Requests that may be sent to the server. */
  requests: {
    HANDSHAKE: 'HANDSHAKE',
    ENTITY_CREATE_REQUEST: 'ENTITY_CREATE_REQUEST',
    ENTITY_DELETE_REQUEST: 'ENTITY_DELETE_REQUEST',
    ENTITY_SELECT_REQUEST: 'ENTITY_SELECT_REQUEST',
    ENTITY_MOVE_REQUEST: 'ENTITY_MOVE_REQUEST',
  },

  /** Reply messages to requests. */
  replies: {
    HANDSHAKE_REPLY: 'HANDSHAKE_REPLY',
  },
}
