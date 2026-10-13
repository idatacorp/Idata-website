// Single source of truth for values that appear on more than one page.

export const FOUNDED = '1998';
export const AWS_SINCE = '2007';

export const DATRIS_URL = 'https://datris.ai';
export const DATRIS_DOCS_URL = 'https://docs.datris.ai';
export const DATRIS_GITHUB_URL = 'https://github.com/datris/datris-platform-oss';
export const DATRIS_LICENSING_URL = 'https://datris.ai/licensing/';

/** Number of MCP tools in the shipping Datris build. Keep in step with datris.ai. */
export const MCP_TOOL_COUNT = '70+';

/** Financial institutions IData has delivered for. Order is display order. */
export const CLIENTS = [
  'UBS',
  'Goldman Sachs',
  'Credit Suisse',
  'Bank of America',
  'Deutsche Bank',
  'CPP Investment Board',
  'Freddie Mac',
];

/** The three packaged offers. Used by Home, Services, and Contact. */
export const OFFERS = [
  {
    id: 'assessment',
    name: 'Agent Data Assessment',
    stage: 'Assess',
    shape: 'Fixed fee · 2–3 weeks',
    summary:
      'We pick one agent workflow with you, confirm data rights and access, baseline the manual effort it replaces, and define what "done" means.',
    deliverables: [
      'One workflow selected and scoped',
      'Data rights and access confirmed with your security team',
      'Current manual effort baselined',
      'Acceptance criteria',
      'Architecture and access-policy design',
      'Fixed-scope implementation proposal',
    ],
    keep: 'The design, the acceptance criteria, and a proposal you can take to anyone.',
  },
  {
    id: 'integration',
    name: 'Agent Data Integration',
    stage: 'Implement',
    shape: 'Fixed scope · 6–10 weeks',
    summary:
      'We connect the agreed sources to your agent through Datris, inside your infrastructure, with validation, access policy, audit, and lineage switched on from day one.',
    deliverables: [
      'Sources connected through Datris taps',
      'Validation rules on every feed',
      'Access policy for what the agent may read and do',
      'Audit log and lineage for every run',
      'Monitoring and a runbook',
      'Documented handover and passed acceptance test',
    ],
    keep: 'Everything. Open-source platform, your deployment, your credentials, your code.',
  },
  {
    id: 'run-with-you',
    name: 'Run With You',
    stage: 'Operate',
    shape: 'Recurring · in your infrastructure',
    summary:
      'We stay accountable for the integrations we built. Source changes, failures, upgrades, and expansion, handled inside your perimeter under your access controls.',
    deliverables: [
      'Source-change and schema-drift handling',
      'Failure response against agreed targets',
      'Platform upgrades and security advisories',
      'Quarterly review of freshness, quality, and usage',
      'Expansion backlog for the next workflows',
    ],
    keep: 'All access and credentials. We work within your controls; nothing leaves your environment.',
  },
];
