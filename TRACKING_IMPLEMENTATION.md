# Analytics Tracking Implementation Guide

## Overview

This document outlines the comprehensive analytics tracking system implemented for Constellation Law, including proper attribution logic, first-touch tracking, organic search detection, social media referrer analysis, and Basin/WhatConverts integration.

## What Was Implemented

### 1. Core Attribution Logic (`src/lib/attribution.ts`)

**Proper Source/Medium Detection:**
- ✅ Fixed illogical fallback values - direct traffic is now correctly tagged as "direct/none" instead of empty or "organic"
- ✅ Implemented priority-based attribution hierarchy:
  1. UTM parameters (highest priority)
  2. Paid ad click IDs (gclid, fbclid, msclkid)
  3. Referrer-based detection
  4. Direct fallback (when nothing else exists)
- ✅ Added validation to prevent illogical combinations like "direct/organic" or "direct/referral"

**Organic Search Engine Detection:**
- ✅ Comprehensive search engine detection for 50+ Google domains, Bing, Yahoo, DuckDuckGo, Baidu, Yandex, AOL, Ask, Ecosia, Qwant, and Startpage
- ✅ Automatic "organic" medium assignment when search engine is detected in referrer
- ✅ Search keyword extraction from referrer query parameters when available
- ✅ Source automatically set to search engine name (e.g., "google", "bing")

**Social Media Detection:**
- ✅ Platform detection for Facebook, Instagram, Twitter/X, LinkedIn, TikTok, Pinterest, Reddit, YouTube, Snapchat, WhatsApp, Telegram, Tumblr, VK, Discord
- ✅ Automatic "social" medium assignment for social referrers
- ✅ Source set to platform name (e.g., "facebook", "linkedin")

**Enhanced Referrer Analysis:**
- ✅ Email client detection (Gmail, Outlook, Yahoo Mail, AOL, ProtonMail)
- ✅ Referrer domain extraction and categorization
- ✅ Internal referrer filtering (localhost, same domain)
- ✅ Malformed URL error handling
- ✅ General referral traffic tagged as "referral" medium with source as domain name

### 2. First-Touch Attribution System (`src/lib/tracking.ts`)

**Session Storage Implementation:**
- ✅ Captures and stores first-touch attribution data on initial page load
- ✅ Persists across page navigation within the same session
- ✅ Stores: first UTM parameters, first referrer, first landing page, first visit timestamp
- ✅ Distinguishes between first-touch data and current session data
- ✅ Session ID generation and tracking
- ✅ Session count tracking for returning visitor identification
- ✅ Page visit counting within session

**Technical Tracking:**
- ✅ Device type detection (mobile, tablet, desktop)
- ✅ Browser detection (Chrome, Firefox, Safari, Edge, Opera, IE)
- ✅ Operating system detection (Windows, macOS, Linux, Android, iOS)
- ✅ Screen resolution capture
- ✅ User agent string capture
- ✅ Time on page calculation
- ✅ Current page URL and landing page tracking

### 3. Basin Form Integration (`src/screens/Frame/sections/FooterSection/FooterSection.tsx`)

**Comprehensive Hidden Fields:**
- ✅ Current UTM parameters (source, medium, campaign, term, content)
- ✅ Paid ad click IDs (gclid, fbclid, msclkid)
- ✅ First-touch attribution (first_utm_source, first_utm_medium, etc.)
- ✅ Referrer information (referrer, referrer_domain, search_engine, social_platform)
- ✅ Traffic classification (traffic_source_category, is_paid_traffic, is_returning_visitor)
- ✅ WhatConverts compatible fields (lead_source, lead_medium, lead_campaign, lead_keyword, lead_content, landing_url)
- ✅ Session information (session_id, session_count, pages_visited, time_on_page)
- ✅ Technical information (device_type, browser, os, screen_resolution, user_agent, timestamp)

**Form ID Assignment:**
- ✅ Added `id="contact-form"` to the form element for JavaScript integration

### 4. Enhanced Tracking Script (`index.html`)

**Modern Module-Based Implementation:**
- ✅ Imports attribution and tracking utilities as ES modules
- ✅ Initializes first-touch tracking on page load
- ✅ Populates all form fields automatically with tracking data
- ✅ Maps tracking data to both standard and WhatConverts field names
- ✅ Re-populates fields on form focus to ensure data freshness
- ✅ Validates attribution data before form submission
- ✅ Prevents form submission if illogical combinations detected
- ✅ Comprehensive console logging for debugging

**Debug Mode:**
- ✅ Add `?debug=true` or `?tracking_debug=true` to URL to enable verbose logging
- ✅ Shows attribution method, source, medium, referrer details, and more

## Attribution Logic Flow

### Priority Hierarchy

1. **UTM Parameters Present** → Use UTM source/medium/campaign
   - If medium is "cpc", "ppc", or "paid" → Mark as paid traffic

2. **Google Click ID (gclid) Present** → Source: "google", Medium: "cpc"
   - Category: "paid_search"

3. **Facebook Click ID (fbclid) Present** → Source: "facebook", Medium: "cpc"
   - Category: "paid_social"

4. **Bing Click ID (msclkid) Present** → Source: "bing", Medium: "cpc"
   - Category: "paid_search"

5. **Referrer Exists (Not Internal)**:
   - **Search Engine Detected** → Source: engine name, Medium: "organic"
     - Category: "organic_search"
   - **Social Platform Detected** → Source: platform name, Medium: "social"
     - Category: "social"
   - **Email Client Detected** → Source: domain, Medium: "email"
     - Category: "email"
   - **Other Referrer** → Source: domain, Medium: "referral"
     - Category: "referral"

