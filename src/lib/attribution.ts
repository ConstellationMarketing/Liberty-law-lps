export interface AttributionData {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
  referrer: string;
  referrerDomain: string;
  searchEngine: string;
  socialPlatform: string;
  trafficSourceCategory: string;
  isPaidTraffic: boolean;
}

export interface SearchEngine {
  name: string;
  domains: string[];
  queryParam?: string;
}

export interface SocialPlatform {
  name: string;
  domains: string[];
}

const SEARCH_ENGINES: SearchEngine[] = [
  { name: 'google', domains: ['google.com', 'google.co.uk', 'google.ca', 'google.com.au', 'google.de', 'google.fr', 'google.co.in', 'google.co.jp', 'google.com.br', 'google.it', 'google.es', 'google.nl', 'google.com.mx', 'google.co.za', 'google.se', 'google.pl', 'google.com.tr', 'google.be', 'google.com.ar', 'google.ch', 'google.at', 'google.dk', 'google.fi', 'google.no', 'google.ie', 'google.co.nz', 'google.pt', 'google.com.sg', 'google.com.hk', 'google.co.th', 'google.com.ph', 'google.co.id', 'google.com.my', 'google.co.kr', 'google.com.tw', 'google.com.vn', 'google.ae', 'google.com.sa', 'google.com.eg', 'google.gr', 'google.co.il', 'google.cz', 'google.ro', 'google.hu', 'google.bg', 'google.hr', 'google.sk', 'google.si', 'google.lt', 'google.lv', 'google.ee', 'google.rs', 'google.com.ua', 'google.cl', 'google.com.co', 'google.com.pe', 'google.com.ve', 'google.com.ec', 'google.com.uy', 'google.com.py'], queryParam: 'q' },
  { name: 'bing', domains: ['bing.com'], queryParam: 'q' },
  { name: 'yahoo', domains: ['yahoo.com', 'search.yahoo.com', 'yahoo.co.uk', 'yahoo.co.jp', 'yahoo.fr', 'yahoo.de', 'yahoo.it', 'yahoo.es'], queryParam: 'p' },
  { name: 'duckduckgo', domains: ['duckduckgo.com'], queryParam: 'q' },
  { name: 'baidu', domains: ['baidu.com', 'www.baidu.com'], queryParam: 'wd' },
  { name: 'yandex', domains: ['yandex.com', 'yandex.ru'], queryParam: 'text' },
  { name: 'aol', domains: ['aol.com', 'search.aol.com'], queryParam: 'q' },
  { name: 'ask', domains: ['ask.com'], queryParam: 'q' },
  { name: 'ecosia', domains: ['ecosia.org'], queryParam: 'q' },
  { name: 'qwant', domains: ['qwant.com'], queryParam: 'q' },
  { name: 'startpage', domains: ['startpage.com'], queryParam: 'query' }
];

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { name: 'facebook', domains: ['facebook.com', 'fb.com', 'm.facebook.com', 'l.facebook.com', 'lm.facebook.com'] },
  { name: 'instagram', domains: ['instagram.com', 'l.instagram.com'] },
  { name: 'twitter', domains: ['twitter.com', 't.co', 'x.com'] },
  { name: 'linkedin', domains: ['linkedin.com', 'lnkd.in'] },
  { name: 'tiktok', domains: ['tiktok.com'] },
  { name: 'pinterest', domains: ['pinterest.com', 'pin.it'] },
  { name: 'reddit', domains: ['reddit.com'] },
  { name: 'youtube', domains: ['youtube.com', 'youtu.be', 'm.youtube.com'] },
  { name: 'snapchat', domains: ['snapchat.com', 't.snapchat.com'] },
  { name: 'whatsapp', domains: ['whatsapp.com', 'wa.me'] },
  { name: 'telegram', domains: ['telegram.org', 't.me'] },
  { name: 'tumblr', domains: ['tumblr.com', 't.umblr.com'] },
  { name: 'vk', domains: ['vk.com', 'vkontakte.ru'] },
  { name: 'discord', domains: ['discord.com', 'discord.gg'] }
];

const EMAIL_DOMAINS = ['mail.google.com', 'outlook.live.com', 'outlook.office.com', 'mail.yahoo.com', 'mail.aol.com', 'protonmail.com'];

export function getUrlParameter(name: string): string {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}

export function extractDomain(url: string): string {
  if (!url) return '';

  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace(/^www\./, '');
  } catch (error) {
    return '';
  }
}

export function detectSearchEngine(referrer: string): { name: string; keyword: string } | null {
  if (!referrer) return null;

  try {
    const referrerUrl = new URL(referrer);
    const domain = referrerUrl.hostname.replace(/^www\./, '');

    for (const engine of SEARCH_ENGINES) {
      if (engine.domains.some(d => domain.includes(d) || d.includes(domain))) {
        const keyword = engine.queryParam
          ? referrerUrl.searchParams.get(engine.queryParam) || ''
          : '';
        return { name: engine.name, keyword };
      }
    }
  } catch (error) {
    console.error('Error detecting search engine:', error);
  }

  return null;
}

