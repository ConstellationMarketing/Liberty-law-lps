import { detectAttribution, validateAttribution, type AttributionData } from './attribution';

export interface TrackingData extends AttributionData {
  firstUtmSource: string;
  firstUtmMedium: string;
  firstUtmCampaign: string;
  firstUtmTerm: string;
  firstUtmContent: string;
  firstReferrer: string;
  firstLandingPage: string;
  firstVisitTimestamp: string;
  currentPageUrl: string;
  landingPage: string;
  userAgent: string;
  timestamp: string;
  sessionId: string;
  deviceType: string;
  browser: string;
  os: string;
  screenResolution: string;
  pagesVisited: number;
  timeOnPage: number;
  isReturningVisitor: boolean;
  sessionCount: number;
}

const FIRST_TOUCH_KEY = 'first_touch_attribution';
const SESSION_ID_KEY = 'session_id';
const SESSION_COUNT_KEY = 'session_count';
const PAGE_LOAD_TIME_KEY = 'page_load_time';

export function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

export function detectDeviceType(): string {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) {
    return 'tablet';
  }
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

export function getBrowserInfo(): string {
  const ua = navigator.userAgent;
  if (ua.indexOf('Edg') > -1) return 'Edge';
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('Safari') > -1) return 'Safari';
  if (ua.indexOf('Opera') > -1) return 'Opera';
  if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) return 'Internet Explorer';
  return 'Unknown';
}

export function getOSInfo(): string {
  const ua = navigator.userAgent;
  if (ua.indexOf('Windows NT 10.0') > -1) return 'Windows 10';
  if (ua.indexOf('Windows NT 6.3') > -1) return 'Windows 8.1';
  if (ua.indexOf('Windows NT 6.2') > -1) return 'Windows 8';
  if (ua.indexOf('Windows NT 6.1') > -1) return 'Windows 7';
  if (ua.indexOf('Windows') > -1) return 'Windows';
  if (ua.indexOf('Mac OS X') > -1) return 'macOS';
  if (ua.indexOf('Linux') > -1) return 'Linux';
  if (ua.indexOf('Android') > -1) return 'Android';
  if (ua.indexOf('iOS') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) return 'iOS';
  return 'Unknown';
}

export function initializeFirstTouchTracking(): void {
  const existingFirstTouch = sessionStorage.getItem(FIRST_TOUCH_KEY);

  if (!existingFirstTouch) {
    const attribution = detectAttribution();

    if (!validateAttribution(attribution)) {
      console.warn('Invalid attribution detected, using safe defaults');
      attribution.source = 'direct';
      attribution.medium = 'none';
    }

    const firstTouchData = {
      firstUtmSource: attribution.source,
      firstUtmMedium: attribution.medium,
      firstUtmCampaign: attribution.campaign,
      firstUtmTerm: attribution.term,
      firstUtmContent: attribution.content,
      firstReferrer: attribution.referrer,
      firstLandingPage: window.location.href,
      firstVisitTimestamp: new Date().toISOString(),
      firstGclid: attribution.gclid,
      firstFbclid: attribution.fbclid,
      firstMsclkid: attribution.msclkid,
      firstReferrerDomain: attribution.referrerDomain,
      firstSearchEngine: attribution.searchEngine,
      firstSocialPlatform: attribution.socialPlatform,
      firstTrafficSourceCategory: attribution.trafficSourceCategory
    };

    sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(firstTouchData));

    console.log('✅ First-touch attribution captured:', firstTouchData);
  }

  if (!sessionStorage.getItem(SESSION_ID_KEY)) {
    sessionStorage.setItem(SESSION_ID_KEY, generateSessionId());
  }

  if (!sessionStorage.getItem(PAGE_LOAD_TIME_KEY)) {
    sessionStorage.setItem(PAGE_LOAD_TIME_KEY, Date.now().toString());
  }

  const currentCount = parseInt(sessionStorage.getItem(SESSION_COUNT_KEY) || '0', 10);
  sessionStorage.setItem(SESSION_COUNT_KEY, (currentCount + 1).toString());
}

