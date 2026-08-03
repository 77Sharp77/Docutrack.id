# PRD ERP Tanjung Lesung

## Executive Summary

**Nama Sistem:** ERP Tanjung Lesung

Tujuan sistem adalah mengelola proses internal PT Banten West Java
meliputi:

-   User Management
-   Document Logbook
-   Purchase Request
-   PUM
-   Kasbon
-   Dashboard
-   Approval Workflow
-   Audit Trail
-   Email Notification
-   Import/Export Excel
-   PDF Generator

------------------------------------------------------------------------

# Tech Stack

## Frontend

-   HTML5
-   CSS3
-   Bootstrap 5
-   Vanilla JavaScript ES2023

## Backend

-   Google Apps Script

## Database

-   Google Spreadsheet

## Storage

-   Google Drive

## Authentication

-   Session Token
-   SMTP Reset Password

------------------------------------------------------------------------

# Modul

## 1. Setting

-   Master Karyawan
-   Role
-   Divisi (dinamis)
-   Unit Bisnis (dinamis)
-   Enable/Disable akun
-   SMTP
-   Session
-   Concurrent Login
-   RBAC

## 2. Logbook Dokumen

-   Nomor otomatis:
    -   BWJ: `TDBWYYMMNNNNN`
    -   TLLI: `TDTLYYMMNNNNN`
-   Status: Pending, Approve, Revisi, Batal
-   Urgency: Normal, Rutinitas, PUM
-   Dashboard
-   Search, Filter
-   Audit Log

## 3. Purchase Request

-   Nomor PR 6 digit unik
-   Maksimum 1000 item
-   Dynamic Row
-   Import/Export Excel
-   Generate PDF
-   Workflow: Pending → Review → Approve → PUM/Non PUM → Selesai

## 4. PUM

-   Draft
-   Submitted
-   Approved
-   Paid
-   Realization
-   Finished
-   Reminder SMTP 10 hari

## 5. Kasbon

-   Pending
-   Approve
-   Need Realization
-   Completed
-   Monitoring saldo unit bisnis
-   Reminder overdue

------------------------------------------------------------------------

# Dashboard

Menampilkan KPI: - Total PR - Total PUM - Total Kasbon - Pending
Approval - Outstanding - Budget - Grafik Bulanan

------------------------------------------------------------------------

# Security

-   RBAC
-   Session Timeout 30 menit
-   Auto Logout
-   Audit Trail
-   Soft Delete
-   CSRF Protection
-   XSS Protection

------------------------------------------------------------------------

# Performance Target

-   Dashboard \< 2 detik
-   100 concurrent user
-   100.000 dokumen
-   Import 10.000 baris

------------------------------------------------------------------------

# Prompt AI Developer

``` text
Bertindaklah sebagai Principal Software Engineer, Enterprise Solution Architect, Senior Google Apps Script Developer, Senior UX Designer, dan Product Manager.

Bangun ERP Tanjung Lesung menggunakan:
- Google Apps Script
- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript
- Google Spreadsheet
- Google Drive

Fitur wajib:
- RBAC
- Dashboard interaktif
- Purchase Request
- PUM
- Kasbon
- Logbook
- SMTP
- Audit Trail
- Import/Export Excel
- PDF Generator
- Auto Logout
- Concurrent Login
- Reusable Component
- Clean Architecture
- Scalable Enterprise Structure

Semua modul harus mendukung:
Search, Filter, Sorting, Pagination, Import Excel, Export Excel, PDF, Audit Log, Soft Delete, Permission Middleware.

Gunakan kode yang modular, terdokumentasi, mudah dikembangkan, dan siap untuk penambahan modul Inventory, HRIS, Accounting, Procurement, Vendor, Asset Management, dan General Ledger.
```
