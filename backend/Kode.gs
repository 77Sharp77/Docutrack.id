/**********************************************************************
 * DOCUTRACK.ID
 * Enterprise Document Management System
 * ---------------------------------------------------------------
 * Version    : 0.1.0
 * Environment: Google Apps Script Web App
 * Database   : Google Spreadsheet
 * Storage    : Google Drive
 * Frontend   : Blogger (HTML + Twind + Fetch API)
 *
 * Copyright © 2026
 **********************************************************************/

// ======================================================
// CONFIGURATION
// ======================================================

const CONFIG = Object.freeze({

  APP_NAME: 'Docutrack.id',

  VERSION: '0.1.0',

  TIMEZONE: 'Asia/Jakarta',

  DATE_FORMAT: "yyyy-MM-dd'T'HH:mm:ss'Z'",

  CACHE_PREFIX: 'DOCUTRACK_',

  CACHE_TTL: 600,

  SESSION_TIMEOUT: 30, // menit

  MAX_PAGE_SIZE: 100,

  DEFAULT_PAGE_SIZE: 10,

  MAX_UPLOAD_MB: 10,

  PASSWORD_MIN_LENGTH: 8,

  LOGIN_MAX_ATTEMPT: 5,

  LOGIN_BLOCK_MINUTE: 15,

  TOKEN_LENGTH: 64,

  ENABLE_AUDIT: true,

  ENABLE_CACHE: true,

  ENABLE_SOFT_DELETE: true,

  ENABLE_EMAIL: true,

  ENABLE_CONCURRENT_LOGIN: false,

  ENABLE_DEBUG: false

});

// ======================================================
// SCRIPT PROPERTIES
// ======================================================

const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();

// Spreadsheet ID disimpan di Script Properties
const SPREADSHEET_ID =
  SCRIPT_PROPERTIES.getProperty('SPREADSHEET_ID');

// Folder upload Google Drive
const DRIVE_FOLDER_ID =
  SCRIPT_PROPERTIES.getProperty('DRIVE_FOLDER_ID') || '';

// SMTP
const SMTP_HOST =
  SCRIPT_PROPERTIES.getProperty('SMTP_HOST') || '';

const SMTP_PORT =
  SCRIPT_PROPERTIES.getProperty('SMTP_PORT') || '';

const SMTP_USERNAME =
  SCRIPT_PROPERTIES.getProperty('SMTP_USERNAME') || '';

const SMTP_PASSWORD =
  SCRIPT_PROPERTIES.getProperty('SMTP_PASSWORD') || '';

const SMTP_SENDER =
  SCRIPT_PROPERTIES.getProperty('SMTP_SENDER') || '';

// ======================================================
// SHEET NAMES
// ======================================================

const SHEETS = Object.freeze({

  USERS: 'Users',

  ROLES: 'Roles',

  SESSIONS: 'Sessions',

  LOGIN_LOGS: 'LoginLogs',

  EMPLOYEES: 'Employees',

  DIVISIONS: 'Divisions',

  BUSINESS_UNITS: 'BusinessUnits',

  LOGBOOKS: 'Logbooks',

  PURCHASE_REQUESTS: 'PurchaseRequests',

  PURCHASE_REQUEST_ITEMS: 'PurchaseRequestItems',

  PUM: 'PUM',

  KASBON: 'Kasbon',

  APPROVALS: 'Approvals',

  ATTACHMENTS: 'Attachments',

  AUDIT_TRAILS: 'AuditTrails',

  SETTINGS: 'Settings'

});

// ======================================================
// USER ROLE
// ======================================================

const ROLE = Object.freeze({

  SUPER_ADMIN: 'SUPER_ADMIN',

  ADMIN: 'ADMIN',

  DIRECTOR: 'DIRECTOR',

  MANAGER: 'MANAGER',

  SUPERVISOR: 'SUPERVISOR',

  STAFF: 'STAFF',

  FINANCE: 'FINANCE',

  PROCUREMENT: 'PROCUREMENT',

  VIEWER: 'VIEWER'

});

// ======================================================
// STATUS
// ======================================================

const STATUS = Object.freeze({

  ACTIVE: 'ACTIVE',

  INACTIVE: 'INACTIVE',

  DISABLED: 'DISABLED',

  DRAFT: 'DRAFT',

  PENDING: 'PENDING',

  REVIEW: 'REVIEW',

  APPROVED: 'APPROVED',

  REJECTED: 'REJECTED',

  REVISED: 'REVISED',

  CANCELLED: 'CANCELLED',

  FINISHED: 'FINISHED',

  PAID: 'PAID'

});

// ======================================================
// CACHE KEY
// ======================================================

const CACHE_KEY = Object.freeze({

  DASHBOARD: 'dashboard',

  SETTINGS: 'settings',

  ROLE: 'roles',

  DIVISION: 'division',

  BUSINESS_UNIT: 'business_unit',

  USER: 'user'

});

// ======================================================
// ALLOWED SORT COLUMN
// ======================================================

const SORTABLE_COLUMNS = Object.freeze({

  users: [
    'created_at',
    'updated_at',
    'name',
    'username',
    'email',
    'status'
  ],

  logbooks: [
    'created_at',
    'document_number',
    'status'
  ],

  purchaseRequests: [
    'created_at',
    'pr_number',
    'status'
  ],

  pum: [
    'created_at',
    'status'
  ],

  kasbon: [
    'created_at',
    'status'
  ]

});

// ======================================================
// MIME TYPE
// ======================================================

const MIME = Object.freeze({

  PDF: MimeType.PDF,

  XLSX:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

  XLS:
    'application/vnd.ms-excel',

  PNG: MimeType.PNG,

  JPG: MimeType.JPEG

});

// ======================================================
// GLOBAL CACHE
// ======================================================

const SCRIPT_CACHE = CacheService.getScriptCache();

const USER_CACHE = CacheService.getUserCache();

// ======================================================
// LOCK SERVICE
// ======================================================

const SCRIPT_LOCK = LockService.getScriptLock();

// ======================================================
// END CONFIGURATION
// ======================================================
