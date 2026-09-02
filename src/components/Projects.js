import React from 'react';
import './Project.css';

const apps = [
  {
    name: 'rndSites',
    link: 'https://rndsites.com',
    period: 'August 2025 — Present',
    bullets: [
      'Founded rndSites on primary research (0 -> 1) — conducted pre-launch interviews with small business owners across 6 Indian cities to validate the positioning before writing a line of code',
      'Built a multi-channel acquisition engine from zero network — cold outbound (Apollo, Instantly, Clay, Fiverr, Upwork), LinkedIn content, and Instagram — to generate consistent inbound pipeline',
      'Positioned rndSites against the two existing options — slow, expensive agencies and freelancers with less accountability — by combining strategist-level thinking with agency-level delivery',
      'Running 14 active client projects and 5 in ongoing maintenance, with ~7 new clients acquired per month',
    ],
    
  },
  {
    name: 'Dormancy Reactivation Feature',
    link: 'https://drive.google.com/file/d/1-u5nBcJjw5G7PV0q7BW7g7RxnUPzIjyb/view?usp=sharing',
    period: 'Swastika Investmart, 2023–2025',
    bullets: [
      '18,000 dormant users reactivated (~27% from segment 1) via self-serve DIY flow',
      'Cut manual RM intervention by 64% by redesigning the reactivation strategy around intent-based segmentation (DIY → notifications → RM calling) instead of routing 100% of the backlog through calling.'
    ],
  },
  {
    name: 'Mutual Fund Screen Redesign',
    link: 'https://drive.google.com/file/d/1jQo_CRCc82Rp2Br0gcPy_jdDDXH394zX/view?usp=sharing',
    period: 'Swastika Investmart, 2023–2025',
    bullets: [
      '23% relative lift in click-to-invest conversion (37%→45.5%, n=10,000, p<0.0001)',
      'Validated with A/A test, customer calling and 4-way cohort balance check before trusting the A/B result — shows statistical rigor.'
    ],
  },
  {
    name: 'B2B SaaS & SME Websites',
    link: null,
    period: 'GO MO Group, 2021–2023',
    bullets: [
      'Delivered 20+ B2B SaaS and SME websites end-to-end, 0 to 1',
      'Owned end-to-end client relationships as primary point of contact — from requirement discovery through delivery and post-launch iteration — driving account retention through consistent CSAT and repeat scope expansion'
    ],
  },
]
function AppEntry({ app }) {
  return (
    <div className="app-entry">
      <div className="app-name-row">
        {app.link ? (
          <a href={app.link} className="app-name" target="_blank" rel="noreferrer">
            {app.name}
          </a>
        ) : (
          <span className="app-name">{app.name}</span>
        )}
        <span className="app-period">{app.period}</span>
      </div>
      <ul>
        {app.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
function Projects() {
  return (
    <div className="portfolio">
      <h1>Apps</h1>
      <p className="subheading">
        On this page, I'll list all the products and features I've made.
      </p>
      {apps.map((app) => (
        <AppEntry app={app} key={app.name} />
      ))}
    </div>
  );
}

export default Projects;