export function getFirstTouchData(): Partial<TrackingData> {
  const firstTouchJson = sessionStorage.getItem(FIRST_TOUCH_KEY);

  if (firstTouchJson) {
    try {
      return JSON.parse(firstTouchJson);
    } catch (error) {
      console.error('Error parsing first-touch data:', error);
    }
  }

  return {
    firstUtmSource: '',
    firstUtmMedium: '',
    firstUtmCampaign: '',
    firstUtmTerm: '',
    firstUtmContent: '',
    firstReferrer: '',
    firstLandingPage: '',
    firstVisitTimestamp: ''
  };
}

export function getCurrentTrackingData(): TrackingData {
  const attribution = detectAttribution();

  if (!validateAttribution(attribution)) {
    console.warn('Invalid current attribution, using safe defaults');
    attribution.source = 'direct';
    attribution.medium = 'none';
  }

  const firstTouchData = getFirstTouchData();
  const pageLoadTime = parseInt(sessionStorage.getItem(PAGE_LOAD_TIME_KEY) || Date.now().toString(), 10);
  const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
  const sessionCount = parseInt(sessionStorage.getItem(SESSION_COUNT_KEY) || '1', 10);

  const trackingData: TrackingData = {
    ...attribution,
    firstUtmSource: firstTouchData.firstUtmSource || '',
    firstUtmMedium: firstTouchData.firstUtmMedium || '',
    firstUtmCampaign: firstTouchData.firstUtmCampaign || '',
    firstUtmTerm: firstTouchData.firstUtmTerm || '',
    firstUtmContent: firstTouchData.firstUtmContent || '',
    firstReferrer: firstTouchData.firstReferrer || '',
    firstLandingPage: firstTouchData.firstLandingPage || '',
    firstVisitTimestamp: firstTouchData.firstVisitTimestamp || '',
    currentPageUrl: window.location.href,
    landingPage: firstTouchData.firstLandingPage || window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    sessionId: sessionStorage.getItem(SESSION_ID_KEY) || generateSessionId(),
    deviceType: detectDeviceType(),
    browser: getBrowserInfo(),
    os: getOSInfo(),
    screenResolution: `${screen.width}x${screen.height}`,
    pagesVisited: sessionCount,
    timeOnPage,
    isReturningVisitor: sessionCount > 1,
    sessionCount
  };

  console.log('📊 Current tracking data:', {
    source: trackingData.source,
    medium: trackingData.medium,
    campaign: trackingData.campaign,
    trafficSourceCategory: trackingData.trafficSourceCategory,
    isPaidTraffic: trackingData.isPaidTraffic,
    isReturningVisitor: trackingData.isReturningVisitor,
    sessionCount: trackingData.sessionCount
  });

  return trackingData;
}

export function logTrackingDebug(): void {
  const urlParams = new URLSearchParams(window.location.search);
  const debugMode = urlParams.get('debug') === 'true' || urlParams.get('tracking_debug') === 'true';

  if (debugMode) {
    const trackingData = getCurrentTrackingData();
    console.group('🔍 Tracking Debug Information');
    console.log('Attribution Method:', trackingData.trafficSourceCategory);
    console.log('Source:', trackingData.source);
    console.log('Medium:', trackingData.medium);
    console.log('Campaign:', trackingData.campaign || '(none)');
    console.log('Referrer:', trackingData.referrer || '(none)');
    console.log('Referrer Domain:', trackingData.referrerDomain || '(none)');
    console.log('Search Engine:', trackingData.searchEngine || '(none)');
    console.log('Social Platform:', trackingData.socialPlatform || '(none)');
    console.log('Is Paid Traffic:', trackingData.isPaidTraffic);
    console.log('Device Type:', trackingData.deviceType);
    console.log('Browser:', trackingData.browser);
    console.log('OS:', trackingData.os);
    console.log('First-Touch Source:', trackingData.firstUtmSource);
    console.log('First-Touch Medium:', trackingData.firstUtmMedium);
    console.log('Session Count:', trackingData.sessionCount);
    console.log('Time on Page:', trackingData.timeOnPage + 's');
    console.groupEnd();
  }
}
