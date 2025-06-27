// WorkTech API Configuration
export const WORKTECH_API_BASE_URL = process.env.NEXT_PUBLIC_WORKTECH_API_URL || 'http://91.211.249.37/test';
export const WORKTECH_API_VERSION = 'v1';
export const WORKTECH_API_PREFIX = 'work-task';

// API Endpoints Configuration
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH: '/auth/refresh',
    CONFIRM_EMAIL: '/auth/confirm-email',
  },
  // Registration endpoints
  REGISTRATION: {
    REGISTER: '/registration/registry',
  },
  // User endpoints
  USERS: {
    BASE: '/user',
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
    BLOCK: '/user/block',
    ACTIVATE: '/user/activate',
  },
  // Project endpoints
  PROJECTS: {
    BASE: '/projects',
    CREATE: '/projects/create-project',
    ALL_USER_PROJECTS: '/projects/all-user-project',
    ACTIVE_PROJECT: '/projects/active-project',
    START: '/projects/start-project',
    FINISH: '/projects/finish-project',
    ADD_USERS: '/projects/{projectId}/add-users',
    DELETE_USERS: '/projects/{projectId}/delete-users',
  },
  // Sprint endpoints
  SPRINTS: {
    CREATE: '/sprint/project/{projectId}/create',
    UPDATE: '/sprint/project/{projectId}/{sprintId}/update',
    ACTIVATE: '/sprint/project/{projectId}/{sprintId}/activate',
    FINISH: '/sprint/project/{projectId}/{sprintId}/finish',
    INFO: '/sprint/project/{projectId}/sprint-info',
  },
  // Task endpoints
  TASKS: {
    CREATE: '/task/create-task',
    UPDATE: '/task/update-task',
    UPDATE_STATUS: '/task/update-status',
    HISTORY: '/task/history/{taskId}/{projectId}',
    TASKS_IN_PROJECT: '/task/tasks-in-project',
    LINK_TASK: '/task/link-task',
    ALL_LINKS: '/task/all-links/{taskId}/{projectId}',
    CREATE_COMMENT: '/task/create-comment',
    UPDATE_COMMENT: '/task/update-comment',
    DELETE_COMMENT: '/task/delete-comment/{commentId}/{taskId}/{projectId}',
    ALL_COMMENTS: '/task/all-comments/{taskId}/{projectId}',
  },
  // Status endpoints
  STATUS: {
    LIST: '/status/project/{projectId}/statuses',
    CREATE: '/status/project/{projectId}/create-status',
    UPDATE: '/status/project/{projectId}/update-statuses',
  },
} as const;

// Build full API URL
export const buildApiUrl = (endpoint: string, params?: Record<string, string>): string => {
  let url = `${WORKTECH_API_BASE_URL}/${WORKTECH_API_PREFIX}/${WORKTECH_API_VERSION}${endpoint}`;
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, value);
    });
  }
  
  return url;
};