6. **No UTM, No Click IDs, No Referrer** → Source: "direct", Medium: "none"
   - Category: "direct"

### Illogical Combinations Prevented

The system actively prevents these combinations:
- ❌ direct/organic
- ❌ direct/referral
- ❌ direct/social
- ❌ direct/cpc
- ❌ empty source with any medium

## Testing Scenarios

### 1. Direct Traffic
**URL:** `https://yoursite.com`
**Expected Result:**
- Source: "direct"
- Medium: "none"
- Category: "direct"

### 2. Organic Search - Google
**Referrer:** `https://www.google.com/search?q=criminal+defense+lawyer`
**Expected Result:**
- Source: "google"
- Medium: "organic"
- Category: "organic_search"
- Search Engine: "google"

### 3. Organic Search - Bing
**Referrer:** `https://www.bing.com/search?q=lawyer`
**Expected Result:**
- Source: "bing"
- Medium: "organic"
- Category: "organic_search"

### 4. Social Media - Facebook
**Referrer:** `https://www.facebook.com/`
**Expected Result:**
- Source: "facebook"
- Medium: "social"
- Category: "social"
- Social Platform: "facebook"

### 5. Social Media - LinkedIn
**Referrer:** `https://www.linkedin.com/feed/`
**Expected Result:**
- Source: "linkedin"
- Medium: "social"
- Category: "social"
- Social Platform: "linkedin"

### 6. Paid Search - Google Ads
**URL:** `https://yoursite.com?gclid=123abc`
**Expected Result:**
- Source: "google"
- Medium: "cpc"
- Category: "paid_search"
- Is Paid Traffic: true

### 7. Paid Social - Facebook Ads
**URL:** `https://yoursite.com?fbclid=456def`
**Expected Result:**
- Source: "facebook"
- Medium: "cpc"
- Category: "paid_social"
- Is Paid Traffic: true

### 8. UTM Campaign
**URL:** `https://yoursite.com?utm_source=newsletter&utm_medium=email&utm_campaign=monthly`
**Expected Result:**
- Source: "newsletter"
- Medium: "email"
- Campaign: "monthly"
- Category: "utm"

### 9. Referral Traffic
**Referrer:** `https://example.com/article`
**Expected Result:**
- Source: "example.com"
- Medium: "referral"
- Category: "referral"
- Referrer Domain: "example.com"

### 10. First-Touch vs Current Session
**Scenario:** User arrives from Google search, browses site, then arrives again via Facebook
**Expected Result:**
- First-Touch: Source: "google", Medium: "organic"
- Current: Source: "facebook", Medium: "social"
- Both captured in form submission

## Debug Mode Usage

Add `?debug=true` to any URL to see detailed tracking information in the browser console:

```
https://yoursite.com?debug=true
```

This will display:
- Attribution Method
- Source, Medium, Campaign
- Referrer information
- Search engine and social platform detected
- Device, browser, OS information
- First-touch data
- Session count and time on page

## Form Field Mapping

### Standard Fields
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `gclid`, `fbclid`, `msclkid`

### First-Touch Fields
- `first_utm_source`, `first_utm_medium`, `first_utm_campaign`
- `first_utm_term`, `first_utm_content`
- `first_referrer`, `first_landing_page`, `first_visit_timestamp`

### Referrer Analysis Fields
- `referrer`, `referrer_domain`, `search_engine`, `social_platform`

### Traffic Classification
- `traffic_source_category` (direct, organic_search, social, paid_search, paid_social, email, referral, utm)
- `is_paid_traffic` (true/false)
- `is_returning_visitor` (true/false)

### WhatConverts Compatible Fields
- `lead_source`, `lead_medium`, `lead_campaign`, `lead_keyword`, `lead_content`
- `landing_url`

### Session Information
- `session_id`, `session_count`, `pages_visited`, `time_on_page`
- `landing_page`, `current_page_url`

### Technical Information
- `device_type`, `browser`, `os`, `screen_resolution`
- `user_agent`, `timestamp`

## Console Logging

The system provides helpful console messages:

- ✅ **"First-touch attribution captured"** - When first visit is recorded
- 📊 **"Current tracking data"** - Shows current session attribution
- ✅ **"Form fields populated with tracking data"** - When form is ready
- ✅ **"Form validation passed"** - When form submission is allowed
- ❌ **"Form validation failed: Illogical attribution combination detected"** - When invalid data is prevented

## WhatConverts Integration

All Basin form submissions include WhatConverts-compatible fields:

- `lead_source` - Maps to detected source
- `lead_medium` - Maps to detected medium
- `lead_campaign` - Maps to UTM campaign
- `lead_keyword` - Maps to UTM term or search keyword
- `lead_content` - Maps to UTM content
- `landing_url` - First page visited

When you set up WhatConverts, you can map these fields directly to their lead tracking system.

## Future Enhancements

Potential additions:
- Server-side IP address capture
- Geographic location detection
- A/B test variant tracking
- Custom event tracking
- Conversion funnel analysis
- Multi-touch attribution modeling

## Support

For issues or questions about the tracking system:
1. Check browser console for error messages
2. Use debug mode (`?debug=true`) to see detailed tracking data
3. Verify form field IDs match the mapping in `index.html`
4. Ensure Basin form action URL is updated with correct form ID