export function detectSocialPlatform(referrer: string): string | null {
  if (!referrer) return null;

  try {
    const domain = extractDomain(referrer);

    for (const platform of SOCIAL_PLATFORMS) {
      if (platform.domains.some(d => domain.includes(d) || d.includes(domain))) {
        return platform.name;
      }
    }
  } catch (error) {
    console.error('Error detecting social platform:', error);
  }

  return null;
}

export function isEmailReferrer(referrer: string): boolean {
  if (!referrer) return false;

  try {
    const domain = extractDomain(referrer);
    return EMAIL_DOMAINS.some(emailDomain => domain.includes(emailDomain));
  } catch (error) {
    return false;
  }
}

export function isInternalReferrer(referrer: string): boolean {
  if (!referrer) return false;

  try {
    const referrerDomain = extractDomain(referrer);
    const currentDomain = extractDomain(window.location.href);

    return referrerDomain === currentDomain ||
           referrerDomain === 'localhost' ||
           referrerDomain === '127.0.0.1' ||
           referrerDomain.includes('localhost') ||
           referrerDomain === '';
  } catch (error) {
    return true;
  }
}

export function detectAttribution(referrer: string = document.referrer): AttributionData {
  let source = '';
  let medium = '';
  let campaign = '';
  let term = '';
  let content = '';
  let gclid = getUrlParameter('gclid');
  let fbclid = getUrlParameter('fbclid');
  let msclkid = getUrlParameter('msclkid');
  let referrerDomain = '';
  let searchEngine = '';
  let socialPlatform = '';
  let trafficSourceCategory = 'direct';
  let isPaidTraffic = false;

  const utmSource = getUrlParameter('utm_source');
  const utmMedium = getUrlParameter('utm_medium');
  const utmCampaign = getUrlParameter('utm_campaign');
  const utmTerm = getUrlParameter('utm_term');
  const utmContent = getUrlParameter('utm_content');

  if (utmSource || utmMedium || utmCampaign) {
    source = utmSource || 'unknown';
    medium = utmMedium || 'unknown';
    campaign = utmCampaign || '';
    term = utmTerm || '';
    content = utmContent || '';
    trafficSourceCategory = 'utm';

    if (medium === 'cpc' || medium === 'ppc' || medium === 'paid') {
      isPaidTraffic = true;
    }
  } else if (gclid) {
    source = 'google';
    medium = 'cpc';
    campaign = '';
    trafficSourceCategory = 'paid_search';
    isPaidTraffic = true;
  } else if (fbclid) {
    source = 'facebook';
    medium = 'cpc';
    campaign = '';
    trafficSourceCategory = 'paid_social';
    isPaidTraffic = true;
  } else if (msclkid) {
    source = 'bing';
    medium = 'cpc';
    campaign = '';
    trafficSourceCategory = 'paid_search';
    isPaidTraffic = true;
  } else if (referrer && !isInternalReferrer(referrer)) {
    referrerDomain = extractDomain(referrer);

    const searchEngineData = detectSearchEngine(referrer);
    if (searchEngineData) {
      source = searchEngineData.name;
      medium = 'organic';
      searchEngine = searchEngineData.name;
      term = searchEngineData.keyword;
      trafficSourceCategory = 'organic_search';
    } else {
      const socialPlatformName = detectSocialPlatform(referrer);
      if (socialPlatformName) {
        source = socialPlatformName;
        medium = 'social';
        socialPlatform = socialPlatformName;
        trafficSourceCategory = 'social';
      } else if (isEmailReferrer(referrer)) {
        source = referrerDomain || 'email';
        medium = 'email';
        trafficSourceCategory = 'email';
      } else {
        source = referrerDomain || 'referral';
        medium = 'referral';
        trafficSourceCategory = 'referral';
      }
    }
  } else {
    source = 'direct';
    medium = 'none';
    trafficSourceCategory = 'direct';
  }

  return {
    source,
    medium,
    campaign,
    term,
    content,
    gclid,
    fbclid,
    msclkid,
    referrer,
    referrerDomain,
    searchEngine,
    socialPlatform,
    trafficSourceCategory,
    isPaidTraffic
  };
}

export function validateAttribution(data: AttributionData): boolean {
  const illogicalCombinations = [
    { source: 'direct', medium: 'organic' },
    { source: 'direct', medium: 'referral' },
    { source: 'direct', medium: 'social' },
    { source: 'direct', medium: 'cpc' },
    { source: '', medium: 'organic' },
    { source: '', medium: 'referral' }
  ];

  for (const combo of illogicalCombinations) {
    if (data.source === combo.source && data.medium === combo.medium) {
      console.error('Illogical attribution combination detected:', combo);
      return false;
    }
  }

  if (!data.source && !data.medium) {
    console.error('Both source and medium are empty');
    return false;
  }

  return true;
}
