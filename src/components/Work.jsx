import React from 'react';
import WorkItems from './WorkItems';

const data = [
  {
    yearStart: 2022,
    yearStop: 2023,
    title: 'Software Engineer - Canlah',
    duration: '1 year',
    details: `Responsible for create a backend system from start for Canlah Project, setting up Devops, helping the frontend team and managing the system.`,
    tech: 'React JS • SASS • Go • CockroachDB • MongoDB • GCP • GKE • MySQL',
  },
  {
    yearStart: 2021,
    yearStop: 2023,
    title: 'Software Engineer - THISCo',
    duration: '2 years',
    details:
      'Responsible for Managing the automation team for Odoo, and developing 3 ways integration system for Odoo (to Retoll & Shopify). After system finished, starting to develop Quickbooks to connect to our system, also setting up mailchimp and retool.',
    tech: 'HTML5 • CSS • Go • CockroachDB • MongoDB • GCP • GKE • MySQL • Mailchimp • Retool • Quickbooks',
  },
  {
    yearStart: 2021,
    yearStop: 2021,
    title: 'Software Engineer - Forest AI',
    duration: '1 year',
    details:
      'Responsible for creating Odoo ERP System and CRM from beginning. Developing Odoo Apps, modules and automation. Migrating Quickbooks to Odoo for Shopify.',
    tech: 'Go • Python • MySQL',
  },
  {
    yearStart: 2016,
    yearStop: 2020,
    title: 'Game Developer - Freelance',
    duration: '5 years',
    details:
      'Reponsible for creating custom script for NPC or instances in-game events. Modify and maintenance script for clients. Setting up dedicated servers for clients.',
    tech: 'C++ • MySQL • PHP',
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] min-h-screen m-auto md:px-20 px-4 pt-10"
    >
      <h1 className="text-4xl font-bold text-center text-[--main-color] mb-10">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          yearStart={item.yearStart}
          yearStop={item.yearStop}
          title={item.title}
          duration={item.duration}
          details={item.details}
          tech={item.tech}
        />
      ))}
    </div>
  );
};

export default Work;
