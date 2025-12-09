# Project Zomboid Discord Bot - Development Plan & Status

**Date:** December 9, 2025
**Status:** Active Development - Paused

## 1. Project Overview
A Discord bot for a Project Zomboid server using:
*   **Framework:** Sapphire (`@sapphire/framework`)
*   **Language:** TypeScript
*   **Database:** PostgreSQL (Supabase) via Prisma ORM (`prisma-client-js` with `@prisma/adapter-pg`)
*   **APIs:** GameDig (Server Status), Steam Web API (Workshop)

## 2. Completed Features

### ✅ Server Status
*   **Command:** `/setserver ip:<ip> port:<port>`
*   **Function:** Updates bot activity status (e.g., "Playing PZ: 12/32 Players").
*   **Announcer:** Posts online/offline embeds to a configured channel.
*   **Implementation:** `src/scheduled-tasks/updateStatus.ts` (1-minute interval).

### ✅ Steam Workshop Monitor
*   **Command:** `/workshop`
    *   `add workshop_ids:<id;id>`: Adds mods to watchlist.
    *   `remove workshop_ids:<id>` / `all:true`: Removes mods.
    *   `list`: Lists monitored mods (paginated).
    *   `setchannel channel:<#channel>`: Sets notification channel.
*   **Function:** Checks Steam Workshop every 1 minute for updates.
*   **Notification:** Sends an embed to the configured channel when a mod updates.
*   **Implementation:** `src/scheduled-tasks/checkWorkshop.ts`, `src/commands/admin/workshop.ts`.

## 3. Pending Features (To-Do List)

### ⏳ Modern Ticket System (Next Priority)
**Goal:** customizable ticket panels, categories, and transcripts.
**Plan:**
1.  **Commands:**
    *   `/ticket setup`: Configure welcome message.
    *   `/ticket panel`: Send the panel to a channel.
2.  **Interaction Handlers:**
    *   `ticket-create-button`: Logic to create a private channel/thread.
    *   `ticket-close-button`: Logic to close/archive the ticket.
3.  **Transcripts:** Generate a log file upon closure.

### ⏳ Custom Embed Builder
**Goal:** Interactive embed creator.
**Plan:**
1.  **Command:** `/embed builder`.
2.  **UI:** Use Discord Modals and Select Menus to interactively edit Title, Description, Color, Fields.
3.  **Storage:** Save presets to `CustomEmbed` table.

### ⏳ RAG AI (Retrieval Augmented Generation)
**Goal:** AI bot that answers questions based on server knowledge.
**Plan:**
1.  **Knowledge Base:** Store Q&A pairs in `KnowledgeSnippet` table.
2.  **Command:** `/ask <question>`.
3.  **Logic:** Search DB for relevant context -> Send prompt to OpenAI -> Reply.
4.  **Contribution:** `/learn suggest` for users to add knowledge.

## 4. Architecture & Notes
*   **Database:** Schema defined in `prisma/schema.prisma`.
*   **Environment:** Credentials in `.env` (ignored by git).
*   **Formatting:** Code formatting issues in `workshop.ts` have been resolved.
*   **Pagination:** `workshop.ts` uses `@sapphire/discord.js-utilities` `PaginatedMessage`.

## 5. Next Session Start Point
1.  Resume with **Modern Ticket System**.
2.  Create `src/commands/admin/ticket.ts` (Re-create, as previous attempt was cancelled).
3.  Implement `src/interaction-handlers/ticketCreate.ts`.
